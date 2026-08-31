const DEFAULT_COMPANY_MOTIVATIONS = [
  {
    id: 'ge-healthcare',
    contentVersion: 1,
    company: 'GE HealthCare',
    category: 'Healthcare / MedTech',
    whyEs: 'Me interesa GE HealthCare porque combina el sector sanitario con tecnología aplicada a problemas clínicos y operativos. Mi formación en Ingeniería Biomédica y mi experiencia en un hospital, ASISA y PHCA Medical Group me permiten entender el contexto sanitario, mientras que mi formación en datos me permite contribuir en análisis, automatización y mejora de procesos. Además, me atrae trabajar en una compañía internacional que desarrolla soluciones para diagnóstico, tratamiento y monitorización, porque quiero seguir creciendo en la intersección entre healthcare, tecnología y negocio.',
    whyEn: 'I am interested in GE HealthCare because it combines healthcare with technology applied to clinical and operational challenges. My Biomedical Engineering background and my experience in a hospital, ASISA and PHCA Medical Group allow me to understand the healthcare context, while my training in data enables me to contribute to analysis, automation and process improvement. I am also attracted by the opportunity to work in an international company developing solutions for diagnosis, treatment and monitoring, because I want to keep growing at the intersection of healthcare, technology and business.'
  },
  {
    id: 'movistar-prosegur-alarmas',
    contentVersion: 1,
    company: 'Movistar Prosegur Alarmas',
    category: 'Tecnología + seguridad',
    whyEs: 'Me interesa Movistar Prosegur Alarmas porque combina la experiencia de Prosegur en seguridad con las capacidades digitales y de telecomunicaciones de Telefónica. Es un entorno en el que la tecnología tiene que ser útil, fiable y fácil de usar para proteger hogares y negocios. Mi perfil puede encajar porque tengo experiencia analizando procesos, automatizando información y creando herramientas para detectar incidencias y facilitar la toma de decisiones. Me gustaría aportar esa combinación de análisis, mejora operativa y orientación al usuario.',
    whyEn: 'I am interested in Movistar Prosegur Alarmas because it combines Prosegur’s experience in security with Telefónica’s digital and telecommunications capabilities. It is an environment where technology needs to be useful, reliable and easy to use in order to protect homes and businesses. My profile can fit well because I have experience analysing processes, automating information and creating tools to identify issues and support decision-making. I would like to contribute this combination of analytical thinking, operational improvement and user focus.'
  }
];

const COMPANY_MOTIVATIONS_KEY = 'prepai_company_motivations_v1';

function motivationProfileId(){
  return typeof getCurrentProfileId === 'function'
    ? getCurrentProfileId()
    : (localStorage.getItem('prep_current_profile_v2') || 'default');
}

function motivationStorageKey(){
  return COMPANY_MOTIVATIONS_KEY + ':' + motivationProfileId();
}

function cloneMotivation(item){
  return JSON.parse(JSON.stringify(item));
}

function getCompanyMotivations(){
  let stored = [];
  try {
    const value = JSON.parse(localStorage.getItem(motivationStorageKey()) || '[]');
    stored = Array.isArray(value) ? value : [];
  } catch(error) {
    stored = [];
  }

  const storedById = new Map(stored.map(item => [String(item.id), item]));
  const defaultIds = new Set(DEFAULT_COMPANY_MOTIVATIONS.map(item => String(item.id)));
  const defaults = DEFAULT_COMPANY_MOTIVATIONS.map(item => {
    const saved = storedById.get(String(item.id));
    if (!saved || saved.contentVersion !== item.contentVersion) return cloneMotivation(item);
    return saved;
  });
  const custom = stored.filter(item => !defaultIds.has(String(item.id)));
  const merged = [...defaults, ...custom];
  localStorage.setItem(motivationStorageKey(), JSON.stringify(merged));
  return merged;
}

function motivationEscape(value){
  return typeof escapeHtml === 'function'
    ? escapeHtml(value)
    : String(value ?? '').replace(/[&<>"']/g, character => ({
        '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
      }[character]));
}

