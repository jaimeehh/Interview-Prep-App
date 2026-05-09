/*
  PrepAI data layer
  - La interfaz está en español.
  - Las preguntas/respuestas pueden estar en español, inglés o modo mixto.
  - Estos datos son base local; cada perfil puede editarlos/guardarlos en localStorage.
*/
const DEFAULT_STAR_STORIES = [
  {
    "id": "asisa-competitive-intelligence",
    "tag": "initiative",
    "tagLabel": "Iniciativa",
    "title": "Plataforma de inteligencia competitiva en ASISA",
    "q": "¿Cuéntame una situación en la que tomaste la iniciativa para crear valor desde cero?",
    "questions": {
      "es": [
        "¿Cuéntame una situación en la que tomaste la iniciativa para crear valor desde cero?",
        "Describe un proyecto donde usaras datos para apoyar una decisión estratégica."
      ],
      "en": [
        "Tell me about a time you took initiative to create value from scratch.",
        "Describe a project where you used data to support a strategic decision."
      ]
    },
    "sit": "En ASISA, la dirección médica necesitaba tomar decisiones estratégicas sobre qué especialistas y centros incorporar a la red de proveedores, pero no teníamos visibilidad clara de nuestro posicionamiento frente a Sanitas, Adeslas o DKV en cobertura geográfica, especialidades y densidad de red.",
    "tsk": "Me encargaron desarrollar una plataforma de inteligencia competitiva para comparar de forma sistemática las redes de proveedores de las principales aseguradoras y detectar gaps estratégicos.",
    "act": "Definí criterios de comparación con dirección médica, recopilé datos de fuentes públicas, webs de competidores y CRM interno, diseñé una base SQL centralizada y construí dashboards en Power BI para filtrar por región, especialidad y competidor.",
    "res": "La plataforma identificó 3 provincias prioritarias con menor cobertura que la competencia y redujo de 2 semanas a 2 días el tiempo necesario para preparar análisis competitivos ad-hoc para comité de dirección.",
    "lrn": "Aprendí que un análisis técnico solo genera impacto si está conectado con decisiones concretas de negocio."
  },
  {
    "id": "senior-communication",
    "tag": "communication",
    "tagLabel": "Comunicación",
    "title": "Comunicar hallazgos difíciles a perfiles senior",
    "q": "¿Cuéntame una historia de comunicación con perfiles senior?",
    "questions": {
      "es": [
        "¿Cuéntame una historia de comunicación con perfiles senior?",
        "Describe una vez que tuviste que comunicar malas noticias con datos."
      ],
      "en": [
        "Tell me about a time you communicated difficult findings to senior stakeholders."
      ]
    },
    "sit": "Tras desarrollar la plataforma de inteligencia competitiva, los datos mostraban que la posición de ASISA era más débil de lo que se creía en cobertura geográfica, especialidades y ratio proveedores/asegurados.",
    "tsk": "Tenía que presentar los hallazgos a altos directivos de forma clara, honesta y constructiva, sin sonar alarmista pero transmitiendo urgencia.",
    "act": "Estructuré la presentación en contexto de mercado, datos visuales sin suavizar y opciones de acción con costes y tiempos. Además, hablé antes con directivos clave para anticipar preguntas y explicar el rigor de los datos.",
    "res": "La dirección aprobó una estrategia de incorporación acelerada de proveedores en 3 provincias prioritarias y la plataforma se convirtió en herramienta mensual de referencia para comité de dirección.",
    "lrn": "Aprendí que comunicar problemas funciona mejor cuando también llevas opciones accionables."
  },
  {
    "id": "hospital-pressure",
    "tag": "pressure",
    "tagLabel": "Bajo presión",
    "title": "Software de scheduling quirúrgico bajo presión",
    "q": "¿Cuéntame una situación en la que tuviste que entregar resultados bajo presión?",
    "questions": {
      "es": [
        "¿Cuéntame una situación en la que tuviste que entregar resultados bajo presión?"
      ],
      "en": [
        "Describe a moment when you had to deliver something critical under tight time constraints."
      ]
    },
    "sit": "El Hospital Universitario del Sureste estaba entre los últimos en posicionamiento de listas de espera quirúrgicas en la Comunidad de Madrid, afectando a reputación y satisfacción del paciente.",
    "tsk": "Me encargaron desarrollar un software de scheduling quirúrgico para optimizar la asignación de quirófanos y tiempos de cirugía con un deadline ajustado.",
    "act": "Trabajé en iteraciones rápidas: entendí el flujo actual de los médicos, desarrollé un prototipo funcional, lo probé con cirujanos, incorporé feedback y mantuve reuniones semanales para ajustar el software a necesidades reales.",
    "res": "Se redujeron las listas de espera quirúrgicas en un 30% en los primeros meses y los médicos adoptaron el software porque habían participado desde el inicio.",
    "lrn": "Aprendí a priorizar utilidad real sobre perfección técnica cuando hay presión de tiempo."
  },
  {
    "id": "mindsafe-failure",
    "tag": "failure",
    "tagLabel": "Error / fracaso",
    "title": "MindSafe en standby tras la competición",
    "q": "¿Cuéntame un error o fracaso del que aprendiste?",
    "questions": {
      "es": [
        "¿Cuéntame un error o fracaso del que aprendiste?"
      ],
      "en": [
        "Tell me about a failure and what you learned from it."
      ]
    },
    "sit": "Participé en MindSafe App, una aplicación de salud mental que llegó al top 15 de un startup competition con más de 500 participantes en el Health Tech Contest de la Comunidad de Madrid.",
    "note": "El documento original empieza esta historia con una errata; se ha limpiado la redacción.",
    "tsk": "Como parte del equipo técnico, tenía que ayudar a escalar el producto después de la competición y convertir la idea en un proyecto sostenible.",
    "act": "El proyecto se enfrentó a falta de experiencia startup, poco tiempo dedicado y dificultad para alinear al equipo. Invertimos esfuerzo sin una estrategia clara de negocio.",
    "res": "El proyecto quedó en standby. Aunque no consiguió tracción, aprendí business model canvas, dinámica real de una startup y la importancia de tener un equipo alineado y dedicado.",
    "lrn": "Ahora evalúo los proyectos no solo por la idea, sino por equipo, foco, modelo de negocio y capacidad de ejecución."
  },
  {
    "id": "asisa-internship-initiative",
    "tag": "initiative",
    "tagLabel": "Iniciativa",
    "title": "Aportar valor en prácticas en ASISA",
    "q": "¿Cuéntame una situación en la que superaste las expectativas de tu rol?",
    "questions": {
      "es": [
        "¿Cuéntame una situación en la que superaste las expectativas de tu rol?"
      ],
      "en": [
        "Tell me about a time you exceeded expectations in your role."
      ]
    },
    "sit": "Comencé en prácticas en la Dirección General Médica de ASISA, en un entorno con perfiles muy senior y sin grandes expectativas sobre mi rol inicial.",
    "tsk": "Me asignaron una idea: analizar aseguradoras médicas en España para entender el posicionamiento competitivo.",
    "act": "Asumí el proyecto con responsabilidad, estructuré información de múltiples fuentes, analicé datos disponibles y desarrollé una herramienta interactiva para comparar ASISA con competidores.",
    "res": "Conseguí presentar internamente un proyecto que aportaba valor real a dirección y reforzó mi credibilidad en el equipo.",
    "lrn": "Aprendí que liderar no siempre significa tener cargo formal, sino asumir responsabilidad y demostrar valor con resultados."
  },
  {
    "id": "delegation-leadership",
    "tag": "leadership",
    "tagLabel": "Liderazgo",
    "title": "Delegación y liderazgo de practicantes",
    "q": "¿Cuéntame una experiencia liderando o delegando en otras personas?",
    "questions": {
      "es": [
        "¿Cuéntame una experiencia liderando o delegando en otras personas?"
      ],
      "en": [
        "Tell me about a time you delegated work and led others."
      ]
    },
    "sit": "Durante un proyecto en ASISA, me asignaron liderar a varios practicantes que se incorporaban al equipo de análisis. Podía hacer todo yo para asegurar calidad, pero vi una oportunidad de desarrollar al equipo.",
    "tsk": "Tenía que estructurar el proyecto para que los practicantes contribuyeran de forma significativa manteniendo calidad y deadlines.",
    "act": "Dividí el proyecto en recopilación, análisis, validación y visualización. Asigné tareas según fortalezas, expliqué la lógica de cada paso, establecí checkpoints semanales y les di autonomía con soporte.",
    "res": "El proyecto se entregó a tiempo y con calidad. Los practicantes ganaron confianza y algunos fueron contratados posteriormente al demostrar valor.",
    "lrn": "Aprendí que invertir tiempo en desarrollar a otros puede generar mejor resultado que hacerlo todo uno mismo."
  },
  {
    "id": "international-adaptation-florida",
    "tag": "adaptability",
    "tagLabel": "Adaptación",
    "title": "Formación internacional en Florida",
    "q": "¿Cuéntame una experiencia de adaptación internacional o multicultural?",
    "questions": {
      "es": [
        "¿Cuéntame una experiencia de adaptación internacional o multicultural?"
      ],
      "en": [
        "Tell me about an international or multicultural experience where you had to adapt."
      ]
    },
    "sit": "Realicé una formación de dos meses en Orlando, Florida, en una empresa de salud. Era mi primera experiencia internacional en otro idioma, cultura empresarial y procesos de negocio.",
    "tsk": "Tenía que adaptarme rápido al equipo y contribuir de forma efectiva mientras aprendía cómo operaba una empresa de salud estadounidense.",
    "act": "Observé primero cómo funcionaba el equipo, pregunté para entender el porqué de los procesos, adapté mi comunicación al ritmo más directo de EE.UU., busqué mentores y compartí perspectivas del modelo español cuando aportaba valor.",
    "res": "Logré integrarme y contribuir en proyectos reales. Desarrollé flexibilidad, comunicación más directa y capacidad para trabajar en contextos internacionales.",
    "lrn": "Aprendí a adaptar mi forma de trabajar al entorno cultural sin perder mi criterio."
  },
  {
    "id": "weakness-prioritization",
    "tag": "learning",
    "tagLabel": "Aprendizaje",
    "title": "Convertir perfeccionismo técnico en foco de negocio",
    "q": "¿Cuál es una debilidad en la que estás trabajando?",
    "questions": {
      "es": [
        "¿Cuál es una debilidad en la que estás trabajando?"
      ],
      "en": [
        "What is a weakness you are currently working on?"
      ]
    },
    "sit": "En proyectos técnicos, a veces dedicaba demasiado tiempo a intentar que el análisis quedara técnicamente perfecto.",
    "tsk": "Necesitaba mejorar mi capacidad de priorizar y entregar valor al negocio con velocidad y calidad suficiente.",
    "act": "Empecé a definir desde el principio qué decisión debía apoyar cada análisis, qué nivel de precisión era suficiente y qué entregables eran realmente útiles para el stakeholder.",
    "res": "Me volví más eficiente y mejoré mi capacidad de entregar análisis accionables en entornos donde la velocidad importa.",
    "lrn": "Aprendí que la perfección técnica solo es valiosa si llega a tiempo y ayuda a decidir."
  }
];

