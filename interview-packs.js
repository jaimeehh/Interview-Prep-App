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
        answerEs: '1. Por qué IBM\nPara mí IBM representa tecnología, inteligencia artificial e innovación a gran escala. Además, su presencia internacional y el tipo de proyectos que desarrolla encajan muy bien con la dirección en la que quiero orientar mi carrera.\n\n2. Por qué este programa y estas áreas\nEl Early Associates Program me atrae porque me permitiría aprender de gente con experiencia, entender cómo se trabaja en proyectos reales y aportar desde el principio. Mi primera opción es Hybrid Cloud & Data por su conexión con Data Science, AI y Analytics; Strategy & Transformation sería la segunda porque también me interesa cómo la tecnología cambia procesos y decisiones.\n\n3. Por qué encaja conmigo\nEn ASISA utilicé datos para apoyar decisiones y en PHCA trabajé con analytics, automatización e IA aplicada. Quiero seguir creciendo en Data/AI, pero entendiendo también el impacto real de las soluciones, y creo que IBM encaja muy bien con ese objetivo.',
        answerEn: '1. Why IBM\nFor me, IBM represents technology, artificial intelligence and innovation at scale. Its international presence and the type of projects it works on also fit very well with the direction in which I want to take my career.\n\n2. Why this programme and these areas\nThe Early Associates Program attracts me because it would let me learn from experienced people, understand how real projects are approached and contribute from the beginning. My first choice is Hybrid Cloud & Data because it connects directly with Data Science, AI and Analytics; Strategy & Transformation would be my second choice because I am also interested in how technology changes processes and decisions.\n\n3. Why it fits me\nAt ASISA, I used data to support decisions, and at PHCA I worked with analytics, automation and applied AI. I want to keep growing in Data/AI while also understanding the real impact of the solutions, and I think IBM fits that goal very well.'
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
        answerEs: 'Lo veo en tres etapas.\n\n1. Corto plazo\nQuiero seguir profundizando en Data Science, Analytics e IA aplicada, trabajando en proyectos reales y con tecnologías que se utilicen a escala.\n\n2. Medio plazo\nMe gustaría ganar más ownership técnico y entender mejor todo el ciclo: desde el problema y los datos hasta el despliegue y el uso real de la solución.\n\n3. Largo plazo\nQuiero ser un Data Scientist con una base técnica fuerte, pero también capaz de liderar proyectos, comunicarme con equipos distintos y conectar la solución con el problema real.\n\nMi objetivo no es alejarme de lo técnico, sino crecer dentro de Data/AI con más responsabilidad y una visión más completa.',
        answerEn: 'I see it in three stages.\n\n1. Short term\nI want to keep deepening my skills in Data Science, Analytics and applied AI, working on real projects and with technologies that are used at scale.\n\n2. Medium term\nI would like to take on more technical ownership and understand the full cycle better: from the problem and the data to deployment and real use of the solution.\n\n3. Long term\nI want to become a Data Scientist with a strong technical foundation who can also lead projects, communicate with different teams and connect the solution to the real problem.\n\nMy goal is not to move away from the technical side, but to grow within Data/AI with more responsibility and a broader view.',
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
        answerEs: 'Creo que podría aportar por tres razones.\n\n1. Base técnica\nVengo de Data Science y he trabajado con SQL, analytics, automatización e IA. Eso me da una buena base para entender datos, estructurar un problema y buscar una solución técnica.\n\n2. Tecnología aplicada a problemas reales\nEn ASISA utilicé datos para apoyar decisiones de dirección y en PHCA trabajé con automatización e IA aplicada a procesos internos. Me gusta que la parte técnica tenga un uso claro y no se quede sólo en el modelo o en el análisis.\n\n3. Aprendizaje y adaptación\nHe trabajado en contextos distintos y también en un entorno internacional, así que estoy acostumbrado a aprender herramientas nuevas y adaptarme al tipo de proyecto. Además, soy bastante curioso y me gusta seguir aprendiendo por mi cuenta.\n\nCreo que esa combinación de base técnica, capacidad de adaptación y orientación a problemas reales encaja bien con un programa como Early Associates.',
        answerEn: 'I think I could add value for three reasons.\n\n1. Technical foundation\nMy background is in Data Science and I have worked with SQL, analytics, automation and AI. That gives me a strong base for understanding data, structuring a problem and looking for a technical solution.\n\n2. Technology applied to real problems\nAt ASISA, I used data to support management decisions, and at PHCA I worked with automation and AI applied to internal processes. I like the technical side to have a clear use and not stop at the model or the analysis.\n\n3. Learning and adaptability\nI have worked in different contexts, including an international environment, so I am used to learning new tools and adapting to the type of project. I am also quite curious and I like continuing to learn on my own.\n\nI think that combination of technical foundation, adaptability and focus on real problems fits well with a programme like Early Associates.'
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
        answerEs: 'La diferencia principal está en cuándo transformas los datos.\n\n1. ETL\nExtract → Transform → Load. Primero limpias y transformas los datos y después los cargas en el sistema destino. Lo usaría cuando necesito mucho control antes de almacenar la información.\n\n2. ELT\nExtract → Load → Transform. Primero cargas los datos y los transformas después dentro del warehouse o de la plataforma cloud. Es muy útil cuando tienes mucha capacidad de cómputo y quieres conservar datos más cercanos al formato original.\n\n3. Cómo lo elegiría\nNo lo vería como que uno es mejor que otro. Depende del entorno, del volumen de datos y de cuánto control necesito antes de almacenar.',
        answerEn: 'The main difference is when the data is transformed.\n\n1. ETL\nExtract → Transform → Load. You clean and transform the data first and then load it into the target system. I would use it when I need strong control before storing the data.\n\n2. ELT\nExtract → Load → Transform. You load the data first and transform it later inside the warehouse or cloud platform. It is very useful when you have strong compute capacity and want to keep data closer to its original form.\n\n3. How I would choose\nI would not see one as automatically better than the other. It depends on the environment, data volume and how much control is needed before storage.'
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
        answerEs: 'La diferencia está sobre todo en cómo guardas y para qué usas los datos.\n\n1. Data warehouse\nSuele tener datos más estructurados y modelados, preparados para reporting, BI y análisis consistente.\n\n2. Data lake\nPermite guardar datos más variados y más cercanos al formato original, por lo que da más flexibilidad para Data Science, ML o nuevos casos de uso.\n\n3. Idea clave\nNo son necesariamente excluyentes. En una arquitectura moderna pueden convivir: el lake para flexibilidad y el warehouse para consumo más estructurado.',
        answerEn: 'The main difference is how the data is stored and what it is used for.\n\n1. Data warehouse\nIt usually contains more structured and modelled data, prepared for reporting, BI and consistent analytics.\n\n2. Data lake\nIt can store more varied data closer to its original form, which gives more flexibility for Data Science, ML or new use cases.\n\n3. Key idea\nThey are not necessarily mutually exclusive. In a modern architecture, they can coexist: the lake for flexibility and the warehouse for more structured consumption.'
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
        answerEs: 'La diferencia principal es cuándo procesas los datos.\n\n1. Batch\nProcesas bloques de datos cada cierto tiempo, por ejemplo cada hora o cada noche. Es suficiente cuando no necesitas reaccionar al momento.\n\n2. Streaming\nProcesas eventos de forma continua o casi en tiempo real. Tiene sentido cuando el valor está en reaccionar rápido.\n\n3. Ejemplo\nPara un informe diario usaría batch; para fraude o monitorización en tiempo real, streaming.\n\nLa elección depende sobre todo de la latencia que necesita el caso de uso.',
        answerEn: 'The main difference is when the data is processed.\n\n1. Batch\nYou process groups of data periodically, for example every hour or every night. It is enough when you do not need an immediate response.\n\n2. Streaming\nYou process events continuously or near real time. It makes sense when the value comes from reacting quickly.\n\n3. Example\nFor a daily report I would use batch; for fraud detection or real-time monitoring, streaming.\n\nThe choice mainly depends on the latency required by the use case.'
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
        answerEs: 'La diferencia clave es si mantienes o no las filas originales.\n\n1. GROUP BY\nAgrupa las filas y devuelve una fila por grupo. Por ejemplo, una media de ventas por región.\n\n2. Window function\nHace un cálculo sobre un grupo, pero mantiene cada fila. Eso me permite comparar cada registro con información de su grupo sin perder detalle.\n\n3. Ejemplo\nAVG(sales) OVER(PARTITION BY region) muestra cada venta y, al lado, la media de su región.\n\nPara recordarlo: GROUP BY resume; window calcula sin colapsar.',
        answerEn: 'The key difference is whether you keep the original rows.\n\n1. GROUP BY\nIt groups rows and returns one row per group. For example, average sales by region.\n\n2. Window function\nIt performs a calculation across a group while keeping every row. That lets me compare each record with information from its group without losing detail.\n\n3. Example\nAVG(sales) OVER(PARTITION BY region) shows each sale together with the average for its region.\n\nThe easiest way to remember it is: GROUP BY summarises; a window function calculates without collapsing the rows.'
      },
      {
        id: 'ibm-tech-iaas-paas-saas',
        category: 'Technical · Cloud',
        priority: 'high',
        ideaEs: 'IaaS = infraestructura; PaaS = plataforma; SaaS = software listo para usar.',
        ideaEn: 'IaaS = infrastructure; PaaS = platform; SaaS = ready-to-use software.',
        keywords: ['IaaS', 'PaaS', 'SaaS', 'cloud', 'responsibility'],
        questionEs: '¿Cuál es la diferencia entre IaaS, PaaS y SaaS?',
        questionEn: 'What is the difference between IaaS, PaaS and SaaS?',
        answerEs: 'La diferencia principal es cuánto gestiona el proveedor y cuánto gestionas tú.\n\n1. IaaS\nTe dan la infraestructura: máquinas virtuales, red y almacenamiento. Tú sigues gestionando sistema operativo, aplicaciones y datos. Un ejemplo sería alquilar capacidad de cómputo en cloud.\n\n2. PaaS\nEl proveedor gestiona también gran parte de la plataforma y tú te centras más en desarrollar y desplegar la aplicación. Es útil cuando quieres avanzar rápido sin administrar tanta infraestructura.\n\n3. SaaS\nEs el software ya terminado y listo para usar. Tú simplemente utilizas la aplicación, como un CRM o una herramienta de correo.\n\nPara recordarlo: IaaS te da infraestructura, PaaS te da un entorno para construir y SaaS te da directamente el producto.',
        answerEn: 'The main difference is how much the provider manages and how much you manage yourself.\n\n1. IaaS\nYou get the infrastructure: virtual machines, networking and storage. You still manage the operating system, applications and data. A simple example is renting compute capacity in the cloud.\n\n2. PaaS\nThe provider also manages most of the platform, so you can focus more on developing and deploying the application. It is useful when you want to move quickly without managing as much infrastructure.\n\n3. SaaS\nThis is finished software that is ready to use. You simply use the application, such as a CRM or an email tool.\n\nThe easiest way to remember it is: IaaS gives you infrastructure, PaaS gives you an environment to build on, and SaaS gives you the finished product.'
      },
      {
        id: 'ibm-case-ai-client',
        category: 'Case · AI / Consulting',
        priority: 'high',
        ideaEs: 'Problema → datos → caso de uso → piloto → impacto y riesgos.',
        ideaEn: 'Problem → data → use case → pilot → impact and risks.',
        keywords: ['AI', 'client', 'use case', 'pilot', 'ROI'],
        questionEs: 'Un cliente quiere usar IA pero no sabe por dónde empezar. ¿Cómo lo abordarías?',
        questionEn: 'A client wants to use AI but does not know where to start. How would you approach it?',
        answerEs: 'Lo estructuraría en cinco pasos.\n\n1. Entender el problema\nPrimero preguntaría qué proceso quieren mejorar y qué objetivo persiguen. No empezaría proponiendo IA sin saber qué problema estamos resolviendo.\n\n2. Revisar los datos\nMiraría qué datos existen, su calidad y si realmente permiten construir una solución útil.\n\n3. Elegir un caso de uso\nPriorizaría uno o dos casos con impacto claro y dificultad razonable, por ejemplo automatizar una tarea repetitiva o mejorar una predicción.\n\n4. Piloto\nHaría un pequeño proof of concept con una métrica clara de éxito.\n\n5. Escalar con control\nSi funciona, pensaría en despliegue, adopción, seguridad y monitorización.\n\nLa idea es no usar IA porque esté de moda, sino empezar por un problema concreto y demostrar valor antes de escalar.',
        answerEn: 'I would structure it in five steps.\n\n1. Understand the problem\nFirst, I would ask which process they want to improve and what objective they are trying to achieve. I would not start by proposing AI without knowing the problem we are solving.\n\n2. Review the data\nI would look at what data exists, its quality and whether it can actually support a useful solution.\n\n3. Choose a use case\nI would prioritise one or two cases with clear impact and reasonable difficulty, for example automating a repetitive task or improving a prediction.\n\n4. Pilot\nI would build a small proof of concept with a clear success metric.\n\n5. Scale with control\nIf it works, I would then think about deployment, adoption, security and monitoring.\n\nThe idea is not to use AI just because it is fashionable, but to start from a concrete problem and prove value before scaling.'
      },
      {
        id: 'ibm-behavioral-explain-technical',
        category: 'Behavioral · Communication',
        priority: 'high',
        ideaEs: 'Simplificar sin perder la idea: contexto → analogía → impacto.',
        ideaEn: 'Simplify without losing the idea: context → analogy → impact.',
        keywords: ['communication', 'stakeholders', 'technical', 'client', 'clarity'],
        questionEs: '¿Cómo explicarías un concepto técnico a una persona no técnica?',
        questionEn: 'How would you explain a technical concept to a non-technical person?',
        answerEs: 'Lo haría en tres pasos.\n\n1. Empezar por el problema\nPrimero explicaría para qué sirve y por qué debería importarle a esa persona.\n\n2. Simplificar\nEvitaría jerga y usaría un ejemplo o una analogía sencilla. Si estuviera explicando un modelo predictivo, hablaría de cómo utiliza patrones del pasado para estimar qué puede pasar después.\n\n3. Volver al impacto\nTerminaría explicando qué decisión permite tomar o qué proceso mejora.\n\nEn ASISA y PHCA ya he tenido que moverme entre perfiles técnicos y no técnicos, así que intento adaptar siempre el nivel de detalle a la persona que tengo delante.',
        answerEn: 'I would do it in three steps.\n\n1. Start with the problem\nFirst, I would explain what it is useful for and why that person should care.\n\n2. Simplify\nI would avoid jargon and use a simple example or analogy. If I were explaining a predictive model, I might say that it uses patterns from the past to estimate what could happen next.\n\n3. Return to the impact\nI would finish by explaining what decision it helps make or what process it improves.\n\nAt ASISA and PHCA, I already had to move between technical and non-technical profiles, so I always try to adapt the level of detail to the person in front of me.'
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
        answerEs: 'Yo lo entiendo como una combinación de distintos entornos según lo que necesite cada caso.\n\n1. Qué es\nCombinar cloud pública, cloud privada y sistemas on-premise dentro de una misma arquitectura.\n\n2. Por qué se usa\nNo todos los workloads necesitan lo mismo. Algunos priorizan seguridad o regulación; otros escalabilidad, coste o velocidad.\n\n3. Idea clave\nHybrid cloud no significa mover todo a cloud. Significa elegir el entorno más adecuado para cada necesidad y conseguir que esos entornos trabajen juntos.',
        answerEn: 'I understand it as combining different environments depending on what each use case needs.\n\n1. What it is\nCombining public cloud, private cloud and on-premise systems within the same architecture.\n\n2. Why it is used\nNot every workload has the same needs. Some prioritise security or regulation; others need scalability, cost efficiency or speed.\n\n3. Key idea\nHybrid cloud does not mean moving everything to the cloud. It means choosing the right environment for each need and making those environments work together.'
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
