const assert = require('assert');
const {promisify} = require('util');
const micro = require('micro');
const fetch = require('node-fetch');
const getPort = require('get-port');
const handler = require('../src');

const server = micro(handler);

// оборачиваем запуск/остановку сервера в промисы
server.listen = promisify(server.listen);
server.close = promisify(server.close);

// запускаем сервер на случайном порту перед тестами
before(async () => {
  const port = await getPort();
  await server.listen(port);
});

// останавливаем сервер после тестов
after(async () => {
  await server.close();
});

it('should respond to new session', async () => {
  const {response} = await say('');
  assert.strictEqual(response.text, 'Добро пожаловать')
});

it('should respond to command', async () => {
  await say('');
  const {response} = await say('Привет');
  assert.strictEqual(response.text, 'Вы сказали: Привет');
});

/**
 * Вспомогательная функция отправки запроса в навык
 *
 * @param {string} command
 * @returns {Promise}
 */
async function say(command) {
  const url = `http://localhost:${server.address().port}`;
  const body = JSON.stringify({
    request: {
      command
    },
    session: {
      new: !command,
      session_id: 'test',
      user_id: 'test',
    },
    version: '1.0'
  });
  const response = await fetch(url, {method: 'POST', body});
  return response.json();
}
