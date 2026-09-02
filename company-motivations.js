const DEFAULT_COMPANY_MOTIVATIONS = [
  {
    id: 'ge-healthcare',
    contentVersion: 3,
    company: 'GE HealthCare',
    category: 'Healthcare / MedTech',
    whyEs: 'Me interesa GE HealthCare porque es una compañía de referencia en España en el ámbito de los equipos médicos y está en la vanguardia de la tecnología aplicada a la salud. Me atrae especialmente la posibilidad de trabajar con equipos de diagnóstico por imagen como PET/CT, TAC y resonancia magnética, que son fundamentales para el diagnóstico, y de comunicar y optimizar procesos dentro del área de Sales. Mi formación en Ingeniería Biomédica y mi perfil orientado a data science encajan con este entorno, al igual que mi TFG sobre la aplicación de IA para detectar y corregir errores en equipos médicos. En este puesto podría trasladar ese conocimiento a un entorno real, utilizando datos para optimizar procesos de servicio, mejorar el uptime y reducir problemas operativos en una región como EMEA, contribuyendo a generar impacto en hospitales y pacientes.',
    whyEn: 'I am interested in GE HealthCare because it is a leading company in Spain in the field of medical equipment and is at the forefront of technology applied to healthcare. I am particularly attracted by the possibility of working with diagnostic imaging systems such as PET/CT, CT scanners and MRI, which are fundamental to diagnosis, and of communicating and optimising processes within the Sales organisation. My Biomedical Engineering background and data-science-oriented profile fit well with this environment, as does my final degree project on applying AI to detect and correct errors in medical equipment. In this role, I would be able to transfer that knowledge to a real-world setting, using data to optimise service processes, improve uptime and reduce operational issues across a region such as EMEA, helping to create an impact for hospitals and patients.'
  },
  {
    id: 'movistar-prosegur-alarmas',
    contentVersion: 3,
    company: 'Movistar Prosegur Alarmas',
    category: 'Tecnología + seguridad',
    whyEs: 'Me interesa esta oportunidad en Movistar Prosegur Alarmas principalmente por tres motivos: tecnología, inteligencia artificial y su aplicación práctica en un sector tan importante como la seguridad. Además, me atrae mucho la combinación entre Telefónica y Prosegur, porque une la capacidad tecnológica y digital de Telefónica con la experiencia de Prosegur en seguridad. En cuanto al puesto, me parece especialmente interesante el Leadership Program de tres años, porque ofrece responsabilidad real desde el primer día y la posibilidad de participar en diferentes proyectos relacionados con automatización e inteligencia artificial. Es precisamente un entorno en el que quiero seguir desarrollándome: entender procesos, detectar oportunidades de mejora y utilizar tecnología e IA para crear soluciones que tengan un impacto real. Por eso veo esta oportunidad como una combinación muy buena entre lo que ya he desarrollado en análisis y automatización y hacia donde quiero orientar mi carrera profesional.',
    whyEn: 'I am interested in this opportunity at Movistar Prosegur Alarmas mainly for three reasons: technology, artificial intelligence, and their practical application in a sector as important as security. I am also very attracted by the combination of Telefónica and Prosegur, because it brings together Telefónica\'s technological and digital capabilities with Prosegur\'s expertise in security. Regarding the role itself, I find the three-year Leadership Program particularly interesting because it offers real responsibility from day one and the opportunity to participate in different projects related to automation and artificial intelligence. This is exactly the kind of environment in which I want to continue developing: understanding processes, identifying opportunities for improvement, and using technology and AI to create solutions with a real impact. That is why I see this opportunity as a very good combination of what I have already developed in analysis and automation and the direction in which I want to build my professional career.'
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