function clearCompanyMotivationForm(){
  ['motivationId','motivationCompany','motivationCategory','motivationEs','motivationEn'].forEach(id => {
    const field = document.getElementById(id);
    if (field) field.value = '';
  });
  const title = document.getElementById('motivationFormTitle');
  if (title) title.textContent = '+ Añadir empresa';
  const button = document.getElementById('motivationSaveBtn');
  if (button) button.textContent = 'Guardar motivación';
}

function editCompanyMotivation(id){
  const item = getCompanyMotivations().find(entry => String(entry.id) === String(id));
  if (!item) return;
  document.getElementById('motivationId').value = item.id;
  document.getElementById('motivationCompany').value = item.company || '';
  document.getElementById('motivationCategory').value = item.category || '';
  document.getElementById('motivationEs').value = item.whyEs || '';
  document.getElementById('motivationEn').value = item.whyEn || '';
  document.getElementById('motivationFormTitle').textContent = 'Editar motivación';
  document.getElementById('motivationSaveBtn').textContent = 'Actualizar motivación';
  document.getElementById('motivationCompany').focus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteCompanyMotivation(id){
  const defaultIds = new Set(DEFAULT_COMPANY_MOTIVATIONS.map(item => String(item.id)));
  if (defaultIds.has(String(id))) return;
  if (!confirm('¿Borrar esta motivación?')) return;
  const next = getCompanyMotivations().filter(item => String(item.id) !== String(id));
  localStorage.setItem(motivationStorageKey(), JSON.stringify(next));
  renderCompanyMotivations();
}

function saveCompanyMotivation(){
  const idField = document.getElementById('motivationId');
  const company = document.getElementById('motivationCompany').value.trim();
  const category = document.getElementById('motivationCategory').value.trim();
  const whyEs = document.getElementById('motivationEs').value.trim();
  const whyEn = document.getElementById('motivationEn').value.trim();
  if (!company || !whyEs || !whyEn) {
    alert('Completa la empresa y las respuestas en español e inglés.');
    return;
  }

  const id = idField.value || ('custom-' + Date.now());
  const items = getCompanyMotivations();
  const nextItem = { id, contentVersion: 1, company, category: category || 'Por completar', whyEs, whyEn };
  const index = items.findIndex(item => String(item.id) === String(id));
  if (index >= 0) items[index] = nextItem;
  else items.push(nextItem);
  localStorage.setItem(motivationStorageKey(), JSON.stringify(items));
  clearCompanyMotivationForm();
  renderCompanyMotivations();
}

function renderCompanyMotivations(){
  const list = document.getElementById('companyMotivationsList');
  if (!list) return;
  const items = getCompanyMotivations();
  list.innerHTML = items.map(item => {
    const isDefault = DEFAULT_COMPANY_MOTIVATIONS.some(base => String(base.id) === String(item.id));
    return '<article class="motivation-card">' +
      '<div class="motivation-card-top"><div><div class="motivation-company">' + motivationEscape(item.company) + '</div><div class="motivation-category">' + motivationEscape(item.category || 'Empresa') + '</div></div>' +
      '<span class="motivation-status">' + (isDefault ? 'Base preparada' : 'Personalizada') + '</span></div>' +
      '<div class="motivation-answer-grid">' +
        '<div class="motivation-answer"><div class="motivation-lang">🇪🇸 Español</div><p>' + motivationEscape(item.whyEs) + '</p></div>' +
        '<div class="motivation-answer"><div class="motivation-lang">🇬🇧 English</div><p>' + motivationEscape(item.whyEn) + '</p></div>' +
      '</div>' +
      '<div class="motivation-card-foot"><span>Adáptala al puesto y añade un detalle concreto de la oferta.</span><div class="brow"><button class="btn-o" onclick="editCompanyMotivation(\'' + motivationEscape(item.id) + '\')">Editar</button>' +
      (isDefault ? '' : '<button class="btn-o danger-lite" onclick="deleteCompanyMotivation(\'' + motivationEscape(item.id) + '\')">Borrar</button>') +
      '</div></div>' +
    '</article>';
  }).join('');
}

window.renderCompanyMotivations = renderCompanyMotivations;
window.saveCompanyMotivation = saveCompanyMotivation;
window.editCompanyMotivation = editCompanyMotivation;
window.deleteCompanyMotivation = deleteCompanyMotivation;
window.clearCompanyMotivationForm = clearCompanyMotivationForm;

renderCompanyMotivations();
