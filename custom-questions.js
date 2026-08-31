const RETIRED_CUSTOM_QUESTION_IDS = ['default-three-workplace-weaknesses'];
const RETIRED_CUSTOM_QUESTION_TEXTS = ['Dime tres debilidades que tengas en entornos de trabajo'];
const SHIPPED_CUSTOM_QUESTIONS = [
  {
    "id": "motivation-ge-healthcare-es",
    "question": "¿Por qué te interesa GE HealthCare?",
    "lang": "es",
    "competency": "motivation",
    "answerType": "custom",
    "linkedStoryId": "",
    "customAnswer": "Me interesa GE HealthCare porque es una compañía de referencia en España en el ámbito de los equipos médicos y está en la vanguardia de la tecnología aplicada a la salud. Me atrae especialmente la posibilidad de trabajar con equipos de diagnóstico por imagen como PET/CT, TAC y resonancia magnética, que son fundamentales para el diagnóstico, y de comunicar y optimizar procesos dentro del área de Sales. Mi formación en Ingeniería Biomédica y mi perfil orientado a data science encajan con este entorno, al igual que mi TFG sobre la aplicación de IA para detectar y corregir errores en equipos médicos. En este puesto podría trasladar ese conocimiento a un entorno real, utilizando datos para optimizar procesos de servicio, mejorar el uptime y reducir problemas operativos en una región como EMEA, contribuyendo a generar impacto en hospitales y pacientes.",
    "companies": [
      "GE HealthCare"
    ],
    "updatedAt": "2026-08-31",
    "createdAt": "2026-08-31"
  },
  {
    "id": "motivation-ge-healthcare-en",
    "question": "Why are you interested in GE HealthCare?",
    "lang": "en",
    "competency": "motivation",
    "answerType": "custom",
    "linkedStoryId": "",
    "customAnswer": "I am interested in GE HealthCare because it is a leading company in Spain in the field of medical equipment and is at the forefront of technology applied to healthcare. I am particularly attracted by the possibility of working with diagnostic imaging systems such as PET/CT, CT scanners and MRI, which are fundamental to diagnosis, and of communicating and optimising processes within the Sales organisation. My Biomedical Engineering background and data-science-oriented profile fit well with this environment, as does my final degree project on applying AI to detect and correct errors in medical equipment. In this role, I would be able to transfer that knowledge to a real-world setting, using data to optimise service processes, improve uptime and reduce operational issues across a region such as EMEA, helping to create an impact for hospitals and patients.",
    "companies": [
      "GE HealthCare"
    ],
    "updatedAt": "2026-08-31",
    "createdAt": "2026-08-31"
  },
  {
    "id": "motivation-movistar-prosegur-es",
    "question": "¿Por qué te interesa esta oportunidad en Movistar Prosegur Alarmas?",
    "lang": "es",
    "competency": "motivation",
    "answerType": "custom",
    "linkedStoryId": "",
    "customAnswer": "Me interesa esta oportunidad en Movistar Prosegur Alarmas porque combina tres aspectos que considero clave para mi futuro profesional: tecnología, inteligencia artificial y aplicación práctica en un sector tan importante como la seguridad. Además, la alianza entre Telefónica y Prosegur me transmite la solidez de dos grandes compañías complementarias: el soporte tecnológico y la capacidad de Telefónica junto con la experiencia de Prosegur en seguridad. Lo que más me atrae del Leadership Program es que ofrece responsabilidad real desde el primer día y un recorrido de tres años con diferentes rotaciones relacionadas con automatización e inteligencia artificial. Considero que esta estructura sería esencial para mi desarrollo, ya que me permitiría formarme desde distintas perspectivas, participar en proyectos reales y construir una base sólida para mi carrera. Por eso lo veo como una oportunidad única para crecer y aportar en un entorno donde la tecnología tiene un impacto directo en la eficiencia, la seguridad y la experiencia del cliente.",
    "companies": [
      "Movistar Prosegur Alarmas"
    ],
    "updatedAt": "2026-08-31",
    "createdAt": "2026-08-31"
  },
  {
    "id": "motivation-movistar-prosegur-en",
    "question": "Why are you interested in this opportunity at Movistar Prosegur Alarmas?",
    "lang": "en",
    "competency": "motivation",
    "answerType": "custom",
    "linkedStoryId": "",
    "customAnswer": "I am interested in this opportunity at Movistar Prosegur Alarmas because it combines three areas that I consider essential for my professional future: technology, artificial intelligence and practical application in a sector as important as security. In addition, the partnership between Telefónica and Prosegur conveys the strength of two complementary leading companies: Telefónica's technological capabilities and support, together with Prosegur's expertise in security. What attracts me most about the Leadership Program is that it offers real responsibility from day one and a three-year path with different rotations related to automation and artificial intelligence. I believe this structure would be essential to my development, as it would allow me to learn from different perspectives, contribute to real projects and build a strong foundation for my career. That is why I see it as a unique opportunity to grow and contribute in an environment where technology has a direct impact on efficiency, security and customer experience.",
    "companies": [
      "Movistar Prosegur Alarmas"
    ],
    "updatedAt": "2026-08-31",
    "createdAt": "2026-08-31"
  }
];

if (typeof DEFAULT_PROFILE !== 'undefined') {
  DEFAULT_PROFILE.customQuestions = JSON.parse(JSON.stringify(SHIPPED_CUSTOM_QUESTIONS));
}
