const SHIPPED_CUSTOM_QUESTIONS = [
  {
    id: 'default-three-workplace-weaknesses',
    question: 'Dime tres debilidades que tengas en entornos de trabajo',
    lang: 'es',
    competency: 'learning',
    answerType: 'custom',
    linkedStoryId: '',
    customAnswer: `En proyectos nuevos, a veces soy demasiado optimista al calcular cuánto tiempo necesitaré para una tarea que todavía no conozco bien. Para mejorarlo, divido el trabajo en partes más pequeñas, reviso el avance y aviso con tiempo si detecto un posible retraso.

Antes prefería presentar mi trabajo cuando ya estaba muy avanzado. Esto podía retrasar el feedback. Ahora comparto borradores desde el principio para comprobar que avanzo en la dirección adecuada.

Cuando estoy centrado en un proyecto, a veces dejo la documentación para el final. Para evitarlo, anoto los acuerdos después de cada reunión y actualizo un registro breve de los cambios.`,
    companies: [],
    updatedAt: '2026-08-29',
    createdAt: '2026-08-29'
  }
];

if (typeof DEFAULT_PROFILE !== 'undefined') {
  DEFAULT_PROFILE.customQuestions = JSON.parse(JSON.stringify(SHIPPED_CUSTOM_QUESTIONS));
}
