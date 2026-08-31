const ROLE_CONTRIBUTIONS_STORY = {
  id: 'three-role-contributions',
  contentVersion: 2,
  format: 'contributions',
  tag: 'value',
  tagLabel: 'Fortalezas',
  title: 'Tres fortalezas que puedo aportar al puesto',
  q: '¿Cuáles son tus principales fortalezas?',
  questions: {
    es: [
      '¿Cuáles son tus principales fortalezas?',
      '¿Qué fortalezas aportarías a este puesto?',
      '¿Qué te diferencia de otros candidatos?',
      '¿Por qué deberíamos contratarte?',
      '¿Cómo combinas tus conocimientos técnicos con las necesidades del negocio?'
    ],
    en: [
      'What are your main strengths?',
      'What strengths would you bring to this role?',
      'What differentiates you from other candidates?',
      'Why should we hire you?',
      'How would you combine your technical knowledge with business needs?'
    ]
  },
  contributions: [
    {
      title: 'Capacidad analítica y estructurada',
      contribution: 'Una de mis principales fortalezas es analizar los problemas de forma estructurada. Antes de proponer una solución, intento comprender bien el contexto, separar las variables relevantes y ordenar la información para decidir qué merece atención.',
      value: 'Esto me ayuda a abordar problemas complejos con claridad y a convertir información dispersa en pasos concretos, sin precipitarme hacia una herramienta determinada.',
      evidence: 'He aplicado esta forma de trabajar en entornos distintos —un hospital, una aseguradora y un grupo de atención primaria—, combinando información clínica, operativa y de negocio.'
    },
    {
      title: 'Capacidad para conectar contextos técnicos, clínicos y de negocio',
      contribution: 'Mi formación en Ingeniería Biomédica y mi experiencia en un hospital, una aseguradora y un grupo de atención primaria estadounidense me permiten entender tanto la parte técnica como las necesidades de las personas que utilizarán una solución.',
      value: 'Puedo traducir necesidades entre perfiles técnicos y no técnicos, adaptar la profundidad de la explicación y mantener el foco en la utilidad práctica.',
      evidence: 'He trabajado en planificación quirúrgica, inteligencia competitiva sanitaria y analítica para centros de salud, además de participar en proyectos de datos y tecnología.'
    },
    {
      title: 'Iniciativa para mejorar y automatizar procesos',
      contribution: 'Cuando trabajo en un proyecto y detecto una tarea repetitiva o una fuente de ineficiencia, procuro analizar si puede simplificarse, automatizarse o hacerse más útil para el equipo.',
      value: 'No se trata de utilizar tecnología por sí misma, sino de mejorar la forma de trabajar, facilitar la actualización de la información y ayudar a detectar antes posibles incidencias.',
      evidence: 'En ASISA automaticé una presentación de PowerPoint conectada directamente a SQL, de manera que los datos se actualizaban automáticamente. En PHCA Medical Group transformé archivos Excel estáticos en dashboards interactivos mediante Apps Script, con detección de anomalías y notificaciones por email.'
    }
  ],
  en: {
    title: 'Three strengths I can bring to the role',
    q: 'What are your main strengths?',
    questions: [
      'What are your main strengths?',
      'What strengths would you bring to this role?',
      'What differentiates you from other candidates?',
      'Why should we hire you?',
      'How would you combine your technical knowledge with business needs?'
    ],
    contributions: [
      {
        title: 'Analytical and structured problem-solving',
        contribution: 'One of my main strengths is approaching problems in a structured way. Before proposing a solution, I try to understand the context, separate the relevant variables and organise the information to determine what deserves attention.',
        value: 'This helps me address complex problems clearly and turn scattered information into concrete steps, without rushing towards a particular tool.',
        evidence: 'I have applied this way of working in different environments —a hospital, a health insurer and a primary care group— combining clinical, operational and business information.'
      },
      {
        title: 'Ability to connect technical, clinical and business contexts',
        contribution: 'My Biomedical Engineering background and my experience in a hospital, a health insurer and a US primary care group allow me to understand both the technical side and the needs of the people who will use a solution.',
        value: 'I can translate needs between technical and non-technical stakeholders, adapt the level of detail and keep the focus on practical usefulness.',
        evidence: 'I have worked on surgical planning, healthcare competitive intelligence and analytics for healthcare centres, as well as contributing to data and technology projects.'
      },
      {
        title: 'Initiative to improve and automate processes',
        contribution: 'When I work on a project and identify a repetitive task or a source of inefficiency, I try to assess whether it can be simplified, automated or made more useful for the team.',
        value: 'The aim is not to use technology for its own sake, but to improve the way people work, make information easier to update and help identify potential issues earlier.',
        evidence: 'At ASISA, I automated a PowerPoint report connected directly to SQL, so that the data updated automatically. At PHCA Medical Group, I transformed static Excel files into interactive dashboards using Apps Script, with anomaly detection and email notifications.'
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
  COMPETENCIES.push({ k: 'value', l: 'Fortalezas' });
}