const DEFAULT_APPLICATIONS = [
  {
    "empresa": "ROCHE",
    "tipo": "Farmacéutica",
    "puesto": "Programa Recent Graduates On en Roche - Field Service Representatives",
    "entrevistas": "Programa postgrado",
    "fechaLimite": "2025-11-30",
    "fechaAplicada": "",
    "ingles": "B2",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://careers.roche.com/global/en/job/ROCHGLOBAL202510127861EXTERNALENGLOBAL/Programa-Recent-Graduates-On-en-Roche-Field-Service-Representatives"
  },
  {
    "empresa": "Lilly",
    "tipo": "Farmacéutica",
    "puesto": "Analista de Sistemas Junior",
    "entrevistas": "JUNIOR",
    "fechaLimite": "",
    "fechaAplicada": "",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Alcobendas",
    "link": ""
  },
  {
    "empresa": "Lilly",
    "tipo": "Farmacéutica",
    "puesto": "ANALISTA DE DATOS EN PLANTA DE PRODUCCIÓN FARMACÉUTICA",
    "entrevistas": "Experiencia internacional o proyectos globales",
    "fechaLimite": "",
    "fechaAplicada": "",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Alcobendas",
    "link": "https://careers.lilly.com/global/es/job/R-94094/ANALISTA-DE-DATOS-EN-PLANTA-DE-PRODUCCI%C3%93N-FARMAC%C3%89UTICA"
  },
  {
    "empresa": "BBVA",
    "tipo": "Banco",
    "puesto": "Analyst Data Scientist - Analysis & Monitoring - Advanced Analytics & Algorithmic Trading",
    "entrevistas": "JUNIOR",
    "fechaLimite": "",
    "fechaAplicada": "",
    "ingles": "B2",
    "sueldo": "",
    "lugar": "Madrid",
    "link": ""
  },
  {
    "empresa": "Abbott",
    "tipo": "Producto Sanitario",
    "puesto": "Field Service Engineer Internship - Madrid",
    "entrevistas": "Prácticas durante dos años",
    "fechaLimite": "",
    "fechaAplicada": "",
    "ingles": "",
    "sueldo": "",
    "lugar": "Madrid",
    "link": ""
  },
  {
    "empresa": "Abbott",
    "tipo": "Producto Sanitario",
    "puesto": "Operations Graduate Scheme 2026",
    "entrevistas": "Prácticas durante dos años",
    "fechaLimite": "2025-09-30",
    "fechaAplicada": "",
    "ingles": "B2",
    "sueldo": "",
    "lugar": "London",
    "link": ""
  },
  {
    "empresa": "MEDTRONIC",
    "tipo": "Producto Sanitario",
    "puesto": "NextGen Academy (Programa Posgrado 12 Meses)",
    "entrevistas": "Programa postgrado",
    "fechaLimite": "",
    "fechaAplicada": "",
    "ingles": "",
    "sueldo": "",
    "lugar": "Madrid",
    "link": ""
  },
  {
    "empresa": "Boston Scientific",
    "tipo": "Producto Sanitario",
    "puesto": "Process & Programs Specialist, Peripheral Interventions EMEA (12-month contract)",
    "entrevistas": "Programa",
    "fechaLimite": "",
    "fechaAplicada": "",
    "ingles": "",
    "sueldo": "",
    "lugar": "Madrid",
    "link": ""
  },
  {
    "empresa": "Boston Scientific",
    "tipo": "Producto Sanitario",
    "puesto": "Clinical Sales Representative, Urology",
    "entrevistas": "JUNIOR",
    "fechaLimite": "",
    "fechaAplicada": "",
    "ingles": "",
    "sueldo": "",
    "lugar": "Zaragoza",
    "link": ""
  },
  {
    "empresa": "MEDTRONIC",
    "tipo": "Producto Sanitario",
    "puesto": "Beca Departamento Cranial Spinal Technologies (CST)",
    "entrevistas": "BECA",
    "fechaLimite": "",
    "fechaAplicada": "",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": ""
  },
  {
    "empresa": "ROCHE",
    "tipo": "Producto Sanitario",
    "puesto": "Nuevas inscripciones a nuestras becas en 2025 | Roche España",
    "entrevistas": "INTER",
    "fechaLimite": "2025-05-31",
    "fechaAplicada": "",
    "ingles": "",
    "sueldo": "",
    "lugar": "",
    "link": ""
  },
  {
    "empresa": "UNUNUZI CONSULTING S.L",
    "tipo": "CONSULTORA",
    "puesto": "Junior Data Analysis",
    "entrevistas": "JUNIOR",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-12",
    "ingles": "C1",
    "sueldo": "23000",
    "lugar": "Madrid",
    "link": "https://apply.workable.com/ununuzi-consulting-s-dot-l/j/A429FBC4C2/"
  },
  {
    "empresa": "SANTANDER",
    "tipo": "Banco",
    "puesto": "Data Science Talent Program",
    "entrevistas": "Programa",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-12",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://santander.wd3.myworkdayjobs.com/es/SantanderCareers/userHome"
  },
  {
    "empresa": "Fever",
    "tipo": "CONSULTORA",
    "puesto": "Data Graduate Program",
    "entrevistas": "Programa",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-12",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://www.linkedin.com/jobs/view/4384053429/"
  },
  {
    "empresa": "Bending Spoons",
    "tipo": "empresa",
    "puesto": "Graduate data scientist",
    "entrevistas": "Programa",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-12",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": ""
  },
  {
    "empresa": "SDG Group España",
    "tipo": "CONSULTORA",
    "puesto": "Business Data Scientist - Consultant",
    "entrevistas": "JUNIOR",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-12",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": ""
  },
  {
    "empresa": "Amazon",
    "tipo": "empresa",
    "puesto": "2026 Business Intelligence Engineer Internship",
    "entrevistas": "Programa",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-12",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://www.linkedin.com/jobs/view/4358561657"
  },
  {
    "empresa": "KPMG",
    "tipo": "CONSULTORA",
    "puesto": "Junior AI & Digital Solutions Engineer",
    "entrevistas": "JUNIOR",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-12",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://www.linkedin.com/jobs/view/4387516166/"
  },
  {
    "empresa": "Accumin Intelligence",
    "tipo": "CONSULTORA",
    "puesto": "Junior Data Scientist",
    "entrevistas": "JUNIOR",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-12",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": ""
  },
  {
    "empresa": "ROCHE",
    "tipo": "Producto Sanitario",
    "puesto": "Internship in Innovation & Sustainability - Data Science, Business Analytics, Health Economics, Digital Transformation",
    "entrevistas": "INTER",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-13",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://careers.roche.com/global/en/job/ROCHGLOBAL202604108635EXTERNALENGLOBAL/Internship-in-Innovation-Sustainability-For-students-in-the-field-of-Data-Science-Business-Analytics-Health-Economics-or-Digital-Transformation"
  },
  {
    "empresa": "Deloitte",
    "tipo": "CONSULTORA",
    "puesto": "Data Scientist - Advanced Analytics Madrid",
    "entrevistas": "JUNIOR",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-13",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://empleo.es.deloitte.com/job/Madrid-Data-Scientist-Advanced-Analytics-Madrid/1083045801/"
  },
  {
    "empresa": "DANONE",
    "tipo": "empresa",
    "puesto": "Data Science Intern",
    "entrevistas": "INTER",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-13",
    "ingles": "B2",
    "sueldo": "",
    "lugar": "Barcelona",
    "link": "https://esapply-danone.icims.com/jobs/23767/data-science-intern/job?mode=submit_apply"
  },
  {
    "empresa": "Codere",
    "tipo": "empresa",
    "puesto": "Codere Future Talent program in Data Analytics",
    "entrevistas": "Programa",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-13",
    "ingles": "B2",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://www.linkedin.com/jobs/view/4401080318/"
  },
  {
    "empresa": "Capgemini",
    "tipo": "empresa",
    "puesto": "Intern",
    "entrevistas": "INTER",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-26",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://www.linkedin.com/jobs/view/4398390688"
  },
  {
    "empresa": "Arval",
    "tipo": "empresa",
    "puesto": "Beca Business Analyst",
    "entrevistas": "Programa",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-26",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://group.bnpparibas/en/careers/job-offer/beca-business-analyst"
  },
  {
    "empresa": "Allianz",
    "tipo": "empresa",
    "puesto": "Beca Data Analyst",
    "entrevistas": "Programa",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-26",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://careers.allianz.com/global/en/job/81579/Beca-Data-Analyst"
  },
  {
    "empresa": "HEINEKEN",
    "tipo": "empresa",
    "puesto": "HEY Program: Beca Business Intelligence",
    "entrevistas": "Programa",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-26",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://workmyway.avature.net/es_ES/application?jobId=24187&source=LinkedIn"
  },
  {
    "empresa": "Julius Baer",
    "tipo": "empresa",
    "puesto": "Machine Learning Engineer 100% (f/m/d)",
    "entrevistas": "JUNIOR",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-26",
    "ingles": "C1",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://www.linkedin.com/jobs/view/4399236718/"
  },
  {
    "empresa": "STRATESYS",
    "tipo": "consultora",
    "puesto": "Beca AI Business Analyst",
    "entrevistas": "Programa",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-27",
    "ingles": "B2",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4402484539"
  },
  {
    "empresa": "Roche",
    "tipo": "farmacéutica",
    "puesto": "Beca Business Intelligence Analyst",
    "entrevistas": "Programa",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-27",
    "ingles": "B2",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4405970370&start=24"
  },
  {
    "empresa": "Mondelez",
    "tipo": "empresa",
    "puesto": "Taste the future - Quality Specialist Intern - Madrid, Spain",
    "entrevistas": "INTER",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-28",
    "ingles": "B2",
    "sueldo": "",
    "lugar": "Madrid",
    "link": ""
  },
  {
    "empresa": "Endesa/Genil",
    "tipo": "energía",
    "puesto": "BECA - GLOBAL DIGITAL SOLUTIONS - TECNOLOGÍA",
    "entrevistas": "Programa",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-28",
    "ingles": "B2",
    "sueldo": "",
    "lugar": "Madrid",
    "link": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4405645520"
  },
  {
    "empresa": "Deloitte",
    "tipo": "consultora",
    "puesto": "Junior septiembre IT",
    "entrevistas": "JUNIOR",
    "fechaLimite": "",
    "fechaAplicada": "2026-04-28",
    "ingles": "B2",
    "sueldo": "",
    "lugar": "Madrid",
    "link": ""
  }
];

