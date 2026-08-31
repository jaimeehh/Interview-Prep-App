/* Professional interview question bank: 100 bilingual questions. */
const INTERVIEW_QUESTION_BANK = [
  {
    "id": "medtech-01",
    "roles": [
      "medtech"
    ],
    "category": "Motivación",
    "family": "motivation",
    "es": "¿Por qué te interesa trabajar en una empresa MedTech?",
    "en": "Why are you interested in working in MedTech?"
  },
  {
    "id": "medtech-02",
    "roles": [
      "medtech"
    ],
    "category": "Motivación",
    "family": "industry-interest",
    "es": "¿Qué te atrae del sector de la tecnología médica frente a otros sectores?",
    "en": "What attracts you to the medical technology sector compared with other industries?"
  },
  {
    "id": "medtech-03",
    "roles": [
      "medtech"
    ],
    "category": "Encaje",
    "family": "background-fit",
    "es": "¿Cómo encaja tu formación en Ingeniería Biomédica con este puesto?",
    "en": "How does your Biomedical Engineering background fit this role?"
  },
  {
    "id": "medtech-04",
    "roles": [
      "medtech"
    ],
    "category": "Industria",
    "family": "medtech-landscape",
    "es": "¿Qué tendencias están transformando actualmente el sector MedTech?",
    "en": "What trends are currently transforming the MedTech sector?"
  },
  {
    "id": "medtech-05",
    "roles": [
      "medtech"
    ],
    "category": "Producto",
    "family": "imaging-modalities",
    "es": "¿Qué diferencias explicarías entre PET/CT, TAC y resonancia magnética a un interlocutor no técnico?",
    "en": "How would you explain the differences between PET/CT, CT and MRI to a non-technical stakeholder?"
  },
  {
    "id": "medtech-06",
    "roles": [
      "medtech"
    ],
    "category": "Producto",
    "family": "technical-explanation",
    "es": "Explícame un producto o tecnología médica compleja de forma sencilla.",
    "en": "Explain a complex medical product or technology in simple terms."
  },
  {
    "id": "medtech-07",
    "roles": [
      "medtech"
    ],
    "category": "Clínico",
    "family": "clinical-workflow",
    "es": "¿Cómo entenderías el flujo de trabajo de un hospital antes de proponer una solución?",
    "en": "How would you understand a hospital workflow before proposing a solution?"
  },
  {
    "id": "medtech-08",
    "roles": [
      "medtech"
    ],
    "category": "Clínico",
    "family": "clinical-needs",
    "es": "¿Cómo identificarías las necesidades reales de médicos, técnicos y pacientes?",
    "en": "How would you identify the real needs of doctors, technicians and patients?"
  },
  {
    "id": "medtech-09",
    "roles": [
      "medtech"
    ],
    "category": "Comunicación",
    "family": "technical-clinical-translation",
    "es": "Cuéntame una ocasión en la que tradujiste información técnica para un perfil clínico o de negocio.",
    "en": "Tell me about a time when you translated technical information for a clinical or business stakeholder."
  },
  {
    "id": "medtech-10",
    "roles": [
      "medtech"
    ],
    "category": "Impacto",
    "family": "patient-impact",
    "es": "¿Cómo evaluarías si una solución MedTech está generando un impacto real en pacientes?",
    "en": "How would you assess whether a MedTech solution is creating real impact for patients?"
  },
  {
    "id": "medtech-11",
    "roles": [
      "medtech"
    ],
    "category": "Regulación",
    "family": "regulatory-awareness",
    "es": "¿Qué importancia tienen la regulación y la calidad en el desarrollo de dispositivos médicos?",
    "en": "Why are regulation and quality important in medical device development?"
  },
  {
    "id": "medtech-12",
    "roles": [
      "medtech"
    ],
    "category": "Regulación",
    "family": "mdr-quality",
    "es": "¿Qué harías para familiarizarte con los requisitos regulatorios de un nuevo producto?",
    "en": "What would you do to become familiar with the regulatory requirements for a new product?"
  },
  {
    "id": "medtech-13",
    "roles": [
      "medtech"
    ],
    "category": "Calidad",
    "family": "risk-management",
    "es": "¿Cómo abordarías la identificación y priorización de riesgos en un producto sanitario?",
    "en": "How would you approach identifying and prioritising risks in a medical product?"
  },
  {
    "id": "medtech-14",
    "roles": [
      "medtech"
    ],
    "category": "Calidad",
    "family": "verification-validation",
    "es": "¿Cuál es la diferencia entre verificar y validar una solución médica?",
    "en": "What is the difference between verifying and validating a medical solution?"
  },
  {
    "id": "medtech-15",
    "roles": [
      "medtech"
    ],
    "category": "Interoperabilidad",
    "family": "healthcare-standards",
    "es": "¿Qué sabes sobre DICOM, HL7 o FHIR y por qué son relevantes en healthcare?",
    "en": "What do you know about DICOM, HL7 or FHIR, and why are they relevant in healthcare?"
  },
  {
    "id": "medtech-16",
    "roles": [
      "medtech"
    ],
    "category": "Ciberseguridad",
    "family": "medical-cybersecurity",
    "es": "¿Qué riesgos de ciberseguridad considerarías en un equipo médico conectado?",
    "en": "What cybersecurity risks would you consider in a connected medical device?"
  },
  {
    "id": "medtech-17",
    "roles": [
      "medtech"
    ],
    "category": "Servicio",
    "family": "uptime-service",
    "es": "¿Cómo utilizarías datos para mejorar el uptime y el servicio de equipos médicos?",
    "en": "How would you use data to improve uptime and service performance for medical equipment?"
  },
  {
    "id": "medtech-18",
    "roles": [
      "medtech"
    ],
    "category": "Servicio",
    "family": "field-issue",
    "es": "Un hospital informa de fallos intermitentes en un equipo. ¿Cómo investigarías el problema?",
    "en": "A hospital reports intermittent failures in a device. How would you investigate the problem?"
  },
  {
    "id": "medtech-19",
    "roles": [
      "medtech"
    ],
    "category": "Análisis",
    "family": "root-cause",
    "es": "Cuéntame cómo aplicarías un análisis de causa raíz a una incidencia técnica.",
    "en": "Tell me how you would apply root-cause analysis to a technical incident."
  },
  {
    "id": "medtech-20",
    "roles": [
      "medtech"
    ],
    "category": "Ventas",
    "family": "sales-stakeholders",
    "es": "¿Cómo adaptarías tu comunicación al hablar con un médico, un ingeniero clínico y un director de compras?",
    "en": "How would you adapt your communication when speaking to a doctor, a clinical engineer and a procurement director?"
  },
  {
    "id": "medtech-21",
    "roles": [
      "medtech"
    ],
    "category": "Ventas",
    "family": "value-proposition",
    "es": "¿Cómo construirías una propuesta de valor para un hospital que está evaluando una nueva tecnología?",
    "en": "How would you build a value proposition for a hospital evaluating a new technology?"
  },
  {
    "id": "medtech-22",
    "roles": [
      "medtech"
    ],
    "category": "Ventas",
    "family": "product-demo",
    "es": "¿Cómo prepararías una demostración de producto para un cliente sanitario?",
    "en": "How would you prepare a product demonstration for a healthcare customer?"
  },
  {
    "id": "medtech-23",
    "roles": [
      "medtech"
    ],
    "category": "Ventas",
    "family": "customer-objection",
    "es": "¿Qué harías si un cliente cuestionara el coste o la utilidad clínica de una solución?",
    "en": "What would you do if a customer challenged the cost or clinical value of a solution?"
  },
  {
    "id": "medtech-24",
    "roles": [
      "medtech"
    ],
    "category": "Adopción",
    "family": "change-management",
    "es": "¿Cómo ayudarías a un hospital a adoptar una nueva herramienta o proceso?",
    "en": "How would you help a hospital adopt a new tool or process?"
  },
  {
    "id": "medtech-25",
    "roles": [
      "medtech"
    ],
    "category": "Datos",
    "family": "service-analytics",
    "es": "¿Qué indicadores utilizarías para detectar problemas operativos antes de que afecten al cliente?",
    "en": "Which indicators would you use to detect operational issues before they affect the customer?"
  },
  {
    "id": "medtech-26",
    "roles": [
      "medtech",
      "ai"
    ],
    "category": "IA en salud",
    "family": "medical-ai",
    "es": "¿Qué oportunidades y limitaciones ves en la aplicación de IA al diagnóstico médico?",
    "en": "What opportunities and limitations do you see in applying AI to medical diagnosis?"
  },
  {
    "id": "medtech-27",
    "roles": [
      "medtech",
      "ai"
    ],
    "category": "IA en salud",
    "family": "clinical-ai-ethics",
    "es": "¿Cómo valorarías la fiabilidad y la seguridad de un algoritmo utilizado en un entorno clínico?",
    "en": "How would you assess the reliability and safety of an algorithm used in a clinical environment?"
  },
  {
    "id": "medtech-28",
    "roles": [
      "medtech"
    ],
    "category": "Internacional",
    "family": "emea-collaboration",
    "es": "¿Cómo trabajarías con equipos de servicio y ventas distribuidos por EMEA?",
    "en": "How would you work with service and sales teams distributed across EMEA?"
  },
  {
    "id": "medtech-29",
    "roles": [
      "medtech"
    ],
    "category": "Presión",
    "family": "healthcare-pressure",
    "es": "Cuéntame una situación en la que tuviste que resolver un problema importante en un entorno sanitario con poco tiempo.",
    "en": "Tell me about a time you had to solve an important problem in a healthcare environment under time pressure."
  },
  {
    "id": "medtech-30",
    "roles": [
      "medtech"
    ],
    "category": "Aprendizaje",
    "family": "medtech-learning",
    "es": "¿Cómo aprenderías rápidamente un producto médico y el proceso comercial asociado?",
    "en": "How would you quickly learn a medical product and its associated commercial process?"
  },
  {
    "id": "it-31",
    "roles": [
      "it"
    ],
    "category": "Motivación",
    "family": "motivation",
    "es": "¿Por qué te interesa un puesto orientado a IT y transformación digital?",
    "en": "Why are you interested in an IT and digital transformation role?"
  },
  {
    "id": "it-32",
    "roles": [
      "it"
    ],
    "category": "Encaje",
    "family": "it-background-fit",
    "es": "¿Qué parte de tu experiencia demuestra que puedes conectar tecnología y negocio?",
    "en": "Which part of your experience shows that you can connect technology and business?"
  },
  {
    "id": "it-33",
    "roles": [
      "it"
    ],
    "category": "Problemas",
    "family": "ambiguous-problem",
    "es": "Cuéntame cómo abordarías un problema tecnológico poco definido.",
    "en": "Tell me how you would approach a poorly defined technology problem."
  },
  {
    "id": "it-34",
    "roles": [
      "it"
    ],
    "category": "Requisitos",
    "family": "requirements",
    "es": "¿Cómo convertirías una necesidad de negocio en requisitos técnicos claros?",
    "en": "How would you turn a business need into clear technical requirements?"
  },
  {
    "id": "it-35",
    "roles": [
      "it"
    ],
    "category": "SQL",
    "family": "sql-joins",
    "es": "¿Cómo explicarías la diferencia entre un INNER JOIN y un LEFT JOIN y cuándo usarías cada uno?",
    "en": "How would you explain the difference between an INNER JOIN and a LEFT JOIN, and when would you use each?"
  },
  {
    "id": "it-36",
    "roles": [
      "it"
    ],
    "category": "SQL",
    "family": "sql-performance",
    "es": "Una consulta SQL tarda demasiado. ¿Qué pasos seguirías para optimizarla?",
    "en": "A SQL query is taking too long. What steps would you take to optimise it?"
  },
  {
    "id": "it-37",
    "roles": [
      "it"
    ],
    "category": "Datos",
    "family": "data-quality",
    "es": "¿Cómo detectarías y tratarías problemas de calidad en un conjunto de datos?",
    "en": "How would you detect and handle data-quality problems in a dataset?"
  },
  {
    "id": "it-38",
    "roles": [
      "it"
    ],
    "category": "Python",
    "family": "python-use",
    "es": "¿Para qué utilizarías Python en un proyecto de análisis o automatización?",
    "en": "How would you use Python in an analytics or automation project?"
  },
  {
    "id": "it-39",
    "roles": [
      "it"
    ],
    "category": "Calidad",
    "family": "testing",
    "es": "¿Qué estrategia de pruebas aplicarías antes de poner una solución en producción?",
    "en": "What testing strategy would you apply before putting a solution into production?"
  },
  {
    "id": "it-40",
    "roles": [
      "it"
    ],
    "category": "Resolución",
    "family": "debugging",
    "es": "Cuéntame cómo localizarías el origen de un error que no puedes reproducir fácilmente.",
    "en": "Tell me how you would locate the source of an error that is difficult to reproduce."
  },
  {
    "id": "it-41",
    "roles": [
      "it"
    ],
    "category": "Colaboración",
    "family": "git-collaboration",
    "es": "¿Cómo trabajarías con Git en un equipo para evitar conflictos y mantener trazabilidad?",
    "en": "How would you use Git in a team to avoid conflicts and maintain traceability?"
  },
  {
    "id": "it-42",
    "roles": [
      "it"
    ],
    "category": "APIs",
    "family": "api-design",
    "es": "¿Qué características debería tener una API bien diseñada?",
    "en": "What characteristics should a well-designed API have?"
  },
  {
    "id": "it-43",
    "roles": [
      "it"
    ],
    "category": "APIs",
    "family": "api-failure",
    "es": "¿Cómo diagnosticarías que una integración entre dos APIs está fallando?",
    "en": "How would you diagnose a failing integration between two APIs?"
  },
  {
    "id": "it-44",
    "roles": [
      "it"
    ],
    "category": "Cloud",
    "family": "cloud-services",
    "es": "¿Qué ventajas y riesgos ves en utilizar servicios cloud en una aplicación empresarial?",
    "en": "What advantages and risks do you see in using cloud services in an enterprise application?"
  },
  {
    "id": "it-45",
    "roles": [
      "it"
    ],
    "category": "Datos",
    "family": "data-pipeline",
    "es": "¿Cómo diseñarías un pipeline sencillo para recoger, transformar y validar datos?",
    "en": "How would you design a simple pipeline to collect, transform and validate data?"
  },
  {
    "id": "it-46",
    "roles": [
      "it"
    ],
    "category": "Datos",
    "family": "data-model",
    "es": "¿Cómo decidirías qué estructura de datos necesita un nuevo proyecto?",
    "en": "How would you decide which data structure a new project needs?"
  },
  {
    "id": "it-47",
    "roles": [
      "it"
    ],
    "category": "Visualización",
    "family": "dashboard-design",
    "es": "¿Cómo elegirías los KPIs y el diseño de un dashboard para un equipo directivo?",
    "en": "How would you choose the KPIs and design of a dashboard for senior management?"
  },
  {
    "id": "it-48",
    "roles": [
      "it"
    ],
    "category": "Métricas",
    "family": "kpi-definition",
    "es": "¿Qué hace que un KPI sea útil para tomar decisiones?",
    "en": "What makes a KPI useful for decision-making?"
  },
  {
    "id": "it-49",
    "roles": [
      "it"
    ],
    "category": "Seguridad",
    "family": "data-security",
    "es": "¿Qué controles básicos aplicarías para proteger datos sensibles?",
    "en": "What basic controls would you apply to protect sensitive data?"
  },
  {
    "id": "it-50",
    "roles": [
      "it"
    ],
    "category": "Incidencias",
    "family": "incident-response",
    "es": "¿Qué harías durante las primeras horas de una incidencia crítica en producción?",
    "en": "What would you do during the first hours of a critical production incident?"
  },
  {
    "id": "it-51",
    "roles": [
      "it"
    ],
    "category": "Documentación",
    "family": "documentation",
    "es": "¿Cómo documentarías una solución para que otra persona pudiera mantenerla?",
    "en": "How would you document a solution so that someone else could maintain it?"
  },
  {
    "id": "it-52",
    "roles": [
      "it"
    ],
    "category": "Agilidad",
    "family": "agile-delivery",
    "es": "¿Cómo trabajarías en un proyecto ágil cuando los requisitos cambian constantemente?",
    "en": "How would you work on an agile project when requirements keep changing?"
  },
  {
    "id": "it-53",
    "roles": [
      "it"
    ],
    "category": "Priorización",
    "family": "prioritisation",
    "es": "Tienes tres peticiones urgentes de distintos equipos. ¿Cómo decidirías qué hacer primero?",
    "en": "You have three urgent requests from different teams. How would you decide what to do first?"
  },
  {
    "id": "it-54",
    "roles": [
      "it"
    ],
    "category": "Comunicación",
    "family": "technical-business-translation",
    "es": "¿Cómo explicarías una limitación técnica a una persona no técnica sin bloquear el proyecto?",
    "en": "How would you explain a technical limitation to a non-technical person without blocking the project?"
  },
  {
    "id": "it-55",
    "roles": [
      "it"
    ],
    "category": "Automatización",
    "family": "automation-value",
    "es": "¿Cómo identificarías una tarea que merece la pena automatizar?",
    "en": "How would you identify a task that is worth automating?"
  },
  {
    "id": "it-56",
    "roles": [
      "it"
    ],
    "category": "Arquitectura",
    "family": "system-design",
    "es": "¿Qué factores considerarías al diseñar una aplicación nueva?",
    "en": "What factors would you consider when designing a new application?"
  },
  {
    "id": "it-57",
    "roles": [
      "it"
    ],
    "category": "Escalabilidad",
    "family": "scalability",
    "es": "¿Cómo comprobarías si una solución puede crecer sin perder rendimiento?",
    "en": "How would you check whether a solution can scale without losing performance?"
  },
  {
    "id": "it-58",
    "roles": [
      "it"
    ],
    "category": "Operaciones",
    "family": "monitoring-observability",
    "es": "¿Qué monitorizarías para saber si un sistema está funcionando correctamente?",
    "en": "What would you monitor to know whether a system is working correctly?"
  },
  {
    "id": "it-59",
    "roles": [
      "it"
    ],
    "category": "Aprendizaje",
    "family": "technology-learning",
    "es": "Cuéntame cómo aprendiste una herramienta técnica nueva y la aplicaste en un proyecto.",
    "en": "Tell me about a time you learned a new technical tool and applied it in a project."
  },
  {
    "id": "it-60",
    "roles": [
      "it"
    ],
    "category": "Aprendizaje",
    "family": "it-project-failure",
    "es": "Cuéntame un proyecto tecnológico que no salió como esperabas y qué aprendiste.",
    "en": "Tell me about a technology project that did not go as expected and what you learned."
  },
  {
    "id": "ai-61",
    "roles": [
      "ai"
    ],
    "category": "Motivación",
    "family": "motivation",
    "es": "¿Por qué te interesa desarrollar tu carrera en inteligencia artificial?",
    "en": "Why are you interested in building your career in artificial intelligence?"
  },
  {
    "id": "ai-62",
    "roles": [
      "ai"
    ],
    "category": "Fundamentos",
    "family": "ai-definition",
    "es": "¿Cómo explicarías la diferencia entre inteligencia artificial, machine learning y deep learning?",
    "en": "How would you explain the difference between artificial intelligence, machine learning and deep learning?"
  },
  {
    "id": "ai-63",
    "roles": [
      "ai"
    ],
    "category": "Modelos",
    "family": "supervised-unsupervised",
    "es": "¿Cuándo utilizarías aprendizaje supervisado y cuándo no supervisado?",
    "en": "When would you use supervised learning and when would you use unsupervised learning?"
  },
  {
    "id": "ai-64",
    "roles": [
      "ai"
    ],
    "category": "Modelos",
    "family": "train-validation-test",
    "es": "¿Por qué se separan los datos en entrenamiento, validación y test?",
    "en": "Why do we split data into training, validation and test sets?"
  },
  {
    "id": "ai-65",
    "roles": [
      "ai"
    ],
    "category": "Modelos",
    "family": "overfitting",
    "es": "¿Qué es el overfitting y cómo intentarías reducirlo?",
    "en": "What is overfitting and how would you try to reduce it?"
  },
  {
    "id": "ai-66",
    "roles": [
      "ai"
    ],
    "category": "Evaluación",
    "family": "ml-metrics",
    "es": "¿Cómo elegirías entre accuracy, precision, recall, F1 y ROC-AUC?",
    "en": "How would you choose between accuracy, precision, recall, F1 and ROC-AUC?"
  },
  {
    "id": "ai-67",
    "roles": [
      "ai"
    ],
    "category": "Datos",
    "family": "class-imbalance",
    "es": "¿Qué problemas genera el desbalanceo de clases y cómo lo tratarías?",
    "en": "What problems does class imbalance create and how would you handle it?"
  },
  {
    "id": "ai-68",
    "roles": [
      "ai"
    ],
    "category": "Datos",
    "family": "feature-engineering",
    "es": "¿Qué papel tiene el feature engineering en un proyecto de machine learning?",
    "en": "What role does feature engineering play in a machine-learning project?"
  },
  {
    "id": "ai-69",
    "roles": [
      "ai"
    ],
    "category": "Explicabilidad",
    "family": "interpretability",
    "es": "¿Cómo explicarías el resultado de un modelo complejo a un stakeholder?",
    "en": "How would you explain the output of a complex model to a stakeholder?"
  },
  {
    "id": "ai-70",
    "roles": [
      "ai"
    ],
    "category": "Datos",
    "family": "data-leakage",
    "es": "¿Qué es data leakage y cómo evitarías que contaminara la evaluación?",
    "en": "What is data leakage and how would you prevent it from contaminating the evaluation?"
  },
  {
    "id": "ai-71",
    "roles": [
      "ai"
    ],
    "category": "Evaluación",
    "family": "baseline",
    "es": "¿Por qué es importante crear un baseline antes de optimizar un modelo?",
    "en": "Why is it important to create a baseline before optimising a model?"
  },
  {
    "id": "ai-72",
    "roles": [
      "ai"
    ],
    "category": "Experimentación",
    "family": "experiment-tracking",
    "es": "¿Cómo organizarías y compararías distintos experimentos de machine learning?",
    "en": "How would you organise and compare different machine-learning experiments?"
  },
  {
    "id": "ai-73",
    "roles": [
      "ai"
    ],
    "category": "Producción",
    "family": "model-deployment",
    "es": "¿Qué aspectos considerarías para poner un modelo en producción?",
    "en": "What would you consider when putting a model into production?"
  },
  {
    "id": "ai-74",
    "roles": [
      "ai"
    ],
    "category": "Producción",
    "family": "model-drift",
    "es": "¿Qué es model drift y cómo detectarías que está afectando al rendimiento?",
    "en": "What is model drift and how would you detect that it is affecting performance?"
  },
  {
    "id": "ai-75",
    "roles": [
      "ai"
    ],
    "category": "MLOps",
    "family": "ml-pipeline",
    "es": "¿Qué etapas incluirías en un pipeline de machine learning mantenible?",
    "en": "Which stages would you include in a maintainable machine-learning pipeline?"
  },
  {
    "id": "ai-76",
    "roles": [
      "ai"
    ],
    "category": "LLMs",
    "family": "llm-application",
    "es": "¿Cómo convertirías una necesidad de negocio en una aplicación basada en un LLM?",
    "en": "How would you turn a business need into an LLM-based application?"
  },
  {
    "id": "ai-77",
    "roles": [
      "ai"
    ],
    "category": "LLMs",
    "family": "prompt-engineering",
    "es": "¿Qué principios seguirías para diseñar prompts fiables?",
    "en": "What principles would you follow to design reliable prompts?"
  },
  {
    "id": "ai-78",
    "roles": [
      "ai"
    ],
    "category": "LLMs",
    "family": "rag",
    "es": "¿Cómo funciona un sistema RAG y cuándo lo utilizarías?",
    "en": "How does a RAG system work and when would you use it?"
  },
  {
    "id": "ai-79",
    "roles": [
      "ai"
    ],
    "category": "LLMs",
    "family": "hallucinations",
    "es": "¿Cómo reducirías las alucinaciones en un asistente basado en IA generativa?",
    "en": "How would you reduce hallucinations in a generative-AI assistant?"
  },
  {
    "id": "ai-80",
    "roles": [
      "ai"
    ],
    "category": "LLMs",
    "family": "embeddings-vector-search",
    "es": "¿Qué son los embeddings y qué aportan en una búsqueda semántica?",
    "en": "What are embeddings and what do they add to semantic search?"
  },
  {
    "id": "ai-81",
    "roles": [
      "ai"
    ],
    "category": "Evaluación",
    "family": "llm-evaluation",
    "es": "¿Cómo evaluarías la calidad de las respuestas de un asistente LLM?",
    "en": "How would you evaluate the quality of an LLM assistant's answers?"
  },
  {
    "id": "ai-82",
    "roles": [
      "ai"
    ],
    "category": "LLMs",
    "family": "rag-vs-finetuning",
    "es": "¿Cuándo elegirías RAG frente a fine-tuning y cuándo al contrario?",
    "en": "When would you choose RAG over fine-tuning, and when would you choose the opposite?"
  },
  {
    "id": "ai-83",
    "roles": [
      "ai"
    ],
    "category": "Agentes",
    "family": "agents-workflows",
    "es": "¿Qué diferencia hay entre una cadena lineal y un workflow con estado o agentes?",
    "en": "What is the difference between a linear chain and a stateful workflow or agent system?"
  },
  {
    "id": "ai-84",
    "roles": [
      "ai"
    ],
    "category": "Seguridad",
    "family": "ai-guardrails",
    "es": "¿Qué guardrails incorporarías en una aplicación de IA para una empresa?",
    "en": "What guardrails would you include in an enterprise AI application?"
  },
  {
    "id": "ai-85",
    "roles": [
      "ai"
    ],
    "category": "Privacidad",
    "family": "ai-data-privacy",
    "es": "¿Qué precauciones tomarías al utilizar datos sensibles con un sistema de IA?",
    "en": "What precautions would you take when using sensitive data with an AI system?"
  },
  {
    "id": "ai-86",
    "roles": [
      "ai"
    ],
    "category": "Responsabilidad",
    "family": "responsible-ai",
    "es": "¿Cómo abordarías sesgo, trazabilidad y supervisión humana en un proyecto de IA?",
    "en": "How would you address bias, traceability and human oversight in an AI project?"
  },
  {
    "id": "ai-87",
    "roles": [
      "ai"
    ],
    "category": "Comunicación",
    "family": "ai-business-translation",
    "es": "¿Cómo explicarías a dirección las limitaciones y el valor de una solución de IA?",
    "en": "How would you explain the limitations and value of an AI solution to senior management?"
  },
  {
    "id": "ai-88",
    "roles": [
      "ai"
    ],
    "category": "Producción",
    "family": "ai-cost-latency",
    "es": "¿Cómo equilibrarías precisión, coste y latencia en una solución de IA?",
    "en": "How would you balance accuracy, cost and latency in an AI solution?"
  },
  {
    "id": "ai-89",
    "roles": [
      "ai"
    ],
    "category": "Resolución",
    "family": "ai-debugging",
    "es": "Un asistente de IA empieza a dar respuestas peores tras un cambio. ¿Cómo investigarías la causa?",
    "en": "An AI assistant starts producing worse answers after a change. How would you investigate the cause?"
  },
  {
    "id": "ai-90",
    "roles": [
      "ai"
    ],
    "category": "Producción",
    "family": "ai-production-monitoring",
    "es": "¿Qué monitorizarías para saber si una aplicación de IA sigue siendo fiable en producción?",
    "en": "What would you monitor to know whether an AI application remains reliable in production?"
  },
  {
    "id": "general-91",
    "roles": [
      "medtech",
      "it",
      "ai",
      "general"
    ],
    "category": "Presentación",
    "family": "tell-me-about-yourself",
    "es": "Háblame de ti y de cómo has llegado a orientarte hacia este tipo de puesto.",
    "en": "Tell me about yourself and how you came to focus on this type of role."
  },
  {
    "id": "general-92",
    "roles": [
      "medtech",
      "it",
      "ai",
      "general"
    ],
    "category": "Fortalezas",
    "family": "strength",
    "es": "¿Cuál es la fortaleza que más valor aporta a este puesto?",
    "en": "What strength would add the most value in this role?"
  },
  {
    "id": "general-93",
    "roles": [
      "medtech",
      "it",
      "ai",
      "general"
    ],
    "category": "Áreas de mejora",
    "family": "weakness",
    "es": "¿Qué área de mejora estás trabajando actualmente y qué estás haciendo para mejorarla?",
    "en": "What area for improvement are you currently working on, and what are you doing about it?"
  },
  {
    "id": "general-94",
    "roles": [
      "medtech",
      "it",
      "ai",
      "general"
    ],
    "category": "Conflicto",
    "family": "conflict",
    "es": "Cuéntame una ocasión en la que no estuvieras de acuerdo con un compañero o responsable.",
    "en": "Tell me about a time when you disagreed with a colleague or manager."
  },
  {
    "id": "general-95",
    "roles": [
      "medtech",
      "it",
      "ai",
      "general"
    ],
    "category": "Liderazgo",
    "family": "leadership",
    "es": "Cuéntame una ocasión en la que lideraste sin tener autoridad formal.",
    "en": "Tell me about a time when you led without formal authority."
  },
  {
    "id": "general-96",
    "roles": [
      "medtech",
      "it",
      "ai",
      "general"
    ],
    "category": "Presión",
    "family": "under-pressure",
    "es": "Describe una situación en la que tuviste que entregar un resultado importante bajo presión.",
    "en": "Describe a situation where you had to deliver an important result under pressure."
  },
  {
    "id": "general-97",
    "roles": [
      "medtech",
      "it",
      "ai",
      "general"
    ],
    "category": "Aprendizaje",
    "family": "failure-learning",
    "es": "Cuéntame un error o fracaso y qué aprendiste de él.",
    "en": "Tell me about a failure or mistake and what you learned from it."
  },
  {
    "id": "general-98",
    "roles": [
      "medtech",
      "it",
      "ai",
      "general"
    ],
    "category": "Adaptabilidad",
    "family": "adaptability",
    "es": "Cuéntame una ocasión en la que tuviste que adaptarte rápidamente a un entorno nuevo.",
    "en": "Tell me about a time when you had to adapt quickly to a new environment."
  },
  {
    "id": "general-99",
    "roles": [
      "medtech",
      "it",
      "ai",
      "general"
    ],
    "category": "Motivación",
    "family": "role-motivation",
    "es": "¿Por qué este puesto es el siguiente paso adecuado para ti?",
    "en": "Why is this role the right next step for you?"
  },
  {
    "id": "general-100",
    "roles": [
      "medtech",
      "it",
      "ai",
      "general"
    ],
    "category": "Cierre",
    "family": "questions-for-us",
    "es": "¿Qué preguntas nos harías al final de la entrevista?",
    "en": "What questions would you ask us at the end of the interview?"
  }
];
const INTERVIEW_BANK_ROLE_LABELS = {
  "medtech": "MedTech",
  "it": "IT / Data",
  "ai": "Inteligencia artificial",
  "general": "Transversal"
};
