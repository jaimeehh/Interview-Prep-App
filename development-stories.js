const DEVELOPMENT_AREA_STORY = {
  id: 'three-development-areas',
  contentVersion: 1,
  format: 'development',
  tag: 'selfawareness',
  tagLabel: 'Autoconocimiento',
  title: 'Tres áreas de mejora profesional',
  q: 'Dime tres debilidades o áreas de mejora que tengas en un entorno de trabajo.',
  questions: {
    es: [
      'Dime tres debilidades o áreas de mejora que tengas en un entorno de trabajo.',
      '¿Cuáles son tus tres principales áreas de mejora profesional?',
      '¿Qué debilidad estás trabajando respecto a la estimación de tiempos?',
      '¿Cómo has mejorado la manera en la que compartes el trabajo en curso?',
      '¿Qué haces para documentar mejor las decisiones de un proyecto?'
    ],
    en: [
      'Tell me about three weaknesses or development areas you have in the workplace.',
      'What are your three main professional development areas?',
      'What weakness are you working on regarding time estimation?',
      'How have you improved the way you share work in progress?',
      'What are you doing to document project decisions more effectively?'
    ]
  },
  areas: [
    {
      title: 'Estimación de tiempos',
      weakness: 'En proyectos nuevos, a veces soy demasiado optimista al calcular cuánto tiempo necesitaré para una tarea que todavía no conozco bien.',
      consequence: 'Si aparece una complejidad que no había previsto, puedo quedarme con menos margen al final del proyecto.',
      action: 'Ahora divido el trabajo en partes más pequeñas, establezco deadlines intermedios, reviso el avance y comunico con antelación cualquier posible retraso.'
    },
    {
      title: 'Compartir el trabajo en curso',
      weakness: 'Antes prefería presentar mi trabajo cuando ya estaba muy avanzado.',
      consequence: 'Esto podía hacer que recibiera feedback más tarde y tuviera que introducir cambios después de haber invertido bastante tiempo.',
      action: 'Ahora comparto primeros borradores y establezco puntos de revisión para comprobar desde el principio que avanzo en la dirección adecuada.'
    },
    {
      title: 'Documentación continua',
      weakness: 'Cuando estoy muy centrado en ejecutar un proyecto, puedo dejar parte de la documentación para el final.',
      consequence: 'Esto puede dificultar el seguimiento de algunas decisiones o cambios realizados durante el proyecto.',
      action: 'Para evitarlo, anoto los acuerdos después de cada reunión y mantengo un registro breve y actualizado de los cambios importantes.'
    }
  ],
  en: {
    title: 'Three professional development areas',
    q: 'Tell me about three weaknesses or development areas you have in the workplace.',
    questions: [
      'Tell me about three weaknesses or development areas you have in the workplace.',
      'What are your three main professional development areas?',
      'What weakness are you working on regarding time estimation?',
      'How have you improved the way you share work in progress?',
      'What are you doing to document project decisions more effectively?'
    ],
    areas: [
      {
        title: 'Time estimation',
        weakness: 'In new projects, I can sometimes be too optimistic when estimating how long an unfamiliar task will take.',
        consequence: 'If unexpected complexity appears, this can leave me with less margin towards the end of the project.',
        action: 'I now divide the work into smaller parts, set intermediate deadlines, review progress and communicate any potential delay early.'
      },
      {
        title: 'Sharing work in progress',
        weakness: 'I used to prefer presenting my work once it was already at an advanced stage.',
        consequence: 'This could mean receiving feedback later and having to make changes after investing a significant amount of time.',
        action: 'I now share early drafts and schedule review points to confirm from the beginning that I am moving in the right direction.'
      },
      {
        title: 'Continuous documentation',
        weakness: 'When I am highly focused on delivering a project, I can leave part of the documentation until the end.',
        consequence: 'This can make it more difficult to trace some of the decisions or changes made during the project.',
        action: 'To prevent this, I record agreements after each meeting and maintain a short, up-to-date log of important changes.'
      }
    ]
  }
};

