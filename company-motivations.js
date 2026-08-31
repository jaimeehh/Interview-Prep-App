const DEFAULT_COMPANY_MOTIVATIONS = [
  {
    id: 'ge-healthcare',
    contentVersion: 2,
    company: 'GE HealthCare',
    category: 'Healthcare / MedTech',
    whyEs: 'Me interesa GE HealthCare porque este puesto de ingeniería combina dos aspectos que me motivan: comunicar con claridad información técnica y optimizar procesos dentro del área de Sales. En concreto, me atrae trabajar con soluciones de diagnóstico por imagen como TAC, PET y resonancia magnética, entendiendo las necesidades de los equipos comerciales y siguiendo los patrones DMA en Sales para analizar y mejorar la forma de trabajo. Mi formación en Ingeniería Biomédica me permite comprender la tecnología y su aplicación en healthcare, y mi experiencia con datos, SQL, dashboards y automatización me ayuda a transformar procesos en soluciones más claras, eficientes y medibles. Creo que podría aportar una visión técnica, analítica y orientada a la mejora continua, actuando como enlace entre ingeniería, ventas y otras áreas de la organización.',
    whyEn: 'I am interested in GE HealthCare because this engineering role combines two aspects that motivate me: communicating technical information clearly and optimising processes within Sales. In particular, I am attracted by the opportunity to work with medical imaging solutions such as CT, PET and MRI, understand the needs of commercial teams, and follow DMA patterns in Sales to analyse and improve the way processes are carried out. My Biomedical Engineering background enables me to understand the technology and its healthcare applications, while my experience with data, SQL, dashboards and automation helps me turn processes into clearer, more efficient and measurable solutions. I believe I could contribute a technical, analytical and continuous-improvement mindset, acting as a link between engineering, sales and other areas of the organisation.'
  },
  {
    id: 'movistar-prosegur-alarmas',
    contentVersion: 2,
    company: 'Movistar Prosegur Alarmas',
    category: 'Tecnología + seguridad',
    whyEs: 'Me interesa Movistar Prosegur Alarmas porque el Leadership Program de tres años combina desarrollo de liderazgo con responsabilidad real desde el primer día en proyectos de automatización inteligente y soluciones de IA. Además, me atrae el contexto de una joint venture entre Telefónica y Prosegur, con más de 600.000 clientes, donde la mejora de procesos puede tener un impacto operativo claro. El puesto está muy conectado con lo que quiero seguir desarrollando: identificar oportunidades para automatizar tareas manuales de Back Office y Contact Center, diseñar soluciones con Python, herramientas No-Code e IA, y trabajar con SQL e integraciones de API, incluyendo proyectos de Inteligencia Artificial Generativa y agentes. Mi experiencia encaja directamente con este enfoque: en ASISA automaticé un PowerPoint conectado a SQL para que los datos se actualizaran automáticamente, y en PHCA Medical Group transformé Excels estáticos en dashboards interactivos con Apps Script, incorporando detección de anomalías y notificaciones por email. Por eso creo que puedo aportar una combinación de análisis, automatización, comunicación y orientación a la mejora continua.',
    whyEn: 'I am interested in Movistar Prosegur Alarmas because the three-year Leadership Program combines leadership development with real responsibility from day one in intelligent automation and AI solutions. I am also attracted by the context of a joint venture between Telefónica and Prosegur, with more than 600,000 customers, where process improvement can have a clear operational impact. The role is closely connected to what I want to keep developing: identifying opportunities to automate manual Back Office and Contact Center tasks, designing solutions with Python, No-Code tools and AI, and working with SQL and API integrations, including Generative AI and agent projects. My experience fits this approach directly: at ASISA, I automated a PowerPoint connected to SQL so that the data updated automatically, and at PHCA Medical Group, I transformed static Excel files into interactive dashboards using Apps Script, incorporating anomaly detection and email notifications. I believe I could contribute a combination of analytical thinking, automation, communication and continuous improvement.'
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
