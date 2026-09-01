const ROLE_CONTRIBUTIONS_STORY = {
  id: 'three-role-contributions',
  contentVersion: 3,
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
      title: 'Curiosidad y aprendizaje continuo',
      contribution: 'Una de mis fortalezas es mantener una actitud de curiosidad profesional y aprendizaje continuo. Me interesa conocer nuevas tecnologías, entender cómo otras personas resuelven problemas y valorar si esas ideas pueden mejorar mi forma de trabajar.',
      value: 'Esto me ayuda a no quedarme con una única forma de hacer las cosas, identificar alternativas más eficientes y aplicar nuevas ideas de manera práctica y responsable.',
      evidence: 'Por ejemplo, asisto a eventos de la comunidad Google Developers, donde conozco nuevas tecnologías y formas de optimizar el trabajo. También asistí en Estados Unidos a un evento de Disney sobre inteligencia artificial. Después procuro trasladar las ideas relevantes a los proyectos en los que trabajo, siempre que tengan una utilidad clara.'
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
        title: 'Curiosity and continuous learning',
        contribution: 'One of my strengths is maintaining a sense of professional curiosity and continuous learning. I am interested in understanding new technologies, learning how other people solve problems and assessing whether those ideas could improve the way I work.',
        value: 'This helps me avoid relying on a single way of doing things, identify more efficient alternatives and apply new ideas in a practical and responsible way.',
        evidence: 'For example, I attend Google Developers community events, where I learn about new technologies and ways of optimising work. I also attended a Disney event on artificial intelligence in the United States. I then try to bring relevant ideas into the projects I work on whenever they have clear practical value.'
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
