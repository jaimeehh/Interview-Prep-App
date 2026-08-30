const RETIRED_CUSTOM_QUESTION_IDS = ['default-three-workplace-weaknesses'];
const RETIRED_CUSTOM_QUESTION_TEXTS = ['Dime tres debilidades que tengas en entornos de trabajo'];
const SHIPPED_CUSTOM_QUESTIONS = [];

if (typeof DEFAULT_PROFILE !== 'undefined') {
  DEFAULT_PROFILE.customQuestions = JSON.parse(JSON.stringify(SHIPPED_CUSTOM_QUESTIONS));
}
