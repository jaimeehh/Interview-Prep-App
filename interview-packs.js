const INTERVIEW_PACKS = [
  {
    id: 'fever-growth-graduate',
    company: 'Fever',
    role: 'Growth Graduate Program',
    stage: 'HR / first interviews',
    accent: '🔥',
    description: 'Motivación, encaje con Growth y visión de carrera.',
    questions: [
      {
        id: 'fever-master-motivation',
        category: 'Narrativa maestra · Fever + Growth',
        priority: 'high',
        ideaEs: '1. Por qué Fever → 2. Por qué Growth Graduate Program → 3. Por qué encaja conmigo.',
        ideaEn: '1. Why Fever → 2. Why the Growth Graduate Program → 3. Why it fits me.',
        keywords: ['entertainment', 'technology', 'data-driven', 'Growth', 'ASISA', 'PHCA'],
        questionEs: '¿Por qué quieres trabajar en Fever y especialmente en este puesto?',
        questionEn: 'Why do you want to work at Fever, and why this role in particular?',
        variantsEs: ['¿Por qué Fever?', '¿Por qué el Growth Graduate Program?', '¿Qué te atrae de esta oportunidad?', '¿Por qué Growth en Fever?'],
        variantsEn: ['Why Fever?', 'Why the Growth Graduate Program?', 'What attracts you to this opportunity?', 'Why Growth at Fever?'],
        answerEs: '1. Por qué Fever\nMe atrae Fever por la combinación de entretenimiento, tecnología y datos. El producto es muy tangible: ayuda a las personas a descubrir experiencias y, al mismo tiempo, utiliza tecnología y datos para entender qué funciona en cada mercado y ayudar a crecer a partners y experiencias. También me gusta el componente internacional y que las decisiones de Growth sean claramente data-driven.\n\n2. Por qué este Growth Graduate Program\nMe interesa especialmente porque Growth está justo entre análisis, estrategia y ejecución. No se trata sólo de entender una métrica, sino de utilizarla para decidir qué mercado priorizar, qué palancas mover, cómo mejorar el rendimiento y después medir el resultado. El Graduate Program me parece una muy buena forma de aprender ese ciclo completo trabajando sobre problemas reales desde el principio.\n\n3. Por qué encaja conmigo\nEs una dirección que conecta mucho con lo que ya he ido descubriendo en mis experiencias. En ASISA disfruté especialmente cuando el análisis terminaba apoyando una decisión real de negocio, y en PHCA vi cómo analytics, automatización e IA podían mejorar procesos y acercar mucho más negocio y tecnología. Por eso veo Fever como una oportunidad muy natural para seguir desarrollándome en esa intersección entre datos, negocio y crecimiento.',
        answerEn: '1. Why Fever\nWhat attracts me to Fever is the combination of entertainment, technology and data. The product is very tangible: it helps people discover experiences while using technology and data to understand what works in each market and help partners and experiences grow. I also like the international dimension and the fact that Growth decisions are clearly data-driven.\n\n2. Why this Growth Graduate Program\nI am especially interested in the role because Growth sits right between analysis, strategy and execution. It is not only about understanding a metric, but using it to decide which market to prioritise, which levers to move, how to improve performance and then measuring the result. The Graduate Program seems like a very strong way to learn that full cycle while working on real problems from the beginning.\n\n3. Why it fits me\nThis direction connects strongly with what I have already discovered through my experience. At ASISA, I especially enjoyed seeing analysis support a real business decision, and at PHCA I saw how analytics, automation and AI could improve processes and bring business and technology much closer together. That is why I see Fever as a very natural opportunity to keep developing at the intersection of data, business and growth.'
      },
      {
        id: 'fever-narrative-career',
        category: 'Narrativa · Career direction',
        priority: 'high',
        ideaEs: 'Quiero crecer en business analytics / Growth / Strategy, manteniendo base técnica y ganando ownership.',
        ideaEn: 'I want to grow in business analytics / Growth / Strategy, keeping technical depth and gaining ownership.',
        keywords: ['career', 'business analytics', 'ownership', 'strategy', 'technology'],
        questionEs: '¿Qué tipo de rol buscas y dónde te ves en cinco años?',
        questionEn: 'What kind of role are you looking for, and where do you see yourself in five years?',
        variantsEs: ['¿Cuál es tu rol objetivo?', '¿Hacia dónde quieres orientar tu carrera?', '¿Dónde te ves a medio plazo?', '¿Qué buscas en tu siguiente experiencia?'],
        variantsEn: ['What is your target role?', 'Where do you want to take your career?', 'Where do you see yourself in the medium term?', 'What are you looking for in your next experience?'],
        answerEs: 'A corto plazo busco un rol analítico muy conectado al negocio, donde pueda seguir utilizando datos y tecnología pero con exposición directa a decisiones, clientes, mercados y resultados. Mis experiencias me han ayudado a ver que disfruto especialmente cuando tengo que entender un problema, estructurarlo y utilizar herramientas técnicas para mejorar cómo se trabaja o cómo se decide. A medio plazo me gustaría evolucionar hacia posiciones de Growth, Strategy o Business Analytics con cada vez más ownership sobre proyectos y resultados. No tengo una obsesión con un título concreto; me importa más construir una base sólida, entender bien el negocio y ganar responsabilidad progresivamente. En cinco años me gustaría ser un perfil capaz de moverse con comodidad entre negocio y tecnología y liderar iniciativas donde los datos y la IA tengan un impacto claro.',
        answerEn: 'In the short term, I am looking for an analytical role that is very close to the business, where I can keep using data and technology while having direct exposure to decisions, customers, markets and results. My previous experiences have shown me that I especially enjoy understanding a problem, structuring it and using technical tools to improve the way people work or make decisions. In the medium term, I would like to grow into Growth, Strategy or Business Analytics roles with increasing ownership of projects and outcomes. I am not obsessed with a specific job title; what matters more to me is building a strong foundation, understanding the business well and gradually taking on more responsibility. In five years, I would like to be someone who can move comfortably between business and technology and lead initiatives where data and AI have a clear impact.'
      },
      {
        id: 'fever-narrative-fit',
        category: 'Narrativa · Why you',
        priority: 'high',
        ideaEs: 'Dos evidencias principales: ASISA negocio+datos y PHCA IA+automatización.',
        ideaEn: 'Two main proofs: ASISA business+data and PHCA AI+automation.',
        keywords: ['ASISA', 'PHCA', 'data', 'AI', 'business'],
        questionEs: '¿Por qué crees que tu perfil encaja con Fever y con este puesto?',
        questionEn: 'Why do you think your profile fits Fever and this role?',
        variantsEs: ['¿Por qué deberíamos elegirte?', '¿Qué puedes aportar?', '¿Qué te diferencia?', '¿Cómo encaja tu experiencia con Growth?'],
        variantsEn: ['Why should we choose you?', 'What can you bring to the role?', 'What differentiates you?', 'How does your experience fit Growth?'],
        answerEs: 'Creo que mi perfil encaja porque combina una base analítica fuerte con experiencia bastante cercana al negocio. En ASISA trabajé en estrategia interna y desarrollé una herramienta de inteligencia competitiva para apoyar decisiones de Dirección Médica, así que ya he tenido que pasar de datos a recomendaciones concretas. En PHCA trabajé con analítica, automatización e inteligencia artificial aplicada a procesos internos, lo que me permitió ver cómo la tecnología puede dar más autonomía y capacidad de decisión a los equipos de negocio. Creo que esas dos experiencias conectan bastante bien con Growth en Fever: entender el negocio, detectar oportunidades, apoyarse en datos y convertir el análisis en acciones con impacto. Además, me considero una persona muy curiosa y con ganas de aprender rápido, algo que creo que es importante en un entorno tan dinámico e internacional.',
        answerEn: 'I think my profile fits because it combines a strong analytical foundation with experience that has been quite close to the business. At ASISA, I worked on internal strategy and developed a competitive-intelligence tool to support decisions made by the Medical Direction, so I have already had to move from data to concrete recommendations. At PHCA, I worked with analytics, automation and AI applied to internal processes, which showed me how technology can give business teams more autonomy and decision-making power. I think those two experiences connect well with Growth at Fever: understanding the business, identifying opportunities, using data and turning analysis into actions with impact. I am also a very curious person and I learn quickly, which I think is especially important in such a dynamic and international environment.'
      },
      {
        id: 'fever-case-market-entry',
        category: 'Case · Market entry',
        priority: 'high',
        ideaEs: 'Mercado atractivo → podemos ganar → economics → cómo entramos → riesgos/piloto.',
        ideaEn: 'Attractive market → right to win → economics → entry mode → risks/pilot.',
        keywords: ['market attractiveness', 'right to win', 'economics', 'build-partner-buy', 'pilot'],
        questionEs: 'Fever quiere lanzar un nuevo producto o experiencia en una ciudad. ¿Cómo estructurarías el análisis?',
        questionEn: 'Fever wants to launch a new product or experience in a city. How would you structure the analysis?',
        answerEs: 'Lo estructuraría en cinco bloques. Primero, atractivo del mercado: tamaño, crecimiento, segmentos de clientes, demanda, competencia y posibles barreras. Segundo, derecho a ganar: si Fever tiene una propuesta diferenciada, marca, datos, canales, partners y capacidades para ejecutar mejor que otros. Tercero, economics: ingresos potenciales, precio, costes variables y fijos, margen, inversión inicial y punto de equilibrio. Cuarto, modo de entrada: construir de forma orgánica, entrar con un partner o joint venture, o adquirir una empresa si necesitamos velocidad o capacidades que no tenemos. Quinto, riesgos y ejecución: empezaría con un piloto, definiría KPIs de éxito y escalaría sólo si se validan las hipótesis clave.',
        answerEn: 'I would structure it in five blocks. First, market attractiveness: size, growth, customer segments, demand, competition and potential barriers. Second, right to win: whether Fever has a differentiated proposition, brand, data, channels, partners and capabilities to execute better than competitors. Third, economics: potential revenue, pricing, variable and fixed costs, margin, initial investment and break-even. Fourth, entry mode: build organically, enter through a partner or joint venture, or acquire a company if we need speed or capabilities we do not have. Fifth, risks and execution: I would start with a pilot, define clear success KPIs and scale only if the key assumptions are validated.'
      },
      {
        id: 'fever-case-growth-tree',
        category: 'Case · Growth strategy',
        priority: 'high',
        ideaEs: 'Organic: clientes × frecuencia × ticket + nuevos productos/mercados. Inorganic: partner o buy.',
        ideaEn: 'Organic: customers × frequency × ticket + new products/markets. Inorganic: partner or buy.',
        keywords: ['customers', 'frequency', 'ticket', 'products', 'markets', 'M&A'],
        questionEs: 'Si Fever quisiera crecer un 30% en una ciudad, ¿qué palancas de crecimiento analizarías?',
        questionEn: 'If Fever wanted to grow by 30% in a city, which growth levers would you analyse?',
        answerEs: 'Primero separaría crecimiento orgánico e inorgánico. En orgánico descompondría ingresos como clientes por frecuencia de compra por ticket medio. Así puedo crecer captando más clientes, aumentando repetición o cross-selling, mejorando precio o mix, lanzando nuevos productos y experiencias, o entrando en nuevos segmentos, canales o zonas. Después evaluaría crecimiento inorgánico: alianzas estratégicas, joint ventures o adquisiciones para acceder más rápido a audiencia, contenido, distribución o capacidades. Compararía cada palanca por tamaño de oportunidad, velocidad, inversión, riesgo y control antes de priorizar.',
        answerEn: 'First, I would separate organic and inorganic growth. For organic growth, I would break revenue down into customers multiplied by purchase frequency multiplied by average ticket value. That means growth can come from acquiring more customers, increasing repeat usage or cross-selling, improving price or mix, launching new products and experiences, or entering new segments, channels or areas. Then I would evaluate inorganic growth through strategic partnerships, joint ventures or acquisitions to access audiences, content, distribution or capabilities faster. I would compare each lever by opportunity size, speed, investment, risk and control before prioritising.'
      },
      {
        id: 'fever-tech-funnel',
        category: 'Technical · Growth analytics',
        priority: 'high',
        ideaEs: 'Descomponer el funnel antes de proponer soluciones.',
        ideaEn: 'Break down the funnel before proposing solutions.',
        keywords: ['traffic', 'conversion', 'ticket', 'retention', 'segments'],
        questionEs: 'Si las ventas de una experiencia caen un 20%, ¿cómo analizarías el problema?',
        questionEn: 'If sales for an experience dropped by 20%, how would you analyse the problem?',
        answerEs: 'Empezaría descomponiendo el resultado en sus principales drivers. Miraría primero si ha caído el tráfico, la conversión o el ticket medio y compararía por canal, mercado, dispositivo y segmento. Después buscaría cambios recientes en pricing, campañas, disponibilidad, competencia o producto. Formularía hipótesis, priorizaría las más probables con datos y propondría acciones medibles. La clave para mí sería no saltar directamente a una solución, sino aislar primero qué parte del funnel está explicando la caída.',
        answerEn: 'I would start by breaking the outcome down into its main drivers. First I would check whether traffic, conversion or average ticket value has changed, and compare results by channel, market, device and segment. Then I would look for recent changes in pricing, campaigns, availability, competition or product. I would form hypotheses, prioritise the most likely ones with data and propose measurable actions. The key would be not to jump straight to a solution, but first isolate which part of the funnel explains the decline.'
      },
      {
        id: 'fever-tech-abtest',
        category: 'Technical · Experimentation',
        priority: 'high',
        ideaEs: 'Hipótesis clara + métrica primaria + control vs tratamiento + significancia.',
        ideaEn: 'Clear hypothesis + primary metric + control vs treatment + significance.',
        keywords: ['hypothesis', 'control', 'treatment', 'metric', 'significance'],
        questionEs: '¿Cómo evaluarías si un experimento A/B de Growth ha funcionado?',
        questionEn: 'How would you evaluate whether a Growth A/B test worked?',
        answerEs: 'Definiría antes del experimento una hipótesis y una métrica principal, por ejemplo conversión, evitando cambiar el criterio después de ver los resultados. Compararía un grupo de control y uno de tratamiento, comprobaría que la muestra sea suficiente y analizaría tanto la magnitud del efecto como su significancia estadística. También revisaría métricas secundarias para asegurar que la mejora no empeora otra parte importante del negocio. Finalmente decidiría si escalar, iterar o descartar el cambio.',
        answerEn: 'Before running the experiment, I would define a clear hypothesis and a primary metric, for example conversion, so the success criterion is not changed after seeing the results. I would compare a control group with a treatment group, check that the sample is large enough and assess both the effect size and statistical significance. I would also review secondary metrics to make sure the improvement does not harm another important part of the business. Then I would decide whether to scale, iterate or stop the change.'
      },
      {
        id: 'fever-tech-kpis',
        category: 'Technical · KPIs',
        priority: 'medium',
        ideaEs: 'Un KPI debe conectar comportamiento con resultado de negocio.',
        ideaEn: 'A KPI should connect behaviour with a business outcome.',
        keywords: ['conversion', 'CAC', 'retention', 'revenue', 'market'],
        questionEs: '¿Qué métricas seguirías para evaluar el crecimiento de un mercado de Fever?',
        questionEn: 'Which metrics would you track to evaluate growth in a Fever market?',
        answerEs: 'Miraría una combinación de adquisición, conversión, monetización y retención. Por ejemplo tráfico o usuarios activos, conversión a compra, ticket medio, ingresos, coste de adquisición si aplica, repetición y retención. También segmentaría por canal y tipo de experiencia para entender qué está impulsando realmente el crecimiento. No me quedaría con una única métrica: intentaría conectar crecimiento de usuarios con crecimiento sostenible de ingresos y eficiencia.',
        answerEn: 'I would look at a combination of acquisition, conversion, monetisation and retention. For example traffic or active users, purchase conversion, average ticket value, revenue, customer acquisition cost where relevant, repeat behaviour and retention. I would also segment by channel and type of experience to understand what is actually driving growth. I would not rely on a single metric; I would try to connect user growth with sustainable revenue growth and efficiency.'
      }
    ]
  },
  {
    id: 'ibm-early-associates-2027',
    company: 'IBM',
    role: 'Early Associates Internship Program 2027',
    stage: '1st choice: Hybrid Cloud & Data · 2nd: Strategy & Transformation',
    accent: '☁️',
    description: 'Data, AI, Analytics & Automation primero; Strategy & Transformation como segunda opción.',
    questions: [
      {
        id: 'ibm-master-motivation',
        category: 'Narrativa maestra · IBM + Early Associates',
        priority: 'high',
        ideaEs: '1. Por qué IBM → 2. Por qué Early Associates / Hybrid Cloud & Data → 3. Por qué encaja conmigo.',
        ideaEn: '1. Why IBM → 2. Why Early Associates / Hybrid Cloud & Data → 3. Why it fits me.',
        keywords: ['IBM', 'Data', 'AI', 'Hybrid Cloud', 'Early Associates', 'ASISA', 'PHCA'],
        questionEs: '¿Por qué quieres trabajar en IBM y especialmente en este programa/área?',
        questionEn: 'Why do you want to work at IBM, and why this programme/area in particular?',
        variantsEs: ['¿Por qué IBM?', '¿Por qué Early Associates?', '¿Por qué Hybrid Cloud & Data?', '¿Por qué Strategy & Transformation como segunda opción?'],
        variantsEn: ['Why IBM?', 'Why Early Associates?', 'Why Hybrid Cloud & Data?', 'Why Strategy & Transformation as your second choice?'],
        answerEs: '1. Por qué IBM\nMe atrae IBM porque combina una base tecnológica muy fuerte con proyectos de transformación real. Me interesa especialmente poder trabajar con Data, AI, Analytics y Cloud, pero no como tecnologías aisladas, sino aplicadas a problemas empresariales y a decisiones de negocio.\n\n2. Por qué Early Associates y estas áreas\nMi primera opción es Hybrid Cloud & Data porque es donde más directamente encaja mi interés por analítica, ciencia de datos, automatización e inteligencia artificial aplicada. Además, quiero entender mejor cómo cloud permite desplegar y escalar esas soluciones. Como segunda opción elegiría Strategy & Transformation porque también me interesa la parte de convertir el análisis en cambios de proceso, decisiones y adopción dentro de una organización.\n\n3. Por qué encaja conmigo\nEn ASISA ya trabajé utilizando datos para apoyar decisiones de dirección, y en PHCA trabajé con analytics, automatización e IA aplicada a procesos internos. Esas experiencias me han hecho ver que quiero seguir desarrollando un perfil que combine profundidad técnica con comprensión del negocio. Por eso el Early Associates Program me parece una muy buena oportunidad para construir esa base en proyectos reales y con exposición a equipos distintos.',
        answerEn: '1. Why IBM\nWhat attracts me to IBM is the combination of a very strong technology foundation with real transformation projects. I am especially interested in working with Data, AI, Analytics and Cloud, but not as isolated technologies; I want to see how they are applied to business problems and decision-making.\n\n2. Why Early Associates and these areas\nMy first choice is Hybrid Cloud & Data because it is the area that most directly matches my interest in analytics, data science, automation and applied AI. I also want to understand better how cloud enables those solutions to be deployed and scaled. My second choice would be Strategy & Transformation because I am also interested in turning analysis into process change, decisions and adoption within an organisation.\n\n3. Why it fits me\nAt ASISA, I already worked with data to support management decisions, and at PHCA I worked with analytics, automation and AI applied to internal processes. Those experiences have shown me that I want to develop a profile that combines technical depth with business understanding. That is why the Early Associates Program feels like a very strong opportunity to build that foundation through real projects and exposure to different teams.'
      },
      {
        id: 'ibm-narrative-career',
        category: 'Narrativa · Career direction',
        priority: 'high',
        ideaEs: 'Construir base en Data/AI + negocio y evolucionar hacia ownership de transformación.',
        ideaEn: 'Build a Data/AI + business foundation and grow into ownership of transformation.',
        keywords: ['career', 'Data', 'AI', 'business', 'ownership'],
        questionEs: '¿Qué tipo de rol buscas y dónde te ves en cinco años?',
        questionEn: 'What kind of role are you looking for, and where do you see yourself in five years?',
        variantsEs: ['¿Cuál es tu rol objetivo?', '¿Dónde quieres especializarte?', '¿Qué buscas en tu siguiente experiencia?'],
        variantsEn: ['What is your target role?', 'Where do you want to specialise?', 'What are you looking for in your next experience?'],
        answerEs: 'Mi objetivo de carrera lo estructuro en tres etapas.\n\n1. Corto plazo: construir una base muy sólida en Data, Analytics e IA aplicada al negocio y aprender en proyectos reales.\n\n2. Medio plazo: ganar más ownership, entender mejor al cliente y ser capaz de hablar tanto con perfiles técnicos como de negocio.\n\n3. Largo plazo: convertirme en un perfil híbrido, con credibilidad técnica y criterio de negocio, especialmente en proyectos de datos, IA y transformación.\n\nNo busco un título concreto desde el principio; me importa más ir ganando capacidad para entender el problema completo y asumir cada vez más responsabilidad.',
        answerEn: 'I structure my career goal in three stages.\n\n1. Short term: build a very strong foundation in Data, Analytics and AI applied to business, and learn through real projects.\n\n2. Medium term: take more ownership, understand clients better and become comfortable communicating with both technical and business stakeholders.\n\n3. Long term: become a hybrid profile with technical credibility and strong business judgement, especially in data, AI and transformation projects.\n\nI am not focused on a specific title from the beginning; what matters more to me is gradually understanding the full problem and taking on more responsibility.',
      },
      {
        id: 'ibm-narrative-fit',
        category: 'Narrativa · Why you',
        priority: 'high',
        ideaEs: 'ASISA = decisión; Hospital = impacto; PHCA = IA/automatización; patrón común = tecnología útil.',
        ideaEn: 'ASISA = decisions; Hospital = impact; PHCA = AI/automation; common pattern = useful technology.',
        keywords: ['ASISA', 'Hospital', 'PHCA', 'Data', 'AI'],
        questionEs: '¿Por qué crees que tu perfil encaja con el programa?',
        questionEn: 'Why do you think your profile fits the programme?',
        variantsEs: ['¿Qué puedes aportar?', '¿Por qué deberíamos elegirte?', '¿Qué te diferencia?'],
        variantsEn: ['What can you bring?', 'Why should we choose you?', 'What differentiates you?'],
        answerEs: 'Creo que encajo por tres razones principales: base analítica, orientación a negocio y capacidad de aprender rápido.\n\n1. Base analítica: he trabajado con SQL, KPIs, automatización, analítica e inteligencia artificial en distintos proyectos.\n\n2. Orientación a negocio: en ASISA utilicé datos para apoyar decisiones de dirección, y en PHCA trabajé con IA y automatización aplicadas a procesos internos.\n\n3. Aprendizaje y adaptación: he trabajado en entornos distintos, incluido un contexto internacional, y estoy acostumbrado a aprender nuevas herramientas cuando el proyecto lo necesita.\n\nCreo que esa combinación encaja muy bien con un programa como Early Associates, donde hay que aprender rápido y conectar tecnología con problemas reales de negocio.',
        answerEn: 'I think I fit for three main reasons: analytical foundation, business orientation and ability to learn quickly.\n\n1. Analytical foundation: I have worked with SQL, KPIs, automation, analytics and AI across different projects.\n\n2. Business orientation: at ASISA, I used data to support management decisions, and at PHCA I worked with AI and automation applied to internal processes.\n\n3. Learning and adaptability: I have worked in different environments, including an international one, and I am used to learning new tools when a project requires them.\n\nI think that combination fits very well with a programme like Early Associates, where you need to learn quickly and connect technology with real business problems.'
      },
      {
        id: 'ibm-tech-etl',
        category: 'Technical · Data',
        priority: 'high',
        ideaEs: 'ETL transforma antes de cargar; ELT carga primero y transforma dentro.',
        ideaEn: 'ETL transforms before loading; ELT loads first and transforms inside.',
        keywords: ['ETL', 'ELT', 'warehouse', 'cloud', 'pipeline'],
        questionEs: '¿Cuál es la diferencia entre ETL y ELT y cuándo usarías cada uno?',
        questionEn: 'What is the difference between ETL and ELT, and when would you use each one?',
        answerEs: 'En ETL los datos se extraen, se transforman y después se cargan en el sistema destino. En ELT se extraen y cargan primero y la transformación se hace dentro del data warehouse o plataforma cloud. ETL puede ser útil cuando necesitas controlar y limpiar mucho el dato antes de almacenarlo. ELT encaja muy bien con plataformas cloud modernas porque aprovecha su capacidad de cómputo y permite conservar datos más cercanos al formato original para transformarlos después según el caso de uso.',
        answerEn: 'With ETL, data is extracted, transformed and then loaded into the target system. With ELT, data is extracted and loaded first, and transformation happens inside the data warehouse or cloud platform. ETL can be useful when data needs to be heavily controlled or cleaned before storage. ELT fits modern cloud platforms well because it takes advantage of their compute capacity and allows more raw data to be retained and transformed later depending on the use case.'
      },
      {
        id: 'ibm-tech-lake-warehouse',
        category: 'Technical · Data',
        priority: 'high',
        ideaEs: 'Warehouse = estructurado/BI; lake = datos variados y flexibilidad.',
        ideaEn: 'Warehouse = structured/BI; lake = varied data and flexibility.',
        keywords: ['data warehouse', 'data lake', 'structured', 'analytics', 'governance'],
        questionEs: '¿Qué diferencia hay entre un data warehouse y un data lake?',
        questionEn: 'What is the difference between a data warehouse and a data lake?',
        answerEs: 'Un data warehouse suele almacenar datos estructurados y modelados para reporting, BI y análisis consistente. Un data lake permite guardar grandes volúmenes de datos estructurados y no estructurados en formatos más cercanos al original, lo que da más flexibilidad para data science y nuevos casos de uso. La elección depende de las necesidades de consumo, gobierno, coste y velocidad, y en arquitecturas modernas ambos pueden coexistir.',
        answerEn: 'A data warehouse usually stores structured and modelled data for reporting, BI and consistent analytics. A data lake can store large volumes of structured and unstructured data in formats closer to the original source, giving more flexibility for data science and new use cases. The choice depends on consumption needs, governance, cost and speed, and in modern architectures both can coexist.'
      },
      {
        id: 'ibm-tech-batch-stream',
        category: 'Technical · Data',
        priority: 'medium',
        ideaEs: 'Batch procesa bloques; streaming procesa eventos casi en tiempo real.',
        ideaEn: 'Batch processes groups; streaming processes events near real time.',
        keywords: ['batch', 'streaming', 'latency', 'events', 'cost'],
        questionEs: '¿Cuál es la diferencia entre procesamiento batch y streaming?',
        questionEn: 'What is the difference between batch and streaming processing?',
        answerEs: 'Batch procesa conjuntos de datos de forma periódica, por ejemplo cada hora o cada noche. Streaming procesa eventos de forma continua o casi en tiempo real. Usaría batch cuando la latencia no sea crítica y priorice simplicidad o coste; streaming cuando el valor dependa de reaccionar rápido, como fraude, monitorización o personalización en tiempo real. La decisión depende del SLA y del valor de reducir la latencia.',
        answerEn: 'Batch processing handles groups of data periodically, for example every hour or every night. Streaming processes events continuously or close to real time. I would use batch when latency is not critical and simplicity or cost matter more, and streaming when value depends on reacting quickly, such as fraud detection, monitoring or real-time personalisation. The choice depends on the SLA and the value of reducing latency.'
      },
      {
        id: 'ibm-tech-window',
        category: 'Technical · SQL',
        priority: 'high',
        ideaEs: 'GROUP BY colapsa filas; window calcula sobre grupos sin perder cada fila.',
        ideaEn: 'GROUP BY collapses rows; window functions calculate across groups while preserving rows.',
        keywords: ['SQL', 'window function', 'GROUP BY', 'OVER', 'PARTITION BY'],
        questionEs: '¿Qué diferencia hay entre GROUP BY y una window function en SQL?',
        questionEn: 'What is the difference between GROUP BY and a window function in SQL?',
        answerEs: 'GROUP BY agrupa filas y devuelve una fila por grupo, por lo que reduce el nivel de detalle. Una window function calcula sobre un conjunto relacionado de filas pero mantiene cada fila individual en el resultado. Por ejemplo, con AVG(sales) OVER(PARTITION BY region) puedo mostrar cada venta junto con la media de su región. PARTITION BY define el grupo sobre el que se calcula, pero no colapsa las filas.',
        answerEn: 'GROUP BY groups rows and returns one row per group, so it reduces the level of detail. A window function performs a calculation across a related set of rows while keeping each individual row in the result. For example, AVG(sales) OVER(PARTITION BY region) lets me show each sale together with the average for its region. PARTITION BY defines the group used for the calculation, but it does not collapse the rows.'
      },
      {
        id: 'ibm-tech-hybrid',
        category: 'Technical · Cloud',
        priority: 'medium',
        ideaEs: 'Hybrid cloud combina entornos según seguridad, coste, regulación y rendimiento.',
        ideaEn: 'Hybrid cloud combines environments based on security, cost, regulation and performance.',
        keywords: ['public cloud', 'private cloud', 'on-prem', 'workloads', 'trade-offs'],
        questionEs: '¿Qué entiendes por hybrid cloud?',
        questionEn: 'What do you understand by hybrid cloud?',
        answerEs: 'Hybrid cloud combina distintos entornos, por ejemplo cloud pública, privada y sistemas on-premise, de forma que cada carga pueda ejecutarse donde tenga más sentido. La decisión puede depender de seguridad, regulación, coste, rendimiento, latencia o integración con sistemas existentes. Para mí la idea importante es que no se trata de mover todo a cloud, sino de elegir la combinación adecuada para cada necesidad.',
        answerEn: 'Hybrid cloud combines different environments, such as public cloud, private cloud and on-premise systems, so each workload can run where it makes the most sense. The decision can depend on security, regulation, cost, performance, latency or integration with existing systems. The key idea for me is that it is not about moving everything to the cloud, but choosing the right combination for each need.'
      }
    ]
  }
];

