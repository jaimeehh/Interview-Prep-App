/* AI-focused STAR stories grounded in the professional CV. */
const AI_STAR_STORIES = [
  {
    id: 'phca-langgraph-cited-assistant',
    tag: 'ai',
    tagLabel: 'Inteligencia artificial',
    title: 'Asistente documental con LangGraph y búsqueda vectorial en PHCA',
    q: 'Cuéntame una experiencia desarrollando un sistema de IA generativa o agentic AI.',
    questions: {
      es: [
        'Cuéntame una experiencia desarrollando un sistema de IA generativa o agentic AI.',
        '¿Para qué utilizaste LangGraph y qué aportaba frente a una cadena lineal?',
        '¿Cómo combinaste búsqueda vectorial, generación de respuestas y citas?',
        '¿Cómo conectaste un asistente de IA con APIs y servicios cloud?',
        '¿Cómo convertiste una necesidad operativa en una solución basada en LLMs?'
      ],
      en: [
        'Tell me about a time you built a generative or agentic AI system.',
        'Why did you use LangGraph, and what did it add compared with a linear chain?',
        'How did you combine vector search, answer generation and citations?',
        'How did you connect an AI assistant to APIs and cloud services?',
        'How did you turn an operational need into an LLM-based solution?'
      ]
    },
    sit: 'Durante mi experiencia como AI & Data Scientist en PHCA Medical Group, los equipos operativos trabajaban con documentación que debía consultarse de forma ágil y trazable. Una respuesta generada sin mostrar su fuente no era suficiente para un entorno sanitario.',
    tsk: 'Mi objetivo era construir un asistente documental que pudiera localizar información relevante, responder preguntas sobre los documentos y acompañar cada respuesta con citas verificables.',
    act: 'Desarrollé el asistente en Python utilizando LangChain, LangGraph y búsqueda vectorial. Organicé el flujo en etapas para recuperar el contexto, generar la respuesta y conservar las referencias utilizadas. LangGraph me permitió controlar el estado y la secuencia del proceso, en lugar de depender de una única llamada al modelo. También conecté el flujo con APIs REST y servicios de AWS para integrarlo con el entorno técnico existente.',
    res: 'Entregué un flujo funcional para los equipos operativos que generaba respuestas apoyadas en documentación y mostraba las fuentes utilizadas. El proyecto me permitió aplicar LLMs, recuperación vectorial, orquestación y servicios cloud dentro de un mismo caso de uso.',
    lrn: 'Aprendí que el valor de la agentic AI no está únicamente en el modelo, sino en diseñar un flujo controlado, trazable e integrado con las herramientas que ya utiliza la organización.',
    en: {
      title: 'Cited document assistant with LangGraph and vector search at PHCA',
      q: 'Tell me about a time you built a generative or agentic AI system.',
      questions: [
        'Tell me about a time you built a generative or agentic AI system.',
        'Why did you use LangGraph, and what did it add compared with a linear chain?',
        'How did you combine vector search, answer generation and citations?',
        'How did you connect an AI assistant to APIs and cloud services?',
        'How did you turn an operational need into an LLM-based solution?'
      ],
      sit: 'During my experience as an AI & Data Scientist at PHCA Medical Group, operational teams worked with documentation that needed to be consulted quickly and in a traceable way. In a healthcare environment, a generated answer without its source was not sufficient.',
      tsk: 'My objective was to build a document assistant that could locate relevant information, answer questions about the documents and attach verifiable citations to every response.',
      act: 'I developed the assistant in Python using LangChain, LangGraph and vector search. I organised the workflow into stages that retrieved context, generated the answer and preserved the references used. LangGraph allowed me to control the state and sequence of the process instead of relying on a single model call. I also connected the workflow to REST APIs and AWS services so it could fit into the existing technical environment.',
      res: 'I delivered a functional workflow for operational teams that produced answers grounded in documentation and displayed the sources used. The project allowed me to combine LLMs, vector retrieval, orchestration and cloud services in one use case.',
      lrn: 'I learned that the value of agentic AI does not come only from the model. It comes from designing a controlled, traceable workflow that integrates with the tools already used by the organisation.'
    }
  },
  {
    id: 'personal-job-market-automation',
    contentVersion: 1,
    tag: 'ai',
    tagLabel: 'Inteligencia artificial',
    title: 'Automatización de búsqueda de empleo y análisis del mercado',
    q: 'Cuéntame un proyecto reciente en el que hayas utilizado datos y automatización para resolver un problema real.',
    questions: {
      es: [
        'Cuéntame un proyecto reciente en el que hayas utilizado datos y automatización para resolver un problema real.',
        '¿Cómo automatizaste la búsqueda de ofertas de trabajo?',
        '¿Cómo utilizas distintos CVs para priorizar las oportunidades?',
        '¿Cómo registras y analizas tendencias del mercado laboral?',
        '¿Qué problema querías evitar con este proyecto?'
      ],
      en: [
        'Tell me about a recent project where you used data and automation to solve a real problem.',
        'How did you automate your job search?',
        'How do you use different CVs to prioritise opportunities?',
        'How do you track and analyse job-market trends?',
        'What problem were you trying to avoid with this project?'
      ]
    },
    sit: 'En mi búsqueda de empleo vi que revisar manualmente muchas páginas de empresas, comparar cada oferta con mi perfil y registrar las posiciones relevantes consumía demasiado tiempo y hacía difícil tener una visión global del mercado.',
    tsk: 'Decidí crear un sistema propio para automatizar gran parte del proceso, revisar aproximadamente 150 empresas y comparar las ofertas con los cuatro CVs o perfiles que mantengo según el tipo de posición.',
    act: 'Desarrollé en Python un sistema que revisa periódicamente las páginas de empleo, recoge nuevas ofertas y organiza la información en una estructura común. Después registro los resultados en Excel y SQL y los comparo con mis distintos perfiles para priorizar qué vacantes merece la pena revisar. También mantengo histórico para observar tendencias en roles, tecnologías y demanda.',
    res: 'El proyecto reduce mucho el tiempo dedicado a búsquedas repetitivas, me ayuda a concentrarme en las ofertas con más encaje y me da una visión más estructurada de cómo evoluciona el mercado. Además, es un proyecto vivo con el que sigo practicando automatización, Python, SQL y análisis de datos.',
    lrn: 'Aprendí que una buena automatización no tiene que sustituir la decisión humana: debe quitar trabajo repetitivo y ordenar mejor la información para dedicar el tiempo a las decisiones que realmente importan.',
    en: {
      title: 'Automating job search and analysing the job market',
      q: 'Tell me about a recent project where you used data and automation to solve a real problem.',
      questions: [
        'Tell me about a recent project where you used data and automation to solve a real problem.',
        'How did you automate your job search?',
        'How do you use different CVs to prioritise opportunities?',
        'How do you track and analyse job-market trends?',
        'What problem were you trying to avoid with this project?'
      ],
      sit: 'During my job search, I realised that manually checking many company career pages, comparing each role with my profile and tracking relevant positions was taking too much time and made it difficult to keep a clear view of the market.',
      tsk: 'I decided to build my own system to automate much of the process, review around 150 companies and compare opportunities with the four CVs or profiles I maintain for different types of roles.',
      act: 'I developed a Python system that periodically checks company career pages, collects new job postings and organises the information into a common structure. I then store the results in Excel and SQL and compare them with my different profiles to prioritise which vacancies are worth reviewing. I also keep historical data to observe trends in roles, technologies and demand.',
      res: 'The project significantly reduces the time I spend on repetitive searches, helps me focus on the opportunities with the strongest fit and gives me a more structured view of how the market is evolving. It is also a live project that lets me keep practising automation, Python, SQL and data analysis.',
      lrn: 'I learned that good automation does not need to replace human judgement. It should remove repetitive work and organise information better so more time can be spent on the decisions that actually matter.'
    }
  },
  {
    id: 'asisa-internal-data-assistant',
    contentVersion: 2,
    tag: 'ai',
    tagLabel: 'Inteligencia artificial',
    title: 'IA para agrupar incidencias y reutilizar soluciones en ASISA',
    q: 'Cuéntame una experiencia en la que utilizaste inteligencia artificial para reducir incidencias y costes.',
    questions: {
      es: [
        'Cuéntame una experiencia en la que utilizaste inteligencia artificial para reducir incidencias y costes.',
        '¿Cómo utilizaste NLP para agrupar incidencias similares?',
        '¿Cómo convertiste el historial de incidencias en conocimiento reutilizable?',
        '¿Cómo decidía la herramienta cuándo proponer una solución anterior y cuándo escalar el problema?',
        '¿Qué valor aportó la IA frente a seguir contratando soporte externo para cada incidencia?'
      ],
      en: [
        'Tell me about a time you used artificial intelligence to reduce incidents and costs.',
        'How did you use NLP to group similar incidents?',
        'How did you turn incident history into reusable knowledge?',
        'How did the tool decide when to suggest a previous solution and when to escalate the problem?',
        'What value did the AI provide compared with using external support for every incident?'
      ]
    },
    sit: 'En ASISA se registraban muchas incidencias relacionadas con el departamento. Con frecuencia se contrataban equipos externos para investigarlas, pero no siempre se identificaba la causa o se documentaba una solución útil. Además, varias incidencias eran muy parecidas y se trataban como casos independientes, lo que generaba peticiones repetidas y costes evitables.',
    tsk: 'Mi objetivo era aprovechar el historial de incidencias para detectar problemas comunes y ofrecer al equipo posibles soluciones ya utilizadas antes de recurrir de nuevo a un proveedor externo.',
    act: 'Recopilé las descripciones de las incidencias y las soluciones registradas, normalicé el texto y utilicé técnicas de NLP y similitud semántica para agrupar casos relacionados. A partir de ello, implementé una herramienta en la que un miembro del equipo podía introducir un error y consultar incidencias similares, junto con las soluciones que se habían probado anteriormente. Si ninguna alternativa resolvía el problema, entonces se escalaba a soporte externo.',
    res: 'La herramienta permitió reutilizar conocimiento que antes estaba disperso, tratar de forma conjunta incidencias recurrentes y resolver internamente parte de los problemas. Esto redujo la necesidad de contratar soporte externo para casos que ya tenían precedentes y generó un ahorro relevante para la empresa.',
    lrn: 'Aprendí que la IA puede aportar mucho valor organizando el conocimiento interno. No siempre es necesario crear una respuesta nueva: muchas veces el mayor impacto consiste en reconocer que un problema ya ocurrió y recuperar rápidamente la solución adecuada.',
    en: {
      title: 'AI tool for grouping incidents and reusing solutions at ASISA',
      q: 'Tell me about a time you used artificial intelligence to reduce incidents and costs.',
      questions: [
        'Tell me about a time you used artificial intelligence to reduce incidents and costs.',
        'How did you use NLP to group similar incidents?',
        'How did you turn incident history into reusable knowledge?',
        'How did the tool decide when to suggest a previous solution and when to escalate the problem?',
        'What value did the AI provide compared with using external support for every incident?'
      ],
      sit: 'At ASISA, the department received a large number of incident reports. External teams were often hired to investigate them, but the root cause was not always identified and a useful solution was not always documented. Several incidents were also very similar but were treated as separate cases, creating repeated requests and avoidable costs.',
      tsk: 'My objective was to use the incident history to identify common problems and provide the team with solutions that had already been used before relying on an external provider again.',
      act: 'I collected the incident descriptions and recorded solutions, normalised the text and used NLP and semantic similarity techniques to group related cases. I then implemented a tool where a team member could enter an error and review similar incidents together with the solutions previously attempted. If none of those options solved the problem, the case could then be escalated to external support.',
      res: 'The tool made previously scattered knowledge reusable, allowed recurring incidents to be handled together and enabled part of the problems to be solved internally. This reduced the need to hire external support for cases with an existing precedent and generated meaningful savings for the company.',
      lrn: 'I learned that AI can create significant value by organising internal knowledge. It is not always necessary to generate a new answer; often the greatest impact comes from recognising that a problem has happened before and retrieving the right solution quickly.'
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
