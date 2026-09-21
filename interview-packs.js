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
        answerEs: '1. Por qué Fever\nMe atrae la combinación de entretenimiento, tecnología y datos. Por lo que he visto de Fever, no es sólo una plataforma de experiencias: también hay una parte tecnológica fuerte y una forma bastante analítica de trabajar. Eso me interesa porque el producto es muy cercano al usuario y el impacto de las decisiones se puede ver de una forma bastante directa.\n\n2. Por qué este programa\nEl Growth Graduate Program me gusta porque combina análisis con decisiones y ejecución. Me interesa no quedarme sólo en analizar datos, sino entender qué oportunidad merece la pena, qué acción probar y qué resultado ha tenido.\n\n3. Por qué encaja conmigo\nMi base es Data Science y AI, pero siempre me ha gustado aplicarlas a problemas reales. En ASISA trabajé con datos para apoyar decisiones y en PHCA con analytics, automatización e IA aplicada a procesos. Por eso veo este rol como una forma de seguir usando mi base técnica, pero estando más cerca del impacto final.',
        answerEn: '1. Why Fever\nI am attracted by the combination of entertainment, technology and data. From what I have seen about Fever, it is not only an experiences platform; there is also a strong technology component and a very analytical way of working. I like that because the product is close to the customer and the impact of decisions can be seen quite directly.\n\n2. Why this programme\nI like the Growth Graduate Program because it combines analysis with decisions and execution. I am interested in going beyond analysing data and learning which opportunities are worth pursuing, which actions to test and what impact they actually have.\n\n3. Why it fits me\nMy background is in Data Science and AI, but I have always enjoyed applying them to real problems. At ASISA, I used data to support decisions, and at PHCA I worked with analytics, automation and applied AI. That is why I see this role as a way to keep using my technical foundation while getting closer to the final impact.'
      },
      {
        id: 'fever-narrative-career',
        category: 'Narrativa · Career direction',
        priority: 'high',
        ideaEs: 'Quiero crecer desde Data Science / AI hacia roles con más impacto y ownership, sin perder la base técnica.',
        ideaEn: 'I want to grow from Data Science / AI into roles with more impact and ownership, without losing my technical foundation.',
        keywords: ['career', 'data science', 'AI', 'ownership', 'growth'],
        questionEs: '¿Qué tipo de rol buscas y dónde te ves en cinco años?',
        questionEn: 'What kind of role are you looking for, and where do you see yourself in five years?',
        variantsEs: ['¿Cuál es tu rol objetivo?', '¿Hacia dónde quieres orientar tu carrera?', '¿Dónde te ves a medio plazo?', '¿Qué buscas en tu siguiente experiencia?'],
        variantsEn: ['What is your target role?', 'Where do you want to take your career?', 'Where do you see yourself in the medium term?', 'What are you looking for in your next experience?'],
        answerEs: 'Lo veo en tres pasos.\n\n1. Ahora\nQuiero seguir desarrollándome en Data Science, Analytics e IA aplicada a problemas reales.\n\n2. Siguiente paso\nMe gustaría ganar más responsabilidad y entender mejor cómo un análisis o un modelo termina influyendo en una decisión o en un resultado.\n\n3. A medio plazo\nQuiero seguir siendo un perfil técnico, pero con capacidad para liderar proyectos y moverme bien entre Data/AI y equipos de negocio.\n\nNo quiero alejarme de Data Science; quiero ampliar el impacto que puedo tener desde ella.',
        answerEn: 'I see it in three steps.\n\n1. Now\nI want to keep developing in Data Science, Analytics and AI applied to real problems.\n\n2. Next step\nI would like to take on more responsibility and understand better how an analysis or model ends up influencing a decision or an outcome.\n\n3. Medium term\nI want to remain a technical profile, but with the ability to lead projects and work well between Data/AI and business teams.\n\nI do not want to move away from Data Science; I want to increase the impact I can have through it.'
      },
      {
        id: 'fever-narrative-fit',
        category: 'Narrativa · Why you',
        priority: 'high',
        ideaEs: 'Datos + negocio + curiosidad técnica: ASISA, PHCA y aprendizaje continuo.',
        ideaEn: 'Data + business + technical curiosity: ASISA, PHCA and continuous learning.',
        keywords: ['ASISA', 'PHCA', 'curiosity', 'Google Developers', 'data', 'AI'],
        questionEs: '¿Por qué crees que tu perfil encaja con Fever y con este puesto?',
        questionEn: 'Why do you think your profile fits Fever and this role?',
        variantsEs: ['¿Por qué deberíamos elegirte?', '¿Qué puedes aportar?', '¿Qué te diferencia?', '¿Cómo encaja tu experiencia con Growth?'],
        variantsEn: ['Why should we choose you?', 'What can you bring to the role?', 'What differentiates you?', 'How does your experience fit Growth?'],
        answerEs: 'Creo que podría aportar por tres razones.\n\n1. Base técnica\nVengo de Data Science y he trabajado con SQL, analytics, automatización e IA. Me siento cómodo entendiendo datos y buscando una solución técnica cuando hace falta.\n\n2. Puente entre técnico y negocio\nEn ASISA y PHCA muchas veces he estado justo en medio: entendiendo el problema, hablando con equipos no técnicos y luego traduciendo eso a una solución o análisis útil. Ese tipo de rol intermedio me gusta bastante.\n\n3. Curiosidad\nSoy una persona muy curiosa. Suelo ir a eventos de Google Developers y seguir comunidades y temas técnicos como Kotlin porque me gusta entender qué herramientas nuevas están apareciendo y si pueden servir para mejorar un proceso o resolver mejor un problema.\n\nCreo que esa combinación de base técnica, comunicación y curiosidad puede encajar bien en un rol de Growth donde hay que aprender rápido y moverse entre datos, problemas y decisiones.',
        answerEn: 'I think I could add value for three reasons.\n\n1. Technical foundation\nMy background is in Data Science and I have worked with SQL, analytics, automation and AI. I am comfortable understanding data and looking for a technical solution when it is needed.\n\n2. Bridge between technical and business teams\nAt ASISA and PHCA, I was often in the middle: understanding the problem, speaking with non-technical teams and then translating that into a useful analysis or solution. I really enjoy that kind of role.\n\n3. Curiosity\nI am a very curious person. I regularly attend Google Developers events and follow technical communities and topics such as Kotlin because I like understanding which new tools are emerging and whether they can help improve a process or solve a problem better.\n\nI think that combination of technical foundation, communication and curiosity can fit well in a Growth role where you need to learn quickly and move between data, problems and decisions.'
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
        answerEs: 'Lo dividiría en cinco pasos.\n\n1. Mercado\nPrimero miraría si hay una oportunidad real: demanda, tipo de cliente y competencia.\n\n2. Ventaja de Fever\nDespués pensaría qué puede aportar Fever frente a otras opciones: por ejemplo marca, partners o conocimiento del usuario.\n\n3. Números\nHaría una estimación sencilla de ingresos, costes y margen para ver si tiene sentido económicamente.\n\n4. Forma de entrar\nCompararía si conviene hacerlo internamente, con un partner o mediante otra fórmula más rápida.\n\n5. Piloto\nAntes de escalar, probaría en pequeño y mediría 2 o 3 KPIs claros, como ventas, conversión y margen.\n\nLa lógica para mí sería: ¿hay mercado?, ¿podemos competir?, ¿salen los números? y ¿cómo lo probamos con poco riesgo?',
        answerEn: 'I would divide it into five steps.\n\n1. Market\nFirst, I would check whether there is a real opportunity: demand, customer profile and competition.\n\n2. Fever\'s advantage\nThen I would think about what Fever could bring compared with other options, for example brand, partners or customer knowledge.\n\n3. Economics\nI would make a simple estimate of revenue, costs and margin to see whether it makes financial sense.\n\n4. Entry approach\nI would compare whether it is better to build internally, work with a partner or use another faster route.\n\n5. Pilot\nBefore scaling, I would test on a small scale and track 2 or 3 clear KPIs such as sales, conversion and margin.\n\nThe logic for me would be: is there a market, can we compete, do the numbers work, and how can we test it with low risk?'
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
        answerEs: 'Lo pensaría en cuatro palancas.\n\n1. Más clientes\nCaptar nuevos usuarios, por ejemplo con nuevos canales o segmentos.\n\n2. Más valor por cliente\nConseguir que repitan más o que aumente el ticket medio.\n\n3. Más oferta\nAñadir nuevas experiencias o categorías que generen más demanda.\n\n4. Crecimiento externo\nValorar partnerships o adquisiciones si permiten crecer más rápido.\n\nDespués compararía las opciones por impacto, coste y velocidad. La idea es no buscar diez palancas, sino identificar cuáles pueden mover más el resultado.',
        answerEn: 'I would think about four levers.\n\n1. More customers\nAcquire new users, for example through new channels or segments.\n\n2. More value per customer\nIncrease repeat purchases or average ticket value.\n\n3. More offering\nAdd new experiences or categories that can create more demand.\n\n4. External growth\nConsider partnerships or acquisitions if they can accelerate growth.\n\nThen I would compare the options by impact, cost and speed. The goal is not to list ten levers, but to identify which ones can move the result the most.'
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
        answerEs: 'Lo haría en cuatro pasos.\n\n1. Localizar la caída\nSepararía ventas en tráfico, conversión y ticket medio para ver dónde está el problema.\n\n2. Segmentar\nMiraría 2 o 3 cortes útiles, por ejemplo canal, dispositivo o tipo de cliente, para ver si la caída está concentrada.\n\n3. Buscar la causa\nRevisaría qué ha cambiado recientemente: por ejemplo precio, campaña o disponibilidad.\n\n4. Probar una acción\nFormularía una hipótesis, probaría una acción concreta y mediría si mejora la métrica afectada.\n\nLa idea es sencilla: primero localizar el problema, luego entender la causa y sólo después actuar.',
        answerEn: 'I would do it in four steps.\n\n1. Locate the decline\nI would break sales into traffic, conversion and average ticket value to see where the problem is.\n\n2. Segment\nI would look at 2 or 3 useful cuts, for example channel, device or customer type, to see whether the decline is concentrated.\n\n3. Find the cause\nI would review what has changed recently, for example price, campaign or availability.\n\n4. Test an action\nI would form a hypothesis, test a specific action and measure whether the affected metric improves.\n\nThe idea is simple: first locate the problem, then understand the cause, and only then act.'
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
        answerEs: 'Lo resumiría en cuatro cosas.\n\n1. Hipótesis\nDefinir qué cambio espero y por qué.\n\n2. Métrica\nElegir antes una métrica principal, por ejemplo conversión.\n\n3. Comparación\nTener un grupo control y otro con el cambio, con una muestra suficiente.\n\n4. Resultado\nMirar si la mejora es relevante y estadísticamente fiable, y comprobar que no empeora otra métrica importante.\n\nDespués decidiría si escalar, modificar o descartar el cambio.',
        answerEn: 'I would summarise it in four things.\n\n1. Hypothesis\nDefine what change I expect and why.\n\n2. Metric\nChoose one main metric beforehand, for example conversion.\n\n3. Comparison\nHave a control group and a treatment group, with enough sample size.\n\n4. Result\nCheck whether the improvement is meaningful and statistically reliable, and make sure it does not harm another important metric.\n\nThen I would decide whether to scale, modify or stop the change.'
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
        answerEs: 'Miraría cuatro bloques.\n\n1. Adquisición\nCuánta gente llega y cuánto cuesta captar usuarios.\n\n2. Conversión\nQué porcentaje termina comprando.\n\n3. Monetización\nIngresos y ticket medio.\n\n4. Retención\nSi los usuarios repiten y con qué frecuencia.\n\nDespués segmentaría sólo cuando haga falta, por ejemplo por canal o tipo de experiencia. Prefiero entender bien 4 métricas importantes que recitar una lista enorme de KPIs.',
        answerEn: 'I would look at four blocks.\n\n1. Acquisition\nHow many people arrive and how much it costs to acquire users.\n\n2. Conversion\nWhat percentage ends up purchasing.\n\n3. Monetisation\nRevenue and average ticket value.\n\n4. Retention\nWhether users come back and how often.\n\nThen I would segment only when needed, for example by channel or type of experience. I would rather understand 4 important metrics well than recite a huge list of KPIs.'
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
        answerEs: '1. Por qué IBM\nMe atrae IBM por su peso tecnológico y por la posibilidad de trabajar con Data, AI, Analytics y Cloud en proyectos reales. Me interesa especialmente un entorno donde puedas combinar profundidad técnica con problemas complejos de clientes y empresas.\n\n2. Por qué este programa y estas áreas\nMi primera opción es Hybrid Cloud & Data porque es la que más conecta con mi perfil de Data Science: analítica, automatización, IA y soluciones basadas en datos. También me interesa entender mejor cómo cloud permite desplegar y escalar esas soluciones. Strategy & Transformation sería mi segunda opción porque me gusta entender qué impacto tiene la tecnología en procesos y decisiones.\n\n3. Por qué encaja conmigo\nEn ASISA utilicé datos para apoyar decisiones de dirección y en PHCA trabajé con analytics, automatización e IA aplicada. Quiero seguir creciendo como Data Scientist, pero con exposición a proyectos de mayor escala y con una visión más completa de cómo la tecnología genera valor. Por eso IBM me parece un entorno muy fuerte para desarrollarme.',
        answerEn: '1. Why IBM\nIBM attracts me because of its strong technology focus and the opportunity to work with Data, AI, Analytics and Cloud on real projects. I am especially interested in an environment where you can combine technical depth with complex client and business problems.\n\n2. Why this programme and these areas\nMy first choice is Hybrid Cloud & Data because it is the area that best matches my Data Science profile: analytics, automation, AI and data-driven solutions. I also want to understand better how cloud enables those solutions to be deployed and scaled. Strategy & Transformation would be my second choice because I also like understanding the impact technology has on processes and decisions.\n\n3. Why it fits me\nAt ASISA, I used data to support management decisions, and at PHCA I worked with analytics, automation and applied AI. I want to keep growing as a Data Scientist, but with exposure to larger-scale projects and a broader understanding of how technology creates value. That is why IBM feels like a very strong environment for my development.'
      },
      {
        id: 'ibm-narrative-career',
        category: 'Narrativa · Career direction',
        priority: 'high',
        ideaEs: 'Seguir creciendo como Data Scientist / AI, con más escala, ownership y visión de impacto.',
        ideaEn: 'Keep growing as a Data Scientist / AI profile, with more scale, ownership and impact.',
        keywords: ['career', 'data science', 'AI', 'cloud', 'ownership'],
        questionEs: '¿Qué tipo de rol buscas y dónde te ves en cinco años?',
        questionEn: 'What kind of role are you looking for, and where do you see yourself in five years?',
        variantsEs: ['¿Cuál es tu rol objetivo?', '¿Dónde quieres especializarte?', '¿Qué buscas en tu siguiente experiencia?'],
        variantsEn: ['What is your target role?', 'Where do you want to specialise?', 'What are you looking for in your next experience?'],
        answerEs: 'Lo estructuro en tres etapas.\n\n1. Corto plazo: profundizar en Data Science, Analytics e IA aplicada, trabajando en proyectos reales y de mayor escala.\n\n2. Medio plazo: ganar más ownership técnico y entender mejor cómo se despliegan y escalan las soluciones.\n\n3. Largo plazo: ser un Data Scientist con una base técnica muy fuerte, pero también capaz de liderar proyectos y conectar la solución con el problema real.\n\nMi objetivo no es alejarme de lo técnico, sino crecer dentro de Data/AI con más responsabilidad.',
        answerEn: 'I structure it in three stages.\n\n1. Short term: deepen my skills in Data Science, Analytics and applied AI through real, larger-scale projects.\n\n2. Medium term: take more technical ownership and understand better how solutions are deployed and scaled.\n\n3. Long term: become a Data Scientist with a very strong technical foundation who can also lead projects and connect the solution to the real problem.\n\nMy goal is not to move away from the technical side, but to grow within Data/AI with more responsibility.',
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
        answerEs: 'La diferencia clave es el orden.\n\n1. ETL: Extract → Transform → Load. Transformas antes de cargar.\n\n2. ELT: Extract → Load → Transform. Cargas primero y transformas dentro del warehouse o cloud.\n\n3. Cuándo usar cada uno: ETL si necesitas mucho control previo; ELT si quieres aprovechar el cómputo de plataformas cloud y mantener datos más cercanos al original.',
        answerEn: 'The key difference is the order.\n\n1. ETL: Extract → Transform → Load. You transform before loading.\n\n2. ELT: Extract → Load → Transform. You load first and transform inside the warehouse or cloud platform.\n\n3. When to use each: ETL when you need strong control before storage; ELT when you want to use cloud compute and keep data closer to its original form.'
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
        answerEs: 'Lo resumiría así.\n\n1. Data warehouse: datos estructurados y modelados para BI, reporting y análisis consistente.\n\n2. Data lake: datos estructurados y no estructurados, más cercanos al formato original y con más flexibilidad para data science.\n\n3. Elección: depende de consumo, gobierno, coste y velocidad. En arquitecturas modernas pueden coexistir.',
        answerEn: 'I would summarise it like this.\n\n1. Data warehouse: structured and modelled data for BI, reporting and consistent analytics.\n\n2. Data lake: structured and unstructured data, closer to the original format and more flexible for data science.\n\n3. Choice: it depends on consumption, governance, cost and speed. In modern architectures, both can coexist.'
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
        answerEs: 'La diferencia principal es la latencia.\n\n1. Batch: procesa bloques de datos cada cierto tiempo.\n\n2. Streaming: procesa eventos de forma continua o casi en tiempo real.\n\n3. Cuándo usar cada uno: batch si no necesitas reacción inmediata; streaming si el valor depende de responder rápido, como fraude o monitorización.',
        answerEn: 'The main difference is latency.\n\n1. Batch: processes groups of data periodically.\n\n2. Streaming: processes events continuously or near real time.\n\n3. When to use each: batch when you do not need an immediate response; streaming when value depends on reacting quickly, such as fraud detection or monitoring.'
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
        answerEs: 'La diferencia clave es si mantienes o no las filas originales.\n\n1. GROUP BY: agrupa y devuelve una fila por grupo.\n\n2. Window function: calcula sobre un grupo, pero mantiene cada fila.\n\n3. Ejemplo: AVG(sales) OVER(PARTITION BY region) muestra cada venta junto con la media de su región.\n\nPARTITION BY define el grupo; OVER indica que es una window function.',
        answerEn: 'The key difference is whether you keep the original rows.\n\n1. GROUP BY: groups rows and returns one row per group.\n\n2. Window function: calculates across a group while keeping each row.\n\n3. Example: AVG(sales) OVER(PARTITION BY region) shows each sale together with the average for its region.\n\nPARTITION BY defines the group; OVER indicates that it is a window function.'
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
        answerEs: 'Lo resumiría en tres ideas.\n\n1. Qué es: combinar cloud pública, privada y sistemas on-premise.\n\n2. Por qué: cada workload puede necesitar algo distinto por seguridad, regulación, coste, rendimiento o latencia.\n\n3. Idea clave: hybrid cloud no significa mover todo a cloud, sino elegir el entorno adecuado para cada necesidad.',
        answerEn: 'I would summarise it in three ideas.\n\n1. What it is: combining public cloud, private cloud and on-premise systems.\n\n2. Why: each workload may have different needs around security, regulation, cost, performance or latency.\n\n3. Key idea: hybrid cloud does not mean moving everything to the cloud; it means choosing the right environment for each need.'
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

function formatPackAnswer(answer){
  const blocks = String(answer ?? '').split(/\n\s*\n/).filter(Boolean);
  return blocks.map(block => {
    const numbered = block.match(/^(\d+)\.\s*([^:\n]+)(?::\s*|\n)([\s\S]*)$/);
    if(numbered){
      return '<div class="pack-answer-step">' +
        '<div class="pack-answer-step-title"><span>' + packEscape(numbered[1]) + '</span>' + packEscape(numbered[2].trim()) + '</div>' +
        '<div class="pack-answer-step-body">' + packEscape(numbered[3].trim()) + '</div>' +
      '</div>';
    }
    return '<p class="pack-answer-paragraph">' + packEscape(block) + '</p>';
  }).join('');
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
        (answerVisible ? '<div class="pack-answer"><strong>Respuesta modelo</strong>' + formatPackAnswer(view.answer) + '</div>' : '<button type="button" class="btn-t full pack-reveal" onclick="toggleInterviewPackAnswer()">Mostrar respuesta</button>') +
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
