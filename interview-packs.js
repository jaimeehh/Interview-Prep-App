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
        answerEs: '1. Por qué Fever\nMe gusta Fever porque combina tres cosas que me atraen mucho: tecnología, entretenimiento y uso de datos. Además, tiene una presencia internacional muy fuerte y me parece una empresa moderna, con un entorno donde puedes aprender rápido y ver cómo se desarrolla un producto en distintos mercados. Para mí sería una buena oportunidad de aplicar mi base técnica en Data Science e IA a un sector distinto y muy cercano al usuario.\n\n2. Por qué este programa\nMe interesa especialmente el Growth Graduate Program porque mezcla análisis, estrategia y ejecución. No quiero quedarme sólo en analizar una métrica o construir un modelo; me interesa entender qué oportunidad hay detrás, qué decisión se toma y qué impacto tiene después. Ese punto entre dato y decisión es justo lo que más me atrae del rol.\n\n3. Por qué encaja conmigo\nEn ASISA ya tuve una experiencia parecida desde estrategia interna, donde usaba datos para apoyar decisiones y entender mejor el mercado. También en PHCA trabajé con analytics, automatización e IA aplicada a procesos. Por eso creo que este rol encaja conmigo: tengo una base técnica, pero me gusta aplicarla a problemas reales, aprender rápido y adaptarme según lo que necesita el negocio.',
        answerEn: '1. Why Fever\nI like Fever because it combines three things that really attract me: technology, entertainment and the use of data. It also has a strong international presence, and it feels like a modern environment where you can learn quickly and see how a product develops across different markets. For me, it would be a great opportunity to apply my Data Science and AI background to a different sector that is very close to the customer.\n\n2. Why this programme\nI am especially interested in the Growth Graduate Program because it combines analysis, strategy and execution. I do not want to stay only on the side of analysing a metric or building a model; I also want to understand the opportunity behind it, the decision that is made and the impact afterwards. That connection between data and decision-making is exactly what attracts me most about the role.\n\n3. Why it fits me\nAt ASISA, I already had a similar experience in internal strategy, where I used data to support decisions and understand the market better. At PHCA, I also worked with analytics, automation and applied AI. That is why I think this role fits me well: I have a technical foundation, but I like applying it to real problems, learning quickly and adapting to what the business needs.'
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
        answerEs: 'Lo veo en tres pasos.\n\n1. Ahora\nQuiero seguir desarrollándome en Data Science, Analytics e IA aplicada, pero siempre en proyectos donde pueda entender para qué sirve lo que estoy haciendo y qué impacto tiene.\n\n2. Siguiente paso\nMe gustaría ir ganando más responsabilidad y estar más cerca de la decisión. No sólo construir un análisis o un modelo, sino entender qué problema estamos resolviendo y cómo se utiliza después.\n\n3. A medio plazo\nQuiero seguir siendo un perfil técnico, pero con capacidad para liderar proyectos y comunicarme bien con equipos de negocio. Me interesa mucho ese punto intermedio entre Data/AI y estrategia.\n\nNo quiero alejarme de Data Science; quiero ampliar el impacto que puedo tener desde ella.',
        answerEn: 'I see it in three steps.\n\n1. Now\nI want to keep developing in Data Science, Analytics and applied AI, but always in projects where I can understand why the work matters and what impact it has.\n\n2. Next step\nI would like to take on more responsibility and get closer to decision-making. Not only building an analysis or model, but understanding the problem we are solving and how the result is used afterwards.\n\n3. Medium term\nI want to remain a technical profile, but with the ability to lead projects and communicate well with business teams. I am very interested in that middle ground between Data/AI and strategy.\n\nI do not want to move away from Data Science; I want to increase the impact I can have through it.'
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
        answerEs: 'Creo que podría aportar por tres razones.\n\n1. Base técnica\nVengo de Data Science y he trabajado con SQL, analytics, automatización e IA. Eso me permite sentirme cómodo con los datos, entender un problema y buscar una solución técnica cuando hace falta.\n\n2. Puente entre técnico y negocio\nEn ASISA y PHCA muchas veces he estado en ese punto intermedio: entender una necesidad de negocio, hablar con perfiles no técnicos y después traducirlo a un análisis, una automatización o una solución útil. Es una forma de trabajar que me gusta bastante.\n\n3. Curiosidad\nSoy una persona muy curiosa y me gusta estar aprendiendo constantemente. Suelo ir a eventos de Google Developers y seguir comunidades y tecnologías como Kotlin porque me interesa entender qué está apareciendo y cómo se puede utilizar para mejorar procesos o resolver mejor un problema.\n\nCreo que esa mezcla de curiosidad, base técnica y capacidad de moverme entre equipos distintos puede ser útil en un entorno de Growth.',
        answerEn: 'I think I could add value for three reasons.\n\n1. Technical foundation\nMy background is in Data Science and I have worked with SQL, analytics, automation and AI. That makes me comfortable working with data, understanding a problem and looking for a technical solution when needed.\n\n2. Bridge between technical and business teams\nAt ASISA and PHCA, I was often in that middle ground: understanding a business need, speaking with non-technical people and then translating it into an analysis, automation or useful solution. I really enjoy working that way.\n\n3. Curiosity\nI am a very curious person and I like learning continuously. I regularly attend Google Developers events and follow communities and technologies such as Kotlin because I like understanding what is emerging and how it can be used to improve processes or solve a problem better.\n\nI think that mix of curiosity, technical foundation and ability to work across different teams can be useful in a Growth environment.'
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
        answerEs: 'Lo estructuraría en cinco partes.\n\n1. Mercado\nPrimero intentaría entender si realmente hay una oportunidad. Miraría cosas básicas como demanda, perfil del cliente y competencia. La idea es saber si tiene sentido entrar antes de pensar en cómo hacerlo.\n\n2. Ventaja de Fever\nDespués pensaría qué puede aportar Fever frente a otras opciones. Por ejemplo, una buena red de partners, conocimiento del usuario o una marca fuerte. Si el mercado es atractivo pero no tenemos ninguna ventaja, la oportunidad puede no ser tan buena.\n\n3. Números\nHaría una estimación sencilla de ingresos, costes y margen. No buscaría una precisión perfecta al principio; sólo comprobar si el orden de magnitud tiene sentido.\n\n4. Forma de entrar\nCompararía si conviene hacerlo internamente, con un partner o mediante otra fórmula más rápida. Dependería sobre todo de velocidad, inversión y control.\n\n5. Piloto\nAntes de escalar, probaría en pequeño y mediría unos pocos KPIs claros, por ejemplo ventas, conversión y margen.\n\nLa lógica sería muy simple: ¿hay mercado?, ¿podemos competir?, ¿salen los números? y ¿cómo lo probamos con poco riesgo?',
        answerEn: 'I would structure it in five parts.\n\n1. Market\nFirst, I would try to understand whether there is a real opportunity. I would look at basic things such as demand, customer profile and competition. The idea is to know whether entering the market makes sense before thinking about how to do it.\n\n2. Fever\'s advantage\nThen I would think about what Fever could bring compared with other options. For example, a strong partner network, customer knowledge or brand. If the market is attractive but we have no real advantage, the opportunity may not be as strong.\n\n3. Economics\nI would make a simple estimate of revenue, costs and margin. I would not aim for perfect accuracy at the beginning; I would just check whether the order of magnitude makes sense.\n\n4. Entry approach\nI would compare whether it is better to build internally, work with a partner or use another faster route. The decision would mainly depend on speed, investment and control.\n\n5. Pilot\nBefore scaling, I would test on a small scale and track a few clear KPIs, for example sales, conversion and margin.\n\nThe logic would be simple: is there a market, can we compete, do the numbers work, and how can we test it with low risk?'
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
        answerEs: 'Lo pensaría en cuatro palancas.\n\n1. Más clientes\nLa primera opción sería crecer captando nuevos usuarios, por ejemplo entrando en nuevos segmentos o usando nuevos canales.\n\n2. Más valor por cliente\nTambién miraría si podemos hacer que los clientes actuales compren con más frecuencia o aumenten su ticket medio.\n\n3. Más oferta\nOtra vía sería ampliar el catálogo con nuevas experiencias o categorías que generen demanda adicional.\n\n4. Crecimiento externo\nY si necesitamos velocidad, valoraría partnerships o adquisiciones que permitan acceder más rápido a audiencia, contenido o capacidades.\n\nDespués compararía las opciones por impacto, coste y velocidad. La idea no es decir diez palancas, sino encontrar las dos o tres que realmente pueden mover el resultado.',
        answerEn: 'I would think about four levers.\n\n1. More customers\nThe first option would be to grow by acquiring new users, for example through new segments or channels.\n\n2. More value per customer\nI would also look at whether existing customers can buy more frequently or increase their average ticket value.\n\n3. More offering\nAnother route would be expanding the catalogue with new experiences or categories that create additional demand.\n\n4. External growth\nAnd if speed is important, I would consider partnerships or acquisitions that provide faster access to audiences, content or capabilities.\n\nThen I would compare the options by impact, cost and speed. The idea is not to list ten levers, but to identify the two or three that can really move the result.'
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
        answerEs: 'Lo haría en cuatro pasos.\n\n1. Localizar la caída\nPrimero separaría ventas en tráfico, conversión y ticket medio. Con eso ya puedo ver si el problema es que entra menos gente, compra menos gente o se gasta menos.\n\n2. Segmentar\nDespués miraría algunos cortes útiles, por ejemplo canal, dispositivo o tipo de cliente. Así puedo comprobar si la caída está concentrada en una parte concreta.\n\n3. Buscar la causa\nUna vez localizado el problema, revisaría qué ha cambiado recientemente, por ejemplo precio, campaña o disponibilidad.\n\n4. Probar una acción\nFormularía una hipótesis, probaría una acción concreta y mediría si mejora la métrica afectada.\n\nLa idea es ir de síntoma a causa: primero localizo dónde está el problema y sólo después propongo una solución.',
        answerEn: 'I would do it in four steps.\n\n1. Locate the decline\nFirst, I would break sales into traffic, conversion and average ticket value. That already tells me whether fewer people are arriving, fewer people are buying or customers are spending less.\n\n2. Segment\nThen I would look at a few useful cuts, for example channel, device or customer type. This helps me check whether the decline is concentrated in one specific area.\n\n3. Find the cause\nOnce the problem is located, I would review what has changed recently, for example price, campaign or availability.\n\n4. Test an action\nI would form a hypothesis, test a specific action and measure whether the affected metric improves.\n\nThe idea is to move from symptom to cause: first locate the problem, then propose a solution.'
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
        answerEs: 'Lo resumiría en cuatro pasos.\n\n1. Hipótesis\nPrimero definiría qué cambio espero y por qué. Por ejemplo, un cambio en la página debería mejorar la conversión.\n\n2. Métrica\nElegiría antes una métrica principal, para saber claramente qué significa que el experimento ha funcionado.\n\n3. Comparación\nTendría un grupo control y otro con el cambio, intentando que ambos sean comparables y que haya suficiente muestra.\n\n4. Resultado\nMiraría si la mejora es relevante, si es estadísticamente fiable y si no empeora otra métrica importante.\n\nCon eso decidiría si escalar, modificar o descartar el cambio.',
        answerEn: 'I would summarise it in four steps.\n\n1. Hypothesis\nFirst, I would define what change I expect and why. For example, a page change should improve conversion.\n\n2. Metric\nI would choose one main metric beforehand, so it is clear what success actually means.\n\n3. Comparison\nI would have a control group and a treatment group, making sure they are comparable and that the sample is large enough.\n\n4. Result\nI would check whether the improvement is meaningful, statistically reliable and does not harm another important metric.\n\nThen I would decide whether to scale, modify or stop the change.'
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
        answerEs: 'Miraría cuatro bloques.\n\n1. Adquisición\nCuánta gente llega y cuánto cuesta captar usuarios. Aquí quiero saber si estamos consiguiendo suficiente volumen.\n\n2. Conversión\nQué porcentaje termina comprando. Esto me ayuda a ver si conseguimos transformar interés en ventas.\n\n3. Monetización\nIngresos y ticket medio. Así puedo comprobar no sólo cuánto vendemos, sino cuánto valor genera cada compra.\n\n4. Retención\nSi los usuarios repiten y con qué frecuencia. Esto me ayuda a diferenciar crecimiento puntual de crecimiento más sostenible.\n\nDespués segmentaría sólo cuando haga falta, por ejemplo por canal o tipo de experiencia. Prefiero entender bien cuatro métricas importantes que recitar una lista enorme de KPIs.',
        answerEn: 'I would look at four blocks.\n\n1. Acquisition\nHow many people arrive and how much it costs to acquire users. Here I want to know whether we are bringing in enough volume.\n\n2. Conversion\nWhat percentage ends up purchasing. This helps me understand whether interest is turning into sales.\n\n3. Monetisation\nRevenue and average ticket value. This shows not only how much we sell, but how much value each purchase creates.\n\n4. Retention\nWhether users come back and how often. This helps distinguish short-term growth from more sustainable growth.\n\nThen I would segment only when needed, for example by channel or type of experience. I would rather understand four important metrics well than recite a huge list of KPIs.'
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
