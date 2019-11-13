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

it('should return running', async () => {
  const url = `http://localhost:${server.address().port}`;
  const response = await fetch(url);
  const text = await response.text();
  assert.strictEqual(text, 'Running');
});