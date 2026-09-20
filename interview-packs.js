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
      }
    ]
  },
  {
    id: 'ibm-hybrid-cloud-strategy-intern',
    company: 'IBM',
    role: 'Hybrid Cloud Strategy Internship',
    stage: 'Initial / fit interviews',
    accent: '☁️',
    description: 'Motivación, cloud strategy y narrativa negocio + tecnología.',
    questions: [
      {
        id: 'ibm-why',
        category: 'Motivation',
        priority: 'high',
        ideaEs: 'Tecnología profunda + consulting + transformación empresarial.',
        ideaEn: 'Deep technology + consulting + business transformation.',
        keywords: ['technology', 'consulting', 'hybrid cloud', 'AI', 'transformation'],
        questionEs: '¿Por qué IBM?',
        questionEn: 'Why IBM?',
        answerEs: 'Me interesa IBM porque está en un punto que encaja mucho con mi perfil: combina una base tecnológica muy profunda con consultoría y transformación de negocio. Me atrae especialmente poder trabajar en problemas donde cloud, datos e inteligencia artificial no se tratan como tecnologías aisladas, sino como herramientas para mejorar procesos, agilidad, costes y capacidad de innovación. Para mí sería una oportunidad de aprovechar mi base técnica y aprender a traducirla mejor a decisiones y hojas de ruta de transformación para clientes.',
        answerEn: 'I am interested in IBM because it sits at an intersection that fits my profile very well: deep technology combined with consulting and business transformation. I am particularly interested in working on problems where cloud, data and AI are not treated as isolated technologies, but as tools to improve processes, agility, cost efficiency and innovation. For me, it would be an opportunity to use my technical foundation while learning how to translate technology more effectively into transformation decisions and roadmaps for clients.'
      },
      {
        id: 'ibm-why-role',
        category: 'Role fit',
        priority: 'high',
        ideaEs: 'Estrategia tecnológica: conectar arquitectura, prioridades y valor de negocio.',
        ideaEn: 'Technology strategy: connect architecture, priorities and business value.',
        keywords: ['cloud strategy', 'business value', 'roadmap', 'modernisation', 'trade-offs'],
        questionEs: '¿Por qué Hybrid Cloud Strategy?',
        questionEn: 'Why Hybrid Cloud Strategy?',
        answerEs: 'Porque me interesa la parte anterior a la implementación: entender qué necesita realmente una organización, qué cargas o procesos tiene sentido modernizar, qué restricciones existen y cómo construir una hoja de ruta tecnológica que tenga lógica de negocio. Hybrid Cloud Strategy me parece atractiva porque obliga a combinar conocimiento técnico con análisis de costes, riesgo, seguridad, operación y prioridades empresariales. Esa mezcla entre tecnología y estrategia es exactamente hacia donde quiero orientar mi carrera.',
        answerEn: 'Because I am very interested in the thinking that comes before implementation: understanding what an organisation actually needs, which workloads or processes make sense to modernise, what constraints exist and how to build a technology roadmap that makes business sense. Hybrid Cloud Strategy is attractive to me because it requires combining technical understanding with cost, risk, security, operating-model and business-priority considerations. That mix of technology and strategy is exactly where I want to take my career.'
      },
      {
        id: 'ibm-what-hybrid',
        category: 'Role understanding',
        priority: 'high',
        ideaEs: 'Elegir el entorno adecuado por carga; no “todo a cloud”.',
        ideaEn: 'Choose the right environment per workload; not “move everything to cloud”.',
        keywords: ['workloads', 'public cloud', 'private cloud', 'on-prem', 'trade-offs'],
        questionEs: '¿Qué entiendes por una estrategia de cloud híbrido?',
        questionEn: 'What do you understand by a hybrid cloud strategy?',
        answerEs: 'La entiendo como una estrategia para decidir cómo combinar distintos entornos —por ejemplo cloud pública, privada y sistemas on-premise— según las necesidades de cada carga y del negocio. No se trata de mover todo a cloud por defecto, sino de valorar seguridad, regulación, coste, rendimiento, dependencias y velocidad de innovación. La parte estratégica está en definir el modelo objetivo y una hoja de ruta realista para modernizar sin perder de vista el valor de negocio y el riesgo.',
        answerEn: 'I understand it as a strategy for deciding how to combine different environments, such as public cloud, private cloud and on-premise systems, based on the needs of each workload and the business. It is not about moving everything to the cloud by default. You need to consider security, regulation, cost, performance, dependencies and speed of innovation. The strategic part is defining the target model and a realistic modernisation roadmap while keeping business value and risk in view.'
      },
      {
        id: 'ibm-business-value',
        category: 'Business thinking',
        priority: 'high',
        ideaEs: 'Cloud vale si mejora outcomes: coste, agilidad, resiliencia, time-to-market.',
        ideaEn: 'Cloud matters when it improves outcomes: cost, agility, resilience, time-to-market.',
        keywords: ['ROI', 'agility', 'resilience', 'cost', 'time-to-market'],
        questionEs: '¿Cómo puede una estrategia de cloud híbrido generar valor de negocio?',
        questionEn: 'How can a hybrid cloud strategy create business value?',
        answerEs: 'El valor no está en adoptar cloud por sí mismo, sino en mejorar resultados concretos. Puede reducir costes o hacerlos más variables, acelerar el time-to-market, facilitar la modernización de aplicaciones, mejorar resiliencia y permitir escalar capacidades de datos e IA. Pero también puede generar complejidad si se diseña mal. Por eso me parece importante conectar cada decisión tecnológica con un objetivo medible y priorizar iniciativas donde el impacto esperado justifique el coste y el riesgo de transformación.',
        answerEn: 'The value is not in adopting cloud for its own sake, but in improving concrete business outcomes. It can reduce costs or make them more flexible, accelerate time-to-market, support application modernisation, improve resilience and make it easier to scale data and AI capabilities. But it can also create complexity if it is poorly designed. That is why I think every technology decision should be connected to a measurable objective, prioritising initiatives where the expected impact justifies the cost and transformation risk.'
      },
      {
        id: 'ibm-tech-vs-strategy',
        category: 'Career direction',
        priority: 'high',
        ideaEs: 'Usar profundidad técnica para tomar mejores decisiones estratégicas.',
        ideaEn: 'Use technical depth to make better strategic decisions.',
        keywords: ['technical foundation', 'strategy', 'stakeholders', 'roadmaps', 'decision-making'],
        questionEs: '¿Por qué estrategia tecnológica y no un rol puramente técnico?',
        questionEn: 'Why technology strategy instead of a purely technical role?',
        answerEs: 'Porque lo que más me interesa es entender por qué se construye una solución, no sólo cómo se construye. Mi base técnica me ayuda a hacer preguntas mejores y a entender las implicaciones de una decisión, pero disfruto especialmente conectando esa parte con KPIs, procesos, prioridades y stakeholders. Quiero mantener profundidad tecnológica, pero utilizarla para estructurar problemas y tomar mejores decisiones de transformación.',
        answerEn: 'Because what interests me most is understanding why a solution should be built, not only how to build it. My technical background helps me ask better questions and understand the implications of a decision, but I especially enjoy connecting that technical side with KPIs, processes, priorities and stakeholders. I want to keep strong technical depth while using it to structure problems and make better transformation decisions.'
      },
      {
        id: 'ibm-target-role',
        category: 'Career direction',
        priority: 'high',
        ideaEs: 'Consultoría/estrategia tecnológica con foco en datos, cloud e IA.',
        ideaEn: 'Technology consulting/strategy focused on data, cloud and AI.',
        keywords: ['consulting', 'technology strategy', 'cloud', 'data', 'AI'],
        questionEs: '¿Cuál sería tu rol objetivo a medio plazo?',
        questionEn: 'What would be your target role in the medium term?',
        answerEs: 'A medio plazo me gustaría evolucionar hacia un rol de consultoría o estrategia tecnológica, especialmente en proyectos donde cloud, datos e IA tengan una relación directa con transformación de negocio. Me interesa ser una persona capaz de hablar con equipos técnicos, pero también con perfiles de negocio, estructurar el problema y convertirlo en una hoja de ruta clara. En esta etapa no busco especializarme demasiado pronto; quiero construir primero una base sólida y transversal.',
        answerEn: 'In the medium term, I would like to grow into a technology consulting or technology strategy role, especially on projects where cloud, data and AI are directly connected to business transformation. I want to become someone who can communicate with technical teams as well as business stakeholders, structure the problem and turn it into a clear roadmap. At this stage, I do not want to specialise too narrowly too early; I want to build a strong and broad foundation first.'
      },
      {
        id: 'ibm-five-years',
        category: 'Career direction',
        priority: 'medium',
        ideaEs: 'Fundamentos → proyectos reales → ownership → trusted advisor.',
        ideaEn: 'Foundations → real projects → ownership → trusted advisor.',
        keywords: ['learning', 'client exposure', 'ownership', 'technology', 'business'],
        questionEs: '¿Dónde te ves en cinco años?',
        questionEn: 'Where do you see yourself in five years?',
        answerEs: 'Me gustaría haber desarrollado una base fuerte en estrategia tecnológica y transformación, haber trabajado en proyectos distintos y tener cada vez más ownership sobre entregables y recomendaciones. Mi objetivo sería ser un perfil que combine credibilidad técnica con criterio de negocio y que pueda aportar valor en conversaciones con clientes y equipos técnicos. No me preocupa tanto el título exacto como demostrar progresivamente que puedo asumir problemas más complejos y mayor responsabilidad.',
        answerEn: 'I would like to have built a strong foundation in technology strategy and transformation, worked across different projects and taken increasing ownership of deliverables and recommendations. My goal would be to become someone who combines technical credibility with business judgement and can add value in conversations with both clients and technical teams. I am less concerned with the exact title than with progressively proving that I can handle more complex problems and greater responsibility.'
      },
      {
        id: 'ibm-why-you',
        category: 'Fit',
        priority: 'high',
        ideaEs: 'Ingeniería + data + transformación + comunicación con stakeholders.',
        ideaEn: 'Engineering + data + transformation + stakeholder communication.',
        keywords: ['engineering', 'data', 'problem-solving', 'business', 'adaptability'],
        questionEs: '¿Por qué encaja tu perfil con este internship?',
        questionEn: 'Why does your profile fit this internship?',
        answerEs: 'Creo que encajo porque tengo una base de ingeniería y datos, pero mis experiencias profesionales han estado muy orientadas a resolver problemas operativos y de negocio. He trabajado con SQL, KPIs, automatización e IA, y también he tenido que entender procesos, hablar con stakeholders y convertir análisis en mejoras medibles. Esa combinación me permite entrar en una conversación tecnológica sin perder la perspectiva de negocio, que es precisamente la capacidad que quiero seguir desarrollando en estrategia de cloud híbrido.',
        answerEn: 'I believe I fit because I have an engineering and data background, but my professional experience has been strongly focused on solving operational and business problems. I have worked with SQL, KPIs, automation and AI, while also having to understand processes, communicate with stakeholders and turn analysis into measurable improvements. That combination allows me to enter a technology discussion without losing the business perspective, which is exactly the capability I want to keep developing in hybrid cloud strategy.'
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
