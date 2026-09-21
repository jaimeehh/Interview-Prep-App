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
        answerEs: '1. Por qué Fever\nMe gusta mucho la combinación de entretenimiento, tecnología y datos. Es un producto muy cercano al usuario, con presencia internacional y con muchos tipos de experiencias, mercados y partners. Además, me atrae que Fever sea una empresa muy data-driven, porque permite utilizar análisis para entender qué funciona, detectar oportunidades y mejorar el rendimiento.\n\n2. Por qué este programa\nEl Growth Graduate Program me interesa porque combina análisis, estrategia y ejecución. No me gustaría quedarme sólo en construir un modelo o analizar una métrica; quiero aprender también cómo se priorizan oportunidades, cómo se toman decisiones y cómo se mide después el impacto real.\n\n3. Por qué encaja conmigo\nMi base es Data Science y AI, pero siempre me ha gustado aplicarlas a problemas reales. En ASISA vi que disfrutaba cuando el análisis terminaba apoyando una decisión, y en PHCA trabajé con analytics, automatización e IA aplicada a procesos. Por eso este rol me parece una forma muy natural de seguir creciendo sin alejarme de la parte técnica.',
        answerEn: '1. Why Fever\nI really like the combination of entertainment, technology and data. It is a product that is very close to the customer, with an international presence and many different experiences, markets and partners. I also like the fact that Fever is very data-driven, because it means analysis can be used to understand what works, identify opportunities and improve performance.\n\n2. Why this programme\nThe Growth Graduate Program attracts me because it combines analysis, strategy and execution. I do not want to stay only on the side of building a model or analysing a metric; I also want to learn how opportunities are prioritised, how decisions are made and how the real impact is measured afterwards.\n\n3. Why it fits me\nMy background is in Data Science and AI, but I have always enjoyed applying them to real problems. At ASISA, I realised that I liked seeing analysis support a decision, and at PHCA I worked with analytics, automation and AI applied to processes. That is why this role feels like a very natural way to keep growing without moving away from the technical side.'
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
        answerEs: 'Lo resumiría en tres etapas.\n\n1. Corto plazo: seguir desarrollándome en Data Science, Analytics e IA aplicada a problemas reales.\n\n2. Medio plazo: ganar más ownership y entender mejor cómo mis análisis y modelos se traducen en decisiones y resultados.\n\n3. Largo plazo: ser un perfil técnico fuerte, pero capaz también de liderar proyectos y conectar Data/AI con estrategia y crecimiento.\n\nNo quiero alejarme de Data Science; quiero ampliar mi impacto alrededor de ella.',
        answerEn: 'I would summarise it in three stages.\n\n1. Short term: keep developing in Data Science, Analytics and AI applied to real problems.\n\n2. Medium term: take more ownership and understand better how my analyses and models translate into decisions and outcomes.\n\n3. Long term: become a strong technical profile who can also lead projects and connect Data/AI with strategy and growth.\n\nI do not want to move away from Data Science; I want to expand the impact I can have around it.'
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
        answerEs: 'Creo que encajo por tres razones.\n\n1. Datos + negocio\nEn ASISA trabajé muy cerca de la parte de negocio, usando datos e inteligencia competitiva para apoyar decisiones de dirección. Me gusta ese punto intermedio entre entender bien el problema y utilizar herramientas técnicas para resolverlo.\n\n2. Tecnología aplicada\nEn PHCA trabajé con analytics, automatización e IA para mejorar procesos internos. Ahí vi claramente cómo la tecnología puede ayudar a equipos de negocio a trabajar mejor y tomar decisiones con más información.\n\n3. Curiosidad y aprendizaje continuo\nSoy una persona bastante curiosa. Suelo ir a eventos y comunidades de Google Developers y seguir temas técnicos como Kotlin porque me gusta ver qué herramientas nuevas están apareciendo y cómo se pueden aplicar para optimizar procesos. No lo hago sólo por aprender tecnología, sino porque muchas veces de ahí salen ideas que luego puedes llevar a un problema real.\n\nCreo que esa mezcla de curiosidad, base técnica y capacidad de moverme entre negocio y tecnología puede aportar bastante en un equipo de Growth.',
        answerEn: 'I think I fit for three reasons.\n\n1. Data + business\nAt ASISA, I worked very close to the business side, using data and competitive intelligence to support management decisions. I like that middle ground between understanding the problem well and using technical tools to solve it.\n\n2. Applied technology\nAt PHCA, I worked with analytics, automation and AI to improve internal processes. That showed me clearly how technology can help business teams work better and make more informed decisions.\n\n3. Curiosity and continuous learning\nI am a very curious person. I regularly attend Google Developers events and follow technical communities and topics such as Kotlin because I like understanding which new tools are emerging and how they can be used to optimise processes. I do not do it just to learn technology; quite often, those ideas can later be applied to a real problem.\n\nI think that mix of curiosity, technical foundation and ability to move between business and technology can add value in a Growth team.'
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
        answerEs: 'Lo estructuraría en cinco bloques.\n\n1. Mercado\nPrimero miraría si la oportunidad merece la pena: tamaño de la ciudad, demanda, tipo de cliente, crecimiento y competencia. La idea es entender si hay suficiente potencial antes de pensar en cómo entrar.\n\n2. Right to win\nDespués analizaría por qué Fever podría ganar ahí: marca, datos, partners, canales, conocimiento del usuario o una experiencia diferencial. No basta con que el mercado sea atractivo; también tenemos que tener alguna ventaja clara.\n\n3. Economics\nEstimaría ingresos, precio, costes, margen, inversión inicial y break-even. Aquí comprobaría si la oportunidad tiene sentido también desde un punto de vista económico.\n\n4. Entrada\nCompararía construirlo internamente, entrar con un partner o JV, o adquirir capacidades existentes. Lo decidiría según velocidad, inversión, control y riesgo.\n\n5. Piloto\nEmpezaría pequeño, con KPIs claros —ventas, conversión, ocupación o margen— y sólo escalaría si se validan las hipótesis principales.\n\nEn resumen: primero compruebo si el mercado es atractivo, después si Fever puede ganar y, por último, si merece la pena económicamente y cómo probarlo con poco riesgo.',
        answerEn: 'I would structure it in five blocks.\n\n1. Market\nFirst, I would check whether the opportunity is worth pursuing: city size, demand, customer profile, growth and competition. The goal is to understand whether there is enough potential before thinking about how to enter.\n\n2. Right to win\nThen I would analyse why Fever could win there: brand, data, partners, channels, customer knowledge or a differentiated experience. It is not enough for the market to be attractive; Fever also needs a clear advantage.\n\n3. Economics\nI would estimate revenue, pricing, costs, margin, initial investment and break-even. This tells me whether the opportunity also makes sense financially.\n\n4. Entry mode\nI would compare building internally, entering with a partner or JV, or acquiring existing capabilities. The choice would depend on speed, investment, control and risk.\n\n5. Pilot\nI would start small, with clear KPIs such as sales, conversion, occupancy or margin, and scale only if the main assumptions are validated.\n\nSo the logic is: attractive market, clear right to win, sound economics, and then a low-risk way to test it.'
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
        answerEs: 'Primero separaría crecimiento orgánico e inorgánico.\n\n1. Más clientes\nLa primera palanca sería captar más usuarios: nuevos segmentos, canales, campañas o incluso nuevas zonas dentro de la ciudad.\n\n2. Más valor por cliente\nDespués miraría cómo aumentar frecuencia, repetición, cross-selling o ticket medio. Es decir, no sólo traer más gente, sino conseguir más valor de los clientes actuales.\n\n3. Más oferta\nTambién analizaría si podemos crecer con nuevas experiencias, categorías o productos que amplíen la demanda.\n\n4. Crecimiento inorgánico\nPor último, valoraría partnerships, joint ventures o adquisiciones si permiten acceder más rápido a audiencia, contenido, distribución o capacidades que Fever no tenga internamente.\n\nPara priorizar, compararía cada opción por impacto potencial, velocidad, inversión, riesgo y control. No elegiría una palanca sólo porque parezca atractiva; intentaría ver cuál mueve más el crecimiento con mejor relación impacto-riesgo.',
        answerEn: 'First, I would separate organic and inorganic growth.\n\n1. More customers\nThe first lever would be acquiring more users through new segments, channels, campaigns or even new areas within the city.\n\n2. More value per customer\nThen I would look at increasing frequency, repeat purchases, cross-selling or average ticket value. In other words, not only bringing in more people, but creating more value from existing customers.\n\n3. More offering\nI would also analyse whether growth could come from new experiences, categories or products that expand demand.\n\n4. Inorganic growth\nFinally, I would consider partnerships, joint ventures or acquisitions if they provide faster access to audiences, content, distribution or capabilities Fever does not have internally.\n\nTo prioritise, I would compare each option by potential impact, speed, investment, risk and control. I would not choose a lever just because it sounds attractive; I would look for the best impact-to-risk trade-off.'
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
        answerEs: 'Lo haría en cuatro pasos.\n\n1. Descomponer\nPrimero separaría ventas en sus drivers principales: tráfico × conversión × ticket medio. Así sé si el problema viene de menos usuarios, peor conversión o menor valor por compra.\n\n2. Segmentar\nDespués miraría por canal, mercado, dispositivo, tipo de experiencia y tipo de cliente. Muchas veces la caída no es general, sino que está concentrada en un segmento concreto.\n\n3. Buscar causas\nCon el punto exacto localizado, buscaría qué ha cambiado: pricing, campañas, disponibilidad, competencia, producto o incluso algún problema técnico.\n\n4. Actuar y medir\nPriorizaría las hipótesis más probables, probaría una acción concreta y mediría si recupera la métrica afectada.\n\nLa idea clave es ir de síntoma a causa: primero localizo dónde está la caída y sólo después propongo la solución.',
        answerEn: 'I would do it in four steps.\n\n1. Break it down\nFirst, I would split sales into the main drivers: traffic × conversion × average ticket value. That tells me whether the issue comes from fewer users, lower conversion or lower value per purchase.\n\n2. Segment\nThen I would look by channel, market, device, type of experience and customer type. Often the decline is not general, but concentrated in one segment.\n\n3. Find the cause\nOnce the exact problem is located, I would look for what changed: pricing, campaigns, availability, competition, product or even a technical issue.\n\n4. Act and measure\nI would prioritise the most likely hypotheses, test a specific action and measure whether the affected metric improves.\n\nThe key idea is to move from symptom to cause: first locate the decline, then propose the solution.'
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
        answerEs: 'Lo evaluaría en cuatro puntos.\n\n1. Hipótesis\nAntes de lanzar nada, definiría qué cambio espero y por qué. Por ejemplo: cambiar el orden de la página debería aumentar la conversión.\n\n2. Métrica principal\nElegiría una métrica clara antes de ver los resultados, por ejemplo conversión a compra. Así evito escoger después la métrica que más me convenga.\n\n3. Diseño\nCompararía control y tratamiento, con una muestra suficiente y durante un periodo comparable. También revisaría que no haya diferencias importantes entre los grupos.\n\n4. Resultado\nMiraría tamaño del efecto, significancia estadística y posibles efectos secundarios en otras métricas, como ticket medio o cancelaciones.\n\nDespués decidiría si escalar, iterar o descartar. Para mí, un A/B test no sirve sólo para decir “ganó B”, sino para aprender si la hipótesis era correcta y cuánto valor aporta el cambio.',
        answerEn: 'I would evaluate it in four points.\n\n1. Hypothesis\nBefore launching anything, I would define what change I expect and why. For example: changing the page order should increase conversion.\n\n2. Primary metric\nI would choose one clear metric before seeing the results, such as purchase conversion. That prevents selecting the most convenient metric afterwards.\n\n3. Design\nI would compare a control and treatment group, with enough sample size and over a comparable period. I would also check that there are no major differences between the groups.\n\n4. Result\nI would look at effect size, statistical significance and possible side effects on other metrics such as average ticket value or cancellations.\n\nThen I would decide whether to scale, iterate or stop. For me, an A/B test is not only about saying “B won”; it is about learning whether the hypothesis was correct and how much value the change creates.'
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
        answerEs: 'Lo agruparía en cuatro bloques.\n\n1. Adquisición\nTráfico, nuevos usuarios y CAC si aplica. Esto me dice cuánto volumen entra y cuánto cuesta conseguirlo.\n\n2. Conversión\nPorcentaje de usuarios que termina comprando y, si hace falta, conversión por etapa del funnel. Aquí veo si el problema está en transformar interés en compra.\n\n3. Monetización\nTicket medio, ingresos y margen. No basta con vender más; también quiero saber si ese crecimiento es rentable.\n\n4. Retención\nRepetición, frecuencia y porcentaje de clientes recurrentes. Esto ayuda a distinguir crecimiento puntual de crecimiento sostenible.\n\nDespués segmentaría por canal, mercado y tipo de experiencia. Para mí, la idea no es mirar muchos KPIs, sino encontrar cuáles explican de verdad el crecimiento y cómo se relacionan entre sí.',
        answerEn: 'I would group them into four blocks.\n\n1. Acquisition\nTraffic, new users and CAC where relevant. This tells me how much volume is entering and what it costs to acquire.\n\n2. Conversion\nThe percentage of users who end up purchasing and, if needed, conversion at each stage of the funnel. This shows whether the issue is turning interest into purchase.\n\n3. Monetisation\nAverage ticket value, revenue and margin. Selling more is not enough; I also want to know whether that growth is profitable.\n\n4. Retention\nRepeat purchases, frequency and the percentage of returning customers. This helps distinguish short-term growth from sustainable growth.\n\nThen I would segment by channel, market and type of experience. The goal is not to track many KPIs, but to identify which ones really explain growth and how they relate to each other.'
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
