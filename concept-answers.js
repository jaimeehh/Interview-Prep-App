const CONCEPT_ANSWERS = {
  'ai-84': {
    es: {
      definition: 'Los guardrails son reglas, controles y mecanismos de seguridad que limitan el comportamiento de un sistema de inteligencia artificial.',
      purpose: 'Sirven para reducir respuestas incorrectas o peligrosas, evitar que el sistema se salga de su objetivo, proteger información sensible y establecer cuándo debe intervenir una persona.',
      example: 'Por ejemplo, un chatbot médico podría tener un guardrail que le impida realizar diagnósticos y le obligue a recomendar consultar a un profesional.',
      application: 'En una aplicación empresarial los aplicaría mediante validación de entradas y salidas, control de permisos, filtros de información sensible y revisión humana cuando el riesgo sea alto.'
    },
    en: {
      definition: 'Guardrails are rules, controls and safety mechanisms that limit the behaviour of an artificial intelligence system.',
      purpose: 'They help reduce incorrect or harmful answers, keep the system within its intended scope, protect sensitive information and define when human intervention is required.',
      example: 'For example, a medical chatbot could have a guardrail preventing it from making diagnoses and requiring it to recommend consulting a healthcare professional.',
      application: 'In an enterprise application, I would use input and output validation, access controls, sensitive-information filters and human review when the risk is high.'
    }
  }
};

function getConceptAnswer(id, lang) {
  const item = typeof CONCEPT_ANSWERS !== 'undefined' ? CONCEPT_ANSWERS[id] : null;
  return item ? item[lang] || item.es : null;
}
