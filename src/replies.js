/**
 * Приветственное сообщение при входе в навык.
 */
exports.welcome = () => {
  return {
    text: 'Привет',
    tts: '<speaker audio="alice-music-harp-1.opus">Привет, я ваш голосовой помощник',
    buttons: [
      { title: 'Здравствуй', hide: true },
      { title: 'Как дела?', hide: true },
    ],
    end_session: false
  };
};

/**
 * Повторяем фразу пользователя.
 *
 * @param {String} command
 */
exports.repeatUserCommand = command => {
  return {
    text: `Вы сказали: ${command}`,
    end_session: false
  };
};
