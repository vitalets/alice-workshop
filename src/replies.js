/**
 * Приветственное сообщение при входе в навык.
 */
exports.welcome = () => {
  const greeting = getRandomElement(['Привет', 'Здравствуйте']);
  return {
    text: `${greeting}. Я ваш новый учитель математики. Начинаем урок?`,
    tts: `<speaker audio="alice-music-harp-1.opus">${greeting}. Я ваш новый учитель математики. Начинаем урок?`,
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
  const no = getRandomElement(['Неверно', 'Неправильно', 'Нет']);
  return {
    text: `${no}. Попробуй еще раз: ${number1} + ${number2} = ?`,
    tts: `${no}. Попробуй еще раз: ${number1} + ${number2}`,
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
  const yes = getRandomElement(['Правильно', 'Отлично', 'Да']);
  return {
    text: `${yes}! Следующий вопрос: ${number1} + ${number2} = ?`,
    tts: `<speaker audio="alice-sounds-human-crowd-6.opus">${yes}! Следующий вопрос: ${number1} + ${number2}`,
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

function getRandomElement(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
