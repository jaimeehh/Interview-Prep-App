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
        answerEs: 'Lo resumiría en tres etapas.\\n\\n1. Corto plazo: quiero un rol analítico muy conectado al negocio, donde pueda seguir usando datos y tecnología para apoyar decisiones reales.\\n\\n2. Medio plazo: me gustaría evolucionar hacia Growth, Strategy o Business Analytics, con más ownership sobre proyectos, mercados y resultados.\\n\\n3. Largo plazo: quiero ser un perfil capaz de moverse con comodidad entre negocio y tecnología y liderar iniciativas donde datos e IA tengan impacto claro.\\n\\nNo me obsesiona un título concreto; me importa más construir una base sólida y asumir cada vez más responsabilidad.',
        answerEn: 'I would summarise it in three stages.\\n\\n1. Short term: I want an analytical role that is very close to the business, where I can keep using data and technology to support real decisions.\\n\\n2. Medium term: I would like to grow into Growth, Strategy or Business Analytics roles, with more ownership of projects, markets and outcomes.\\n\\n3. Long term: I want to become someone who can move comfortably between business and technology and lead initiatives where data and AI have a clear impact.\\n\\nI am not focused on a specific title; what matters more to me is building a strong foundation and gradually taking on more responsibility.'
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
        answerEs: 'Creo que encajo por tres razones.\\n\\n1. Datos + negocio: en ASISA utilicé datos e inteligencia competitiva para apoyar decisiones de dirección.\\n\\n2. Tecnología aplicada: en PHCA trabajé con analytics, automatización e IA para mejorar procesos internos.\\n\\n3. Forma de trabajar: soy curioso, aprendo rápido y me gusta entender primero el problema antes de elegir la herramienta.\\n\\nCreo que ese perfil encaja bien con Growth: entender el negocio, detectar oportunidades, apoyarse en datos y convertir el análisis en acción.',
        answerEn: 'I think I fit for three reasons.\\n\\n1. Data + business: at ASISA, I used data and competitive intelligence to support management decisions.\\n\\n2. Applied technology: at PHCA, I worked with analytics, automation and AI to improve internal processes.\\n\\n3. How I work: I am curious, I learn quickly and I like to understand the problem before choosing the tool.\\n\\nI think that profile fits Growth well: understand the business, identify opportunities, use data and turn analysis into action.'
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
        answerEs: 'Lo estructuraría en cinco bloques.\\n\\n1. Mercado: tamaño, crecimiento, demanda, cliente y competencia.\\n\\n2. Right to win: qué ventaja tendría Fever en esa ciudad: marca, datos, partners, canales o producto.\\n\\n3. Economics: ingresos, precio, costes, margen, inversión inicial y break-even.\\n\\n4. Entrada: build, partner / JV o acquire, según velocidad, control, inversión y capacidades.\\n\\n5. Piloto: probaría primero en pequeño, con KPIs claros, y escalaría sólo si se validan las hipótesis.',
        answerEn: 'I would structure it in five blocks.\\n\\n1. Market: size, growth, demand, customers and competition.\\n\\n2. Right to win: what advantage Fever would have in that city: brand, data, partners, channels or product.\\n\\n3. Economics: revenue, pricing, costs, margin, initial investment and break-even.\\n\\n4. Entry mode: build, partner / JV or acquire, depending on speed, control, investment and capabilities.\\n\\n5. Pilot: I would test on a small scale first, with clear KPIs, and scale only if the key assumptions are validated.'
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
        answerEs: 'Primero separaría crecimiento orgánico e inorgánico.\\n\\n1. Más clientes: adquisición, nuevos segmentos, canales o geografías.\\n\\n2. Más valor por cliente: más frecuencia, cross-selling, ticket medio o mejor mix.\\n\\n3. Más oferta: nuevos productos, experiencias o categorías.\\n\\n4. Inorgánico: partnerships, joint ventures o adquisiciones.\\n\\nDespués compararía cada palanca por impacto potencial, velocidad, inversión, riesgo y control.',
        answerEn: 'First, I would separate organic and inorganic growth.\\n\\n1. More customers: acquisition, new segments, channels or geographies.\\n\\n2. More value per customer: higher frequency, cross-selling, average ticket value or better mix.\\n\\n3. More offering: new products, experiences or categories.\\n\\n4. Inorganic growth: partnerships, joint ventures or acquisitions.\\n\\nThen I would compare each lever by potential impact, speed, investment, risk and control.'
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
        answerEs: 'Lo haría en cuatro pasos.\\n\\n1. Descomponer: tráfico × conversión × ticket medio.\\n\\n2. Segmentar: canal, mercado, dispositivo, tipo de experiencia o cliente.\\n\\n3. Buscar causas: pricing, campañas, disponibilidad, competencia o cambios de producto.\\n\\n4. Actuar: priorizar hipótesis con datos, probar una acción y medir el resultado.\\n\\nLa clave es no saltar directamente a una solución sin localizar antes dónde está la caída.',
        answerEn: 'I would do it in four steps.\\n\\n1. Break it down: traffic × conversion × average ticket value.\\n\\n2. Segment: channel, market, device, type of experience or customer.\\n\\n3. Look for causes: pricing, campaigns, availability, competition or product changes.\\n\\n4. Act: prioritise hypotheses with data, test an action and measure the result.\\n\\nThe key is not to jump straight to a solution before locating where the decline comes from.'
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
        answerEs: 'Lo evaluaría en cuatro puntos.\\n\\n1. Hipótesis: definir qué cambio espero y por qué.\\n\\n2. Métrica principal: por ejemplo conversión, definida antes de ver los resultados.\\n\\n3. Diseño: control vs tratamiento, muestra suficiente y periodo comparable.\\n\\n4. Resultado: mirar tamaño del efecto, significancia y posibles efectos secundarios.\\n\\nCon eso decidiría si escalar, iterar o descartar.',
        answerEn: 'I would evaluate it in four points.\\n\\n1. Hypothesis: define what change I expect and why.\\n\\n2. Primary metric: for example conversion, defined before seeing the results.\\n\\n3. Design: control vs treatment, enough sample size and a comparable period.\\n\\n4. Result: look at effect size, significance and possible side effects.\\n\\nBased on that, I would decide whether to scale, iterate or stop.'
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
        answerEs: 'Lo agruparía en cuatro bloques.\\n\\n1. Adquisición: tráfico, usuarios y CAC si aplica.\\n\\n2. Conversión: porcentaje que acaba comprando.\\n\\n3. Monetización: ticket medio, ingresos y margen.\\n\\n4. Retención: repetición, frecuencia y clientes recurrentes.\\n\\nDespués segmentaría por canal, mercado y tipo de experiencia para entender qué está impulsando realmente el crecimiento.',
        answerEn: 'I would group them into four blocks.\\n\\n1. Acquisition: traffic, users and CAC where relevant.\\n\\n2. Conversion: the percentage that ends up purchasing.\\n\\n3. Monetisation: average ticket value, revenue and margin.\\n\\n4. Retention: repeat behaviour, frequency and returning customers.\\n\\nThen I would segment by channel, market and type of experience to understand what is really driving growth.'
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
        answerEs: 'La diferencia clave es el orden.\\n\\n1. ETL: Extract → Transform → Load. Transformas antes de cargar.\\n\\n2. ELT: Extract → Load → Transform. Cargas primero y transformas dentro del warehouse o cloud.\\n\\n3. Cuándo usar cada uno: ETL si necesitas mucho control previo; ELT si quieres aprovechar el cómputo de plataformas cloud y mantener datos más cercanos al original.',
        answerEn: 'The key difference is the order.\\n\\n1. ETL: Extract → Transform → Load. You transform before loading.\\n\\n2. ELT: Extract → Load → Transform. You load first and transform inside the warehouse or cloud platform.\\n\\n3. When to use each: ETL when you need strong control before storage; ELT when you want to use cloud compute and keep data closer to its original form.'
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
        answerEs: 'Lo resumiría así.\\n\\n1. Data warehouse: datos estructurados y modelados para BI, reporting y análisis consistente.\\n\\n2. Data lake: datos estructurados y no estructurados, más cercanos al formato original y con más flexibilidad para data science.\\n\\n3. Elección: depende de consumo, gobierno, coste y velocidad. En arquitecturas modernas pueden coexistir.',
        answerEn: 'I would summarise it like this.\\n\\n1. Data warehouse: structured and modelled data for BI, reporting and consistent analytics.\\n\\n2. Data lake: structured and unstructured data, closer to the original format and more flexible for data science.\\n\\n3. Choice: it depends on consumption, governance, cost and speed. In modern architectures, both can coexist.'
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
        answerEs: 'La diferencia principal es la latencia.\\n\\n1. Batch: procesa bloques de datos cada cierto tiempo.\\n\\n2. Streaming: procesa eventos de forma continua o casi en tiempo real.\\n\\n3. Cuándo usar cada uno: batch si no necesitas reacción inmediata; streaming si el valor depende de responder rápido, como fraude o monitorización.',
        answerEn: 'The main difference is latency.\\n\\n1. Batch: processes groups of data periodically.\\n\\n2. Streaming: processes events continuously or near real time.\\n\\n3. When to use each: batch when you do not need an immediate response; streaming when value depends on reacting quickly, such as fraud detection or monitoring.'
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
        answerEs: 'La diferencia clave es si mantienes o no las filas originales.\\n\\n1. GROUP BY: agrupa y devuelve una fila por grupo.\\n\\n2. Window function: calcula sobre un grupo, pero mantiene cada fila.\\n\\n3. Ejemplo: AVG(sales) OVER(PARTITION BY region) muestra cada venta junto con la media de su región.\\n\\nPARTITION BY define el grupo; OVER indica que es una window function.',
        answerEn: 'The key difference is whether you keep the original rows.\\n\\n1. GROUP BY: groups rows and returns one row per group.\\n\\n2. Window function: calculates across a group while keeping each row.\\n\\n3. Example: AVG(sales) OVER(PARTITION BY region) shows each sale together with the average for its region.\\n\\nPARTITION BY defines the group; OVER indicates that it is a window function.'
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
        answerEs: 'Lo resumiría en tres ideas.\\n\\n1. Qué es: combinar cloud pública, privada y sistemas on-premise.\\n\\n2. Por qué: cada workload puede necesitar algo distinto por seguridad, regulación, coste, rendimiento o latencia.\\n\\n3. Idea clave: hybrid cloud no significa mover todo a cloud, sino elegir el entorno adecuado para cada necesidad.',
        answerEn: 'I would summarise it in three ideas.\\n\\n1. What it is: combining public cloud, private cloud and on-premise systems.\\n\\n2. Why: each workload may have different needs around security, regulation, cost, performance or latency.\\n\\n3. Key idea: hybrid cloud does not mean moving everything to the cloud; it means choosing the right environment for each need.'
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
