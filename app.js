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
   PROFILE STORAGE (local, no real login)
══════════════════════════════════ */
const PROFILE_STORE_KEY = 'prep_profiles_v2';
const CURRENT_PROFILE_KEY = 'prep_current_profile_v2';

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
function ensureDefaultProfile(){
  const profiles = getProfiles();
  if (!profiles[DEFAULT_PROFILE.id]) {
    profiles[DEFAULT_PROFILE.id] = JSON.parse(JSON.stringify(DEFAULT_PROFILE));
    saveProfiles(profiles);
  }
}
function getCurrentProfileId(){
  return localStorage.getItem(CURRENT_PROFILE_KEY) || DEFAULT_PROFILE.id;
}
function setCurrentProfileId(id){
  localStorage.setItem(CURRENT_PROFILE_KEY, id);
}
function getProfile(id){
  const profiles = getProfiles();
  const base = profiles[id] || profiles[DEFAULT_PROFILE.id] || JSON.parse(JSON.stringify(DEFAULT_PROFILE));
  base.companies ||= [];
  base.starStories ||= [];
  base.customQuestions ||= [];
  base.history ||= [];
  base.preferences ||= { interviewLanguageMode: 'mixed', practiceMode: 'text' };
  base.initials ||= initialsFromName(base.name);
  return base;
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
        <span class="profile-sub">${p.education || (p.targetRoles||[]).join(', ') || 'Perfil local'}</span>
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
  const education = document.getElementById('newProfileEducation').value.trim();
  const roles = document.getElementById('newProfileRoles').value.split(',').map(x=>x.trim()).filter(Boolean);
  if(!name){ showErr('Escribe un nombre para crear el perfil'); return; }
  const profiles = getProfiles();
  let id = slugify(name);
  let n = 2;
  while(profiles[id]){ id = `${slugify(name)}_${n++}`; }
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
    history: [],
    preferences: { interviewLanguageMode: 'mixed', practiceMode: 'text' }
  };
  saveProfiles(profiles);
  selectProfile(id);
}

function selectProfile(id){
  const p = getProfile(id);
  CU = { username:id, id, name:p.name };
  setCurrentProfileId(id);
  document.getElementById('userBtn').textContent = p.initials || initialsFromName(p.name);
  document.getElementById('umName').textContent = p.name;
  document.getElementById('authScreen').classList.remove('active');
  document.getElementById('appScreen').classList.add('active');
  loadProfileIntoApp();
}

function loadProfileIntoApp(){
  if(!CU) return;
  const profile = getProfile(CU.username);
  SD = (profile.starStories && profile.starStories.length) ? profile.starStories : DEFAULT_STAR_STORIES;
  loadUserCompanies();
  buildFilters();
  renderStar();
  renderPitch(profile);
  renderCustomQuestionFormOptions();
  renderCustomQuestions();
  renderHistory();
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
  document.getElementById('tab-'+t).classList.add('active');
  if(btn)btn.classList.add('active');
  else document.querySelectorAll('.ttab').forEach(b=>{if(b.getAttribute('onclick')?.includes("'"+t+"'"))b.classList.add('active');});
  if(t==='history')renderHistory();
  if(t==='cards')initFlashcards();
  if(t==='questions'){renderCustomQuestionFormOptions();renderCustomQuestions();}
}

/* ══════════════════════════════════
   STAR DATA
══════════════════════════════════ */
let SD = DEFAULT_STAR_STORIES;

