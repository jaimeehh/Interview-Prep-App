/*
  Role guidance for the STAR bank.
  Several cards are different interview angles of the same experience; the
  memory labels below make that relationship explicit without duplicating
  what the candidate needs to learn.
*/
const ROLE_PROFILE_OPTIONS = [
  { id: 'all', label: 'Todos los CVs' },
  { id: 'consulting', label: 'Consultoría' },
  { id: 'data', label: 'Data Science' },
  { id: 'medtech', label: 'MedTech' },
  { id: 'ai', label: 'AI' }
];

const STORY_PROFILE_METADATA = {
  'asisa-competitive-intelligence': {
    memoryOrder: 1,
    memoryLabel: 'Historia base 1 · ASISA: inteligencia competitiva',
    variantLabel: 'Versión principal',
    studyTier: 'core',
    anchors: 'visibilidad → comparación → datos y dashboards → decisión → impacto',
    roleFit: { consulting: 'primary', data: 'primary', medtech: 'secondary', ai: 'secondary' },
    roleAngles: {
      consulting: 'Destaca cómo estructuraste un problema ambiguo, comparaste competidores y convertiste el análisis en recomendaciones.',
      data: 'Destaca las fuentes, la estructura SQL, la calidad del dato, los KPIs y la visualización en Power BI/Qlik.',
      medtech: 'Destaca que el análisis afectaba a redes de proveedores, cobertura sanitaria y decisiones de dirección médica.',
      ai: 'Úsala como ejemplo de que una solución de IA necesita primero datos fiables, criterios claros y una necesidad de negocio.'
    },
    verificationNote: 'Confirma antes de memorizar los resultados de 3 provincias y la reducción de dos semanas a dos días; no aparecen en los cuatro CVs.'
  },
  'senior-communication': {
    memoryOrder: 1,
    memoryLabel: 'Historia base 1 · ASISA: inteligencia competitiva',
    variantLabel: 'Ángulo: comunicación con perfiles senior',
    studyTier: 'core',
    anchors: 'mismos datos → mensaje difícil → visuales → opciones → decisión',
    roleFit: { consulting: 'primary', data: 'secondary', medtech: 'secondary', ai: 'secondary' },
    roleAngles: {
      consulting: 'Cuenta la misma experiencia poniendo el foco en sintetizar hallazgos, anticipar objeciones y proponer opciones accionables.',
      data: 'Explica cómo tradujiste resultados técnicos a un mensaje comprensible para personas no técnicas.',
      medtech: 'Destaca la comunicación con dirección médica y el impacto de los datos en decisiones sanitarias.',
      ai: 'Úsala para demostrar que sabes explicar las limitaciones y el valor de una solución técnica a stakeholders.'
    },
    verificationNote: 'Confirma la aprobación de la estrategia y el uso mensual por el comité antes de utilizar esos resultados.'
  },
  'asisa-internship-initiative': {
    memoryOrder: 1,
    memoryLabel: 'Historia base 1 · ASISA: inteligencia competitiva',
    variantLabel: 'Ángulo: iniciativa y superar expectativas',
    studyTier: 'core',
    anchors: 'rol inicial → asumir responsabilidad → construir → presentar → ganar credibilidad',
    roleFit: { consulting: 'primary', data: 'secondary', medtech: 'secondary', ai: 'secondary' },
    roleAngles: {
      consulting: 'Destaca que partiste de una necesidad poco definida y asumiste la responsabilidad de convertirla en una herramienta útil.',
      data: 'Destaca la autonomía para recopilar, estructurar y analizar información procedente de distintas fuentes.',
      medtech: 'Conecta la iniciativa con una necesidad real de la Dirección General Médica.',
      ai: 'Úsala para demostrar autonomía y orientación a producto, sin centrarte en algoritmos que no formaron parte del proyecto.'
    }
  },
  'hospital-pressure': {
    memoryOrder: 2,
    memoryLabel: 'Historia base 2 · Hospital: planificación quirúrgica',
    variantLabel: 'Versión principal',
    studyTier: 'core',
    anchors: 'listas de espera → asignación → modelo Python → reducción 22 % → utilidad clínica',
    roleFit: { consulting: 'primary', data: 'primary', medtech: 'primary', ai: 'primary' },
    roleAngles: {
      consulting: 'Expón problema, análisis del proceso, solución, adopción e impacto medible como un pequeño proyecto de transformación.',
      data: 'Destaca la definición del problema, las variables de planificación, el modelo predictivo y cómo mediste el 22 %.',
      medtech: 'Destaca el flujo hospitalario, las necesidades de profesionales y pacientes y la implantación en un entorno clínico.',
      ai: 'Presenta el modelo como IA aplicada con un objetivo operativo concreto y explica cómo validaste que fuera útil.'
    }
  },
  'phca-langgraph-cited-assistant': {
    memoryOrder: 3,
    memoryLabel: 'Historia base 3 · PHCA: transformación con IA y datos',
    variantLabel: 'Ángulo: construcción del asistente',
    studyTier: 'core',
    anchors: 'necesidad → asistente → LangGraph y búsqueda → citas e integración → aprendizaje',
    roleFit: { consulting: 'secondary', data: 'primary', medtech: 'secondary', ai: 'primary' },
    roleAngles: {
      consulting: 'Reduce el detalle técnico y destaca necesidad operativa, adopción, integración y valor para los equipos.',
      data: 'Destaca preparación documental, recuperación vectorial, trazabilidad y conexión con APIs y AWS.',
      medtech: 'Explica por qué en salud era imprescindible que las respuestas fueran trazables y mostraran sus fuentes.',
      ai: 'Profundiza en LangGraph, estado, recuperación vectorial, citas, APIs, AWS y criterios de fiabilidad.'
    }
  },
  'phca-ai-regression-reliability': {
    memoryOrder: 3,
    memoryLabel: 'Historia base 3 · PHCA: transformación con IA y datos',
    variantLabel: 'Ángulo: fiabilidad y pruebas',
    studyTier: 'core',
    anchors: 'mismo asistente → fallos repetidos → casos de regresión → validación → ingeniería fiable',
    roleFit: { consulting: 'secondary', data: 'primary', medtech: 'secondary', ai: 'primary' },
    roleAngles: {
      consulting: 'Destaca gestión de riesgos, criterios de aceptación y cómo evitaste que los fallos se repitieran.',
      data: 'Explica cómo convertiste incidencias en comprobaciones repetibles y separaste errores de datos, integración y generación.',
      medtech: 'Relaciona la validación con la necesidad de trazabilidad y seguridad en un entorno sanitario.',
      ai: 'Profundiza en evaluación no determinista, regresión, observabilidad y paso de prototipo a flujo robusto.'
    }
  },
  'quironsalud-tfg-petmr-ai': {
    memoryOrder: 4,
    memoryLabel: 'Historia base 4 · Quirónsalud: IA aplicada a PET/MR',
    variantLabel: 'Versión principal',
    studyTier: 'core',
    anchors: 'incertidumbre clínica → flujo completo → U-Net y NiftyPET → métricas → impacto clínico',
    roleFit: { consulting: 'secondary', data: 'primary', medtech: 'primary', ai: 'primary' },
    roleAngles: {
      consulting: 'Destaca cómo descompusiste un problema complejo, superaste bloqueos y llegaste a una conclusión útil.',
      data: 'Profundiza en datos limitados, entrenamiento, métricas, validación y propagación de incertidumbre.',
      medtech: 'Destaca PET/MR, corrección de atenuación, fiabilidad clínica y equilibrio entre tecnología y práctica sanitaria.',
      ai: 'Profundiza en la U-Net, función de pérdida, data augmentation, compatibilidades y evaluación end-to-end.'
    }
  },
  'delegation-leadership': {
    memoryOrder: 5,
    memoryLabel: 'Historia base 5 · ASISA: liderazgo de estudiantes',
    variantLabel: 'Versión principal',
    studyTier: 'core',
    anchors: 'equipo nuevo → tareas graduales → deadlines y feedback → autonomía → liderazgo adaptable',
    roleFit: { consulting: 'primary', data: 'primary', medtech: 'primary', ai: 'primary' },
    roleAngles: {
      consulting: 'Destaca planificación, delegación, seguimiento y desarrollo de otras personas.',
      data: 'Explica cómo dividiste el proyecto analítico y aseguraste la calidad de los entregables.',
      medtech: 'Destaca coordinación en un entorno sanitario y adaptación a personas con distintos niveles de conocimiento.',
      ai: 'Conecta el liderazgo con Git, ciclos cortos, criterios de aceptación y autonomía progresiva.'
    },
    verificationNote: 'Confirma que el proyecto terminó antes de plazo y que algunos estudiantes fueron contratados antes de memorizarlo.'
  },
  'mindsafe-failure': {
    memoryOrder: 6,
    memoryLabel: 'Historia base 6 · MindSafe: fracaso y aprendizaje',
    variantLabel: 'Versión principal',
    studyTier: 'core',
    anchors: 'idea de salud mental → top 15/500+ → falta de foco → standby → equipo y ejecución',
    roleFit: { consulting: 'primary', data: 'primary', medtech: 'primary', ai: 'primary' },
    roleAngles: {
      consulting: 'Destaca el aprendizaje sobre modelo de negocio, priorización, alineación y ejecución.',
      data: 'Explica que una buena solución técnica no compensa la ausencia de una estrategia y métricas de producto.',
      medtech: 'Destaca los retos de convertir una idea de salud en un producto sostenible.',
      ai: 'Conecta el fracaso con la necesidad de validar el problema, el usuario y el producto antes de escalar tecnología.'
    }
  },
  'international-adaptation-florida': {
    memoryOrder: 7,
    memoryLabel: 'Historia base 7 · PHCA: adaptación internacional',
    variantLabel: 'Versión principal',
    studyTier: 'core',
    anchors: 'Orlando → nuevo contexto → escuchar y adaptar comunicación → contribuir → flexibilidad',
    roleFit: { consulting: 'secondary', data: 'secondary', medtech: 'primary', ai: 'secondary' },
    roleAngles: {
      consulting: 'Destaca adaptación rápida, escucha, comunicación directa y trabajo con stakeholders diversos.',
      data: 'Explica cómo entendiste primero los procesos antes de proponer análisis o herramientas.',
      medtech: 'Destaca la exposición a centros sanitarios estadounidenses y las conversaciones con profesionales clínicos.',
      ai: 'Conecta la adaptación con entender al usuario y el proceso antes de introducir una solución de IA.'
    }
  },
  'pet-petct-petmr-technical-knowledge': {
    memoryOrder: 8,
    memoryLabel: 'Módulo técnico · PET, CT y PET/MR',
    variantLabel: 'No cuenta como una historia nueva',
    studyTier: 'module',
    anchors: 'PET funcional → CT/MR anatómico → combinación → atenuación → elección clínica',
    roleFit: { data: 'secondary', medtech: 'primary', ai: 'secondary' },
    roleAngles: {
      data: 'Úsalo únicamente si preguntan por el contexto y los datos de imagen del proyecto.',
      medtech: 'Es una respuesta técnica prioritaria: explica funcionamiento, ventajas, limitaciones y criterio clínico.',
      ai: 'Conecta el fundamento físico con por qué se generan pseudo-CTs y cómo se valida la IA.'
    }
  },
  'three-development-areas': {
    memoryOrder: 9,
    memoryLabel: 'Respuesta modular · Áreas de mejora',
    variantLabel: 'No cuenta como una historia nueva',
    studyTier: 'module',
    anchors: 'debilidad real → consecuencia → acción concreta → progreso',
    roleFit: { consulting: 'primary', data: 'primary', medtech: 'primary', ai: 'primary' },
    roleAngles: {
      consulting: 'Prioriza estimación, comunicación temprana y documentación.',
      data: 'Relaciona la mejora con estimar experimentos y compartir resultados intermedios.',
      medtech: 'Destaca comunicación temprana y documentación por su importancia en entornos sanitarios.',
      ai: 'Relaciona las áreas con iteración, evaluación y trazabilidad de decisiones técnicas.'
    }
  },
  'three-role-contributions': {
    memoryOrder: 10,
    memoryLabel: 'Respuesta modular · Propuesta de valor',
    variantLabel: 'No cuenta como una historia nueva',
    studyTier: 'module',
    anchors: 'IA y datos → healthcare → ejecución → evidencia',
    roleFit: { consulting: 'primary', data: 'primary', medtech: 'primary', ai: 'primary' },
    roleAngles: {
      consulting: 'Ordena tus aportaciones como análisis estructurado, conocimiento sanitario y ejecución.',
      data: 'Prioriza rigor analítico, Python/SQL y capacidad de traducir resultados.',
      medtech: 'Prioriza Ingeniería Biomédica, exposición clínica y comprensión de stakeholders sanitarios.',
      ai: 'Prioriza LLMs, LangGraph, ML aplicado y conexión entre tecnología y negocio.'
    }
  },
  'weakness-prioritization': {
    memoryOrder: 11,
    memoryLabel: 'Respuesta complementaria · Priorización',
    variantLabel: 'Utiliza primero el módulo de áreas de mejora',
    studyTier: 'optional',
    anchors: 'perfeccionismo → retraso → criterio suficiente → eficiencia',
    roleFit: { consulting: 'secondary', data: 'secondary', medtech: 'secondary', ai: 'secondary' },
    roleAngles: {
      consulting: 'Enfatiza velocidad, priorización y utilidad para la decisión.',
      data: 'Enfatiza cuándo una mejora marginal del modelo deja de aportar valor.',
      medtech: 'Aclara que nunca reduces los controles necesarios de seguridad o calidad.',
      ai: 'Relaciona la mejora con iterar y validar antes de optimizar en exceso.'
    }
  },
  'asisa-internal-data-assistant': {
    memoryOrder: 12,
    memoryLabel: 'Pendiente de validar · ASISA: incidencias con NLP',
    variantLabel: 'No memorizar todavía',
    studyTier: 'pending',
    anchors: 'incidencias → similitud semántica → soluciones previas → escalado → ahorro',
    roleFit: { consulting: 'secondary', data: 'secondary', ai: 'primary' },
    roleAngles: {
      consulting: 'Solo después de confirmar los hechos: destaca reutilización de conocimiento y reducción de costes.',
      data: 'Solo después de confirmar los hechos: explica normalización, similitud y evaluación de resultados.',
      ai: 'Solo después de confirmar los hechos: profundiza en NLP, recuperación y reglas de escalado.'
    },
    verificationNote: 'Esta experiencia no aparece en ninguno de los cuatro CVs. Confirma que ocurrió y sus resultados antes de estudiarla.'
  }
};

function applyStoryProfileMetadata(target){
  if (!Array.isArray(target)) return target;
  target.forEach(story => {
    const metadata = STORY_PROFILE_METADATA[String(story.id)];
    if (metadata) Object.assign(story, JSON.parse(JSON.stringify(metadata)));
  });
  return target;
}

if (typeof DEFAULT_STAR_STORIES !== 'undefined') applyStoryProfileMetadata(DEFAULT_STAR_STORIES);
if (typeof DEFAULT_PROFILE !== 'undefined') applyStoryProfileMetadata(DEFAULT_PROFILE.starStories);