let interviewPackState = {
  packId: INTERVIEW_PACKS[0].id,
  questionIndex: 0,
  mode: 'learn',
  lang: 'es',
  revealed: false
};

function getInterviewPack(){
  return INTERVIEW_PACKS.find(pack => pack.id === interviewPackState.packId) || INTERVIEW_PACKS[0];
}

function packEscape(value){
  return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

function setInterviewPack(id){
  interviewPackState.packId = id;
  interviewPackState.questionIndex = 0;
  interviewPackState.revealed = false;
  renderInterviewPacks();
}

function setInterviewPackMode(mode){
  interviewPackState.mode = mode;
  interviewPackState.revealed = false;
  renderInterviewPacks();
}

function setInterviewPackLang(lang){
  interviewPackState.lang = lang;
  interviewPackState.revealed = false;
  renderInterviewPacks();
}

function stepInterviewPack(delta){
  const pack = getInterviewPack();
  interviewPackState.questionIndex = (interviewPackState.questionIndex + delta + pack.questions.length) % pack.questions.length;
  interviewPackState.revealed = false;
  renderInterviewPacks();
}

function toggleInterviewPackAnswer(){
  interviewPackState.revealed = !interviewPackState.revealed;
  renderInterviewPacks();
}

function getPackQuestionView(question){
  const lang = interviewPackState.lang;
  if(lang === 'en') return {question: question.questionEn, idea: question.ideaEn, answer: question.answerEn, label: '🇬🇧 English'};
  if(lang === 'bridge') return {
    question: question.questionEs + ' / ' + question.questionEn,
    idea: question.ideaEs + ' → ' + question.ideaEn,
    answer: question.answerEn,
    label: '🔀 ES → EN'
  };
  return {question: question.questionEs, idea: question.ideaEs, answer: question.answerEs, label: '🇪🇸 Español'};
}

function renderInterviewPacks(){
  const mount = document.getElementById('interviewPacksMount');
  if(!mount) return;
  const pack = getInterviewPack();
  const q = pack.questions[interviewPackState.questionIndex];
  const view = getPackQuestionView(q);
  const mode = interviewPackState.mode;

  const packButtons = INTERVIEW_PACKS.map(item =>
    '<button type="button" class="pack-tab ' + (item.id === pack.id ? 'active' : '') + '" onclick="setInterviewPack(\'' + item.id + '\')">' +
      '<span class="pack-tab-icon">' + packEscape(item.accent) + '</span><span><strong>' + packEscape(item.company) + '</strong><small>' + packEscape(item.role) + '</small></span>' +
    '</button>'
  ).join('');

  const answerVisible = mode === 'learn' || interviewPackState.revealed;
  const ideaVisible = mode !== 'interview';

  mount.innerHTML =
    '<div class="interview-pack-shell">' +
      '<div class="pack-selector">' + packButtons + '</div>' +
      '<div class="pack-meta"><div><span class="badge b-terra">' + packEscape(pack.stage) + '</span><h3>' + packEscape(pack.company) + ' · ' + packEscape(pack.role) + '</h3><p>' + packEscape(pack.description) + '</p></div><span class="pack-count">' + pack.questions.length + ' preguntas</span></div>' +
      '<div class="pack-controls">' +
        '<div class="pack-control-group"><span>Modo</span>' +
          '<button type="button" class="' + (mode==='learn'?'sel':'') + '" onclick="setInterviewPackMode(\'learn\')">📖 Learn</button>' +
          '<button type="button" class="' + (mode==='recall'?'sel':'') + '" onclick="setInterviewPackMode(\'recall\')">⚡ Recall</button>' +
          '<button type="button" class="' + (mode==='interview'?'sel':'') + '" onclick="setInterviewPackMode(\'interview\')">🎤 Interview</button>' +
        '</div>' +
        '<div class="pack-control-group"><span>Idioma</span>' +
          '<button type="button" class="' + (interviewPackState.lang==='es'?'sel':'') + '" onclick="setInterviewPackLang(\'es\')">🇪🇸 ES</button>' +
          '<button type="button" class="' + (interviewPackState.lang==='bridge'?'sel':'') + '" onclick="setInterviewPackLang(\'bridge\')">🔀 ES→EN</button>' +
          '<button type="button" class="' + (interviewPackState.lang==='en'?'sel':'') + '" onclick="setInterviewPackLang(\'en\')">🇬🇧 EN</button>' +
        '</div>' +
      '</div>' +
      '<article class="pack-study-card">' +
        '<div class="pack-study-top"><span class="pack-category">' + packEscape(q.category) + '</span><span class="pack-priority ' + packEscape(q.priority) + '">' + (q.priority==='high'?'High priority':'Medium priority') + '</span></div>' +
        '<div class="pack-position">Pregunta ' + (interviewPackState.questionIndex + 1) + ' de ' + pack.questions.length + ' · ' + view.label + '</div>' +
        '<div class="pack-question">' + packEscape(view.question) + '</div>' +
        ((interviewPackState.lang === 'en' ? q.variantsEn : q.variantsEs)?.length
          ? '<div class="pack-variants"><strong>También cubre:</strong>' +
            (interviewPackState.lang === 'en' ? q.variantsEn : q.variantsEs).map(v => '<span>' + packEscape(v) + '</span>').join('') +
            '</div>'
          : '') +
        (ideaVisible ? '<div class="pack-memory"><strong>🧠 Idea clave</strong><span>' + packEscape(view.idea) + '</span></div>' : '') +
        (ideaVisible ? '<div class="pack-keywords">' + q.keywords.map(k => '<span>' + packEscape(k) + '</span>').join('') + '</div>' : '') +
        (answerVisible ? '<div class="pack-answer"><strong>Respuesta modelo</strong><p>' + packEscape(view.answer) + '</p></div>' : '<button type="button" class="btn-t full pack-reveal" onclick="toggleInterviewPackAnswer()">Mostrar respuesta</button>') +
        '<div class="pack-nav"><button type="button" class="btn-o" onclick="stepInterviewPack(-1)">← Anterior</button><button type="button" class="btn-o" onclick="stepInterviewPack(1)">Siguiente →</button></div>' +
      '</article>' +
    '</div>';
}

window.INTERVIEW_PACKS = INTERVIEW_PACKS;
window.setInterviewPack = setInterviewPack;
window.setInterviewPackMode = setInterviewPackMode;
window.setInterviewPackLang = setInterviewPackLang;
window.stepInterviewPack = stepInterviewPack;
window.toggleInterviewPackAnswer = toggleInterviewPackAnswer;
window.renderInterviewPacks = renderInterviewPacks;

renderInterviewPacks();