/* STAR render */
let activeFilter='all';
function buildFilters(){
  const tags = (typeof COMPETENCIES !== 'undefined' ? COMPETENCIES : [{k:'all',l:'Todas'}]);
  document.getElementById('filterRow').innerHTML=tags.map(t=>`<button class="fpill${t.k===activeFilter?' active':''}" onclick="filterStar('${t.k}',this)">${t.l}</button>`).join('');
}
function filterStar(f,el){
  activeFilter=f;
  document.querySelectorAll('.fpill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');renderStar();
}
function renderStar(){
  const list=SD.filter(s=>activeFilter==='all'||s.tag===activeFilter);
  document.getElementById('starList').innerHTML=list.map(s=>`
    <div class="scard" id="sc${escapeHtml(s.id)}">
      <div class="scard-hd" onclick="document.getElementById('sc${escapeHtml(s.id)}').classList.toggle('open')">
        <span class="stag ${({initiative:'ti',leadership:'tl',pressure:'tp',conflict:'tc',teamwork:'tt',learning:'tn',communication:'tl',failure:'tc',adaptability:'tn'}[s.tag]||'ti')}">${escapeHtml(s.tagLabel)}</span>
        <span class="scard-q">${escapeHtml(s.q)}</span>
        <span class="scard-arr">›</span>
      </div>
      <div class="scard-body">
        <div style="height:1px;background:var(--border);margin:0 0 12px;"></div>
        <div class="step"><div class="slbl ls">📍 Situación</div><div class="stxt">${escapeHtml(s.sit)}</div></div>
        <div class="step"><div class="slbl lt">🎯 Tarea</div><div class="stxt">${escapeHtml(s.tsk)}</div></div>
        <div class="step"><div class="slbl la">⚡ Acción</div><div class="stxt">${escapeHtml(s.act)}</div></div>
        <div class="step"><div class="slbl lr">📊 Resultado</div><div class="stxt hi">${escapeHtml(s.res)}</div></div>
        <div class="step"><div class="slbl ll">💡 Aprendizaje</div><div class="stxt">${escapeHtml(s.lrn)}</div></div>
      </div>
    </div>`).join('');
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
function saveCustomQuestion(){
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
  alert('Pregunta guardada');
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
function deleteCustomQuestion(id){
  const profile = getCurrentProfile();
  if(!profile) return;
  if(!confirm('¿Borrar esta pregunta guardada?')) return;
  profile.customQuestions = (profile.customQuestions || []).filter(q=>q.id !== id);
  saveCurrentProfile(profile);
  renderCustomQuestions();
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
   FLASHCARDS
══════════════════════════════════ */
let fcCards=[], fcIdx=0, fcFlipped=false, fcRated=false;
let fcRatings={easy:0,medium:0,hard:0};
let userCompanies=[];

function loadUserCompanies(){
  if(!CU)return;
  const ud=getUD(CU.username);
  userCompanies=ud.companies||[];
  renderCoChips();
}

function renderCoChips(){
  const container=document.getElementById('coChips');
  container.innerHTML=userCompanies.map((c,i)=>`
    <div class="co-chip${fcSelectedCo===c?' sel':''}" onclick="selectCo('${c}')">${c}
      <span onclick="event.stopPropagation();removeCo(${i})" style="margin-left:4px;opacity:.5;font-size:11px;">✕</span>
    </div>`).join('')+
    `<div class="co-chip add" onclick="addCoChip()">+ Añadir</div>`;
}

let fcSelectedCo='';
function selectCo(c){
  fcSelectedCo=c;
  renderCoChips();
}
function removeCo(i){
  userCompanies.splice(i,1);
  if(!CU)return;
  const ud=getUD(CU.username);ud.companies=userCompanies;saveUD(CU.username,ud);
  renderCoChips();
}
function addCoChip(){
  const inp=document.getElementById('newCoInp');
  inp.style.display=inp.style.display==='none'?'block':'none';
  if(inp.style.display==='block')inp.focus();
}
function confirmCo(){
  const val=document.getElementById('newCoInp').value.trim();
  if(!val)return;
  if(!userCompanies.includes(val))userCompanies.push(val);
  fcSelectedCo=val;
  if(CU){const ud=getUD(CU.username);ud.companies=userCompanies;saveUD(CU.username,ud);}
  document.getElementById('newCoInp').value='';
  document.getElementById('newCoInp').style.display='none';
  renderCoChips();
}
document.getElementById('newCoInp')?.addEventListener('blur',()=>{
  setTimeout(()=>{document.getElementById('newCoInp').style.display='none';},200);
});

function initFlashcards(){
  document.getElementById('fcSetupCard').style.display='block';
  document.getElementById('fcArea').style.display='none';
  document.getElementById('fcDone').style.display='none';
  loadUserCompanies();
}

async function startFlashcards(){
  if(!fcSelectedCo){alert('Selecciona o añade una empresa primero');return;}
  document.getElementById('fcStartTxt').style.display='none';
  document.getElementById('fcSpin').style.display='block';
  document.getElementById('fcStartBtn').disabled=true;

  // Generate 5 company-specific questions via AI
  const prompt=`Eres reclutador de "${fcSelectedCo}". Genera exactamente 5 preguntas comportamentales para entrevistar a Jaime Hernández (Master Big Data Science, trabaja en ASISA en inteligencia competitiva y analítica de datos, antes software quirúrgico -30% listas espera).
Las preguntas deben ser específicas para "${fcSelectedCo}" y retadoras. Mezcla español e inglés (3 ES, 2 EN).
Responde SOLO en JSON sin backticks:
{"questions":[{"lang":"es","category":"Iniciativa","question":"texto"},{"lang":"en","category":"Leadership","question":"texto"}]}`;

  let aiQuestions=[];
  try{
    const d=await callClaude({model:'claude-sonnet-4-20250514',max_tokens:800,messages:[{role:'user',content:prompt}]});
    let text=d.content?.map(c=>c.text||'').join('')||'';
    text=text.replace(/```json|```/g,'').trim();
    const parsed=JSON.parse(text);
    aiQuestions=parsed.questions||[];
  }catch(e){
    aiQuestions=[
      {lang:'es',category:'Iniciativa',question:`En ${fcSelectedCo}, ¿cómo conectas tu experiencia en ASISA con los proyectos que haríais?`},
      {lang:'en',category:'Leadership',question:`Tell me about a time you led without authority — how does that translate to ${fcSelectedCo}?`},
      {lang:'es',category:'Impacto',question:`¿Cuál sería tu propuesta de valor diferencial para ${fcSelectedCo} basada en tus logros?`},
      {lang:'es',category:'Aprendizaje',question:`¿Qué tendrías que aprender para rendir desde el día 1 en ${fcSelectedCo}?`},
      {lang:'en',category:'Motivation',question:`Why ${fcSelectedCo} and why now? Be specific.`}
    ];
  }

  // Mix STAR stories, custom saved questions and AI questions.
  const profile = getCurrentProfile();
  const matchingCustom = (profile?.customQuestions || [])
    .filter(q => !q.companies?.length || q.companies.some(c => c.toLowerCase() === fcSelectedCo.toLowerCase()))
    .sort(()=>Math.random()-.5)
    .slice(0,2);
  const shuffledStar=[...SD].sort(()=>Math.random()-.5).slice(0, Math.max(2, 3 - matchingCustom.length));
  fcCards=[
    ...matchingCustom.map(q=>({type:'custom',q:q.question,custom:q,lang:q.lang==='en'?'en':'es',category:q.competency || 'Personalizada',company:fcSelectedCo})),
    ...shuffledStar.map(s=>({type:'star',q:s.q,star:s,lang:'es',category:s.tagLabel})),
    ...aiQuestions.slice(0, Math.max(1, 5 - matchingCustom.length - shuffledStar.length)).map(q=>({type:'company',q:q.question,lang:q.lang,category:q.category,company:fcSelectedCo}))
  ].sort(()=>Math.random()-.5).slice(0,5);

  fcIdx=0;fcFlipped=false;fcRated=false;
  fcRatings={easy:0,medium:0,hard:0};

  document.getElementById('fcStartTxt').style.display='inline';
  document.getElementById('fcSpin').style.display='none';
  document.getElementById('fcStartBtn').disabled=false;
  document.getElementById('fcSetupCard').style.display='none';
  document.getElementById('fcArea').style.display='block';
  renderFcCard();
}

function renderFcCard(){
  const c=fcCards[fcIdx];
  const pct=Math.round(((fcIdx+1)/fcCards.length)*100);
  document.getElementById('fcProgFill').style.width=pct+'%';
  document.getElementById('fcProgTxt').textContent=`${fcIdx+1} / ${fcCards.length}`;
  document.getElementById('fcCompanyBadge').textContent=c.company||'STAR';

  // Front
  const langEmoji=c.lang==='en'?'🇬🇧':'🇪🇸';
  document.getElementById('fcFrontBadge').innerHTML=`<span class="badge ${c.lang==='en'?'b-sky':'b-amber'}">${langEmoji} ${c.category}</span>`;
  document.getElementById('fcQuestion').textContent=c.q;

  // Back
  let backHtml='';
  if(c.type==='star'&&c.star){
    const s=c.star;
    backHtml=`
      <div class="fc-back-step"><div class="fc-slbl ls">📍 Situación</div><div class="fc-stxt">${escapeHtml(s.sit)}</div></div>
      <div class="fc-back-step"><div class="fc-slbl lt">🎯 Tarea</div><div class="fc-stxt">${escapeHtml(s.tsk)}</div></div>
      <div class="fc-back-step"><div class="fc-slbl la">⚡ Acción</div><div class="fc-stxt">${escapeHtml(s.act)}</div></div>
      <div class="fc-back-step"><div class="fc-slbl lr">📊 Resultado</div><div class="fc-stxt fc-result">${escapeHtml(s.res)}</div></div>
      <div class="fc-back-step"><div class="fc-slbl ll">💡 Aprendizaje</div><div class="fc-stxt">${escapeHtml(s.lrn)}</div></div>`;
  } else if(c.type==='custom' && c.custom){
    const linked = c.custom.answerType === 'story' ? getStoryById(c.custom.linkedStoryId) : null;
    if(linked){
      backHtml=`
        <div class="fc-back-step"><div class="fc-slbl ls">📍 Story asociada</div><div class="fc-stxt">${escapeHtml(linked.title || linked.q)}</div></div>
        <div class="fc-back-step"><div class="fc-slbl la">⚡ Acción</div><div class="fc-stxt">${escapeHtml(linked.act)}</div></div>
        <div class="fc-back-step"><div class="fc-slbl lr">📊 Resultado</div><div class="fc-stxt fc-result">${escapeHtml(linked.res)}</div></div>`;
    }else{
      backHtml=`<div class="fc-back-step"><div class="fc-slbl lr">Respuesta guardada</div><div class="fc-stxt fc-result">${escapeHtml(c.custom.customAnswer || 'Sin respuesta guardada.')}</div></div>`;
    }
  } else {
    backHtml=`
      <div class="fc-back-step"><div class="fc-slbl ls">💡 Enfoque sugerido para ${c.company||'esta empresa'}</div>
      <div class="fc-stxt">Conecta con tu experiencia más relevante, incluye una métrica concreta y cierra con aprendizaje aplicable al rol.</div></div>
      <div class="fc-back-step"><div class="fc-slbl lr">📊 Clave</div>
      <div class="fc-stxt fc-result">Menciona ASISA o el hospital según aplique, con el resultado cuantificado (10% / 30% / 300 descargas).</div></div>`;
  }
  document.getElementById('fcBackContent').innerHTML=backHtml;

  // Reset state
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
  document.getElementById('fcDoneStats').innerHTML=`
    <div style="display:flex;gap:10px;justify-content:center;margin-top:8px;">
      <div style="text-align:center;padding:10px 16px;background:#fff;border-radius:var(--rsm);border:1px solid var(--border);">
        <div style="font-family:'Fraunces',sans-serif;font-size:22px;font-weight:700;color:var(--sage);">${fcRatings.easy}</div>
        <div style="font-size:11px;color:var(--text3);">Bien</div>
      </div>
      <div style="text-align:center;padding:10px 16px;background:#fff;border-radius:var(--rsm);border:1px solid var(--border);">
        <div style="font-family:'Fraunces',sans-serif;font-size:22px;font-weight:700;color:var(--amber);">${fcRatings.medium}</div>
        <div style="font-size:11px;color:var(--text3);">Regular</div>
      </div>
      <div style="text-align:center;padding:10px 16px;background:#fff;border-radius:var(--rsm);border:1px solid var(--border);">
        <div style="font-family:'Fraunces',sans-serif;font-size:22px;font-weight:700;color:var(--terra);">${fcRatings.hard}</div>
        <div style="font-size:11px;color:var(--text3);">Difícil</div>
      </div>
    </div>`;
}

function resetFlashcards(){
  document.getElementById('fcDone').style.display='none';
  document.getElementById('fcSetupCard').style.display='block';
  fcSelectedCo='';renderCoChips();
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
        document.getElementById('modelContent').innerHTML=`
          <div class="step"><div class="slbl ls">📍 Situación</div><div class="stxt">${escapeHtml(linked.sit)}</div></div>
          <div class="step"><div class="slbl lt">🎯 Tarea</div><div class="stxt">${escapeHtml(linked.tsk)}</div></div>
          <div class="step"><div class="slbl la">⚡ Acción</div><div class="stxt">${escapeHtml(linked.act)}</div></div>
          <div class="step"><div class="slbl lr">📊 Resultado</div><div class="stxt hi">${escapeHtml(linked.res)}</div></div>
          <div class="step"><div class="slbl ll">💡 Aprendizaje</div><div class="stxt">${escapeHtml(linked.lrn)}</div></div>`;
      }
    }
    modelShown=true;
    return;
  }
  const cat=(q.category||'').toLowerCase();
  const m={iniciativa:'initiative',liderazgo:'leadership',presión:'pressure','bajo presión':'pressure',conflicto:'conflict',equipo:'teamwork',aprendizaje:'learning',communication:'communication',comunicación:'communication',leadership:'leadership',initiative:'initiative','under pressure':'pressure',teamwork:'teamwork',learning:'learning'};
  const star=SD.find(s=>s.tag===(m[cat]||'initiative'))||SD[currentQ%SD.length];
  box.style.display='block';
  document.getElementById('modelContent').innerHTML=`
    <div class="step"><div class="slbl ls">📍 Situación</div><div class="stxt">${escapeHtml(star.sit)}</div></div>
    <div class="step"><div class="slbl lt">🎯 Tarea</div><div class="stxt">${escapeHtml(star.tsk)}</div></div>
    <div class="step"><div class="slbl la">⚡ Acción</div><div class="stxt">${escapeHtml(star.act)}</div></div>
    <div class="step"><div class="slbl lr">📊 Resultado</div><div class="stxt hi">${escapeHtml(star.res)}</div></div>
    <div class="step"><div class="slbl ll">💡 Aprendizaje</div><div class="stxt">${escapeHtml(star.lrn)}</div></div>`;
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
      camStream=await navigator.mediaDevices.getUserMedia({video:true,audio:false});
      const v=document.getElementById('vidEl');v.srcObject=camStream;v.style.display='block';
      document.getElementById('vidPh').style.display='none';
      document.getElementById('camBtn').textContent='📷 Desactivar';
      document.getElementById('timerBtn').style.display='inline-flex';
    }catch(e){alert('No se pudo acceder a la cámara.');}
  }else{
    camStream.getTracks().forEach(t=>t.stop());camStream=null;
    document.getElementById('vidEl').style.display='none';
    document.getElementById('vidPh').style.display='block';
    document.getElementById('camBtn').textContent='📷 Activar cámara';
    document.getElementById('timerBtn').style.display='none';
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
  if(camStream){camStream.getTracks().forEach(t=>t.stop());camStream=null;}
  resetTimer();
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