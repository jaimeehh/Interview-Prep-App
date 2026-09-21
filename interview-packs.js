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
        id: 'fever-narrative-company',
        category: 'Narrativa · Why Fever',
        priority: 'high',
        ideaEs: 'Fever = tecnología + datos + negocio; yo ya he visto cómo IA está acercando negocio e IT.',
        ideaEn: 'Fever = technology + data + business; I have already seen AI bringing business and IT closer.',
        keywords: ['technology', 'data-driven', 'AI', 'business', 'growth'],
        questionEs: '¿Por qué Fever?',
        questionEn: 'Why Fever?',
        variantsEs: ['¿Por qué quieres trabajar aquí?', '¿Qué te atrae de Fever?', '¿Por qué esta empresa y no otra?', '¿Por qué te interesa este sector?'],
        variantsEn: ['Why do you want to work here?', 'What attracts you to Fever?', 'Why this company rather than another one?', 'Why are you interested in this industry?'],
        answerEs: 'Me interesa Fever porque representa muy bien el tipo de entorno en el que quiero desarrollar mi carrera: una empresa donde tecnología, datos y negocio están muy conectados. En mis experiencias anteriores he trabajado cerca de la parte de negocio y he visto un cambio muy fuerte con la llegada de la inteligencia artificial. Equipos que antes dependían mucho más de procesos manuales o de IT ahora tienen nuevas herramientas para analizar información, automatizar tareas y optimizar procesos. En PHCA, por ejemplo, trabajé precisamente en iniciativas de IA y automatización que acercaban esa capacidad tecnológica a equipos operativos. Esa evolución me parece muy potente y es donde siento que mi perfil encaja mejor. Fever, además, tiene un producto muy tangible y una cultura claramente data-driven, así que me atrae la posibilidad de seguir aprendiendo en un entorno donde una decisión analítica puede traducirse rápidamente en crecimiento y en una experiencia real para el usuario.',
        answerEn: 'I am interested in Fever because it represents the kind of environment in which I want to develop my career: a company where technology, data and business are closely connected. In my previous experience, I have worked close to the business side and I have seen a major shift with the rise of AI. Teams that used to depend much more on manual processes or on IT now have new tools to analyse information, automate tasks and optimise processes. At PHCA, for example, I worked on AI and automation initiatives that brought those technical capabilities closer to operational teams. I find that evolution very exciting, and it is where I feel my profile fits best. Fever also has a very tangible product and a clearly data-driven culture, so I like the idea of learning in an environment where an analytical decision can quickly translate into growth and a real customer experience.'
      },
      {
        id: 'fever-narrative-growth',
        category: 'Narrativa · Why Growth',
        priority: 'high',
        ideaEs: 'Growth es la evolución natural de mi experiencia: dato → problema de negocio → decisión → ejecución → impacto.',
        ideaEn: 'Growth is a natural evolution of my experience: data → business problem → decision → execution → impact.',
        keywords: ['Growth', 'analytics', 'AI', 'strategy', 'execution'],
        questionEs: '¿Por qué Growth y por qué el Growth Graduate Program?',
        questionEn: 'Why Growth and why the Growth Graduate Program?',
        variantsEs: ['¿Por qué Growth y no Data Science puro?', '¿Qué entiendes por Growth?', '¿Qué quieres aprender en el programa?', '¿Por qué este Graduate Program?'],
        variantsEn: ['Why Growth instead of pure Data Science?', 'What does Growth mean to you?', 'What do you want to learn in the programme?', 'Why this Graduate Programme?'],
        answerEs: 'Para mí Growth es una evolución bastante natural de lo que ya he ido haciendo. En ASISA trabajé en estrategia interna y construí una herramienta de inteligencia competitiva para que Dirección Médica pudiera tomar decisiones con datos; ahí entendí que lo que más me motivaba no era únicamente construir el análisis, sino ver cómo ese análisis cambiaba una decisión. Después, en PHCA, vi cómo IA, automatización y nuevas herramientas estaban dando cada vez más capacidad a equipos de negocio y acercándolos a IT. Eso reforzó mucho mi interés por trabajar justo en esa intersección. Por eso no veo Growth como alejarme de Data Science, sino como utilizar esa base técnica más cerca del negocio. Y el Graduate Program me atrae porque quiero aprender el ciclo completo: entender el mercado, formular hipótesis, priorizar oportunidades, ejecutar y medir el impacto. Es precisamente la parte que quiero desarrollar ahora.',
        answerEn: 'For me, Growth is a very natural evolution of what I have already been doing. At ASISA, I worked on internal strategy and built a competitive-intelligence tool so that the Medical Direction could make better data-driven decisions. That experience made me realise that what motivated me most was not only building the analysis, but seeing how the analysis actually changed a decision. Later, at PHCA, I saw how AI, automation and new tools were giving business teams much more capability and bringing them closer to IT. That reinforced my interest in working exactly at that intersection. So I do not see Growth as moving away from Data Science; I see it as using that technical foundation closer to the business. The Graduate Program attracts me because I want to learn the full cycle: understand the market, build hypotheses, prioritise opportunities, execute and measure impact. That is exactly the capability I want to develop now.'
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
        ideaEs: 'Tres evidencias: ASISA negocio+datos, Hospital impacto operativo, PHCA IA+automatización.',
        ideaEn: 'Three proofs: ASISA business+data, Hospital operational impact, PHCA AI+automation.',
        keywords: ['ASISA', 'Hospital', 'PHCA', 'impact', 'adaptability'],
        questionEs: '¿Por qué crees que tu perfil encaja con Fever y con este puesto?',
        questionEn: 'Why do you think your profile fits Fever and this role?',
        variantsEs: ['¿Por qué deberíamos elegirte?', '¿Qué puedes aportar?', '¿Qué te diferencia?', '¿Cómo encaja tu experiencia con Growth?'],
        variantsEn: ['Why should we choose you?', 'What can you bring to the role?', 'What differentiates you?', 'How does your experience fit Growth?'],
        answerEs: 'Creo que mi principal encaje está en que ya he trabajado varias veces justo entre tecnología y negocio. En ASISA tuve que transformar datos dispersos en una herramienta de inteligencia competitiva útil para decisiones de dirección. En el Hospital Universitario del Sureste trabajé sobre un problema operativo real, desarrollando una solución de planificación que contribuyó a reducir las listas de espera un 22 %. Y en PHCA, en Estados Unidos, trabajé con analítica, automatización e IA para mejorar procesos internos y hacer la información más útil para distintos equipos. Son contextos muy diferentes, pero tienen un patrón común: entender primero el problema, utilizar datos o tecnología con sentido práctico y medir si realmente mejora algo. Creo que ese enfoque, junto con mi curiosidad y mi capacidad para aprender rápido, encaja especialmente bien con un entorno de Growth.',
        answerEn: 'I think my strongest fit comes from the fact that I have already worked several times at the intersection of technology and business. At ASISA, I had to turn scattered data into a competitive-intelligence tool that was useful for management decisions. At Hospital Universitario del Sureste, I worked on a real operational problem and developed a planning solution that contributed to a 22% reduction in waiting lists. And at PHCA in the US, I worked with analytics, automation and AI to improve internal processes and make information more useful for different teams. These are very different environments, but they share the same pattern: understand the problem first, use data or technology in a practical way and measure whether it actually improves something. I think that approach, together with my curiosity and ability to learn quickly, fits especially well with a Growth environment.'
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
        id: 'ibm-narrative-company',
        category: 'Narrativa · Why IBM',
        priority: 'high',
        ideaEs: 'IBM me permite unir Data/AI con transformación real y aprendizaje en proyectos.',
        ideaEn: 'IBM lets me combine Data/AI with real transformation and project-based learning.',
        keywords: ['IBM', 'Data', 'AI', 'transformation', 'learning'],
        questionEs: '¿Por qué IBM y por qué el Early Associates Internship Program?',
        questionEn: 'Why IBM and why the Early Associates Internship Program?',
        variantsEs: ['¿Por qué IBM?', '¿Por qué este programa?', '¿Qué buscas aprender aquí?', '¿Por qué consulting/technology?'],
        variantsEn: ['Why IBM?', 'Why this programme?', 'What do you want to learn here?', 'Why consulting/technology?'],
        answerEs: 'Me interesa IBM porque combina dos cosas que quiero mantener juntas en mi carrera: profundidad tecnológica y aplicación real en negocio. En mis experiencias anteriores he visto que los proyectos que más me motivan son aquellos donde una herramienta de datos, automatización o IA termina cambiando un proceso o una decisión. En PHCA, por ejemplo, trabajé precisamente en iniciativas de IA y automatización para equipos operativos; y en ASISA vi cómo una plataforma de datos podía apoyar decisiones estratégicas de dirección. IBM me parece un entorno ideal para seguir desarrollando ese perfil porque permite trabajar con tecnologías como analytics, AI y cloud, pero siempre dentro de proyectos de transformación. El Early Associates Program me atrae especialmente por la posibilidad de aprender en proyectos reales, con equipos multidisciplinares y exposición a distintos tipos de problemas antes de especializarme demasiado pronto.',
        answerEn: 'I am interested in IBM because it combines two things I want to keep together in my career: technical depth and real business application. In my previous experience, the projects that motivated me most were those where a data, automation or AI solution actually changed a process or a decision. At PHCA, for example, I worked on AI and automation initiatives for operational teams, and at ASISA I saw how a data platform could support strategic management decisions. IBM feels like an ideal environment to keep developing that profile because it offers exposure to analytics, AI and cloud within real transformation projects. The Early Associates Program is especially attractive to me because it gives me the opportunity to learn through real projects, multidisciplinary teams and different types of problems before specialising too narrowly.'
      },
      {
        id: 'ibm-narrative-preferences',
        category: 'Narrativa · Areas of interest',
        priority: 'high',
        ideaEs: '1ª Hybrid Cloud & Data por Data/AI; 2ª Strategy & Transformation por llevar insight a cambio real.',
        ideaEn: '1st Hybrid Cloud & Data for Data/AI; 2nd Strategy & Transformation for turning insight into change.',
        keywords: ['Hybrid Cloud & Data', 'AI', 'Analytics', 'Strategy', 'Transformation'],
        questionEs: '¿Por qué Hybrid Cloud & Data como primera opción y Strategy & Transformation como segunda?',
        questionEn: 'Why Hybrid Cloud & Data as your first choice and Strategy & Transformation as your second?',
        variantsEs: ['¿Qué área te interesa más?', '¿Por qué Data/AI?', '¿Por qué Strategy & Transformation?', '¿Qué tipo de proyectos quieres hacer?'],
        variantsEn: ['Which area interests you most?', 'Why Data/AI?', 'Why Strategy & Transformation?', 'What kind of projects do you want to work on?'],
        answerEs: 'Mi primera opción es Hybrid Cloud & Data porque es donde más directamente encaja mi experiencia y lo que más disfruto: trabajar con datos, analítica, automatización e inteligencia artificial aplicados a problemas reales. En PHCA trabajé con IA y automatización, y en ASISA con SQL, KPIs y herramientas de análisis para apoyar decisiones. Me gustaría seguir profundizando en ese tipo de proyectos, entendiendo además cómo cloud permite desplegar y escalar soluciones de datos e IA. Mi segunda opción sería Strategy & Transformation porque también me interesa mucho la parte que viene después del análisis: cómo conviertes un insight en una decisión, cambias un proceso y consigues adopción. De hecho, esa conexión entre tecnología y transformación aparece en casi todas mis experiencias, así que veo ambas áreas como complementarias más que como caminos separados.',
        answerEn: 'My first choice is Hybrid Cloud & Data because it is the area that most directly matches my experience and what I enjoy most: working with data, analytics, automation and AI applied to real problems. At PHCA, I worked with AI and automation, and at ASISA I used SQL, KPIs and analytical tools to support decisions. I would like to keep going deeper into that kind of work while also understanding how cloud enables data and AI solutions to be deployed and scaled. My second choice would be Strategy & Transformation because I am also very interested in what happens after the analysis: how you turn an insight into a decision, change a process and achieve adoption. In fact, that connection between technology and transformation appears across most of my experience, so I see the two areas as complementary rather than separate paths.'
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
        answerEs: 'A corto plazo quiero construir una base muy sólida en Data, Analytics e IA aplicada al negocio. No quiero limitarme a desarrollar modelos de forma aislada; me interesa entender el problema, el proceso y cómo una solución técnica acaba generando valor. Por eso me atraen entornos como IBM, donde puedo aprender tanto de tecnología como de transformación y clientes. A medio plazo me gustaría ganar cada vez más ownership sobre proyectos, ser capaz de hablar con perfiles técnicos y de negocio y ayudar a definir qué solución tiene sentido, no sólo implementarla. En cinco años me gustaría ser un perfil híbrido, con credibilidad técnica y criterio de negocio, especialmente en proyectos de datos, IA y transformación.',
        answerEn: 'In the short term, I want to build a very strong foundation in Data, Analytics and AI applied to business. I do not want to limit myself to developing models in isolation; I am interested in understanding the problem, the process and how a technical solution ultimately creates value. That is why environments like IBM appeal to me, because I can learn about both technology and transformation while working with clients. In the medium term, I would like to take increasing ownership of projects, communicate comfortably with both technical and business stakeholders and help define which solution makes sense, not just implement it. In five years, I would like to be a hybrid profile with technical credibility and strong business judgement, especially in data, AI and transformation projects.'
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
        answerEs: 'Creo que encajo porque mi experiencia ya combina tres dimensiones que el programa puede potenciar mucho. En ASISA trabajé con datos y estrategia, transformando información competitiva en decisiones para dirección. En el Hospital trabajé sobre un problema operativo real y desarrollé una solución que contribuyó a reducir listas de espera un 22 %. Y en PHCA trabajé en un entorno internacional con analytics, automatización e inteligencia artificial para mejorar procesos internos. Lo que une las tres experiencias es que nunca he utilizado tecnología por utilizarla: primero intento entender el problema, después elijo la herramienta adecuada y finalmente compruebo si realmente mejora algo. Creo que esa mezcla de base técnica, curiosidad, orientación a negocio y capacidad para adaptarme a contextos distintos encaja muy bien con un programa como Early Associates.',
        answerEn: 'I think I fit because my experience already combines three dimensions that this programme can develop further. At ASISA, I worked with data and strategy, turning competitive information into management decisions. At the Hospital, I worked on a real operational problem and developed a solution that contributed to a 22% reduction in waiting lists. And at PHCA, I worked in an international environment with analytics, automation and AI to improve internal processes. What connects all three experiences is that I have never used technology just for the sake of it: I first try to understand the problem, then choose the right tool and finally check whether it actually improves something. I think that mix of technical foundation, curiosity, business orientation and adaptability fits very well with a programme like Early Associates.'
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