const DEFAULT_PROFILE = {
  "id": "jaime_hernandez",
  "name": "Jaime Hernández",
  "initials": "JH",
  "education": "Executive Master in Big Data Science, Universidad de Navarra",
  "targetRoles": [
    "Business Analyst",
    "Data Analyst",
    "Consultant",
    "Healthcare Strategy",
    "Product"
  ],
  "industries": [
    "Healthcare",
    "Health insurance",
    "Data",
    "Consulting"
  ],
  "companies": [
    "McKinsey",
    "BCG",
    "Bain",
    "Deloitte",
    "PwC",
    "IQVIA",
    "Roche",
    "Sanitas",
    "ASISA"
  ],
  "languages": {
    "interface": "es",
    "practiceModes": [
      "es",
      "en",
      "mixed"
    ]
  },
  "preferences": {
    "interviewLanguageMode": "mixed",
    "practiceMode": "text"
  },
  "pitch": {
    "present": "Actualmente estoy cursando el Executive Master in Big Data Science en la Universidad de Navarra, compaginándolo con mi trabajo en ASISA dentro de la Dirección General Médica, donde participo en proyectos de estrategia interna, inteligencia competitiva y toma de decisiones basada en datos.",
    "past": "Previamente desarrollé software de planificación quirúrgica que redujo las listas de espera un 30%, participé en MindSafe —app de salud mental reconocida en un concurso Health Tech— y realicé investigación en IA médica en Quirón Salud.",
    "future": "A futuro, me gustaría seguir desarrollándome en la intersección entre data science, transformación de negocio y healthcare, aportando valor real y medible desde el primer día. Por eso veo en [EMPRESA] una excelente oportunidad para empezar."
  },
  "starStories": [
    {
      "id": "asisa-competitive-intelligence",
      "tag": "initiative",
      "tagLabel": "Iniciativa",
      "title": "Plataforma de inteligencia competitiva en ASISA",
      "q": "¿Cuéntame una situación en la que tomaste la iniciativa para crear valor desde cero?",
      "questions": {
        "es": [
          "¿Cuéntame una situación en la que tomaste la iniciativa para crear valor desde cero?",
          "Describe un proyecto donde usaras datos para apoyar una decisión estratégica."
        ],
        "en": [
          "Tell me about a time you took initiative to create value from scratch.",
          "Describe a project where you used data to support a strategic decision."
        ]
      },
      "sit": "En ASISA, la dirección médica necesitaba tomar decisiones estratégicas sobre qué especialistas y centros incorporar a la red de proveedores, pero no teníamos visibilidad clara de nuestro posicionamiento frente a Sanitas, Adeslas o DKV en cobertura geográfica, especialidades y densidad de red.",
      "tsk": "Me encargaron desarrollar una plataforma de inteligencia competitiva para comparar de forma sistemática las redes de proveedores de las principales aseguradoras y detectar gaps estratégicos.",
      "act": "Definí criterios de comparación con dirección médica, recopilé datos de fuentes públicas, webs de competidores y CRM interno, diseñé una base SQL centralizada y construí dashboards en Power BI para filtrar por región, especialidad y competidor.",
      "res": "La plataforma identificó 3 provincias prioritarias con menor cobertura que la competencia y redujo de 2 semanas a 2 días el tiempo necesario para preparar análisis competitivos ad-hoc para comité de dirección.",
      "lrn": "Aprendí que un análisis técnico solo genera impacto si está conectado con decisiones concretas de negocio."
    },
    {
      "id": "senior-communication",
      "tag": "communication",
      "tagLabel": "Comunicación",
      "title": "Comunicar hallazgos difíciles a perfiles senior",
      "q": "¿Cuéntame una historia de comunicación con perfiles senior?",
      "questions": {
        "es": [
          "¿Cuéntame una historia de comunicación con perfiles senior?",
          "Describe una vez que tuviste que comunicar malas noticias con datos."
        ],
        "en": [
          "Tell me about a time you communicated difficult findings to senior stakeholders."
        ]
      },
      "sit": "Tras desarrollar la plataforma de inteligencia competitiva, los datos mostraban que la posición de ASISA era más débil de lo que se creía en cobertura geográfica, especialidades y ratio proveedores/asegurados.",
      "tsk": "Tenía que presentar los hallazgos a altos directivos de forma clara, honesta y constructiva, sin sonar alarmista pero transmitiendo urgencia.",
      "act": "Estructuré la presentación en contexto de mercado, datos visuales sin suavizar y opciones de acción con costes y tiempos. Además, hablé antes con directivos clave para anticipar preguntas y explicar el rigor de los datos.",
      "res": "La dirección aprobó una estrategia de incorporación acelerada de proveedores en 3 provincias prioritarias y la plataforma se convirtió en herramienta mensual de referencia para comité de dirección.",
      "lrn": "Aprendí que comunicar problemas funciona mejor cuando también llevas opciones accionables."
    },
    {
      "id": "hospital-pressure",
      "tag": "pressure",
      "tagLabel": "Bajo presión",
      "title": "Software de scheduling quirúrgico bajo presión",
      "q": "¿Cuéntame una situación en la que tuviste que entregar resultados bajo presión?",
      "questions": {
        "es": [
          "¿Cuéntame una situación en la que tuviste que entregar resultados bajo presión?"
        ],
        "en": [
          "Describe a moment when you had to deliver something critical under tight time constraints."
        ]
      },
      "sit": "El Hospital Universitario del Sureste estaba entre los últimos en posicionamiento de listas de espera quirúrgicas en la Comunidad de Madrid, afectando a reputación y satisfacción del paciente.",
      "tsk": "Me encargaron desarrollar un software de scheduling quirúrgico para optimizar la asignación de quirófanos y tiempos de cirugía con un deadline ajustado.",
      "act": "Trabajé en iteraciones rápidas: entendí el flujo actual de los médicos, desarrollé un prototipo funcional, lo probé con cirujanos, incorporé feedback y mantuve reuniones semanales para ajustar el software a necesidades reales.",
      "res": "Se redujeron las listas de espera quirúrgicas en un 30% en los primeros meses y los médicos adoptaron el software porque habían participado desde el inicio.",
      "lrn": "Aprendí a priorizar utilidad real sobre perfección técnica cuando hay presión de tiempo."
    },
    {
      "id": "mindsafe-failure",
      "tag": "failure",
      "tagLabel": "Error / fracaso",
      "title": "MindSafe en standby tras la competición",
      "q": "¿Cuéntame un error o fracaso del que aprendiste?",
      "questions": {
        "es": [
          "¿Cuéntame un error o fracaso del que aprendiste?"
        ],
        "en": [
          "Tell me about a failure and what you learned from it."
        ]
      },
      "sit": "Participé en MindSafe App, una aplicación de salud mental que llegó al top 15 de un startup competition con más de 500 participantes en el Health Tech Contest de la Comunidad de Madrid.",
      "note": "El documento original empieza esta historia con una errata; se ha limpiado la redacción.",
      "tsk": "Como parte del equipo técnico, tenía que ayudar a escalar el producto después de la competición y convertir la idea en un proyecto sostenible.",
      "act": "El proyecto se enfrentó a falta de experiencia startup, poco tiempo dedicado y dificultad para alinear al equipo. Invertimos esfuerzo sin una estrategia clara de negocio.",
      "res": "El proyecto quedó en standby. Aunque no consiguió tracción, aprendí business model canvas, dinámica real de una startup y la importancia de tener un equipo alineado y dedicado.",
      "lrn": "Ahora evalúo los proyectos no solo por la idea, sino por equipo, foco, modelo de negocio y capacidad de ejecución."
    },
    {
      "id": "asisa-internship-initiative",
      "tag": "initiative",
      "tagLabel": "Iniciativa",
      "title": "Aportar valor en prácticas en ASISA",
      "q": "¿Cuéntame una situación en la que superaste las expectativas de tu rol?",
      "questions": {
        "es": [
          "¿Cuéntame una situación en la que superaste las expectativas de tu rol?"
        ],
        "en": [
          "Tell me about a time you exceeded expectations in your role."
        ]
      },
      "sit": "Comencé en prácticas en la Dirección General Médica de ASISA, en un entorno con perfiles muy senior y sin grandes expectativas sobre mi rol inicial.",
      "tsk": "Me asignaron una idea: analizar aseguradoras médicas en España para entender el posicionamiento competitivo.",
      "act": "Asumí el proyecto con responsabilidad, estructuré información de múltiples fuentes, analicé datos disponibles y desarrollé una herramienta interactiva para comparar ASISA con competidores.",
      "res": "Conseguí presentar internamente un proyecto que aportaba valor real a dirección y reforzó mi credibilidad en el equipo.",
      "lrn": "Aprendí que liderar no siempre significa tener cargo formal, sino asumir responsabilidad y demostrar valor con resultados."
    },
    {
      "id": "delegation-leadership",
      "tag": "leadership",
      "tagLabel": "Liderazgo",
      "title": "Delegación y liderazgo de practicantes",
      "q": "¿Cuéntame una experiencia liderando o delegando en otras personas?",
      "questions": {
        "es": [
          "¿Cuéntame una experiencia liderando o delegando en otras personas?"
        ],
        "en": [
          "Tell me about a time you delegated work and led others."
        ]
      },
      "sit": "Durante un proyecto en ASISA, me asignaron liderar a varios practicantes que se incorporaban al equipo de análisis. Podía hacer todo yo para asegurar calidad, pero vi una oportunidad de desarrollar al equipo.",
      "tsk": "Tenía que estructurar el proyecto para que los practicantes contribuyeran de forma significativa manteniendo calidad y deadlines.",
      "act": "Dividí el proyecto en recopilación, análisis, validación y visualización. Asigné tareas según fortalezas, expliqué la lógica de cada paso, establecí checkpoints semanales y les di autonomía con soporte.",
      "res": "El proyecto se entregó a tiempo y con calidad. Los practicantes ganaron confianza y algunos fueron contratados posteriormente al demostrar valor.",
      "lrn": "Aprendí que invertir tiempo en desarrollar a otros puede generar mejor resultado que hacerlo todo uno mismo."
    },
    {
      "id": "international-adaptation-florida",
      "tag": "adaptability",
      "tagLabel": "Adaptación",
      "title": "Formación internacional en Florida",
      "q": "¿Cuéntame una experiencia de adaptación internacional o multicultural?",
      "questions": {
        "es": [
          "¿Cuéntame una experiencia de adaptación internacional o multicultural?"
        ],
        "en": [
          "Tell me about an international or multicultural experience where you had to adapt."
        ]
      },
      "sit": "Realicé una formación de dos meses en Orlando, Florida, en una empresa de salud. Era mi primera experiencia internacional en otro idioma, cultura empresarial y procesos de negocio.",
      "tsk": "Tenía que adaptarme rápido al equipo y contribuir de forma efectiva mientras aprendía cómo operaba una empresa de salud estadounidense.",
      "act": "Observé primero cómo funcionaba el equipo, pregunté para entender el porqué de los procesos, adapté mi comunicación al ritmo más directo de EE.UU., busqué mentores y compartí perspectivas del modelo español cuando aportaba valor.",
      "res": "Logré integrarme y contribuir en proyectos reales. Desarrollé flexibilidad, comunicación más directa y capacidad para trabajar en contextos internacionales.",
      "lrn": "Aprendí a adaptar mi forma de trabajar al entorno cultural sin perder mi criterio."
    },
    {
      "id": "weakness-prioritization",
      "tag": "learning",
      "tagLabel": "Aprendizaje",
      "title": "Convertir perfeccionismo técnico en foco de negocio",
      "q": "¿Cuál es una debilidad en la que estás trabajando?",
      "questions": {
        "es": [
          "¿Cuál es una debilidad en la que estás trabajando?"
        ],
        "en": [
          "What is a weakness you are currently working on?"
        ]
      },
      "sit": "En proyectos técnicos, a veces dedicaba demasiado tiempo a intentar que el análisis quedara técnicamente perfecto.",
      "tsk": "Necesitaba mejorar mi capacidad de priorizar y entregar valor al negocio con velocidad y calidad suficiente.",
      "act": "Empecé a definir desde el principio qué decisión debía apoyar cada análisis, qué nivel de precisión era suficiente y qué entregables eran realmente útiles para el stakeholder.",
      "res": "Me volví más eficiente y mejoré mi capacidad de entregar análisis accionables en entornos donde la velocidad importa.",
      "lrn": "Aprendí que la perfección técnica solo es valiosa si llega a tiempo y ayuda a decidir."
    }
  ],
  "customQuestions": [],
  "applications": JSON.parse(JSON.stringify(DEFAULT_APPLICATIONS)),
  "history": []
};

const COMPETENCIES = [
  {
    "k": "all",
    "l": "Todas"
  },
  {
    "k": "initiative",
    "l": "Iniciativa"
  },
  {
    "k": "leadership",
    "l": "Liderazgo"
  },
  {
    "k": "pressure",
    "l": "Presión"
  },
  {
    "k": "communication",
    "l": "Comunicación"
  },
  {
    "k": "failure",
    "l": "Error"
  },
  {
    "k": "adaptability",
    "l": "Adaptación"
  },
  {
    "k": "learning",
    "l": "Aprendizaje"
  }
];

const INTERVIEW_LANGUAGE_MODES = [
  { id: 'es', label: 'Español' },
  { id: 'en', label: 'Inglés' },
  { id: 'mixed', label: 'Modo mixto / entrevista real' }
];
