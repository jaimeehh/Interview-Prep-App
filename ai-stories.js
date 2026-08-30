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
    id: 'phca-ai-regression-reliability',
    tag: 'ai',
    tagLabel: 'Inteligencia artificial',
    title: 'Evaluación y fiabilidad de un flujo de IA en PHCA',
    q: 'Cuéntame una ocasión en la que tuviste que mejorar la fiabilidad de un sistema de inteligencia artificial.',
    questions: {
      es: [
        'Cuéntame una ocasión en la que tuviste que mejorar la fiabilidad de un sistema de inteligencia artificial.',
        '¿Cómo probarías un sistema basado en LLMs que no siempre responde de forma determinista?',
        'Háblame de un fallo recurrente que convertiste en una prueba útil.',
        '¿Cómo pasarías de un prototipo de IA a un flujo más robusto?',
        '¿Qué aprendiste al integrar un flujo de IA con APIs y AWS?'
      ],
      en: [
        'Tell me about a time you had to improve the reliability of an AI system.',
        'How would you test an LLM-based system that does not always respond deterministically?',
        'Tell me about a recurring failure that you turned into a useful test.',
        'How would you move an AI prototype towards a more robust workflow?',
        'What did you learn from integrating an AI workflow with APIs and AWS?'
      ]
    },
    sit: 'Mientras desarrollaba el asistente documental de PHCA, la conexión entre el modelo, la búsqueda vectorial, las APIs REST y los servicios de AWS generaba fallos que podían reaparecer después de introducir cambios.',
    tsk: 'Necesitaba una forma repetible de comprobar el comportamiento del flujo y evitar que un problema ya identificado volviera a pasar desapercibido.',
    act: 'Registré los fallos recurrentes y los convertí en casos de regresión con una entrada concreta y un comportamiento esperado. Utilicé esos casos para volver a comprobar el flujo después de los cambios y para separar los problemas de integración de los problemas propios de la respuesta generada.',
    res: 'Los errores dejaron de tratarse como incidentes aislados y pasaron a formar parte de un conjunto reutilizable de comprobaciones. Esto hizo que el prototipo fuera más fácil de validar y que cada fallo aportara conocimiento para mejorar la siguiente versión.',
    lrn: 'Aprendí que desarrollar con LLMs también exige disciplina de ingeniería: casos de prueba, trazabilidad y criterios de aceptación. Una demostración convincente no es suficiente si el comportamiento no puede comprobarse de forma repetible.',
    en: {
      title: 'Evaluating and improving the reliability of an AI workflow at PHCA',
      q: 'Tell me about a time you had to improve the reliability of an AI system.',
      questions: [
        'Tell me about a time you had to improve the reliability of an AI system.',
        'How would you test an LLM-based system that does not always respond deterministically?',
        'Tell me about a recurring failure that you turned into a useful test.',
        'How would you move an AI prototype towards a more robust workflow?',
        'What did you learn from integrating an AI workflow with APIs and AWS?'
      ],
      sit: 'While developing the PHCA document assistant, the connections between the model, vector search, REST APIs and AWS services created failures that could reappear after changes were introduced.',
      tsk: 'I needed a repeatable way to check the workflow behaviour and prevent an already identified problem from going unnoticed again.',
      act: 'I documented recurring failures and converted them into regression cases with a specific input and expected behaviour. I used those cases to check the workflow again after changes and to distinguish integration problems from issues in the generated response itself.',
      res: 'Errors stopped being treated as isolated incidents and became a reusable set of checks. This made the prototype easier to validate and ensured that every failure contributed knowledge to the next version.',
      lrn: 'I learned that LLM development also requires engineering discipline: test cases, traceability and acceptance criteria. A convincing demonstration is not enough if the behaviour cannot be checked repeatedly.'
    }
  },
  {
    id: 'asisa-internal-data-assistant',
    tag: 'ai',
    tagLabel: 'Inteligencia artificial',
    title: 'Asistente de datos internos para comparar redes de proveedores en ASISA',
    q: 'Cuéntame una experiencia aplicando inteligencia artificial a un problema real de negocio.',
    questions: {
      es: [
        'Cuéntame una experiencia aplicando inteligencia artificial a un problema real de negocio.',
        '¿Cómo diseñaste un asistente para responder sobre fuentes internas?',
        '¿Qué importancia tuvo la calidad de los datos en tu proyecto de IA?',
        '¿Cómo combinaste inteligencia artificial, SQL y automatización mediante APIs?',
        '¿Qué diferencia un buen caso de uso de IA de una simple demostración técnica?'
      ],
      en: [
        'Tell me about a time you applied artificial intelligence to a real business problem.',
        'How did you design an assistant to answer questions over internal sources?',
        'How important was data quality in your AI project?',
        'How did you combine artificial intelligence, SQL and API-based automation?',
        'What separates a strong AI use case from a simple technical demonstration?'
      ]
    },
    sit: 'En el área de Estrategia Interna y Desarrollo de IA de ASISA existían consultas recurrentes relacionadas con la comparación de redes de proveedores y con información distribuida en fuentes internas.',
    tsk: 'Mi objetivo era prototipar un asistente de datos que facilitara esas comparaciones y pudiera responder preguntas recurrentes apoyándose en la información interna disponible.',
    act: 'Estructuré el caso de uso alrededor de las preguntas que realmente necesitaba resolver el equipo y de las fuentes que podían respaldar cada respuesta. En paralelo, mejoré pipelines SQL y reglas de validación para reforzar la calidad de los datos, y automaticé actualizaciones de catálogos mediante flujos conectados por APIs para evitar reconciliaciones manuales.',
    res: 'El resultado fue un prototipo capaz de comparar redes de proveedores y responder consultas sobre fuentes internas. Además, las mejoras en SQL y validación redujeron las ineficiencias de procesamiento un 10%, mientras que la automatización eliminó la reconciliación manual de las actualizaciones del catálogo.',
    lrn: 'Aprendí que un asistente de IA empresarial depende tanto de la calidad, actualización y estructura de los datos como del propio modelo. Si la fuente no es fiable, la respuesta tampoco puede serlo.',
    en: {
      title: 'Internal data assistant for comparing provider networks at ASISA',
      q: 'Tell me about a time you applied artificial intelligence to a real business problem.',
      questions: [
        'Tell me about a time you applied artificial intelligence to a real business problem.',
        'How did you design an assistant to answer questions over internal sources?',
        'How important was data quality in your AI project?',
        'How did you combine artificial intelligence, SQL and API-based automation?',
        'What separates a strong AI use case from a simple technical demonstration?'
      ],
      sit: 'Within ASISA’s Internal Strategy and AI Development function, there were recurring questions related to comparing provider networks and information distributed across internal sources.',
      tsk: 'My objective was to prototype a data assistant that made those comparisons easier and answered recurring questions using the internal information available.',
      act: 'I structured the use case around the questions the team genuinely needed to answer and the sources that could support each response. In parallel, I improved SQL pipelines and validation rules to strengthen data quality, and automated catalogue updates through API-based workflows to remove manual reconciliation.',
      res: 'The result was a prototype able to compare provider networks and answer questions over internal sources. The SQL and validation improvements also reduced processing inefficiencies by 10%, while the automation eliminated manual reconciliation for catalogue updates.',
      lrn: 'I learned that an enterprise AI assistant depends as much on the quality, freshness and structure of its data as it does on the model itself. If the source is not reliable, the answer cannot be reliable either.'
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
