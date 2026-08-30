const ROLE_CONTRIBUTIONS_STORY = {
  id: 'three-role-contributions',
  contentVersion: 1,
  format: 'contributions',
  tag: 'value',
  tagLabel: 'Propuesta de valor',
  title: 'Tres aportaciones que puedo ofrecer al puesto',
  q: '¿Qué tres cosas consideras que aportarías a este puesto y a la empresa?',
  questions: {
    es: [
      '¿Qué tres cosas consideras que aportarías a este puesto y a la empresa?',
      '¿Qué te diferencia de otros candidatos?',
      '¿Por qué deberíamos contratarte?',
      '¿Cómo combinarías tus conocimientos técnicos con las necesidades del negocio?',
      '¿Qué valor aporta tu experiencia en healthcare a este puesto?'
    ],
    en: [
      'What three things would you bring to this role and the company?',
      'What differentiates you from other candidates?',
      'Why should we hire you?',
      'How would you combine your technical knowledge with business needs?',
      'What value does your healthcare experience bring to this role?'
    ]
  },
  contributions: [
    {
      title: 'Conectar inteligencia artificial, datos y negocio',
      contribution: 'Aporto una combinación de conocimientos técnicos en Python, SQL, LLMs y LangGraph con la capacidad de entender qué decisión o problema de negocio debe resolver cada proyecto.',
      value: 'Esto permite utilizar la tecnología con un objetivo concreto y convertir los resultados técnicos en información útil para perfiles no técnicos y para la toma de decisiones.',
      evidence: 'En PHCA desarrollé un asistente documental con LangGraph y búsqueda vectorial, y en ASISA apliqué IA para organizar incidencias y recuperar soluciones internas.'
    },
    {
      title: 'Una visión amplia y especializada del sector sanitario',
      contribution: 'Mi formación en Ingeniería Biomédica y mi experiencia en un hospital, una aseguradora y un grupo de atención primaria estadounidense me permiten comprender perspectivas clínicas, operativas y de negocio.',
      value: 'Puedo entender con rapidez a distintos stakeholders, identificar las limitaciones de los datos sanitarios y traducir necesidades del sector en soluciones analíticas o tecnológicas.',
      evidence: 'He trabajado en planificación quirúrgica, inteligencia competitiva sanitaria, analítica para centros de salud y un proyecto de IA aplicado a reconstrucción PET/MR con Quirónsalud.'
    },
    {
      title: 'Iniciativa y capacidad de ejecución con impacto medible',
      contribution: 'Aporto autonomía para llevar proyectos de principio a fin, aprender herramientas nuevas y coordinarme con otras personas hasta convertir una idea en una solución utilizable.',
      value: 'Esto me permite empezar a aportar desde las primeras fases, mantener el foco en la entrega y medir si el trabajo genera una mejora real.',
      evidence: 'He contribuido a reducir un 22% las listas de espera quirúrgicas, mejoré un 10% las ineficiencias de procesamiento y mis dashboards apoyaron decisiones relacionadas con una reducción del 20% de costes operativos en siete centros.'
    }
  ],
  en: {
    title: 'Three contributions I can bring to the role',
    q: 'What three things would you bring to this role and the company?',
    questions: [
      'What three things would you bring to this role and the company?',
      'What differentiates you from other candidates?',
      'Why should we hire you?',
      'How would you combine your technical knowledge with business needs?',
      'What value does your healthcare experience bring to this role?'
    ],
    contributions: [
      {
        title: 'Connecting artificial intelligence, data and business',
        contribution: 'I bring a combination of technical knowledge in Python, SQL, LLMs and LangGraph with the ability to understand the business decision or problem that each project needs to address.',
        value: 'This allows me to use technology with a clear objective and translate technical results into useful information for non-technical stakeholders and decision-making.',
        evidence: 'At PHCA, I developed a document assistant with LangGraph and vector search, and at ASISA I applied AI to organise incidents and retrieve internal solutions.'
      },
      {
        title: 'A broad and specialised view of healthcare',
        contribution: 'My Biomedical Engineering background and my experience in a hospital, a health insurer and a US primary care group allow me to understand clinical, operational and business perspectives.',
        value: 'I can quickly understand different stakeholders, identify the limitations of healthcare data and translate sector needs into analytical or technological solutions.',
        evidence: 'I have worked on surgical planning, healthcare competitive intelligence, analytics for health centres and an AI project applied to PET/MR reconstruction with Quirónsalud.'
      },
      {
        title: 'Initiative and execution with measurable impact',
        contribution: 'I bring the autonomy to take projects from start to finish, learn new tools and coordinate with others until an idea becomes a usable solution.',
        value: 'This allows me to contribute from the early stages, remain focused on delivery and measure whether the work produces a real improvement.',
        evidence: 'I contributed to reducing surgical waiting lists by 22%, improved processing inefficiencies by 10%, and my dashboards supported decisions associated with a 20% reduction in operational costs across seven centres.'
      }
    ]
  }
};

function addRoleContributions(target){
  if (!Array.isArray(target)) return;
  const index = target.findIndex(item => String(item.id) === ROLE_CONTRIBUTIONS_STORY.id);
  const copy = JSON.parse(JSON.stringify(ROLE_CONTRIBUTIONS_STORY));
  if (index >= 0) target[index] = copy;
  else target.unshift(copy);
}

if (typeof DEFAULT_STAR_STORIES !== 'undefined') addRoleContributions(DEFAULT_STAR_STORIES);
if (typeof DEFAULT_PROFILE !== 'undefined') addRoleContributions(DEFAULT_PROFILE.starStories);
if (typeof COMPETENCIES !== 'undefined' && !COMPETENCIES.some(item => item.k === 'value')) {
  COMPETENCIES.push({ k: 'value', l: 'Propuesta de valor' });
}
