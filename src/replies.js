/**
 * Приветственное сообщение при входе в навык.
 */
exports.welcome = () => {
  return {
    text: 'Привет. Я ваш новый учитель математики. Начинаем урок?',
    tts: '<speaker audio="alice-music-harp-1.opus">Привет. Я ваш новый учитель математики. Начинаем урок?',
    buttons: [
      { title: 'Начинаем', hide: true },
    ],
    end_session: false
  };
};

/**
 * Первый вопрос пользователю.
 *
 * @param {Number} number1
 * @param {Number} number2
 */
exports.firstQuestion = ({ number1, number2 }) => {
  return {
    text: `Сколько будет ${number1} + ${number2} = ?`,
    tts: `Сколько будет ${number1} + ${number2}`,
    buttons: [capitulateButton],
    end_session: false
  };
};

/**
 * Реакция на неправильный ответ.
 *
 * @param {Number} number1
 * @param {Number} number2
 */
exports.incorrectAnswer = ({ number1, number2 }) => {
  return {
    text: `Неверно. Попробуй еще раз: ${number1} + ${number2} = ?`,
    tts: `Неверно. Попробуй еще раз: ${number1} + ${number2}`,
    buttons: [capitulateButton],
    end_session: false
  };
};

/**
 * Реакция на правильный ответ.
 *
 * @param {Number} number1
 * @param {Number} number2
 */
exports.correctAnswer = ({ number1, number2 }) => {
  return {
    text: `Правильно! Следующий вопрос: ${number1} + ${number2} = ?`,
    tts: `<speaker audio="alice-sounds-human-crowd-6.opus">Правильно! Следующий вопрос: ${number1} + ${number2}`,
    buttons: [capitulateButton],
    end_session: false
  };
};

/**
 * Реакция на "сдаюсь".
 *
 * @param {Number} answer
 * @param {Number} number1
 * @param {Number} number2
 */
exports.capitulate = (answer, { number1, number2 }) => {
  return {
    text: `Правильный ответ ${answer}. Задам другой пример: ${number1} + ${number2} = ?`,
    tts: `<speaker audio="alice-sounds-game-loss-3.opus">Правильный ответ ${answer}. Задам другой пример: ${number1} + ${number2}`,
    buttons: [capitulateButton],
    end_session: false
  };
};

const capitulateButton = {
  title: 'Сдаюсь', hide: true
};
