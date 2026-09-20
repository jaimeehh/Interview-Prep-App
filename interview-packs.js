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
        id: 'fever-why',
        category: 'Motivation',
        priority: 'high',
        ideaEs: 'Tecnología + datos + entretenimiento + escala internacional + impacto.',
        ideaEn: 'Technology + data + entertainment + international scale + impact.',
        keywords: ['data-driven', 'technology', 'international', 'growth', 'impact'],
        questionEs: '¿Por qué Fever?',
        questionEn: 'Why Fever?',
        answerEs: 'Me interesa Fever porque combina tres cosas que busco en mi siguiente etapa: tecnología, datos y decisiones de negocio con impacto real. Me atrae que sea una compañía tecnológica dentro del entretenimiento, con una escala internacional muy grande y una cultura claramente data-driven. Además, el producto es muy tangible: puedes analizar un mercado, detectar una oportunidad y ver cómo una decisión termina impactando en una experiencia real. Para mí es un entorno muy atractivo porque puedo aprovechar mi base técnica y analítica, pero acercándome cada vez más a estrategia y crecimiento.',
        answerEn: 'I am interested in Fever because it combines three things I am looking for in my next step: technology, data and business decisions with real impact. I like the fact that it is a technology company in the live-entertainment space, operating at international scale with a very data-driven culture. The product is also very tangible: you can analyse a market, identify an opportunity and see how a decision eventually affects a real experience. For me, it is a very attractive environment because I can use my technical and analytical background while moving closer to strategy and growth.'
      },
      {
        id: 'fever-why-program',
        category: 'Role fit',
        priority: 'high',
        ideaEs: 'Aprender Growth haciendo: análisis → decisión → ejecución → impacto.',
        ideaEn: 'Learn Growth by doing: analysis → decision → execution → impact.',
        keywords: ['hands-on', 'analytics', 'strategy', 'ownership', 'learning'],
        questionEs: '¿Por qué el Growth Graduate Program?',
        questionEn: 'Why the Growth Graduate Program?',
        answerEs: 'Me atrae especialmente porque no lo veo como un programa puramente formativo, sino como una forma de aprender Growth trabajando sobre problemas reales. Quiero desarrollar una base sólida en análisis de mercado, estrategia y toma de decisiones, pero también entender qué ocurre después del análisis: cómo se prioriza, cómo se ejecuta y cómo se mide el impacto. Creo que ese recorrido encaja muy bien conmigo porque ya vengo de trabajar con datos y KPIs, y ahora quiero ganar más exposición a decisiones de negocio y ownership.',
        answerEn: 'What attracts me most is that I do not see it as a purely training-based programme, but as a way to learn Growth by working on real problems. I want to build a strong foundation in market analysis, strategy and decision-making, but I also want to understand what happens after the analysis: how priorities are set, how ideas are executed and how impact is measured. That path fits me very well because I already have experience working with data and KPIs, and now I want more exposure to business decisions and ownership.'
      },
      {
        id: 'fever-growth-vs-data',
        category: 'Career direction',
        priority: 'high',
        ideaEs: 'No abandonar data; usarla más cerca de la decisión.',
        ideaEn: 'Not leaving data behind; using it closer to decisions.',
        keywords: ['data', 'business', 'decision-making', 'strategy', 'impact'],
        questionEs: '¿Por qué Growth y no un puesto puramente de Data Science?',
        questionEn: 'Why Growth instead of a purely Data Science role?',
        answerEs: 'No lo veo como alejarme de Data Science, sino como acercar mis capacidades analíticas a la decisión de negocio. Lo que más he disfrutado en mis experiencias no ha sido únicamente construir un análisis, sino entender qué problema había detrás, definir las métricas correctas y convertir los resultados en una acción concreta. Por eso me interesa Growth: sigo utilizando datos de forma rigurosa, pero con una conexión mucho más directa con estrategia, mercado, cliente y resultados.',
        answerEn: 'I do not see it as moving away from Data Science. I see it as bringing my analytical skills closer to business decision-making. What I have enjoyed most in my previous experiences was not only building an analysis, but understanding the problem behind it, defining the right metrics and turning the results into a concrete action. That is why Growth appeals to me: I can still use data rigorously, but with a much more direct connection to strategy, markets, customers and business outcomes.'
      },
      {
        id: 'fever-growth-understanding',
        category: 'Role understanding',
        priority: 'high',
        ideaEs: 'Entender mercado, medir funnel, formular hipótesis, priorizar acciones.',
        ideaEn: 'Understand the market, measure the funnel, form hypotheses, prioritise actions.',
        keywords: ['market', 'funnel', 'hypotheses', 'experiments', 'KPIs'],
        questionEs: '¿Qué entiendes por Growth en Fever?',
        questionEn: 'What does Growth at Fever mean to you?',
        answerEs: 'Lo entiendo como una función muy analítica y muy conectada al negocio. Partiría de entender el mercado y el comportamiento del usuario, identificaría dónde están las oportunidades o fricciones del funnel, formularía hipótesis y utilizaría datos para priorizar las acciones con mayor impacto. También esperaría trabajar de forma muy transversal, porque para hacer crecer un mercado o una experiencia necesitas conectar análisis, marketing, operaciones y estrategia. Lo que me atrae es precisamente esa combinación entre entender el dato y convertirlo en una decisión.',
        answerEn: 'I see it as a highly analytical function that is very close to the business. I would start by understanding the market and user behaviour, identify opportunities or friction points in the funnel, form hypotheses and use data to prioritise the actions with the highest potential impact. I would also expect it to be very cross-functional, because growing a market or an experience requires connecting analytics, marketing, operations and strategy. That combination of understanding the data and turning it into a decision is exactly what attracts me.'
      },
      {
        id: 'fever-target-role',
        category: 'Career direction',
        priority: 'high',
        ideaEs: 'Rol analítico de negocio: Growth / Strategy / Analytics.',
        ideaEn: 'Analytical business role: Growth / Strategy / Analytics.',
        keywords: ['analytical', 'business', 'strategy', 'ownership', 'measurable impact'],
        questionEs: '¿Qué tipo de rol buscas en esta etapa de tu carrera?',
        questionEn: 'What kind of role are you looking for at this stage of your career?',
        answerEs: 'Busco un rol analítico orientado a negocio, donde pueda utilizar datos para entender problemas, priorizar oportunidades y apoyar decisiones con impacto medible. No quiero limitarme a una función puramente técnica ni tampoco alejarme de los datos. Mi objetivo es estar en esa intersección entre analytics, estrategia y ejecución, ganando progresivamente más ownership sobre proyectos y resultados.',
        answerEn: 'I am looking for an analytical, business-oriented role where I can use data to understand problems, prioritise opportunities and support decisions with measurable impact. I do not want to limit myself to a purely technical function, but I also do not want to move away from data. My goal is to work at the intersection of analytics, strategy and execution, gradually taking more ownership of projects and outcomes.'
      },
      {
        id: 'fever-five-years',
        category: 'Career direction',
        priority: 'high',
        ideaEs: 'Base sólida → ownership → especialización → responsabilidad.',
        ideaEn: 'Strong foundation → ownership → specialisation → responsibility.',
        keywords: ['learning', 'ownership', 'growth', 'strategy', 'responsibility'],
        questionEs: '¿Dónde te ves en cinco años?',
        questionEn: 'Where do you see yourself in five years?',
        answerEs: 'En cinco años me gustaría haber construido una base muy sólida en Growth, analytics y estrategia, haber tenido ownership real sobre proyectos y haber demostrado que puedo convertir análisis en resultados. No tengo obsesión con un título concreto; me importa más evolucionar hacia un rol con mayor responsabilidad sobre decisiones, mercados o iniciativas de crecimiento. A corto plazo mi prioridad es aprender muy rápido, estar cerca de gente exigente y asumir cada vez problemas más complejos.',
        answerEn: 'In five years, I would like to have built a very strong foundation in Growth, analytics and strategy, taken real ownership of projects and shown that I can turn analysis into results. I am not focused on a specific job title. What matters more to me is progressing towards a role with greater responsibility for decisions, markets or growth initiatives. In the short term, my priority is to learn very quickly, work with demanding people and gradually take on more complex problems.'
      },
      {
        id: 'fever-learning',
        category: 'Learning',
        priority: 'medium',
        ideaEs: 'Aprender a pasar de insight a acción y medir el impacto.',
        ideaEn: 'Learn to move from insight to action and measure impact.',
        keywords: ['market analysis', 'prioritisation', 'execution', 'KPIs', 'stakeholders'],
        questionEs: '¿Qué te gustaría aprender durante el Graduate Program?',
        questionEn: 'What would you like to learn during the Graduate Program?',
        answerEs: 'Sobre todo quiero aprender a llevar un problema de Growth de principio a fin: entender un mercado, identificar las métricas importantes, formular hipótesis, priorizar oportunidades, ejecutar una acción y medir si realmente ha funcionado. También me interesa mejorar mi criterio de negocio y aprender a comunicar recomendaciones de forma clara a perfiles diferentes. Creo que mi base analítica ya es fuerte, y este programa puede ayudarme a convertirla en una capacidad más completa de decisión y ejecución.',
        answerEn: 'Above all, I want to learn how to take a Growth problem from beginning to end: understand a market, identify the key metrics, form hypotheses, prioritise opportunities, execute an action and measure whether it actually worked. I also want to improve my business judgement and learn to communicate recommendations clearly to different stakeholders. I believe my analytical foundation is already strong, and this programme can help me turn it into a broader decision-making and execution capability.'
      },
      {
        id: 'fever-why-you',
        category: 'Fit',
        priority: 'high',
        ideaEs: 'Base técnica + business exposure + impacto medible + aprendizaje rápido.',
        ideaEn: 'Technical foundation + business exposure + measurable impact + fast learning.',
        keywords: ['analytics', 'business', 'impact', 'ownership', 'adaptability'],
        questionEs: '¿Por qué crees que tu perfil encaja con esta posición?',
        questionEn: 'Why do you think your profile fits this position?',
        answerEs: 'Creo que encajo por la combinación de una base técnica fuerte y experiencia aplicando datos a problemas de negocio reales. He trabajado con SQL, KPIs, automatización y analítica, pero también con stakeholders y decisiones operativas, y estoy acostumbrado a medir el impacto de lo que hago. Además, he trabajado en contextos distintos, incluido un entorno internacional, y me siento cómodo aprendiendo rápido. Para un Graduate de Growth creo que puedo aportar rigor analítico desde el primer día y, al mismo tiempo, tengo mucho recorrido para desarrollar criterio estratégico y comercial.',
        answerEn: 'I think I fit because I combine a strong technical foundation with experience applying data to real business problems. I have worked with SQL, KPIs, automation and analytics, but also with stakeholders and operational decisions, and I am used to measuring the impact of my work. I have also worked in different environments, including an international one, and I am comfortable learning quickly. For a Growth Graduate role, I believe I can bring analytical rigour from day one while still having a lot of room to develop stronger strategic and commercial judgement.'
      },
      {
        id: 'fever-industry',
        category: 'Motivation',
        priority: 'medium',
        ideaEs: 'Producto emocional y tangible + comportamiento + mercados + tecnología.',
        ideaEn: 'Emotional, tangible product + behaviour + markets + technology.',
        keywords: ['live experiences', 'consumer behaviour', 'markets', 'technology', 'tangible impact'],
        questionEs: '¿Por qué te interesa la industria del entretenimiento y las experiencias en vivo?',
        questionEn: 'Why are you interested in live entertainment and experiences?',
        answerEs: 'Me parece especialmente interesante porque combina comportamiento del consumidor, tecnología y mercados de una forma muy tangible. No estás analizando una métrica aislada: detrás hay personas decidiendo qué descubrir, qué comprar y qué experiencia vivir. Eso genera problemas de Growth muy ricos, desde adquisición y conversión hasta pricing, expansión geográfica o repetición. Me atrae trabajar en un producto donde los datos pueden mejorar tanto el negocio como la experiencia final del usuario.',
        answerEn: 'I find the industry especially interesting because it combines consumer behaviour, technology and markets in a very tangible way. You are not analysing an isolated metric: behind it, there are people deciding what to discover, what to buy and which experience to attend. That creates very rich Growth problems, from acquisition and conversion to pricing, geographic expansion and repeat behaviour. I like the idea of working on a product where data can improve both the business and the final customer experience.'
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
        id: 'ibm-why',
        category: 'Motivation',
        priority: 'high',
        ideaEs: 'Tecnología + datos + IA + transformación con escala empresarial.',
        ideaEn: 'Technology + data + AI + enterprise transformation at scale.',
        keywords: ['data', 'AI', 'technology', 'business', 'transformation'],
        questionEs: '¿Por qué IBM?',
        questionEn: 'Why IBM?',
        answerEs: 'Me interesa IBM porque combina una base tecnológica muy fuerte con proyectos de transformación de negocio a gran escala. Mi perfil está muy orientado a datos e inteligencia artificial aplicada, y me atrae poder trabajar en un entorno donde analytics, automation, cloud e IA se conectan con problemas reales de clientes. También me interesa mucho la exposición a equipos multidisciplinares y a proyectos donde la tecnología no es un fin en sí mismo, sino una herramienta para generar mejoras medibles.',
        answerEn: 'I am interested in IBM because it combines a very strong technology foundation with large-scale business transformation projects. My background is strongly focused on data and applied AI, and I am attracted by the opportunity to work in an environment where analytics, automation, cloud and AI are connected to real client problems. I also value the exposure to multidisciplinary teams and projects where technology is not an end in itself, but a tool for creating measurable improvements.'
      },
      {
        id: 'ibm-why-program',
        category: 'Role fit',
        priority: 'high',
        ideaEs: 'Aprendizaje real en proyectos + exposición a varias áreas.',
        ideaEn: 'Real project learning + exposure to different areas.',
        keywords: ['internship', 'learning', 'projects', 'clients', 'multidisciplinary'],
        questionEs: '¿Por qué el Early Associates Internship Program?',
        questionEn: 'Why the Early Associates Internship Program?',
        answerEs: 'Porque me parece una forma muy buena de empezar en un entorno donde puedo aprender haciendo. Me interesa tener exposición a proyectos reales, trabajar con perfiles distintos y entender cómo se aplican datos, tecnología e IA en problemas empresariales. Además, el hecho de poder orientar mi experiencia hacia Hybrid Cloud & Data y mantener Strategy & Transformation como segunda opción encaja muy bien con mi objetivo de construir una base técnica sólida sin perder la perspectiva de negocio.',
        answerEn: 'Because I see it as a very strong way to start in an environment where I can learn by doing. I am interested in gaining exposure to real projects, working with different profiles and understanding how data, technology and AI are applied to business problems. The opportunity to prioritise Hybrid Cloud & Data while keeping Strategy & Transformation as my second option also fits very well with my goal of building strong technical depth without losing the business perspective.'
      },
      {
        id: 'ibm-why-hcd',
        category: 'Role fit',
        priority: 'high',
        ideaEs: 'Data + AI + Analytics + Automation + escala.',
        ideaEn: 'Data + AI + Analytics + Automation + scale.',
        keywords: ['analytics', 'AI', 'automation', 'data', 'cloud'],
        questionEs: '¿Por qué Hybrid Cloud & Data como primera opción?',
        questionEn: 'Why Hybrid Cloud & Data as your first choice?',
        answerEs: 'Porque es el área que más conecta con mi experiencia y con la dirección en la que quiero crecer. Hasta ahora he trabajado con SQL, KPIs, automatización, NLP, visualización y soluciones de IA aplicadas a problemas reales. Lo que me atrae de Hybrid Cloud & Data es poder seguir desarrollando esa parte analítica, pero en proyectos de mayor escala y con exposición a AI, analytics, automation y cloud. No me interesa cloud únicamente desde infraestructura; me interesa sobre todo cómo permite desplegar y escalar soluciones de datos e IA que generen impacto de negocio.',
        answerEn: 'Because it is the area that connects most directly with my experience and the direction in which I want to grow. So far I have worked with SQL, KPIs, automation, NLP, visualisation and AI solutions applied to real problems. What attracts me to Hybrid Cloud & Data is the opportunity to keep developing that analytical side while working on larger-scale projects with exposure to AI, analytics, automation and cloud. I am not interested in cloud only from an infrastructure perspective; I am mainly interested in how it enables data and AI solutions to be deployed and scaled to create business impact.'
      },
      {
        id: 'ibm-why-st',
        category: 'Role fit',
        priority: 'high',
        ideaEs: 'Segunda opción: convertir análisis en transformación y decisiones.',
        ideaEn: 'Second choice: turn analysis into transformation and decisions.',
        keywords: ['transformation', 'processes', 'strategy', 'stakeholders', 'data-driven'],
        questionEs: '¿Por qué Strategy & Transformation como segunda opción?',
        questionEn: 'Why Strategy & Transformation as your second choice?',
        answerEs: 'Porque también me interesa mucho la parte de convertir análisis en decisiones y cambios reales dentro de una organización. En mis experiencias he visto que el valor no está únicamente en construir un modelo o analizar datos, sino en entender el proceso, identificar qué debe cambiar y conseguir que la información se traduzca en una mejora. Strategy & Transformation me permitiría desarrollar precisamente esa parte de resolución de problemas, transformación de procesos y trabajo con stakeholders, complementando muy bien mi primera opción más técnica.',
        answerEn: 'Because I am also very interested in turning analysis into decisions and real organisational change. In my previous experience, I have seen that value does not come only from building a model or analysing data, but from understanding the process, identifying what should change and making sure the information translates into an improvement. Strategy & Transformation would allow me to develop that side of problem solving, process transformation and stakeholder work, complementing my more technical first choice very well.'
      },
      {
        id: 'ibm-ai-business',
        category: 'Business + AI',
        priority: 'high',
        ideaEs: 'IA útil = problema claro + datos adecuados + métrica de impacto.',
        ideaEn: 'Useful AI = clear problem + suitable data + impact metric.',
        keywords: ['AI', 'use case', 'data quality', 'ROI', 'adoption'],
        questionEs: '¿Cómo crees que la IA puede generar valor real para una empresa?',
        questionEn: 'How do you think AI can create real value for a company?',
        answerEs: 'Empezaría por el problema de negocio, no por la tecnología. La IA genera valor cuando existe un caso de uso claro, datos adecuados, una métrica de éxito y un proceso donde la solución pueda integrarse. Puede mejorar productividad, automatizar tareas, apoyar decisiones o crear mejores experiencias, pero hay que medir adopción, precisión, coste y retorno. Para mí la clave es conectar la solución de IA con un resultado operativo o de negocio concreto.',
        answerEn: 'I would start with the business problem, not the technology. AI creates value when there is a clear use case, suitable data, a success metric and a process where the solution can actually be integrated. It can improve productivity, automate tasks, support decisions or create better experiences, but adoption, accuracy, cost and return need to be measured. For me, the key is connecting the AI solution to a concrete operational or business outcome.'
      },
      {
        id: 'ibm-projects',
        category: 'Career direction',
        priority: 'medium',
        ideaEs: 'Proyectos de data/AI donde el resultado cambie una decisión o proceso.',
        ideaEn: 'Data/AI projects where the result changes a decision or process.',
        keywords: ['analytics', 'AI', 'automation', 'business problem', 'impact'],
        questionEs: '¿En qué tipo de proyectos te gustaría trabajar en IBM?',
        questionEn: 'What kind of projects would you like to work on at IBM?',
        answerEs: 'Me gustaría trabajar en proyectos donde datos, analítica o IA ayuden a resolver un problema empresarial concreto, por ejemplo automatización de procesos, modelos para apoyar decisiones, modernización de plataformas de datos o soluciones de IA que puedan escalarse. Lo que más me motiva es participar en todo el recorrido: entender el problema, trabajar con los datos, construir o evaluar la solución y comprobar si realmente genera impacto.',
        answerEn: 'I would like to work on projects where data, analytics or AI help solve a concrete business problem, for example process automation, models that support decisions, modernisation of data platforms or AI solutions that can scale. What motivates me most is being involved across the full journey: understanding the problem, working with the data, building or evaluating the solution and checking whether it actually creates impact.'
      },
      {
        id: 'ibm-target-role',
        category: 'Career direction',
        priority: 'high',
        ideaEs: 'Data/AI aplicado al negocio con evolución hacia mayor responsabilidad.',
        ideaEn: 'Business-applied Data/AI with progression towards greater responsibility.',
        keywords: ['data', 'AI', 'analytics', 'business', 'ownership'],
        questionEs: '¿Cuál sería tu rol objetivo a medio plazo?',
        questionEn: 'What would be your target role in the medium term?',
        answerEs: 'A medio plazo me gustaría estar en un rol donde pueda combinar data, analytics e inteligencia artificial con una comprensión fuerte del negocio. Me interesa mantener una base técnica sólida, pero evolucionar hacia mayor ownership sobre proyectos y decisiones. No busco cerrarme todavía a un título muy concreto; sí tengo claro que quiero trabajar en la intersección entre tecnología, datos y transformación.',
        answerEn: 'In the medium term, I would like to be in a role where I can combine data, analytics and AI with a strong understanding of the business. I want to keep a solid technical foundation while gradually taking more ownership of projects and decisions. I do not want to narrow myself down to a very specific title yet, but I am clear that I want to work at the intersection of technology, data and transformation.'
      },
      {
        id: 'ibm-five-years',
        category: 'Career direction',
        priority: 'medium',
        ideaEs: 'Fundamentos fuertes → proyectos complejos → ownership.',
        ideaEn: 'Strong foundations → complex projects → ownership.',
        keywords: ['learning', 'data', 'AI', 'ownership', 'business'],
        questionEs: '¿Dónde te ves en cinco años?',
        questionEn: 'Where do you see yourself in five years?',
        answerEs: 'Me gustaría haber construido una base muy sólida en datos, IA y transformación, haber trabajado en proyectos distintos y asumir cada vez más responsabilidad sobre resultados. Mi objetivo sería ser un perfil capaz de entender bien la parte técnica y, al mismo tiempo, explicar qué decisión tiene sentido desde negocio. A corto plazo mi prioridad es aprender rápido, ganar exposición a distintos problemas y demostrar que puedo aportar valor en proyectos reales.',
        answerEn: 'I would like to have built a very strong foundation in data, AI and transformation, worked across different projects and taken increasing responsibility for outcomes. My goal would be to become someone who understands the technical side well while also being able to explain which decision makes sense from a business perspective. In the short term, my priority is to learn quickly, gain exposure to different problems and prove that I can add value on real projects.'
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
