/* AI-focused STAR stories grounded in validated user experience. */
const AI_STAR_STORIES = [
  {
    id: 'personal-job-market-automation',
    contentVersion: 2,
    tag: 'ai',
    tagLabel: 'Inteligencia artificial',
    title: 'Automatización de búsqueda de empleo y análisis del mercado',
    q: 'Cuéntame un proyecto reciente en el que hayas utilizado datos y automatización para resolver un problema real.',
    questions: {
      es: [
        'Cuéntame un proyecto reciente en el que hayas utilizado datos y automatización para resolver un problema real.',
        '¿Cómo automatizaste la búsqueda de ofertas de trabajo?',
        '¿Cómo utilizas distintos CVs para priorizar oportunidades?',
        '¿Cómo analizas tendencias del mercado laboral?'
      ],
      en: [
        'Tell me about a recent project where you used data and automation to solve a real problem.',
        'How did you automate your job search?',
        'How do you use different CVs to prioritise opportunities?',
        'How do you analyse job-market trends?'
      ]
    },
    sit: 'Quería evitar perder tiempo revisando manualmente cientos de páginas de empleo y comparando una a una las ofertas con mis distintos perfiles.',
    tsk: 'Mi objetivo fue crear un sistema que revisara unas 150 empresas, recogiera las nuevas ofertas y me ayudara a priorizarlas según los cuatro CVs que mantengo para distintos tipos de posición.',
    act: 'Desarrollé en Python un scraper que revisa periódicamente las páginas de empleo, recoge las vacantes y las guarda en una estructura común. Después registro la información en Excel y SQL, la comparo con mis distintos perfiles y mantengo histórico para ver tendencias en roles, tecnologías y demanda.',
    res: 'Ahora reduzco mucho el tiempo de búsqueda manual, me centro antes en las ofertas con mejor encaje y tengo una visión más clara de cómo está evolucionando el mercado.',
    lrn: 'Aprendí que automatizar bien no significa eliminar la decisión humana, sino quitar trabajo repetitivo para dedicar más tiempo a analizar y decidir.',
    en: {
      title: 'Automating job search and analysing the job market',
      q: 'Tell me about a recent project where you used data and automation to solve a real problem.',
      questions: [
        'Tell me about a recent project where you used data and automation to solve a real problem.',
        'How did you automate your job search?',
        'How do you use different CVs to prioritise opportunities?',
        'How do you analyse job-market trends?'
      ],
      sit: 'I wanted to avoid spending too much time manually checking hundreds of career pages and comparing each job posting with my different profiles.',
      tsk: 'My goal was to build a system that could review around 150 companies, collect new opportunities and help me prioritise them against the four CVs I maintain for different types of roles.',
      act: 'I developed a Python scraper that periodically checks career pages, collects vacancies and stores them in a common structure. I then register the information in Excel and SQL, compare it with my different profiles and keep historical data to identify trends in roles, technologies and demand.',
      res: 'I now spend much less time on manual searches, focus earlier on the opportunities with the strongest fit and have a clearer view of how the market is evolving.',
      lrn: 'I learned that good automation is not about removing human judgement, but about eliminating repetitive work so more time can be spent analysing and making decisions.'
    }
  }
];

function addAiStories(target){
  if (!Array.isArray(target)) return;
  const existingIds = new Set(target.map(story => String(story.id)));
  const newStories = AI_STAR_STORIES
    .filter(story => !existingIds.has(String(story.id)))
    .map(story => JSON.parse(JSON.stringify(story)));
  target.unshift(...newStories);
}

if (typeof DEFAULT_STAR_STORIES !== 'undefined') addAiStories(DEFAULT_STAR_STORIES);
if (typeof DEFAULT_PROFILE !== 'undefined') addAiStories(DEFAULT_PROFILE.starStories);
if (typeof COMPETENCIES !== 'undefined' && !COMPETENCIES.some(item => item.k === 'ai')) {
  COMPETENCIES.push({ k: 'ai', l: 'Inteligencia artificial' });
}