const LEADERSHIP_STORY_UPDATE = {
  id: 'delegation-leadership',
  contentVersion: 2,
  tag: 'leadership',
  tagLabel: 'Liderazgo',
  title: 'Liderazgo progresivo de estudiantes en prácticas',
  q: '¿Cuéntame una experiencia liderando y desarrollando a otras personas?',
  questions: {
    es: [
      '¿Cuéntame una experiencia liderando y desarrollando a otras personas?',
      '¿Cómo integraste a estudiantes en prácticas en un proyecto nuevo?',
      '¿Cómo equilibraste el seguimiento cercano con dar autonomía?',
      '¿Cómo utilizaste deadlines para coordinar y medir el trabajo del equipo?',
      'Cuéntame una ocasión en la que ayudar a otras personas mejoró el resultado de un proyecto.'
    ],
    en: [
      'Tell me about a time you led and developed other people.',
      'How did you onboard students on placement into a new project?',
      'How did you balance close supervision with giving people autonomy?',
      'How did you use deadlines to coordinate and measure the team’s work?',
      'Tell me about a time when developing other people improved a project outcome.'
    ]
  },
  sit: 'Durante un proyecto en ASISA se incorporaron varios estudiantes en prácticas que todavía no conocían el entorno de la compañía, la dinámica del equipo ni parte de los tecnicismos utilizados en el proyecto.',
  tsk: 'Mi objetivo era introducirlos progresivamente en el desarrollo de una nueva plataforma para que pudieran aportar valor a la empresa mientras aprendían a trabajar dentro del equipo y ganaban autonomía.',
  act: 'Empecé asignándoles tareas concretas y asumibles, explicando el contexto y realizando un seguimiento frecuente. Establecí deadlines claros y puntos de revisión para medir el avance y dar feedback. A medida que dominaban los conceptos y cumplían los objetivos, fui aumentando la dificultad de las tareas y reduciendo el seguimiento para dejarles más libertad y ayudarles a ser autosuficientes.',
  res: 'La plataforma se terminó antes de lo previsto y los estudiantes se integraron en la dinámica de trabajo y de grupo. Ganaron autonomía durante su estancia y algunos de ellos fueron contratados posteriormente por la empresa.',
  lrn: 'Aprendí que liderar a personas con poca experiencia exige adaptar el nivel de acompañamiento: al principio necesitan contexto, objetivos y seguimiento; después, confianza y espacio para tomar decisiones. La combinación de deadlines claros, feedback y autonomía progresiva puede mejorar tanto su desarrollo como el resultado del proyecto.',
  en: {
    title: 'Progressively leading students on placement',
    q: 'Tell me about a time you led and developed other people.',
    questions: [
      'Tell me about a time you led and developed other people.',
      'How did you onboard students on placement into a new project?',
      'How did you balance close supervision with giving people autonomy?',
      'How did you use deadlines to coordinate and measure the team’s work?',
      'Tell me about a time when developing other people improved a project outcome.'
    ],
    sit: 'During a project at ASISA, several students on placement joined the team. They were not yet familiar with the company environment, the team dynamics or some of the technical terminology used in the project.',
    tsk: 'My objective was to introduce them progressively to the development of a new platform so they could create value for the company while learning how the team worked and becoming more autonomous.',
    act: 'I started by assigning clear and manageable tasks, explaining the context and following up frequently. I set clear deadlines and review points to measure progress and provide feedback. As they became more familiar with the concepts and met their objectives, I increased the difficulty of their tasks and reduced the level of supervision, giving them more freedom and helping them become self-sufficient.',
    res: 'The platform was completed ahead of schedule, and the students became integrated into both the work and the team dynamic. They gained autonomy during their placement, and some of them were subsequently hired by the company.',
    lrn: 'I learned that leading people with limited experience requires adapting the level of support. At first, they need context, objectives and close follow-up; later, they need trust and room to make decisions. Combining clear deadlines, feedback and progressive autonomy can improve both their development and the project outcome.'
  }
};

function upsertDevelopmentStory(target, story){
  if (!Array.isArray(target)) return;
  const index = target.findIndex(item => String(item.id) === String(story.id));
  const copy = JSON.parse(JSON.stringify(story));
  if (index >= 0) target[index] = copy;
  else target.unshift(copy);
}

if (typeof DEFAULT_STAR_STORIES !== 'undefined') {
  upsertDevelopmentStory(DEFAULT_STAR_STORIES, DEVELOPMENT_AREA_STORY);
  upsertDevelopmentStory(DEFAULT_STAR_STORIES, LEADERSHIP_STORY_UPDATE);
}
if (typeof DEFAULT_PROFILE !== 'undefined') {
  upsertDevelopmentStory(DEFAULT_PROFILE.starStories, DEVELOPMENT_AREA_STORY);
  upsertDevelopmentStory(DEFAULT_PROFILE.starStories, LEADERSHIP_STORY_UPDATE);
}
if (typeof STORY_EN_TRANSLATIONS !== 'undefined') {
  STORY_EN_TRANSLATIONS['delegation-leadership'] = JSON.parse(JSON.stringify(LEADERSHIP_STORY_UPDATE.en));
}
if (typeof COMPETENCIES !== 'undefined' && !COMPETENCIES.some(item => item.k === 'selfawareness')) {
  COMPETENCIES.push({ k: 'selfawareness', l: 'Autoconocimiento' });
}
