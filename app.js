/* ══════════════════════════════════
   API — auto-detects Claude.ai vs Vercel
══════════════════════════════════ */
const IS_VERCEL = window.location.hostname !== 'claude.ai' &&
                  !window.location.hostname.includes('claude.ai') &&
                  window.location.hostname !== 'localhost' &&
                  !window.location.hostname.includes('127.0.0.1');

async function callClaude(body) {
  const endpoint = IS_VERCEL
    ? '/api/claude'
    : 'https://api.anthropic.com/v1/messages';
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(endpoint, { method:'POST', headers, body: JSON.stringify(body) });
  return await res.json();
}

/* ══════════════════════════════════
   VERCEL KV — shared data sync
   Applications and editable interview content are shared between browsers.
   localStorage remains the offline fallback.
══════════════════════════════════ */
function kvKey(profileId) {
  return `applications:${profileId}`;
}

function sharedProfileKey(profileId) {
  return `shared-profile:${profileId}`;
}

async function kvSaveValue(key, value) {
  if (!IS_VERCEL) return 'local';
  try {
    const res = await fetch('/api/kv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key, value })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return 'saved';
  } catch (e) {
    console.warn('[KV] save failed, localStorage only:', e);
    return 'error';
  }
}

async function kvLoadValue(key) {
  if (!IS_VERCEL) return null;
  try {
    const res = await fetch(`/api/kv?key=${encodeURIComponent(key)}`);
    if (!res.ok) return null;
    const data = await res.json();
    let val = data.value;
    if (typeof val === 'string') { try { val = JSON.parse(val); } catch(e){} }
    return val ?? null;
  } catch (e) {
    console.warn('[KV] load failed, using localStorage:', e);
    return null;
  }
}

async function kvSaveApplications(profileId, apps) {
  return kvSaveValue(kvKey(profileId), apps);
}

async function kvLoadApplications(profileId) {
  const value = await kvLoadValue(kvKey(profileId));
  return Array.isArray(value) ? value : null;
}

function sharedProfilePayload(profile) {
  return {
    customQuestions: Array.isArray(profile?.customQuestions) ? profile.customQuestions : [],
    companies: Array.isArray(profile?.companies) ? profile.companies : [],
    updatedAt: new Date().toISOString()
  };
}

async function kvSaveSharedProfile(profile) {
  if (!profile?.id) return 'error';
  return kvSaveValue(sharedProfileKey(profile.id), sharedProfilePayload(profile));
}

async function kvLoadSharedProfile(profileId) {
  const value = await kvLoadValue(sharedProfileKey(profileId));
  return value && typeof value === 'object' && !Array.isArray(value) ? value : null;
}

function escapeHtml(value){
  return String(value ?? '')
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#039;');
}
function splitCSV(value){
  return String(value || '').split(',').map(x=>x.trim()).filter(Boolean);
}
function todayISO(){
  return new Date().toISOString().slice(0,10);
}
function downloadJSON(filename, data){
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}


/* ══════════════════════════════════
   LOCAL VIDEO STORAGE — IndexedDB, per profile
══════════════════════════════════ */
const RECORDING_DB_NAME = 'prepai_recordings_v1';
const RECORDING_STORE = 'recordings';
let videoRecording = false;
let mediaRecorder = null;
let recordedChunks = [];
let lastRecordingUrl = null;

function openRecordingDB(){
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(RECORDING_DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if(!db.objectStoreNames.contains(RECORDING_STORE)){
        const store = db.createObjectStore(RECORDING_STORE, { keyPath: 'id' });
        store.createIndex('profileId', 'profileId', { unique:false });
        store.createIndex('createdAt', 'createdAt', { unique:false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveRecordingToDB(recording){
  const db = await openRecordingDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(RECORDING_STORE, 'readwrite');
    tx.objectStore(RECORDING_STORE).put(recording);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function getRecordingsForProfile(profileId){
  const db = await openRecordingDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(RECORDING_STORE, 'readonly');
    const store = tx.objectStore(RECORDING_STORE);
    const req = store.getAll();
    req.onsuccess = () => {
      const items = (req.result || [])
        .filter(x => x.profileId === profileId)
        .sort((a,b) => String(b.createdAt).localeCompare(String(a.createdAt)));
      resolve(items);
    };
    req.onerror = () => reject(req.error);
  });
}

async function deleteRecording(id){
  const db = await openRecordingDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(RECORDING_STORE, 'readwrite');
    tx.objectStore(RECORDING_STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function bestVideoMimeType(){
  const options = [
    'video/webm;codecs=vp9,opus',
    'video/webm;codecs=vp8,opus',
    'video/webm',
    'video/mp4'
  ];
  return options.find(t => window.MediaRecorder && MediaRecorder.isTypeSupported(t)) || '';
}

function setLatestPlayback(blob, filename='entrevista.webm'){
  if(lastRecordingUrl) URL.revokeObjectURL(lastRecordingUrl);
  lastRecordingUrl = URL.createObjectURL(blob);
  const playback = document.getElementById('playbackEl');
  const review = document.getElementById('videoReview');
  const dl = document.getElementById('downloadRecording');
  if(playback){ playback.src = lastRecordingUrl; }
  if(dl){ dl.href = lastRecordingUrl; dl.download = filename; }
  if(review){ review.style.display = 'block'; }
}

function toggleVideoRecording(){
  if(videoRecording) stopVideoRecording();
  else startVideoRecording();
}

function startVideoRecording(){
  if(!camStream){ alert('Activa la cámara antes de grabar.'); return; }
  if(!window.MediaRecorder){ alert('Tu navegador no permite grabar vídeo desde la web. Prueba con Chrome o Safari actualizado.'); return; }
  recordedChunks = [];
  const mimeType = bestVideoMimeType();
  try{
    mediaRecorder = new MediaRecorder(camStream, mimeType ? { mimeType } : undefined);
  }catch(e){
    alert('No se pudo iniciar la grabación en este navegador.');
    return;
  }
  mediaRecorder.ondataavailable = e => { if(e.data && e.data.size > 0) recordedChunks.push(e.data); };
  mediaRecorder.onstop = handleVideoRecordingStop;
  mediaRecorder.start(1000);
  videoRecording = true;
  const btn = document.getElementById('recordBtn');
  if(btn){ btn.textContent = '⏹ Parar grabación'; btn.classList.add('recording'); }
}

function stopVideoRecording(){
  if(mediaRecorder && videoRecording){
    try{ mediaRecorder.stop(); }catch(e){}
  }
  videoRecording = false;
  const btn = document.getElementById('recordBtn');
  if(btn){ btn.textContent = '⏺ Grabar'; btn.classList.remove('recording'); }
}

async function handleVideoRecordingStop(){
  const blob = new Blob(recordedChunks, { type: recordedChunks[0]?.type || 'video/webm' });
  if(!blob.size){ return; }
  const profileId = CU?.username || getCurrentProfileId();
  const q = questions[currentQ] || {};
  const createdAt = new Date().toISOString();
  const filename = `entrevista_${profileId}_${createdAt.slice(0,19).replace(/[:T]/g,'-')}.webm`;
  const recording = {
    id: `${profileId}_${Date.now()}`,
    profileId,
    createdAt,
    question: q.question || '',
    category: q.category || '',
    lang: q.lang || '',
    blob,
    filename
  };
  try{
    await saveRecordingToDB(recording);
    setLatestPlayback(blob, filename);
    renderSavedRecordings();
  }catch(e){
    setLatestPlayback(blob, filename);
    alert('El vídeo se puede ver y descargar, pero no se pudo guardar en el navegador.');
  }
}

async function renderSavedRecordings(){
  const card = document.getElementById('recordingsCard');
  const list = document.getElementById('recordingsList');
  if(!card || !list) return;
  const profileId = CU?.username || getCurrentProfileId();
  let items = [];
  try{ items = await getRecordingsForProfile(profileId); }catch(e){ items = []; }
  card.style.display = 'block';
  if(!items.length){
    list.innerHTML = '<div class="mini-copy">Todavía no hay grabaciones guardadas para este perfil.</div>';
    return;
  }
  list.innerHTML = items.slice(0,10).map(r => `
    <div class="qitem">
      <div class="qitem-top">
        <div>
          <div class="qitem-q">${escapeHtml(r.question || 'Grabación de práctica')}</div>
          <div class="qitem-meta">${new Date(r.createdAt).toLocaleString('es-ES')} · ${escapeHtml(r.category || '')}</div>
        </div>
      </div>
      <div class="brow">
        <button class="btn-o" onclick="playSavedRecording('${r.id}')">▶️ Ver</button>
        <button class="btn-o" onclick="downloadSavedRecording('${r.id}')">⬇️ Descargar</button>
        <button class="btn-o danger" onclick="removeSavedRecording('${r.id}')">Borrar</button>
      </div>
    </div>`).join('');
}

async function findRecording(id){
  const items = await getRecordingsForProfile(CU?.username || getCurrentProfileId());
  return items.find(x => x.id === id);
}

async function playSavedRecording(id){
  const rec = await findRecording(id);
  if(rec) setLatestPlayback(rec.blob, rec.filename || 'entrevista.webm');
}
async function downloadSavedRecording(id){
  const rec = await findRecording(id);
  if(!rec) return;
  const url = URL.createObjectURL(rec.blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = rec.filename || 'entrevista.webm';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}
async function removeSavedRecording(id){
  if(!confirm('¿Borrar esta grabación de este perfil?')) return;
  await deleteRecording(id);
  renderSavedRecordings();
}

/* ══════════════════════════════════
   PROFILE STORAGE (local, no real login)
══════════════════════════════════ */
const PROFILE_STORE_KEY = 'prep_profiles_v2';
const CURRENT_PROFILE_KEY = 'prep_current_profile_v2';
const DEFAULT_PROFILE_ID = 'jaime_hernandez';

const slugify = str => (str || '')
  .toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '_')
  .replace(/^_|_$/g, '') || 'perfil';

const initialsFromName = name => (name || '?')
  .trim()
  .split(/\s+/)
  .slice(0, 2)
  .map(x => x[0]?.toUpperCase() || '')
  .join('') || '?';

function getProfiles(){
  return JSON.parse(localStorage.getItem(PROFILE_STORE_KEY) || '{}');
}
function saveProfiles(p){
  localStorage.setItem(PROFILE_STORE_KEY, JSON.stringify(p));
}
function normalizeQuestionText(value){
  return String(value || '')
    .trim()
    .toLocaleLowerCase('es')
    .replace(/[¿?¡!.,;:]/g, '')
    .replace(/\s+/g, ' ');
}

function mergeShippedCustomQuestions(storedQuestions){
  const stored = Array.isArray(storedQuestions) ? storedQuestions : [];
  const shipped = Array.isArray(DEFAULT_PROFILE.customQuestions) ? DEFAULT_PROFILE.customQuestions : [];
  const shippedIds = new Set(shipped.map(question => String(question.id)));
  const shippedTexts = new Set(shipped.map(question => normalizeQuestionText(question.question)));
  const retiredIds = new Set((typeof RETIRED_CUSTOM_QUESTION_IDS !== 'undefined' ? RETIRED_CUSTOM_QUESTION_IDS : []).map(String));
  const retiredTexts = new Set((typeof RETIRED_CUSTOM_QUESTION_TEXTS !== 'undefined' ? RETIRED_CUSTOM_QUESTION_TEXTS : []).map(normalizeQuestionText));
  const personal = stored.filter(question =>
    !retiredIds.has(String(question.id)) &&
    !retiredTexts.has(normalizeQuestionText(question.question)) &&
    !shippedIds.has(String(question.id)) &&
    !shippedTexts.has(normalizeQuestionText(question.question))
  );
  return [...JSON.parse(JSON.stringify(shipped)), ...personal];
}

function ensureDefaultProfile(){
  const profiles = getProfiles();
  if (!profiles[DEFAULT_PROFILE.id]) {
    profiles[DEFAULT_PROFILE.id] = JSON.parse(JSON.stringify(DEFAULT_PROFILE));
  } else {
    // Keep the principal pitch in sync with the version shipped in data.js,
    // while preserving the rest of the user's locally stored profile data.
    profiles[DEFAULT_PROFILE.id].pitch = JSON.parse(JSON.stringify(DEFAULT_PROFILE.pitch));
    profiles[DEFAULT_PROFILE.id].customQuestions = mergeShippedCustomQuestions(profiles[DEFAULT_PROFILE.id].customQuestions);
  }
  profiles[DEFAULT_PROFILE.id].isDefaultProfile = true;
  saveProfiles(profiles);
}
function getCurrentProfileId(){
  return localStorage.getItem(CURRENT_PROFILE_KEY) || DEFAULT_PROFILE_ID;
}
function setCurrentProfileId(id){
  localStorage.setItem(CURRENT_PROFILE_KEY, id);
}
function createEmptyProfile(id, name='Perfil local'){
  return {
    id,
    name,
    initials: initialsFromName(name),
    education: '',
    targetRoles: [],
    industries: [],
    languages: { interface: 'es', practiceModes: ['es','en','mixed'] },
    companies: [],
    starStories: [],
    customQuestions: [],
    applications: [],
    history: [],
    preferences: { interviewLanguageMode: 'mixed', practiceMode: 'text' },
    isDefaultProfile: false
  };
}

function normalizeProfile(base){
  base.id ||= slugify(base.name || 'perfil');
  base.companies ||= [];
  base.starStories ||= [];
  base.customQuestions ||= [];
  base.applications ||= [];
  base.history ||= [];
  base.preferences ||= { interviewLanguageMode: 'mixed', practiceMode: 'text' };
  base.initials ||= initialsFromName(base.name);
  base.isDefaultProfile = base.id === DEFAULT_PROFILE_ID || base.isDefaultProfile === true;
  return base;
}

function getProfile(id){
  const profiles = getProfiles();
  let base = profiles[id];
  if(!base){
    base = id === DEFAULT_PROFILE_ID ? JSON.parse(JSON.stringify(DEFAULT_PROFILE)) : createEmptyProfile(id || slugify('perfil'));
  }
  return normalizeProfile(base);
}
function saveProfile(id, profile){
  const profiles = getProfiles();
  profiles[id] = profile;
  saveProfiles(profiles);
}
function getUD(id){ return getProfile(id); }
function saveUD(id,d){ saveProfile(id,d); }

let CU = null; // current local profile

/* ══════════════════════════════════
   PROFILE SELECTOR
══════════════════════════════════ */
function showErr(m){const e=document.getElementById('authErr');e.textContent=m;e.style.display='block';}
function clearErr(){const e=document.getElementById('authErr'); if(e){e.textContent=''; e.style.display='none';}}

function renderProfileSelector(){
  ensureDefaultProfile();
  const profiles = getProfiles();
  const list = document.getElementById('profileList');
  if(!list) return;
  const items = Object.values(profiles);
  if(!items.length){
    list.innerHTML = '<div class="profile-empty">No hay perfiles todavía. Crea uno para empezar.</div>';
    return;
  }
  list.innerHTML = items.map(p => `
    <button class="profile-card" onclick="selectProfile('${p.id}')">
      <span class="profile-avatar">${p.initials || initialsFromName(p.name)}</span>
      <span class="profile-meta">
        <span class="profile-name">${p.name}</span>
        <span class="profile-sub">ID: ${p.id} · ${p.education || (p.targetRoles||[]).join(', ') || 'Perfil local'}</span>
      </span>
    </button>`).join('');
}

function showCreateProfile(){
  clearErr();
  const box = document.getElementById('createProfileBox');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
  if(box.style.display === 'block') document.getElementById('newProfileName').focus();
}

function createProfileFromForm(){
  clearErr();
  const name = document.getElementById('newProfileName').value.trim();
  const customIdRaw = document.getElementById('newProfileId')?.value.trim();
  const education = document.getElementById('newProfileEducation').value.trim();
  const roles = document.getElementById('newProfileRoles').value.split(',').map(x=>x.trim()).filter(Boolean);
  if(!name){ showErr('Escribe un nombre para crear el perfil'); return; }
  const profiles = getProfiles();
  let id = customIdRaw ? slugify(customIdRaw) : slugify(name);
  let n = 2;
  const baseId = id;
  while(profiles[id]){ id = `${baseId}_${n++}`; }
  profiles[id] = {
    id,
    name,
    initials: initialsFromName(name),
    education,
    targetRoles: roles,
    industries: [],
    languages: { interface: 'es', practiceModes: ['es','en','mixed'] },
    companies: [],
    starStories: [],
    customQuestions: [],
    applications: [],
    history: [],
    preferences: { interviewLanguageMode: 'mixed', practiceMode: 'text' },
    isDefaultProfile: false
  };
  saveProfiles(profiles);
  selectProfile(id);
}

function selectProfile(id){
  const p = getProfile(id);
  CU = { username:id, id, name:p.name };
  setCurrentProfileId(id);
  document.getElementById('userBtn').textContent = p.initials || initialsFromName(p.name);
  document.getElementById('umName').innerHTML = `${escapeHtml(p.name)}<br><small style="font-family:DM Sans,sans-serif;color:var(--text3);font-size:11px;">ID: ${escapeHtml(p.id)}</small>`;
  document.getElementById('authScreen').classList.remove('active');
  document.getElementById('appScreen').classList.add('active');
  loadProfileIntoApp();
  if (window.matchMedia && window.matchMedia('(max-width: 760px)').matches) goTab('cards', null);
}

function mergeShippedStarStories(storedStories){
  const stored = Array.isArray(storedStories) ? storedStories : [];
  const storedById = new Map(stored.map(story => [String(story.id), story]));
  const shippedIds = new Set(DEFAULT_STAR_STORIES.map(story => String(story.id)));
  const shippedWithLocalEdits = DEFAULT_STAR_STORIES.map(story => {
    const storedStory = storedById.get(String(story.id));
    if (!storedStory) return story;
    if (story.contentVersion && story.contentVersion !== storedStory.contentVersion) return story;
    return storedStory;
  });
  const personalStories = stored.filter(story => !shippedIds.has(String(story.id)));
  return [...shippedWithLocalEdits, ...personalStories];
}

function loadProfileIntoApp(){
  if(!CU) return;
  const profile = getProfile(CU.username);
  const isDefault = profile.id === DEFAULT_PROFILE_ID || profile.isDefaultProfile === true;
  SD = isDefault
    ? mergeShippedStarStories(profile.starStories)
    : (profile.starStories || []);
  if (typeof applyStoryTranslations === 'function') SD = applyStoryTranslations(SD);
  if (isDefault && (!profile.starStories || !profile.starStories.length)) {
    profile.starStories = SD;
    saveCurrentProfile(profile);
  } else if (profile.starStories && profile.starStories.length) {
    profile.starStories = SD;
    saveCurrentProfile(profile);
  }
  loadUserCompanies();
  buildFilters();
  renderStar();
  renderPitch(profile);
  renderCustomQuestionFormOptions();
  renderCustomQuestions();
  renderApplications();
  renderHistory();
  syncSharedProfileFromKV();
}

function changeProfile(){
  CU = null;
  document.getElementById('appScreen').classList.remove('active');
  document.getElementById('authScreen').classList.add('active');
  document.getElementById('umenu').classList.remove('open');
  renderProfileSelector();
}

function doLogout(){ changeProfile(); }
function switchAuth(){ /* legacy noop */ }
function doLogin(){ /* legacy noop */ }
function doRegister(){ /* legacy noop */ }

function toggleMenu(){document.getElementById('umenu').classList.toggle('open');}
document.addEventListener('click',e=>{
  if(!e.target.closest('#umenu')&&!e.target.closest('#userBtn'))
    document.getElementById('umenu').classList.remove('open');
});
window.addEventListener('DOMContentLoaded',()=>{
  ensureDefaultProfile();
  renderProfileSelector();
  const currentId = getCurrentProfileId();
  if(getProfiles()[currentId]) selectProfile(currentId);
});
/* ══════════════════════════════════
   NAV
══════════════════════════════════ */
function goTab(t,btn){
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.ttab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.bnav').forEach(b=>b.classList.remove('active'));
  const panel=document.getElementById('tab-'+t);
  if(panel) panel.classList.add('active');
  document.querySelectorAll('.ttab').forEach(b=>{if(b.getAttribute('onclick')?.includes("'"+t+"'"))b.classList.add('active');});
  document.querySelectorAll('.bnav').forEach(b=>{if(b.dataset?.tab===t)b.classList.add('active');});
  if(t==='history')renderHistory();
  if(t==='cards')initFlashcards();
  if(t==='questions'){renderCustomQuestionFormOptions();renderCustomQuestions();}
  if(t==='calendar'){ syncApplicationsFromKV().then(()=>renderApplications()); }
}

/* ══════════════════════════════════
   STAR DATA
══════════════════════════════════ */
let SD = DEFAULT_STAR_STORIES;

/* STAR render */
let activeFilter='all';
let starLangMode='es'; // es | en | both
function buildFilters(){
  const tags = (typeof COMPETENCIES !== 'undefined' ? COMPETENCIES : [{k:'all',l:'Todas'}]);
  document.getElementById('filterRow').innerHTML=tags.map(t=>`<button class="fpill${t.k===activeFilter?' active':''}" onclick="filterStar('${t.k}',this)">${t.l}</button>`).join('');
}
function filterStar(f,el){
  activeFilter=f;
  document.querySelectorAll('.fpill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');renderStar();
}
function setStarLangMode(mode){
  starLangMode=mode;
  document.querySelectorAll('[id^="starLang-"]').forEach(el=>el.classList.remove('sel'));
  document.getElementById('starLang-'+mode)?.classList.add('sel');
  renderStar();
}
function starContent(story, lang){
  return lang === 'en' && story.en ? { ...story, ...story.en } : story;
}
function storyStepLabels(story,lang){
  if(story?.format === 'technical'){
    return lang === 'en'
      ? {s:'☢️ PET',t:'🩻 CT and MRI',a:'🔄 PET/CT vs PET/MR',r:'🧭 Attenuation correction',l:'🏥 Clinical judgement'}
      : {s:'☢️ PET',t:'🩻 CT/TAC y MR',a:'🔄 PET/CT frente a PET/MR',r:'🧭 Corrección de atenuación',l:'🏥 Criterio clínico'};
  }
  return lang === 'en'
    ? {s:'📍 Situation',t:'🎯 Task',a:'⚡ Action',r:'📊 Result',l:'💡 Learning'}
    : {s:'📍 Situación',t:'🎯 Tarea',a:'⚡ Acción',r:'📊 Resultado',l:'💡 Aprendizaje'};
}
function renderDevelopmentAreas(story,lang,variant='star'){
  const content=starContent(story,lang);
  const areas=Array.isArray(content.areas) ? content.areas : [];
  const labels=lang==='en'
    ? {weakness:'Weakness',consequence:'Consequence',action:'How I am improving it'}
    : {weakness:'Debilidad',consequence:'Consecuencia',action:'Cómo la estoy mejorando'};
  return areas.map((area,index)=>{
    const title=`${index+1}. ${escapeHtml(area.title || labels.weakness)}`;
    if(variant==='flashcard'){
      return `<div class="fc-back-step"><div class="fc-slbl ls">${title}</div><div class="fc-stxt"><strong>${labels.weakness}:</strong> ${escapeHtml(area.weakness)}<br><br><strong>${labels.consequence}:</strong> ${escapeHtml(area.consequence)}<br><br><strong>${labels.action}:</strong> ${escapeHtml(area.action)}</div></div>`;
    }
    return `<div class="step"><div class="slbl ls">${title}</div><div class="stxt"><strong>${labels.weakness}:</strong> ${escapeHtml(area.weakness)}<br><br><strong>${labels.consequence}:</strong> ${escapeHtml(area.consequence)}<br><br><strong>${labels.action}:</strong> ${escapeHtml(area.action)}</div></div>`;
  }).join('');
}
function renderRoleContributions(story,lang,variant='star'){
  const content=starContent(story,lang);
  const contributions=Array.isArray(content.contributions) ? content.contributions : [];
  const labels=lang==='en'
    ? {contribution:'Contribution',value:'Why it adds value',evidence:'Evidence'}
    : {contribution:'Aportación',value:'Por qué aporta valor',evidence:'Evidencia'};
  return contributions.map((item,index)=>{
    const title=`${index+1}. ${escapeHtml(item.title || labels.contribution)}`;
    if(variant==='flashcard'){
      return `<div class="fc-back-step"><div class="fc-slbl ls">${title}</div><div class="fc-stxt"><strong>${labels.contribution}:</strong> ${escapeHtml(item.contribution)}<br><br><strong>${labels.value}:</strong> ${escapeHtml(item.value)}<br><br><strong>${labels.evidence}:</strong> ${escapeHtml(item.evidence)}</div></div>`;
    }
    return `<div class="step"><div class="slbl ls">${title}</div><div class="stxt"><strong>${labels.contribution}:</strong> ${escapeHtml(item.contribution)}<br><br><strong>${labels.value}:</strong> ${escapeHtml(item.value)}<br><br><strong>${labels.evidence}:</strong> ${escapeHtml(item.evidence)}</div></div>`;
  }).join('');
}
function renderStarSteps(story, lang){
  if(story?.format === 'development') return renderDevelopmentAreas(story,lang);
  if(story?.format === 'contributions') return renderRoleContributions(story,lang);
  const content=starContent(story,lang);
  const labels=storyStepLabels(story,lang);
  return `
    <div class="step"><div class="slbl ls">${labels.s}</div><div class="stxt">${escapeHtml(content.sit)}</div></div>
    <div class="step"><div class="slbl lt">${labels.t}</div><div class="stxt">${escapeHtml(content.tsk)}</div></div>
    <div class="step"><div class="slbl la">${labels.a}</div><div class="stxt">${escapeHtml(content.act)}</div></div>
    <div class="step"><div class="slbl lr">${labels.r}</div><div class="stxt hi">${escapeHtml(content.res)}</div></div>
    <div class="step"><div class="slbl ll">${labels.l}</div><div class="stxt">${escapeHtml(content.lrn)}</div></div>`;
}
function renderStarVersion(story,lang){
  const content=starContent(story,lang);
  return `<section class="star-version" lang="${lang}">
    <div class="star-version-title">${lang==='en'?'🇬🇧 English':'🇪🇸 Español'}</div>
    <div class="star-version-question">${escapeHtml(content.q || story.q)}</div>
    ${renderStarSteps(story,lang)}
  </section>`;
}
function renderStar(){
  const list=SD.filter(s=>activeFilter==='all'||s.tag===activeFilter);
  const starListEl = document.getElementById('starList');
  if(!list.length){
    starListEl.innerHTML = `<div class="hist-empty"><div class="hist-empty-ico">📚</div><p>Este perfil no tiene STAR stories todavía.<br>Añádelas desde data.js o crea preguntas vinculadas cuando importes historias.</p></div>`;
    return;
  }
  starListEl.innerHTML=list.map(s=>{
    const titleContent=starContent(s,starLangMode==='en'?'en':'es');
    const body=starLangMode==='both'
      ? `<div class="star-bilingual">${renderStarVersion(s,'es')}${renderStarVersion(s,'en')}</div>`
      : renderStarVersion(s,starLangMode);
    return `
    <div class="scard" id="sc${escapeHtml(s.id)}">
      <div class="scard-hd" onclick="document.getElementById('sc${escapeHtml(s.id)}').classList.toggle('open')">
        <span class="stag ${({initiative:'ti',leadership:'tl',pressure:'tp',conflict:'tc',teamwork:'tt',learning:'tn',communication:'tl',failure:'tc',adaptability:'tn'}[s.tag]||'ti')}">${escapeHtml(s.tagLabel)}</span>
        <span class="scard-q">${escapeHtml(titleContent.q || s.q)}</span>
        <span class="scard-arr">›</span>
      </div>
      <div class="scard-body">
        <div style="height:1px;background:var(--border);margin:0 0 12px;"></div>
        ${body}
        <button class="btn-t star-practice-btn" onclick="event.stopPropagation();practiceStarStory('${escapeHtml(s.id)}')">${s.format==='development'?'🧠 Practicar estas áreas':s.format==='contributions'?'💼 Practicar estas aportaciones':'🎯 Practicar esta historia'}</button>
      </div>
    </div>`;
  }).join('');
}

function practiceStarStory(id){
  const story=getStoryById(id);
  if(!story) return;
  const langs=starLangMode==='both' ? ['es','en'] : [starLangMode];
  fcMode='star';
  fcLangMode=starLangMode==='both' ? 'mixed' : starLangMode;
  goTab('cards',null);
  fcCards=langs.map(lang=>({
    type:'star',
    q:getQuestionsForStory(story,lang)[0] || starContent(story,lang).q || story.q,
    star:story,
    lang,
    category:story.tagLabel || 'STAR',
    key:`direct:${story.id}:${lang}`
  }));
  fcIdx=0;fcFlipped=false;fcRated=false;
  fcRatings={easy:0,medium:0,hard:0};
  document.getElementById('fcSetupCard').style.display='none';
  document.getElementById('fcDone').style.display='none';
  document.getElementById('fcArea').style.display='block';
  renderFcCard();
  window.scrollTo({top:0,behavior:'smooth'});
}


/* ══════════════════════════════════
   CUSTOM QUESTIONS — saved per local profile
══════════════════════════════════ */
function getCurrentProfile(){
  return CU ? getProfile(CU.username) : null;
}
function saveCurrentProfile(profile){
  if(!CU) return;
  saveUD(CU.username, profile);
}
function setSharedSyncStatus(message, state=''){
  const el = document.getElementById('cqSyncStatus');
  if(!el) return;
  el.textContent = message;
  el.className = `sync-status${state ? ` ${state}` : ''}`;
}
async function saveSharedProfileAndReport(profile, successMessage='Cambios compartidos para todos'){
  setSharedSyncStatus('Sincronizando…', 'syncing');
  const result = await kvSaveSharedProfile(profile);
  if(result === 'saved') setSharedSyncStatus(`✓ ${successMessage}`, 'ok');
  else if(result === 'local') setSharedSyncStatus('Guardado localmente durante el desarrollo', 'local');
  else setSharedSyncStatus('Guardado en este navegador; no se pudo sincronizar', 'error');
  return result;
}
async function syncSharedProfileFromKV(){
  const profile = getCurrentProfile();
  if(!profile) return;
  const profileId = profile.id;
  if(!IS_VERCEL){
    setSharedSyncStatus('Modo local: la versión publicada usará datos compartidos', 'local');
    return;
  }
  setSharedSyncStatus('Cargando preguntas compartidas…', 'syncing');
  const remote = await kvLoadSharedProfile(profileId);
  if(!CU || CU.id !== profileId) return;

  if(!remote){
    const hasLocalContent = (profile.customQuestions || []).length || (profile.companies || []).length;
    if(hasLocalContent){
      await saveSharedProfileAndReport(profile, 'Contenido inicial publicado para todos');
    }else{
      setSharedSyncStatus('✓ Listo para guardar contenido compartido', 'ok');
    }
    return;
  }

  const remoteQuestions = Array.isArray(remote.customQuestions) ? remote.customQuestions : [];
  profile.customQuestions = profile.isDefaultProfile
    ? mergeShippedCustomQuestions(remoteQuestions)
    : remoteQuestions;
  profile.companies = Array.isArray(remote.companies) ? remote.companies : [];
  saveCurrentProfile(profile);
  loadUserCompanies();
  renderCustomQuestions();
  renderCustomQuestionFormOptions();
  setSharedSyncStatus('✓ Preguntas sincronizadas para todos', 'ok');
}
function renderCustomQuestionFormOptions(){
  const comp = document.getElementById('cqCompetency');
  const story = document.getElementById('cqLinkedStory');
  if(comp){
    comp.innerHTML = (COMPETENCIES || [])
      .filter(c=>c.k !== 'all')
      .map(c=>`<option value="${escapeHtml(c.k)}">${escapeHtml(c.l)}</option>`)
      .join('') + '<option value="motivation">Motivación</option><option value="general">General</option>';
  }
  if(story){
    const stories = SD || [];
    story.innerHTML = stories.map(s=>`<option value="${escapeHtml(s.id)}">${escapeHtml(s.title || s.q)}</option>`).join('');
  }
}
function toggleCustomAnswerMode(){
  const type = document.getElementById('cqAnswerType')?.value || 'story';
  document.getElementById('cqStoryWrap').style.display = type === 'story' ? 'block' : 'none';
  document.getElementById('cqAnswerWrap').style.display = type === 'custom' ? 'block' : 'none';
}
function clearCustomQuestionForm(){
  ['cqId','cqQuestion','cqAnswer','cqCompanies'].forEach(id=>{const el=document.getElementById(id); if(el) el.value='';});
  document.getElementById('cqLang').value='es';
  document.getElementById('cqAnswerType').value='story';
  const comp=document.getElementById('cqCompetency'); if(comp && comp.options.length) comp.selectedIndex=0;
  const story=document.getElementById('cqLinkedStory'); if(story && story.options.length) story.selectedIndex=0;
  document.getElementById('cqFormTitle').textContent = '+ Añadir pregunta';
  toggleCustomAnswerMode();
}
async function saveCustomQuestion(){
  const profile = getCurrentProfile();
  if(!profile){ alert('Selecciona un perfil primero'); return; }
  profile.customQuestions ||= [];
  const id = document.getElementById('cqId').value || `q_${Date.now()}`;
  const question = document.getElementById('cqQuestion').value.trim();
  const answerType = document.getElementById('cqAnswerType').value;
  const linkedStoryId = document.getElementById('cqLinkedStory').value;
  const customAnswer = document.getElementById('cqAnswer').value.trim();
  if(!question){ alert('Escribe la pregunta antes de guardar'); return; }
  if(answerType === 'story' && !linkedStoryId){ alert('Elige una STAR story asociada'); return; }
  if(answerType === 'custom' && !customAnswer){ alert('Escribe la respuesta propia o cambia a story asociada'); return; }
  const item = {
    id,
    question,
    lang: document.getElementById('cqLang').value,
    competency: document.getElementById('cqCompetency').value,
    answerType,
    linkedStoryId: answerType === 'story' ? linkedStoryId : '',
    customAnswer: answerType === 'custom' ? customAnswer : '',
    companies: splitCSV(document.getElementById('cqCompanies').value),
    updatedAt: todayISO(),
    createdAt: profile.customQuestions.find(q=>q.id===id)?.createdAt || todayISO()
  };
  const idx = profile.customQuestions.findIndex(q=>q.id===id);
  if(idx >= 0) profile.customQuestions[idx] = item;
  else profile.customQuestions.unshift(item);
  saveCurrentProfile(profile);
  clearCustomQuestionForm();
  renderCustomQuestions();
  const syncResult = await saveSharedProfileAndReport(profile, 'Pregunta guardada y visible para todos');
  if(syncResult === 'saved') alert('Pregunta guardada y compartida para todos');
  else if(syncResult === 'error') alert('La pregunta se ha guardado en este navegador, pero no se ha podido compartir. Revisa la conexión de Vercel KV.');
  else alert('Pregunta guardada localmente');
}
function editCustomQuestion(id){
  const profile = getCurrentProfile();
  const item = profile?.customQuestions?.find(q=>q.id===id);
  if(!item) return;
  renderCustomQuestionFormOptions();
  document.getElementById('cqId').value = item.id;
  document.getElementById('cqQuestion').value = item.question || '';
  document.getElementById('cqLang').value = item.lang || 'es';
  document.getElementById('cqCompetency').value = item.competency || 'general';
  document.getElementById('cqAnswerType').value = item.answerType || 'story';
  document.getElementById('cqLinkedStory').value = item.linkedStoryId || '';
  document.getElementById('cqAnswer').value = item.customAnswer || '';
  document.getElementById('cqCompanies').value = (item.companies || []).join(', ');
  document.getElementById('cqFormTitle').textContent = 'Editar pregunta';
  toggleCustomAnswerMode();
  window.scrollTo({top:0,behavior:'smooth'});
}
async function deleteCustomQuestion(id){
  const profile = getCurrentProfile();
  if(!profile) return;
  if(!confirm('¿Borrar esta pregunta guardada?')) return;
  profile.customQuestions = (profile.customQuestions || []).filter(q=>q.id !== id);
  saveCurrentProfile(profile);
  renderCustomQuestions();
  await saveSharedProfileAndReport(profile, 'Pregunta borrada para todos');
}
function getStoryById(id){
  return (SD || []).find(s=>String(s.id) === String(id));
}
function renderCustomQuestions(){
  const container = document.getElementById('customQuestionsList');
  if(!container) return;
  const profile = getCurrentProfile();
  const items = profile?.customQuestions || [];
  if(!items.length){
    container.innerHTML = '<div class="hist-empty"><div class="hist-empty-ico">❓</div><p>Aún no has guardado preguntas.<br>Añade preguntas reales de procesos y asócialas a tus stories.</p></div>';
    return;
  }
  container.innerHTML = items.map(item=>{
    const story = item.answerType === 'story' ? getStoryById(item.linkedStoryId) : null;
    const compLabel = (COMPETENCIES.find(c=>c.k===item.competency)?.l || item.competency || 'General');
    const langLabel = item.lang === 'en' ? '🇬🇧 EN' : item.lang === 'mixed' ? '🌍 Mixto' : '🇪🇸 ES';
    const answerPreview = item.answerType === 'story'
      ? `Story: ${story ? (story.title || story.q) : 'story no encontrada'}`
      : item.customAnswer;
    return `<div class="qcard">
      <div class="qcard-top">
        <div>
          <div class="qcard-q">${escapeHtml(item.question)}</div>
          <div class="qcard-meta"><span class="badge b-sky">${escapeHtml(langLabel)}</span><span class="badge b-warm">${escapeHtml(compLabel)}</span>${(item.companies||[]).map(c=>`<span class="badge b-terra">${escapeHtml(c)}</span>`).join('')}</div>
        </div>
      </div>
      <div class="qcard-answer">${escapeHtml(answerPreview)}</div>
      <div class="brow">
        <button class="btn-o" onclick="editCustomQuestion('${escapeHtml(item.id)}')">Editar</button>
        <button class="btn-o" onclick="practiceCustomQuestion('${escapeHtml(item.id)}')">Practicar</button>
        <button class="btn-o danger-lite" onclick="deleteCustomQuestion('${escapeHtml(item.id)}')">Borrar</button>
      </div>
    </div>`;
  }).join('');
}
function practiceCustomQuestion(id){
  const profile = getCurrentProfile();
  const item = profile?.customQuestions?.find(q=>q.id===id);
  if(!item) return;
  goTab('practice', null);
  questions = [{ lang: item.lang === 'en' ? 'en' : 'es', category: item.competency || 'Personalizada', question: item.question, customId: item.id }];
  currentQ = 0; sessionAnswered = 0; sessionStart = new Date();
  document.getElementById('practiceSetup').style.display='none';
  document.getElementById('summaryWrap').style.display='none';
  document.getElementById('loadOv').style.display='none';
  document.getElementById('interviewWrap').style.display='block';
  renderQ();
}
function exportCurrentProfile(){
  const profile = getCurrentProfile();
  if(!profile){ alert('Selecciona un perfil primero'); return; }
  downloadJSON(`prepai_${slugify(profile.name)}_${todayISO()}.json`, { exportedAt: new Date().toISOString(), app: 'PrepAI', profile });
  document.getElementById('umenu')?.classList.remove('open');
}
function importProfileFile(event){
  const file = event.target.files?.[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const parsed = JSON.parse(reader.result);
      const profile = parsed.profile || parsed;
      if(!profile.name) throw new Error('missing name');
      const profiles = getProfiles();
      let id = profile.id || slugify(profile.name);
      if(profiles[id]) id = `${id}_import_${Date.now()}`;
      profile.id = id;
      profile.initials ||= initialsFromName(profile.name);
      profile.companies ||= [];
      profile.starStories ||= [];
      profile.customQuestions ||= [];
      profile.history ||= [];
      profiles[id] = profile;
      saveProfiles(profiles);
      renderProfileSelector();
      selectProfile(id);
      alert('Perfil importado correctamente');
    }catch(e){
      alert('No he podido importar el JSON. Revisa que sea un perfil exportado desde la app.');
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}

/* ══════════════════════════════════
   FLASHCARDS — v4: pregunta → story asociada → respuesta útil
══════════════════════════════════ */
let fcCards=[], fcIdx=0, fcFlipped=false, fcRated=false;
let fcRatings={easy:0,medium:0,hard:0};
let userCompanies=[];
let fcSelectedCo='';
let fcMode='company'; // company | star | questions
let fcLangMode='mixed'; // es | mixed | en

function loadUserCompanies(){
  if(!CU)return;
  const ud=getUD(CU.username);
  userCompanies=ud.companies||[];
  renderCoChips();
}

function renderCoChips(){
  const container=document.getElementById('coChips');
  if(!container) return;
  container.innerHTML=userCompanies.map((c,i)=>`
    <div class="co-chip${fcSelectedCo===c?' sel':''}" onclick="selectCo('${escapeHtml(c)}')">${escapeHtml(c)}
      <span onclick="event.stopPropagation();removeCo(${i})" style="margin-left:4px;opacity:.55;font-size:11px;">✕</span>
    </div>`).join('')+
    `<div class="co-chip add" onclick="addCoChip()">+ Añadir</div>`;
}

function setFlashcardMode(mode){
  fcMode = mode;
  document.querySelectorAll('[id^="fcMode-"]').forEach(el=>el.classList.remove('sel'));
  const active=document.getElementById('fcMode-'+mode);
  if(active) active.classList.add('sel');
  const wrap=document.getElementById('fcCompanyWrap');
  if(wrap) wrap.style.display = mode === 'company' ? 'block' : 'none';
  const explain=document.getElementById('fcExplain');
  if(explain){
    explain.textContent = {
      company:'Cada tarjeta tendrá una pregunta y, al voltearla, te dirá qué historia usar, la respuesta STAR y por qué encaja con la empresa.',
      star:'Repasarás historias STAR completas. Primero intentas contarla tú; después comparas con la estructura S/T/A/R/L.',
      questions:'Practicarás tus preguntas guardadas. Si están vinculadas a una story, verás esa story completa; si tienen respuesta propia, verás tu respuesta.'
    }[mode];
  }
}

function selectCo(c){
  fcSelectedCo=c;
  renderCoChips();
}
async function removeCo(i){
  userCompanies.splice(i,1);
  if(!CU)return;
  const ud=getUD(CU.username);ud.companies=userCompanies;saveUD(CU.username,ud);
  if(!userCompanies.includes(fcSelectedCo)) fcSelectedCo='';
  renderCoChips();
  await saveSharedProfileAndReport(ud, 'Empresas actualizadas para todos');
}
function addCoChip(){
  const inp=document.getElementById('newCoInp');
  inp.style.display=inp.style.display==='none'?'block':'none';
  if(inp.style.display==='block')inp.focus();
}
async function confirmCo(){
  const val=document.getElementById('newCoInp').value.trim();
  if(!val)return;
  if(!userCompanies.includes(val))userCompanies.push(val);
  fcSelectedCo=val;
  let ud=null;
  if(CU){ud=getUD(CU.username);ud.companies=userCompanies;saveUD(CU.username,ud);}
  document.getElementById('newCoInp').value='';
  document.getElementById('newCoInp').style.display='none';
  renderCoChips();
  if(ud) await saveSharedProfileAndReport(ud, 'Empresas actualizadas para todos');
}
document.getElementById('newCoInp')?.addEventListener('blur',()=>{
  setTimeout(()=>{document.getElementById('newCoInp').style.display='none';},200);
});

function initFlashcards(){
  document.getElementById('fcSetupCard').style.display='block';
  document.getElementById('fcArea').style.display='none';
  document.getElementById('fcDone').style.display='none';
  loadUserCompanies();
  setFlashcardMode(fcMode || 'company');
}

function pickStoryForQuestion(question, company){
  const text = `${question||''} ${company||''}`.toLowerCase();
  const stories = [...SD];
  const score = s => {
    let n=0;
    const hay = `${s.title||''} ${s.q||''} ${s.tag||''} ${s.tagLabel||''} ${s.sit||''} ${s.act||''} ${s.res||''}`.toLowerCase();
    const keywordMap = [
      ['senior', 'communication'], ['directiv', 'communication'], ['stakeholder', 'communication'], ['comunica', 'communication'],
      ['presión', 'pressure'], ['pressure', 'pressure'], ['deadline', 'pressure'], ['urgencia', 'pressure'],
      ['lider', 'leadership'], ['deleg', 'leadership'], ['team', 'leadership'], ['equipo', 'leadership'],
      ['fracaso', 'failure'], ['error', 'failure'], ['failure', 'failure'],
      ['internacional', 'adaptability'], ['florida', 'adaptability'], ['adapt', 'adaptability'],
      ['iniciativa', 'initiative'], ['initiative', 'initiative'], ['desde cero', 'initiative'],
      ['sql', 'initiative'], ['data', 'initiative'], ['datos', 'initiative'], ['impact', 'initiative'],
      ['hospital', 'pressure'], ['quir', 'pressure'], ['lista de espera', 'pressure'],
      ['sanitas', 'initiative'], ['asisa', 'initiative'], ['asegur', 'initiative'], ['red médica', 'initiative'], ['proveedor', 'initiative']
    ];
    keywordMap.forEach(([kw,tag])=>{ if(text.includes(kw) && (s.tag===tag || hay.includes(kw))) n+=2; });
    if(company && hay.includes(company.toLowerCase())) n+=3;
    return n + Math.random()*0.25;
  };
  return stories.sort((a,b)=>score(b)-score(a))[0] || stories[0];
}

function starQuestionForStory(story, company){
  const qs = [...(story.questions?.es || []), story.q].filter(Boolean);
  const base = qs[Math.floor(Math.random()*qs.length)] || story.q;
  if(fcMode === 'company' && company){
    return `Pensando en ${company}, ${base.charAt(0).toLowerCase()+base.slice(1)}`;
  }
  return base;
}

function buildCompanyCards(company){
  const profile = getCurrentProfile();
  const custom = (profile?.customQuestions || [])
    .filter(q => !q.companies?.length || q.companies.some(c => c.toLowerCase() === company.toLowerCase()))
    .sort(()=>Math.random()-.5)
    .slice(0,2)
    .map(q=>({type:'custom',q:q.question,custom:q,lang:q.lang==='en'?'en':'es',category:q.competency || 'Personalizada',company}));

  const priorityStories = [...SD]
    .sort((a,b)=>{
      const aText=`${a.title} ${a.sit} ${a.act}`.toLowerCase();
      const bText=`${b.title} ${b.sit} ${b.act}`.toLowerCase();
      const keys=['asisa','asegur','sanitas','proveedor','dirección médica','data','sql','dashboard','healthcare'];
      const sa=keys.reduce((acc,k)=>acc+(aText.includes(k)?1:0),0);
      const sb=keys.reduce((acc,k)=>acc+(bText.includes(k)?1:0),0);
      return sb-sa || Math.random()-.5;
    })
    .slice(0, 5-custom.length)
    .map(story=>({
      type:'company-story',
      q: starQuestionForStory(story, company),
      star: story,
      lang:'es',
      category: story.tagLabel || 'STAR',
      company
    }));

  return [...custom, ...priorityStories].sort(()=>Math.random()-.5).slice(0,5);
}

function buildStarCards(){
  return [...SD].sort(()=>Math.random()-.5).slice(0,5).map(story=>({
    type:'star', q: starQuestionForStory(story), star: story, lang:'es', category: story.tagLabel || 'STAR'
  }));
}

function buildQuestionCards(){
  const profile = getCurrentProfile();
  const custom = [...(profile?.customQuestions || [])].sort(()=>Math.random()-.5).slice(0,5);
  if(custom.length){
    return custom.map(q=>({type:'custom',q:q.question,custom:q,lang:q.lang==='en'?'en':'es',category:q.competency || 'Personalizada'}));
  }
  return buildStarCards();
}

function startFlashcards(){
  if(fcMode==='company' && !fcSelectedCo){alert('Selecciona o añade una empresa primero');return;}
  document.getElementById('fcStartTxt').style.display='none';
  document.getElementById('fcSpin').style.display='block';
  document.getElementById('fcStartBtn').disabled=true;

  if(fcMode==='company') fcCards = buildCompanyCards(fcSelectedCo);
  else if(fcMode==='questions') fcCards = buildQuestionCards();
  else fcCards = buildStarCards();

  if(!fcCards.length){
    alert('No hay tarjetas disponibles todavía. Añade STAR stories o preguntas guardadas.');
    document.getElementById('fcStartTxt').style.display='inline';
    document.getElementById('fcSpin').style.display='none';
    document.getElementById('fcStartBtn').disabled=false;
    return;
  }

  fcIdx=0;fcFlipped=false;fcRated=false;
  fcRatings={easy:0,medium:0,hard:0};

  document.getElementById('fcStartTxt').style.display='inline';
  document.getElementById('fcSpin').style.display='none';
  document.getElementById('fcStartBtn').disabled=false;
  document.getElementById('fcSetupCard').style.display='none';
  document.getElementById('fcArea').style.display='block';
  renderFcCard();
}

function storyHtml(s, company){
  const why = company ? `<div class="fc-back-step"><div class="fc-slbl lc">🎯 Por qué encaja con ${escapeHtml(company)}</div><div class="fc-stxt fc-adapt">Demuestra experiencia real en healthcare, datos, análisis estructurado e impacto medible. Úsala para conectar tu perfil con problemas de negocio similares en ${escapeHtml(company)}.</div></div>` : '';
  return `
    ${why}
    <div class="fc-back-step"><div class="fc-slbl ls">📍 Situación</div><div class="fc-stxt">${escapeHtml(s.sit)}</div></div>
    <div class="fc-back-step"><div class="fc-slbl lt">🎯 Tarea</div><div class="fc-stxt">${escapeHtml(s.tsk)}</div></div>
    <div class="fc-back-step"><div class="fc-slbl la">⚡ Acción</div><div class="fc-stxt">${escapeHtml(s.act)}</div></div>
    <div class="fc-back-step"><div class="fc-slbl lr">📊 Resultado</div><div class="fc-stxt fc-result">${escapeHtml(s.res)}</div></div>
    <div class="fc-back-step"><div class="fc-slbl ll">💡 Aprendizaje</div><div class="fc-stxt">${escapeHtml(s.lrn)}</div></div>`;
}

function renderFcCard(){
  const c=fcCards[fcIdx];
  const pct=Math.round(((fcIdx+1)/fcCards.length)*100);
  document.getElementById('fcProgFill').style.width=pct+'%';
  document.getElementById('fcProgTxt').textContent=`${fcIdx+1} / ${fcCards.length}`;
  document.getElementById('fcCompanyBadge').textContent=c.company || (fcMode==='questions'?'Mis preguntas':'STAR');

  const langEmoji=c.lang==='en'?'🇬🇧':'🇪🇸';
  const modeLabel = c.type==='custom'
    ? 'Pregunta guardada'
    : c.star?.format==='development'
      ? (c.lang==='en'?'Development areas':'Áreas de mejora')
      : c.type==='company-story' ? 'Story adaptada' : 'STAR';
  document.getElementById('fcFrontBadge').innerHTML=`<span class="badge ${c.lang==='en'?'b-sky':'b-amber'}">${langEmoji} ${escapeHtml(c.category)}</span><span class="badge b-warm">${modeLabel}</span>`;
  document.getElementById('fcQuestion').textContent=c.q;

  let backHtml='';
  if((c.type==='star' || c.type==='company-story') && c.star){
    backHtml=`<div class="fc-story-title">Historia recomendada: ${escapeHtml(c.star.title || c.star.q)}</div>${storyHtml(c.star, c.company)}`;
  } else if(c.type==='custom' && c.custom){
    const linked = c.custom.answerType === 'story' ? getStoryById(c.custom.linkedStoryId) : null;
    if(linked){
      backHtml=`<div class="fc-story-title">Story asociada: ${escapeHtml(linked.title || linked.q)}</div>${storyHtml(linked, c.company)}`;
    }else{
      const suggested = pickStoryForQuestion(c.custom.question, c.company);
      backHtml=`
        <div class="fc-story-title">Respuesta guardada</div>
        <div class="fc-back-step"><div class="fc-slbl lr">📝 Tu respuesta</div><div class="fc-stxt fc-result">${escapeHtml(c.custom.customAnswer || 'Sin respuesta guardada.')}</div></div>
        <div class="fc-back-step"><div class="fc-slbl lc">💡 Story alternativa sugerida</div><div class="fc-stxt">${escapeHtml(suggested?.title || '')}</div></div>`;
    }
  }
  document.getElementById('fcBackContent').innerHTML=backHtml;

  const card=document.getElementById('fcCard');
  card.classList.remove('flipped');
  fcFlipped=false;fcRated=false;
  document.getElementById('fcRateArea').style.display='none';
}

function flipCard(){
  if(fcRated)return;
  const card=document.getElementById('fcCard');
  fcFlipped=!fcFlipped;
  card.classList.toggle('flipped',fcFlipped);
  if(fcFlipped)document.getElementById('fcRateArea').style.display='block';
}

function rateCard(r){
  fcRatings[r]++;
  fcRated=true;
  if(fcIdx<fcCards.length-1){
    fcIdx++;
    setTimeout(()=>{renderFcCard();},250);
  } else {
    setTimeout(()=>{showFcDone();},250);
  }
}

function showFcDone(){
  document.getElementById('fcArea').style.display='none';
  document.getElementById('fcDone').style.display='block';
  const doneCopy=document.getElementById('fcDoneCopy');
  if(doneCopy) doneCopy.textContent=`Has practicado ${fcCards.length} ${fcCards.length===1?'tarjeta':'tarjetas'}`;
  document.getElementById('fcDoneStats').innerHTML=`
    <div class="daily-result-grid">
      <div class="daily-result"><div class="daily-result-v ok">${fcRatings.easy}</div><div class="daily-result-l">Bien · repetir más tarde</div></div>
      <div class="daily-result"><div class="daily-result-v mid">${fcRatings.medium}</div><div class="daily-result-l">Regular · repetir pronto</div></div>
      <div class="daily-result"><div class="daily-result-v hard">${fcRatings.hard}</div><div class="daily-result-l">Difícil · repetir mañana</div></div>
    </div>`;
}

function resetFlashcards(){
  document.getElementById('fcDone').style.display='none';
  document.getElementById('fcSetupCard').style.display='block';
  renderCoChips();
  setFlashcardMode(fcMode || 'company');
}



/* ══════════════════════════════════
   FLASHCARDS — v5: móvil + rotación + preguntas ES/EN
══════════════════════════════════ */
const FALLBACK_EN_QUESTIONS = {
  initiative: [
    'Tell me about a time you created value from scratch.',
    'Describe a project where you took ownership without being asked.'
  ],
  communication: [
    'Tell me about a time you had to communicate difficult findings to senior stakeholders.',
    'Describe a time when you influenced senior stakeholders with data.'
  ],
  pressure: [
    'Tell me about a time you worked under significant time pressure.',
    'Describe a situation where you had to deliver a critical result quickly.'
  ],
  failure: [
    'Tell me about a failure and what you learned from it.',
    'Describe a project that did not go as expected.'
  ],
  leadership: [
    'Tell me about a time you led or delegated work to others.',
    'Describe a situation where you helped others perform better.'
  ],
  adaptability: [
    'Tell me about a time you had to adapt to a new culture or environment.',
    'Describe an international experience where you had to adjust quickly.'
  ],
  learning: [
    'Tell me about a time you had to learn something quickly.',
    'Describe a situation where you had to get up to speed with a new tool.'
  ]
};

function setFlashcardLangMode(mode){
  fcLangMode = mode;
  document.querySelectorAll('[id^="fcLang-"]').forEach(el=>el.classList.remove('sel'));
  const active=document.getElementById('fcLang-'+mode);
  if(active) active.classList.add('sel');
}

function allowedFlashcardLangs(){
  if(fcLangMode === 'es') return ['es'];
  if(fcLangMode === 'en') return ['en'];
  return ['es','en'];
}

function hashText(text){
  let h=0; const str=String(text||'');
  for(let i=0;i<str.length;i++){ h=((h<<5)-h)+str.charCodeAt(i); h|=0; }
  return Math.abs(h).toString(36);
}

function getFlashcardRecentKeys(){
  const profile = getCurrentProfile();
  return profile?.flashcardRecentKeys || [];
}

function saveFlashcardRecentKeys(cards){
  if(!CU) return;
  const ud=getUD(CU.username);
  const old=ud.flashcardRecentKeys || [];
  const next=[...cards.map(c=>c.key).filter(Boolean), ...old]
    .filter((v,i,a)=>v && a.indexOf(v)===i)
    .slice(0,30);
  ud.flashcardRecentKeys=next;
  saveUD(CU.username,ud);
}

function getQuestionsForStory(story, lang){
  const direct = story.questions?.[lang] || [];
  if(lang === 'en') return [...direct, ...(story.en?.questions || []), story.en?.q, ...(FALLBACK_EN_QUESTIONS[story.tag] || [])].filter(Boolean);
  return [...direct, story.q].filter(Boolean);
}

function companyQuestionText(base, company, lang){
  if(!company) return base;
  if(lang === 'en') return `For ${company}, ${base.charAt(0).toLowerCase()+base.slice(1)}`;
  return `Pensando en ${company}, ${base.charAt(0).toLowerCase()+base.slice(1)}`;
}

function storyRelevanceScore(story, company=''){
  const hay=`${story.title||''} ${story.sit||''} ${story.act||''} ${story.res||''}`.toLowerCase();
  const keys=['asisa','asegur','sanitas','proveedor','dirección médica','data','datos','sql','dashboard','healthcare','hospital','quir'];
  let score=0;
  keys.forEach(k=>{ if(hay.includes(k)) score+=1; });
  if(company && hay.includes(company.toLowerCase())) score+=4;
  return score;
}

function buildStoryQuestionPool({company='', preferCompany=false}={}){
  const langs=allowedFlashcardLangs();
  const pool=[];
  SD.forEach(story=>{
    langs.forEach(lang=>{
      const questions=getQuestionsForStory(story, lang);
      questions.forEach(question=>{
        const q=companyQuestionText(question, company, lang);
        pool.push({
          type: preferCompany ? 'company-story' : 'star',
          q,
          star: story,
          lang,
          category: story.tagLabel || 'STAR',
          company,
          score: storyRelevanceScore(story, company) + (preferCompany ? 3 : 0) + Math.random(),
          key: `${preferCompany?'co':'star'}:${story.id}:${lang}:${hashText(question)}:${company.toLowerCase()}`
        });
      });
    });
  });
  return pool;
}

function sampleFlashcards(pool, count=5){
  const recent=new Set(getFlashcardRecentKeys());
  const fresh=pool.filter(c=>!recent.has(c.key));
  const stale=pool.filter(c=>recent.has(c.key));
  const sortFn=(a,b)=>(b.score||0)-(a.score||0) || Math.random()-.5;
  const selected=[...fresh.sort(sortFn), ...stale.sort(sortFn)].slice(0,count);
  saveFlashcardRecentKeys(selected);
  return selected;
}

function buildCompanyCards(company){
  const profile = getCurrentProfile();
  const langs=allowedFlashcardLangs();
  const custom = (profile?.customQuestions || [])
    .filter(q => !q.companies?.length || q.companies.some(c => c.toLowerCase() === company.toLowerCase()))
    .filter(q => fcLangMode === 'mixed' || (q.lang || 'es') === fcLangMode)
    .map(q=>({
      type:'custom', q:q.question, custom:q, lang:q.lang==='en'?'en':'es',
      category:q.competency || 'Personalizada', company,
      score: 6 + Math.random(), key:`custom:${q.id || hashText(q.question)}:${company.toLowerCase()}`
    }));
  const storyPool=buildStoryQuestionPool({company, preferCompany:true});
  return sampleFlashcards([...custom, ...storyPool], 5);
}

function buildStarCards(){
  return sampleFlashcards(buildStoryQuestionPool(), 5);
}

function buildQuestionCards(){
  const profile = getCurrentProfile();
  const custom = [...(profile?.customQuestions || [])]
    .filter(q => fcLangMode === 'mixed' || (q.lang || 'es') === fcLangMode)
    .map(q=>({
      type:'custom', q:q.question, custom:q, lang:q.lang==='en'?'en':'es',
      category:q.competency || 'Personalizada', score: 8 + Math.random(),
      key:`custom:${q.id || hashText(q.question)}`
    }));
  if(custom.length) return sampleFlashcards(custom, 5);
  return buildStarCards();
}

function initFlashcards(){
  document.getElementById('fcSetupCard').style.display='block';
  document.getElementById('fcArea').style.display='none';
  document.getElementById('fcDone').style.display='none';
  loadUserCompanies();
  setFlashcardMode(fcMode || 'company');
  setFlashcardLangMode(fcLangMode || 'mixed');
}

function storyHtml(s, company, lang='es'){
  const content = lang === 'en' ? { ...s, ...(s.en || {}) } : s;
  const labels = {
    ...storyStepLabels(s,lang),
    why:lang === 'en' ? `🎯 Why it fits ${escapeHtml(company || '')}` : `🎯 Por qué encaja con ${escapeHtml(company || '')}`
  };
  const why = company ? `<div class="fc-back-step"><div class="fc-slbl lc">${labels.why}</div><div class="fc-stxt fc-adapt">${lang==='en'
    ? `It shows real experience in healthcare, data, structured analysis and measurable impact. Use it to connect your profile with similar business problems at ${escapeHtml(company)}.`
    : `Demuestra experiencia real en healthcare, datos, análisis estructurado e impacto medible. Úsala para conectar tu perfil con problemas de negocio similares en ${escapeHtml(company)}.`}</div></div>` : '';
  if(s?.format === 'development') return `${why}${renderDevelopmentAreas(s,lang,'flashcard')}`;
  if(s?.format === 'contributions') return `${why}${renderRoleContributions(s,lang,'flashcard')}`;
  return `
    ${why}
    <div class="fc-back-step"><div class="fc-slbl ls">${labels.s}</div><div class="fc-stxt">${escapeHtml(content.sit)}</div></div>
    <div class="fc-back-step"><div class="fc-slbl lt">${labels.t}</div><div class="fc-stxt">${escapeHtml(content.tsk)}</div></div>
    <div class="fc-back-step"><div class="fc-slbl la">${labels.a}</div><div class="fc-stxt">${escapeHtml(content.act)}</div></div>
    <div class="fc-back-step"><div class="fc-slbl lr">${labels.r}</div><div class="fc-stxt fc-result">${escapeHtml(content.res)}</div></div>
    <div class="fc-back-step"><div class="fc-slbl ll">${labels.l}</div><div class="fc-stxt">${escapeHtml(content.lrn)}</div></div>`;
}

function renderFcCard(){
  const c=fcCards[fcIdx];
  const pct=Math.round(((fcIdx+1)/fcCards.length)*100);
  document.getElementById('fcProgFill').style.width=pct+'%';
  document.getElementById('fcProgTxt').textContent=`${fcIdx+1} / ${fcCards.length}`;
  document.getElementById('fcCompanyBadge').textContent=c.company || (fcMode==='questions'?'Mis preguntas':'STAR');

  const langEmoji=c.lang==='en'?'🇬🇧':'🇪🇸';
  const modeLabel = c.type==='custom'
    ? 'Pregunta guardada'
    : c.star?.format==='development'
      ? (c.lang==='en'?'Development areas':'Áreas de mejora')
      : c.star?.format==='contributions'
        ? (c.lang==='en'?'Role contributions':'Aportaciones al puesto')
        : c.type==='company-story' ? 'Story adaptada' : 'STAR';
  document.getElementById('fcFrontBadge').innerHTML=`<span class="badge ${c.lang==='en'?'b-sky':'b-amber'}">${langEmoji} ${escapeHtml(c.category)}</span><span class="badge b-warm">${modeLabel}</span>`;
  document.getElementById('fcQuestion').textContent=c.q;

  let backHtml='';
  if((c.type==='star' || c.type==='company-story') && c.star){
    const backLabel=c.star.format==='development'
      ? (c.lang==='en'?'Development areas':'Áreas de mejora')
      : c.star.format==='contributions'
        ? (c.lang==='en'?'Role contributions':'Aportaciones al puesto')
        : (c.lang==='en'?'Recommended story':'Historia recomendada');
    backHtml=`<div class="fc-story-title">${backLabel}: ${escapeHtml((c.lang==='en' && c.star.en?.title) ? c.star.en.title : (c.star.title || c.star.q))}</div>${storyHtml(c.star, c.company, c.lang)}`;
  } else if(c.type==='custom' && c.custom){
    const linked = c.custom.answerType === 'story' ? getStoryById(c.custom.linkedStoryId) : null;
    if(linked){
      backHtml=`<div class="fc-story-title">${c.lang==='en'?'Linked story':'Story asociada'}: ${escapeHtml((c.lang==='en' && linked.en?.title) ? linked.en.title : (linked.title || linked.q))}</div>${storyHtml(linked, c.company, c.lang)}`;
    }else{
      const suggested = pickStoryForQuestion(c.custom.question, c.company);
      backHtml=`
        <div class="fc-story-title">${c.lang==='en'?'Saved answer':'Respuesta guardada'}</div>
        <div class="fc-back-step"><div class="fc-slbl lr">📝 ${c.lang==='en'?'Your answer':'Tu respuesta'}</div><div class="fc-stxt fc-result">${escapeHtml(c.custom.customAnswer || 'Sin respuesta guardada.')}</div></div>
        <div class="fc-back-step"><div class="fc-slbl lc">💡 ${c.lang==='en'?'Alternative story':'Story alternativa sugerida'}</div><div class="fc-stxt">${escapeHtml(suggested?.title || '')}</div></div>`;
    }
  }
  document.getElementById('fcBackContent').innerHTML=backHtml;
  const card=document.getElementById('fcCard');
  card.classList.remove('flipped');
  fcFlipped=false;fcRated=false;
  document.getElementById('fcRateArea').style.display='none';
}

function renderPitch(profile){
  const pitch = profile.pitch || DEFAULT_PROFILE.pitch;
  const phases = document.querySelectorAll('#tab-pitch .p-txt');
  if(phases[0]) phases[0].textContent = pitch.present || '';
  if(phases[1]) phases[1].textContent = pitch.past || '';
  if(phases[2]) phases[2].textContent = pitch.future || '';
}

/* ══════════════════════════════════
   PITCH
══════════════════════════════════ */
let uploadedDocText='';
function handleFile(e){
  const file=e.target.files[0];if(!file)return;
  document.getElementById('fileLabel').textContent='📎 '+file.name;
  if(file.type==='text/plain'){
    const r=new FileReader();
    r.onload=ev=>{uploadedDocText=ev.target.result.slice(0,3000);};
    r.readAsText(file);
  }else{
    uploadedDocText=`[Fichero adjunto: ${file.name}. Extrae los requisitos clave para personalizar el pitch.]`;
  }
}
['dragover','dragleave','drop'].forEach(evt=>{
  document.getElementById('fileDrop').addEventListener(evt,e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle('drag',evt==='dragover');
    if(evt==='drop'&&e.dataTransfer.files[0]){
      document.getElementById('fileInp').files=e.dataTransfer.files;
      handleFile({target:{files:e.dataTransfer.files}});
    }
  });
});
async function genPitch(){
  const co=document.getElementById('pCo').value.trim();
  const role=document.getElementById('pRole').value.trim();
  if(!co){alert('Introduce la empresa primero');return;}
  const btn=document.getElementById('genPBtn');
  document.getElementById('gpTxt').style.display='none';
  document.getElementById('gpSpin').style.display='block';
  btn.disabled=true;
  const docCtx=uploadedDocText?`\n\nOFERTA/DOCUMENTO:\n${uploadedDocText}`:'';
  const prompt=`Coach de entrevistas experto. Adapta el pitch de Jaime Hernández para "${co}", rol "${role||'no especificado'}"${docCtx}.
Perfil: Cursando Executive Master Big Data Science (Universidad de Navarra). ASISA Dirección General Médica: plataforma inteligencia competitiva aseguradoras (SQL Power BI Qlik), optimización SQL -10% ineficiencias, dashboards KPI médicos, automatización catálogo protésico, gestión becaria. Antes: software quirúrgico Hospital del Sureste -30% listas espera. MindSafe 300+ descargas 70% engagement. IA médica Quirón Salud. Top 15/500+ concurso salud Madrid. Estancia 2 meses EEUU sector sanitario.
ESTRUCTURA: Presente (master+ASISA) → Pasado (logros con métricas) → Futuro (por qué ${co}). Máximo 140 palabras. Natural, directo, primera persona.`;
  try{
    const d=await callClaude({model:'claude-sonnet-4-20250514',max_tokens:1000,messages:[{role:'user',content:prompt}]});
    const text=d.content?.map(c=>c.text||'').join('')||'Error.';
    const out=document.getElementById('genOut');out.style.display='block';out.textContent=text;
  }catch(e){
    const out=document.getElementById('genOut');out.style.display='block';out.textContent='Error al conectar con la IA.';
  }
  document.getElementById('gpTxt').style.display='inline';
  document.getElementById('gpSpin').style.display='none';
  btn.disabled=false;
}

/* ══════════════════════════════════
   PRACTICE
══════════════════════════════════ */
let practiceType='consulting',practiceMode='text';
let questions=[],currentQ=0,modelShown=false;
let camStream=null,timerSec=90,timerRunning=false,timerInterval=null;
let recognition=null,speechActive=false,speechActiveV=false;
let sessionStart=null,sessionAnswered=0;

function selType(t){practiceType=t;document.querySelectorAll('[id^="tc-"]').forEach(b=>b.classList.remove('sel'));document.getElementById('tc-'+t).classList.add('sel');}
function selMode(m){practiceMode=m;document.querySelectorAll('[id^="tm-"]').forEach(b=>b.classList.remove('sel'));document.getElementById('tm-'+m).classList.add('sel');}

async function startInterview(){
  const co=document.getElementById('iCo').value.trim();
  const role=document.getElementById('iRole').value.trim();
  if(!co){alert('Introduce la empresa');return;}
  document.getElementById('startTxt').style.display='none';
  document.getElementById('startSpin').style.display='block';
  document.getElementById('startBtn').disabled=true;
  document.getElementById('practiceSetup').style.display='none';
  document.getElementById('loadOv').style.display='block';
  document.getElementById('loadCo').textContent=co;
  const typeDesc={consulting:'consultoría estratégica MBB/Big4',data:'data analytics o tech en salud',health:'healthcare corporativo',general:'competencias generales'};
  const prompt=`Reclutador senior de "${co}" para "${role||'data consultant'}". Genera 8 preguntas comportamentales para Jaime Hernández.
Perfil: Master Big Data Science (cursando). ASISA: inteligencia competitiva, SQL -10%, dashboards KPI, gestión becaria. Antes: software quirúrgico -30% listas espera, MindSafe 300+ descargas, IA médica.
Proceso: ${typeDesc[practiceType]}. REGLAS: 8 preguntas · 5 ES 3 EN intercaladas · cubre liderazgo, iniciativa, presión, equipo, aprendizaje, conflicto, impacto.
SOLO JSON sin backticks: {"questions":[{"lang":"es","category":"Iniciativa","question":"texto"}]}`;
  try{
    const d=await callClaude({model:'claude-sonnet-4-20250514',max_tokens:1500,messages:[{role:'user',content:prompt}]});
    let text=d.content?.map(c=>c.text||'').join('')||'';
    text=text.replace(/```json|```/g,'').trim();
    questions=JSON.parse(text).questions||[];
    if(questions.length<8)throw new Error('short');
  }catch(e){
    questions=[
      {lang:'es',category:'Iniciativa',question:`En tu trabajo en ASISA, ¿cuál fue la situación en la que más iniciativa tomaste? ¿Qué hiciste de principio a fin?`},
      {lang:'en',category:'Leadership',question:'Tell me about a time you led without formal authority. What was the outcome?'},
      {lang:'es',category:'Impacto',question:'El software del hospital redujo las listas de espera un 30%. ¿Cómo identificaste el problema y cómo mediste el impacto?'},
      {lang:'es',category:'Equipo',question:'En MindSafe trabajaste con perfiles muy distintos. ¿Cómo gestionaste los desacuerdos entre el equipo clínico y el técnico?'},
      {lang:'en',category:'Under pressure',question:'Describe a moment when you had to deliver something critical under tight time constraints.'},
      {lang:'es',category:'Aprendizaje',question:'¿Cuál es la herramienta técnica que más te costó aprender en un entorno profesional y cómo lo superaste?'},
      {lang:'es',category:'Conflicto',question:'¿Hubo algún momento en ASISA en que tu criterio no coincidiera con el de un directivo senior? ¿Cómo lo manejaste?'},
      {lang:'en',category:'Motivation',question:`Why ${co} specifically? What have you researched about us?`}
    ];
  }
  document.getElementById('loadOv').style.display='none';
  document.getElementById('interviewWrap').style.display='block';
  currentQ=0;sessionAnswered=0;sessionStart=new Date();
  renderQ();
  document.getElementById('startTxt').style.display='inline';
  document.getElementById('startSpin').style.display='none';
  document.getElementById('startBtn').disabled=false;
}

function renderQ(){
  const q=questions[currentQ];
  const pct=Math.round(((currentQ+1)/questions.length)*100);
  document.getElementById('progFill').style.width=pct+'%';
  document.getElementById('qNum').textContent=`Pregunta ${currentQ+1} de ${questions.length}`;
  document.getElementById('qCat').textContent=q.category||'';
  const b=document.getElementById('qLBdg');
  if(q.lang==='en'){b.className='q-lang ql-en';b.textContent='🇬🇧 English';}
  else{b.className='q-lang ql-es';b.textContent='🇪🇸 Español';}
  document.getElementById('qTxt').textContent=q.question;
  document.getElementById('answerTa').value='';
  document.getElementById('charC').textContent='0';
  document.getElementById('fbBox').style.display='none';
  document.getElementById('modelBox').style.display='none';
  document.getElementById('vFbBox').style.display='none';
  document.getElementById('trBox').textContent='';
  document.getElementById('trBox').style.display='none';
  const vr=document.getElementById('videoReview'); if(vr) vr.style.display='none';
  modelShown=false;
  document.getElementById('nxtBtn').textContent=currentQ===questions.length-1?'Finalizar ✓':'Siguiente →';
  if(practiceMode==='video'){
    document.getElementById('textMode').style.display='none';
    document.getElementById('videoMode').style.display='block';
    resetTimer();
  }else{
    document.getElementById('textMode').style.display='block';
    document.getElementById('videoMode').style.display='none';
  }
  stopSpeech();stopSpeechV();
}

function updateCC(){document.getElementById('charC').textContent=document.getElementById('answerTa').value.length;}

function nextQ(){
  if(document.getElementById('answerTa').value.trim().length>10||document.getElementById('trBox').textContent.trim().length>10)sessionAnswered++;
  if(currentQ===questions.length-1){showSummary();return;}
  currentQ++;renderQ();window.scrollTo({top:0,behavior:'smooth'});
}
function prevQ(){
  if(currentQ===0){restartPractice();return;}
  currentQ--;renderQ();window.scrollTo({top:0,behavior:'smooth'});
}

function modelStoryHtml(story, lang='es'){
  if(story?.format === 'development') return renderDevelopmentAreas(story,lang);
  if(story?.format === 'contributions') return renderRoleContributions(story,lang);
  const content = lang === 'en' ? { ...story, ...(story.en || {}) } : story;
  const labels = storyStepLabels(story,lang);
  return `
    <div class="step"><div class="slbl ls">${labels.s}</div><div class="stxt">${escapeHtml(content.sit)}</div></div>
    <div class="step"><div class="slbl lt">${labels.t}</div><div class="stxt">${escapeHtml(content.tsk)}</div></div>
    <div class="step"><div class="slbl la">${labels.a}</div><div class="stxt">${escapeHtml(content.act)}</div></div>
    <div class="step"><div class="slbl lr">${labels.r}</div><div class="stxt hi">${escapeHtml(content.res)}</div></div>
    <div class="step"><div class="slbl ll">${labels.l}</div><div class="stxt">${escapeHtml(content.lrn)}</div></div>`;
}

async function getAIFb(){
  const answer=document.getElementById('answerTa').value.trim();
  if(answer.length<30){alert('Escribe una respuesta más completa primero.');return;}
  document.getElementById('fbTxt').style.display='none';
  document.getElementById('fbSpin').style.display='block';
  const q=questions[currentQ];
  const prompt=q.lang==='en'
    ?`Expert interview coach. Jaime: ASISA (competitive intelligence SQL Power BI Qlik, manages intern). Before: surgical software -30% waiting lists, MindSafe 300+ downloads. Q: "${q.question}" A: "${answer}" Analyse STAR+L. Max 5: ✓ GOOD / △ IMPROVE / ✗ MISSING. Max 90 words.`
    :`Coach experto. Jaime: ASISA (inteligencia competitiva SQL Power BI Qlik, gestiona becaria). Antes: software quirúrgico -30% listas espera, MindSafe 300+ descargas. P: "${q.question}" R: "${answer}" Analiza STAR+L. Máx 5 puntos: ✓ BIEN / △ MEJORAR / ✗ FALTA. Máx 90 palabras.`;
  try{
    const d=await callClaude({model:'claude-sonnet-4-20250514',max_tokens:800,messages:[{role:'user',content:prompt}]});
    const text=d.content?.map(c=>c.text||'').join('')||'Error.';
    document.getElementById('fbBox').style.display='block';
    document.getElementById('fbContent').textContent=text;
  }catch(e){
    document.getElementById('fbBox').style.display='block';
    document.getElementById('fbContent').textContent='Error al conectar con la IA.';
  }
  document.getElementById('fbTxt').style.display='inline';
  document.getElementById('fbSpin').style.display='none';
}

function toggleModel(){
  const box=document.getElementById('modelBox');
  if(modelShown){box.style.display='none';modelShown=false;return;}
  const q=questions[currentQ];
  const profile = getCurrentProfile();
  const custom = q.customId ? profile?.customQuestions?.find(x=>x.id===q.customId) : null;
  if(custom){
    box.style.display='block';
    if(custom.answerType === 'custom'){
      document.getElementById('modelContent').innerHTML=`<div class="step"><div class="slbl lr">Respuesta guardada</div><div class="stxt hi">${escapeHtml(custom.customAnswer)}</div></div>`;
    }else{
      const linked = getStoryById(custom.linkedStoryId);
      if(linked){
        document.getElementById('modelContent').innerHTML = modelStoryHtml(linked, q.lang || 'es');
      }
    }
    modelShown=true;
    return;
  }
  const cat=(q.category||'').toLowerCase();
  const m={iniciativa:'initiative',liderazgo:'leadership',presión:'pressure','bajo presión':'pressure',conflicto:'conflict',equipo:'teamwork',aprendizaje:'learning',communication:'communication',comunicación:'communication',leadership:'leadership',initiative:'initiative','under pressure':'pressure',teamwork:'teamwork',learning:'learning'};
  const star=SD.find(s=>s.tag===(m[cat]||'initiative'))||SD[currentQ%SD.length];
  box.style.display='block';
  document.getElementById('modelContent').innerHTML = modelStoryHtml(star, q.lang || 'es');
  modelShown=true;
}

/* SPEECH */
let finalT='',finalTV='';
function initRec(onR,onE){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){alert('Usa Chrome para reconocimiento de voz.');return null;}
  const r=new SR();
  r.continuous=true;r.interimResults=true;
  r.lang=questions[currentQ]?.lang==='en'?'en-US':'es-ES';
  r.onresult=onR;r.onend=onE;
  r.onerror=e=>{if(e.error!=='aborted')console.warn(e.error);};
  return r;
}
function toggleSpeech(){
  if(speechActive){stopSpeech();return;}
  finalT=document.getElementById('answerTa').value;
  recognition=initRec(
    e=>{let i='';for(let x=e.resultIndex;x<e.results.length;x++){if(e.results[x].isFinal)finalT+=e.results[x][0].transcript+' ';else i+=e.results[x][0].transcript;}document.getElementById('answerTa').value=finalT+i;updateCC();},
    ()=>{if(speechActive)recognition.start();}
  );
  if(!recognition)return;
  recognition.start();speechActive=true;
  document.getElementById('micBtn').classList.add('on');
  document.getElementById('sHint').textContent='Escuchando… toca para detener';
}
function toggleSpeechV(){
  if(speechActiveV){stopSpeechV();return;}
  finalTV='';
  const box=document.getElementById('trBox');box.style.display='block';box.textContent='';
  recognition=initRec(
    e=>{let i='';for(let x=e.resultIndex;x<e.results.length;x++){if(e.results[x].isFinal)finalTV+=e.results[x][0].transcript+' ';else i+=e.results[x][0].transcript;}box.textContent=finalTV+i;},
    ()=>{if(speechActiveV)recognition.start();}
  );
  if(!recognition)return;
  recognition.start();speechActiveV=true;
  document.getElementById('micBtnV').classList.add('on');
  document.getElementById('sHintV').textContent='Transcribiendo… toca para detener';
}
function stopSpeech(){if(recognition)try{recognition.stop();}catch(e){}speechActive=false;const b=document.getElementById('micBtn');if(b){b.classList.remove('on');document.getElementById('sHint').textContent='Toca para dictar';}}
function stopSpeechV(){if(recognition)try{recognition.stop();}catch(e){}speechActiveV=false;const b=document.getElementById('micBtnV');if(b){b.classList.remove('on');document.getElementById('sHintV').textContent='Activa para transcribir';}}

/* CAMERA */
async function toggleCam(){
  if(!camStream){
    try{
      camStream=await navigator.mediaDevices.getUserMedia({video:true,audio:true});
      const v=document.getElementById('vidEl');v.srcObject=camStream;v.style.display='block';
      document.getElementById('vidPh').style.display='none';
      document.getElementById('camBtn').textContent='📷 Desactivar';
      document.getElementById('timerBtn').style.display='inline-flex';
      const rb=document.getElementById('recordBtn'); if(rb) rb.style.display='inline-flex';
    }catch(e){alert('No se pudo acceder a la cámara.');}
  }else{
    camStream.getTracks().forEach(t=>t.stop());camStream=null;
    document.getElementById('vidEl').style.display='none';
    document.getElementById('vidPh').style.display='block';
    document.getElementById('camBtn').textContent='📷 Activar cámara';
    document.getElementById('timerBtn').style.display='none';
    const rb=document.getElementById('recordBtn'); if(rb) rb.style.display='none';
    if(videoRecording) stopVideoRecording();
    resetTimer();
  }
}
function toggleTimer(){
  if(!timerRunning){
    timerRunning=true;timerSec=90;
    document.getElementById('recBdg').style.display='flex';
    const tb=document.getElementById('timerBtn');tb.textContent='⏹ Detener';
    timerInterval=setInterval(()=>{
      timerSec--;
      const m=Math.floor(timerSec/60),s=timerSec%60;
      document.getElementById('tNum').textContent=`${m}:${s.toString().padStart(2,'0')}`;
      const pct=Math.round((timerSec/90)*100);
      const f=document.getElementById('tFill');f.style.width=pct+'%';
      f.style.background=timerSec>45?'var(--sage)':timerSec>20?'var(--amber)':'var(--terra)';
      if(timerSec<=0){clearInterval(timerInterval);timerRunning=false;showVideoTips(90);}
    },1000);
  }else{
    const used=90-timerSec;clearInterval(timerInterval);timerRunning=false;
    document.getElementById('recBdg').style.display='none';
    document.getElementById('timerBtn').textContent='▶ Empezar';
    if(used>5)showVideoTips(used);
  }
}
function resetTimer(){
  clearInterval(timerInterval);timerRunning=false;timerSec=90;
  const tn=document.getElementById('tNum');if(tn)tn.textContent='1:30';
  const tf=document.getElementById('tFill');if(tf){tf.style.width='100%';tf.style.background='var(--sage)';}
  const rb=document.getElementById('recBdg');if(rb)rb.style.display='none';
  const tb=document.getElementById('timerBtn');if(tb)tb.textContent='▶ Empezar';
}
function showVideoTips(u){
  const t=u<50?'⚠️ Muy corto, apunta a ~80s':u>=85?'✓ Perfecto':'✓ Buen timing';
  document.getElementById('vFbBox').style.display='block';
  document.getElementById('vFbContent').textContent=`⏱ Tiempo: ${u}s · ${t}\n👁 Contacto visual con la cámara, no con las notas\n🎯 Situación en 1-2 frases máximo\n📊 Resultado siempre con número o porcentaje`;
}

/* SUMMARY + HISTORY */
function showSummary(){
  const co=document.getElementById('iCo').value.trim();
  const role=document.getElementById('iRole').value.trim();
  const dur=Math.round((new Date()-sessionStart)/60000);
  if(CU){
    const ud=getUD(CU.username);
    const prevBest=ud.history.length>0?Math.max(...ud.history.map(h=>h.answered)):0;
    const isRec=sessionAnswered>prevBest&&sessionAnswered>0;
    ud.history.unshift({id:Date.now(),company:co,role:role||'—',type:practiceType,mode:practiceMode,date:new Date().toLocaleDateString('es-ES',{day:'2-digit',month:'short',year:'numeric'}),answered:sessionAnswered,total:questions.length,duration:dur,isRecord:isRec});
    if(ud.history.length>50)ud.history=ud.history.slice(0,50);
    saveUD(CU.username,ud);
    document.getElementById('recBadgeSum').style.display=isRec?'block':'none';
  }
  document.getElementById('interviewWrap').style.display='none';
  document.getElementById('summaryWrap').style.display='block';
  document.getElementById('scoreN').textContent=`${sessionAnswered}/${questions.length}`;
  document.getElementById('sumQList').innerHTML=
    `<div style="font-family:'Fraunces',sans-serif;font-size:14px;font-weight:700;color:var(--warm5);margin-bottom:10px;">Preguntas practicadas</div>`+
    questions.map((q,i)=>`<div class="sli">
      <div class="sln">${i+1}</div>
      <div>
        <div style="display:flex;gap:5px;margin-bottom:3px;">
          <span class="badge ${q.lang==='en'?'b-sky':'b-amber'}">${q.lang==='en'?'🇬🇧 EN':'🇪🇸 ES'}</span>
          <span style="font-size:11px;color:var(--text3);font-weight:600;">${q.category||''}</span>
        </div>
        <div style="font-size:13px;line-height:1.5;">${q.question}</div>
      </div></div>`).join('');
  window.scrollTo({top:0,behavior:'smooth'});
}

function restartPractice(){
  document.getElementById('summaryWrap').style.display='none';
  document.getElementById('interviewWrap').style.display='none';
  document.getElementById('loadOv').style.display='none';
  document.getElementById('practiceSetup').style.display='block';
  questions=[];currentQ=0;sessionAnswered=0;
  stopSpeech();stopSpeechV();
  if(videoRecording) stopVideoRecording();
  if(camStream){camStream.getTracks().forEach(t=>t.stop());camStream=null;}
  resetTimer();
}


/* ══════════════════════════════════
   APPLICATIONS / CALENDAR — saved per local profile
══════════════════════════════════ */
function normalizeHeader(h){
  return String(h || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'');
}
function excelSerialToISO(n){
  if(!n || isNaN(n)) return '';
  const epoch = new Date(Date.UTC(1899, 11, 30));
  const date = new Date(epoch.getTime() + Number(n) * 86400000);
  return date.toISOString().slice(0,10);
}
function parseDateSmart(value){
  if(value === null || value === undefined) return '';
  if(typeof value === 'number') return excelSerialToISO(value);
  let s = String(value).trim();
  if(!s || s === '0' || s === '00/01/1900') return '';
  s = s.replace(/\u00a0/g,' ').trim();
  const lower = s.toLowerCase();
  const monthMap = {jan:1,january:1,ene:1,enero:1,feb:2,february:2,febrero:2,mar:3,march:3,marzo:3,apr:4,april:4,abril:4,may:5,mayo:5,jun:6,june:6,junio:6,jul:7,july:7,julio:7,aug:8,august:8,ago:8,agosto:8,sep:9,september:9,septiembre:9,oct:10,october:10,octubre:10,nov:11,november:11,noviembre:11,dec:12,december:12,dic:12,diciembre:12};
  let m;
  if((m = lower.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/))){
    let d=+m[1], mo=+m[2], y=+m[3]; if(y<100) y+=2000;
    return `${y}-${String(mo).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
  }
  if((m = lower.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/))) return `${m[1]}-${String(+m[2]).padStart(2,'0')}-${String(+m[3]).padStart(2,'0')}`;
  if((m = lower.match(/(\d{1,2})(?:st|nd|rd|th)?\s+([a-záéíóú]+)\s+(\d{4})/))){
    const mo = monthMap[m[2]]; if(mo) return `${m[3]}-${String(mo).padStart(2,'0')}-${String(+m[1]).padStart(2,'0')}`;
  }
  if((m = lower.match(/([a-záéíóú]+)[\-\s]+(\d{2,4})/))){
    const mo = monthMap[m[1]]; let y=+m[2]; if(y<100) y+=2000; if(mo) return `${y}-${String(mo).padStart(2,'0')}-01`;
  }
  if((m = lower.match(/(\d{1,2})\s+de\s+([a-záéíóú]+)\s+de\s+(\d{4})/))){
    const mo = monthMap[m[2]]; if(mo) return `${m[3]}-${String(mo).padStart(2,'0')}-${String(+m[1]).padStart(2,'0')}`;
  }
  return '';
}
function appFromRow(row){
  const map = {};
  Object.keys(row || {}).forEach(k => map[normalizeHeader(k)] = row[k]);
  const get = (...keys) => keys.map(k=>map[normalizeHeader(k)]).find(v=>v!==undefined && v!==null && String(v).trim() !== '') || '';
  const empresa = get('empresa','company');
  const puesto = get('puesto','role','position','job');
  if(!empresa && !puesto) return null;
  return {
    id: `app_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    empresa: String(empresa || '').trim(),
    tipo: String(get('tipo','sector','categoria') || '').trim(),
    puesto: String(puesto || '').trim(),
    entrevistas: String(get('entrevistas','entrevista','proceso','estado') || '').trim(),
    fechaLimite: parseDateSmart(get('fecha_limite','fechalimite','deadline','fecha límite','FECHA_LIMTE')),
    fechaAplicada: parseDateSmart(get('fecha_aplicada','fechaaplicada','applied','aplicada','FECHA_APLiCADA')),
    ingles: String(get('ingles','inglés','english') || '').trim(),
    sueldo: String(get('sueldo','salary') || '').trim(),
    lugar: String(get('lugar','location','ubicacion') || '').trim(),
    link: String(get('link','url') || '').trim(),
    createdAt: todayISO(),
    updatedAt: todayISO()
  };
}
function getApplications(){
  const p=getCurrentProfile();
  p.applications ||= [];
  return p.applications;
}

/* Loads applications from KV (remote) and merges into localStorage.
   Call once on tab open or profile switch. */
async function syncApplicationsFromKV(){
  if(!CU) return;
  const remote = await kvLoadApplications(CU.id);
  if(!remote) return; // KV empty or offline → keep local
  const p = getCurrentProfile();
  // merge: remote wins, keep local items not in remote
  const remoteIds = new Set(remote.map(a=>a.id));
  const localOnly = (p.applications||[]).filter(a=>!remoteIds.has(a.id));
  p.applications = [...remote, ...localOnly];
  saveCurrentProfile(p);
  renderApplications();
}

function saveApplications(items){
  const p=getCurrentProfile(); if(!p) return;
  p.applications = items;
  saveCurrentProfile(p);
  // async push to KV — no await, fire and forget
  kvSaveApplications(p.id, items);
}
function loadDefaultApplications(){
  const p=getCurrentProfile(); if(!p) return;
  if(!confirm('¿Cargar la tabla de ejemplo? Se añadirá a tus candidaturas actuales.')) return;
  const existing = p.applications || [];
  const incoming = (DEFAULT_APPLICATIONS || []).map(x=>({...x,id:`app_${Date.now()}_${Math.random().toString(16).slice(2)}`,createdAt:todayISO(),updatedAt:todayISO()}));
  p.applications = [...incoming, ...existing];
  saveCurrentProfile(p);
  showJobsMsg(`${incoming.length} candidaturas cargadas.`);
  renderApplications();
}
function showJobsMsg(msg){
  const el=document.getElementById('jobsImportMsg'); if(!el) return;
  el.style.display='block'; el.textContent=msg;
}
function importApplicationsFile(event){
  const file=event.target.files?.[0]; if(!file) return;
  const ext=file.name.split('.').pop().toLowerCase();
  const reader=new FileReader();
  reader.onload = e => {
    try{
      let rows=[];
      if(ext === 'csv'){
        rows = parseCSVText(e.target.result);
      } else {
        if(typeof XLSX === 'undefined') throw new Error('No se ha cargado la librería XLSX. Prueba con CSV o revisa conexión.');
        const workbook = XLSX.read(e.target.result, {type:'array'});
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        rows = XLSX.utils.sheet_to_json(sheet, {defval:''});
      }
      const apps = rows.map(appFromRow).filter(Boolean);
      if(!apps.length) throw new Error('No he encontrado filas válidas. Revisa cabeceras: EMPRESA, TIPO, PUESTO, FECHA_LIMITE, FECHA_APLICADA...');
      const p=getCurrentProfile(); p.applications ||= [];
      p.applications = [...apps, ...p.applications];
      saveCurrentProfile(p);
      showJobsMsg(`${apps.length} candidaturas importadas desde ${file.name}.`);
      renderApplications();
    }catch(err){ alert(err.message || 'Error importando el archivo'); }
    event.target.value='';
  };
  if(ext === 'csv') reader.readAsText(file);
  else reader.readAsArrayBuffer(file);
}
function parseCSVText(text){
  const rows=[]; let row=[], val='', q=false;
  for(let i=0;i<text.length;i++){
    const ch=text[i], nx=text[i+1];
    if(ch==='"' && q && nx==='"'){ val+='"'; i++; }
    else if(ch==='"'){ q=!q; }
    else if(ch===',' && !q){ row.push(val); val=''; }
    else if((ch==='\n' || ch==='\r') && !q){ if(ch==='\r' && nx==='\n') i++; row.push(val); if(row.some(x=>String(x).trim())) rows.push(row); row=[]; val=''; }
    else val+=ch;
  }
  row.push(val); if(row.some(x=>String(x).trim())) rows.push(row);
  const headers=rows.shift() || [];
  return rows.map(r=>Object.fromEntries(headers.map((h,i)=>[h,r[i]||''])));
}
function renderApplications(){
  const listEl=document.getElementById('applicationsList');
  if(!listEl || !CU) return;
  let apps = getApplications();
  renderApplicationTypeOptions(apps);
  const q=(document.getElementById('appSearch')?.value || '').toLowerCase().trim();
  const type=document.getElementById('appTypeFilter')?.value || 'all';
  const status=document.getElementById('appStatusFilter')?.value || 'all';
  const filtered=apps.filter(a=>{
    const blob=[a.empresa,a.tipo,a.puesto,a.entrevistas,a.ingles,a.sueldo,a.lugar,a.link].join(' ').toLowerCase();
    if(q && !blob.includes(q)) return false;
    if(type!=='all' && String(a.tipo||'').toLowerCase()!==type) return false;
    if(status==='deadline' && !a.fechaLimite) return false;
    if(status==='applied' && !a.fechaAplicada) return false;
    if(status==='pending' && a.fechaAplicada) return false;
    if(status==='interview' && !String(a.entrevistas||'').trim()) return false;
    return true;
  });
  renderApplicationStats(apps);
  renderCalendarGrid(filtered);
  if(!filtered.length){ listEl.innerHTML='<div class="app-empty">No hay candidaturas con esos filtros.</div>'; return; }
  listEl.innerHTML=filtered.map(renderApplicationCard).join('');
}
function renderApplicationTypeOptions(apps){
  const sel=document.getElementById('appTypeFilter'); if(!sel) return;
  const current=sel.value || 'all';
  const types=[...new Set(apps.map(a=>String(a.tipo||'').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
  sel.innerHTML='<option value="all">Todos</option>'+types.map(t=>`<option value="${escapeHtml(t.toLowerCase())}">${escapeHtml(t)}</option>`).join('');
  if([...sel.options].some(o=>o.value===current)) sel.value=current;
}
function daysUntil(iso){
  if(!iso) return null;
  const today=new Date(); today.setHours(0,0,0,0);
  const d=new Date(iso+'T00:00:00');
  return Math.round((d-today)/86400000);
}
function formatDateES(iso){
  if(!iso) return '—';
  const d=new Date(iso+'T00:00:00');
  if(isNaN(d)) return iso;
  return d.toLocaleDateString('es-ES',{day:'2-digit',month:'short',year:'numeric'});
}
function renderApplicationStats(apps){
  const el=document.getElementById('applicationStats'); if(!el) return;
  const applied=apps.filter(a=>a.fechaAplicada).length;
  const deadlines=apps.filter(a=>a.fechaLimite).length;
  const interviews=apps.filter(a=>String(a.entrevistas||'').trim()).length;
  const soon=apps.filter(a=>{const d=daysUntil(a.fechaLimite); return d!==null && d>=0 && d<=14;}).length;
  el.innerHTML=`
    <div class="app-stat"><div class="app-stat-v">${apps.length}</div><div class="app-stat-l">Total</div></div>
    <div class="app-stat"><div class="app-stat-v">${applied}</div><div class="app-stat-l">Aplicadas</div></div>
    <div class="app-stat"><div class="app-stat-v">${deadlines}</div><div class="app-stat-l">Deadlines</div></div>
    <div class="app-stat"><div class="app-stat-v">${soon}</div><div class="app-stat-l">Próx. 14 días</div></div>`;
}
function renderCalendarGrid(apps){
  const el=document.getElementById('calendarGrid'); if(!el) return;
  const dated=apps.filter(a=>a.fechaLimite).sort((a,b)=>a.fechaLimite.localeCompare(b.fechaLimite));
  if(!dated.length){ el.innerHTML='<div class="app-empty">Sin fechas límite en el calendario.</div>'; return; }
  const groups={};
  dated.forEach(a=>{ const key=a.fechaLimite.slice(0,7); (groups[key] ||= []).push(a); });
  const months=Object.keys(groups).sort().slice(0,6);
  el.innerHTML=months.map(k=>{
    const date=new Date(k+'-01T00:00:00');
    const title=date.toLocaleDateString('es-ES',{month:'long',year:'numeric'});
    return `<div class="month-card"><div class="month-title"><span>${title}</span><span>${groups[k].length}</span></div><div class="month-list">${groups[k].map(a=>{
      const day=String(new Date(a.fechaLimite+'T00:00:00').getDate()).padStart(2,'0');
      return `<div class="month-item"><div class="month-day">${day}</div><div><div class="month-company">${escapeHtml(a.empresa)}</div><div class="month-role">${escapeHtml(a.puesto)}</div></div></div>`;
    }).join('')}</div></div>`;
  }).join('');
}
function renderApplicationCard(a){
  const d=daysUntil(a.fechaLimite);
  const deadlineBadge = a.fechaLimite ? `<span class="badge ${d!==null && d>=0 && d<=14 ? 'deadline-soon':'deadline-ok'}">⏰ ${formatDateES(a.fechaLimite)}</span>` : '';
  const appliedBadge = a.fechaAplicada ? `<span class="badge applied">✓ Aplicada ${formatDateES(a.fechaAplicada)}</span>` : '';
  const safeLink = a.link && /^https?:\/\//i.test(a.link) ? a.link : '';
  return `<div class="app-card">
    <div class="app-top"><div><div class="app-company">${escapeHtml(a.empresa || 'Sin empresa')}</div><div class="app-role">${escapeHtml(a.puesto || 'Sin puesto')}</div></div><span class="badge b-sky">${escapeHtml(a.tipo || '—')}</span></div>
    <div class="app-meta">
      ${deadlineBadge}${appliedBadge}
      ${a.entrevistas?`<span class="badge b-purple">${escapeHtml(a.entrevistas)}</span>`:''}
      ${a.ingles?`<span class="badge b-warm">Inglés ${escapeHtml(a.ingles)}</span>`:''}
      ${a.lugar?`<span class="badge b-sage">📍 ${escapeHtml(a.lugar)}</span>`:''}
      ${a.sueldo?`<span class="badge b-amber">${escapeHtml(a.sueldo)}€</span>`:''}
    </div>
    ${safeLink?`<a class="app-link" href="${escapeHtml(safeLink)}" target="_blank" rel="noopener">Abrir oferta ↗</a>`:''}
    <div class="app-actions"><button class="btn-o" onclick="editApplication('${escapeHtml(a.id)}')">Editar</button><button class="btn-o danger-lite" onclick="deleteApplication('${escapeHtml(a.id)}')">Borrar</button></div>
  </div>`;
}
function clearApplicationForm(){
  ['appId','appCompany','appType','appRole','appInterviews','appDeadline','appApplied','appEnglish','appSalary','appLocation','appLink'].forEach(id=>{const el=document.getElementById(id); if(el) el.value='';});
  const t=document.getElementById('applicationFormTitle'); if(t) t.textContent='+ Añadir candidatura';
}
function saveApplication(){
  const p=getCurrentProfile(); if(!p) return;
  p.applications ||= [];
  const id=document.getElementById('appId').value || `app_${Date.now()}`;
  const item={
    id,
    empresa:document.getElementById('appCompany').value.trim(),
    tipo:document.getElementById('appType').value.trim(),
    puesto:document.getElementById('appRole').value.trim(),
    entrevistas:document.getElementById('appInterviews').value.trim(),
    fechaLimite:document.getElementById('appDeadline').value,
    fechaAplicada:document.getElementById('appApplied').value,
    ingles:document.getElementById('appEnglish').value.trim(),
    sueldo:document.getElementById('appSalary').value.trim(),
    lugar:document.getElementById('appLocation').value.trim(),
    link:document.getElementById('appLink').value.trim(),
    createdAt:p.applications.find(a=>a.id===id)?.createdAt || todayISO(),
    updatedAt:todayISO()
  };
  if(!item.empresa && !item.puesto){ alert('Añade al menos empresa o puesto'); return; }
  const idx=p.applications.findIndex(a=>a.id===id);
  if(idx>=0) p.applications[idx]=item; else p.applications.unshift(item);
  saveCurrentProfile(p);
  kvSaveApplications(p.id, p.applications);
  clearApplicationForm();
  renderApplications();
}
function editApplication(id){
  const a=getApplications().find(x=>x.id===id); if(!a) return;
  document.getElementById('appId').value=a.id;
  document.getElementById('appCompany').value=a.empresa||'';
  document.getElementById('appType').value=a.tipo||'';
  document.getElementById('appRole').value=a.puesto||'';
  document.getElementById('appInterviews').value=a.entrevistas||'';
  document.getElementById('appDeadline').value=a.fechaLimite||'';
  document.getElementById('appApplied').value=a.fechaAplicada||'';
  document.getElementById('appEnglish').value=a.ingles||'';
  document.getElementById('appSalary').value=a.sueldo||'';
  document.getElementById('appLocation').value=a.lugar||'';
  document.getElementById('appLink').value=a.link||'';
  document.getElementById('applicationFormTitle').textContent='Editar candidatura';
  window.scrollTo({top:0,behavior:'smooth'});
}
function deleteApplication(id){
  if(!confirm('¿Borrar esta candidatura?')) return;
  const p=getCurrentProfile(); if(!p) return;
  p.applications=(p.applications||[]).filter(a=>a.id!==id);
  saveCurrentProfile(p);
  kvSaveApplications(p.id, p.applications);
  renderApplications();
}
function csvEscape(v){
  const s=String(v ?? '');
  return /[",\n\r;]/.test(s) ? '"'+s.replaceAll('"','""')+'"' : s;
}
function exportApplicationsCSV(){
  if(!CU){ alert('Selecciona un perfil primero'); return; }
  const apps=getApplications();
  const headers=['EMPRESA','TIPO','PUESTO','ENTREVISTAS','FECHA_LIMITE','FECHA_APLICADA','Inglés','Sueldo','Lugar','link'];
  const rows=apps.map(a=>[a.empresa,a.tipo,a.puesto,a.entrevistas,a.fechaLimite,a.fechaAplicada,a.ingles,a.sueldo,a.lugar,a.link]);
  const csv=[headers,...rows].map(r=>r.map(csvEscape).join(';')).join('\n');
  const blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download=`candidaturas_${CU.username}.csv`; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

/* HISTORY */
function renderHistory(){
  const c=document.getElementById('histContent');
  if(!CU){c.innerHTML='<div class="hist-empty"><div class="hist-empty-ico">🔒</div><p>Inicia sesión para ver tu historial</p></div>';return;}
  const ud=getUD(CU.username);
  const h=ud.history||[];
  if(!h.length){c.innerHTML='<div class="hist-empty"><div class="hist-empty-ico">📋</div><p>Aún no tienes sesiones.<br>Completa tu primera simulación.</p></div>';return;}
  const avg=Math.round(h.reduce((a,x)=>a+x.answered,0)/h.length);
  const best=Math.max(...h.map(x=>x.answered));
  c.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px;">
      <div class="hstat" style="background:#fff;border:1px solid var(--border);border-radius:var(--rsm);padding:11px;"><div class="hstat-v">${h.length}</div><div class="hstat-l">Sesiones</div></div>
      <div class="hstat" style="background:#fff;border:1px solid var(--border);border-radius:var(--rsm);padding:11px;"><div class="hstat-v">${avg}/${h[0]?.total||8}</div><div class="hstat-l">Media</div></div>
      <div class="hstat" style="background:#fff;border:1px solid var(--border);border-radius:var(--rsm);padding:11px;"><div class="hstat-v" style="color:var(--amber);">${best}/${h[0]?.total||8}</div><div class="hstat-l">Récord</div></div>
    </div>`+
    h.map(x=>`<div class="hist-card">
      <div class="hist-top">
        <div><div class="hist-co">${x.company}</div><div style="font-size:12px;color:var(--text3);margin-top:2px;">${x.role} · ${{consulting:'Consultoría',data:'Data/Tech',health:'Healthcare',general:'General'}[x.type]||'—'}</div></div>
        <div class="hist-date">${x.date}</div>
      </div>
      <div class="hist-stats">
        <div class="hstat"><div class="hstat-v">${x.answered}/${x.total}</div><div class="hstat-l">Respondidas</div></div>
        <div class="hstat"><div class="hstat-v">${x.duration||'—'} min</div><div class="hstat-l">Duración</div></div>
        <div class="hstat"><div class="hstat-v">${x.mode==='video'?'🎙️':'✏️'}</div><div class="hstat-l">${x.mode==='video'?'Cámara':'Escrita'}</div></div>
      </div>
      ${x.isRecord?'<div><span class="rec-pill">⭐ Récord personal</span></div>':''}
    </div>`).join('');
}

/* INIT */
buildFilters();
renderStar();
