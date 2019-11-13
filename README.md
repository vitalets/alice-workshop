# Шаг 3 - добавляем тесты

Сразу начнем работать по взрослому - т.е. по [TDD](https://en.wikipedia.org/wiki/Test-driven_development).
Напишем автотест, который запускает наш сервер, отправляет на него запрос и проверяет, что в ответ пришло `Running`.
Тестировать будем с помощью [mocha](https://mochajs.org/), отправлять запрос с помощью [node-fetch](https://github.com/bitinn/node-fetch).
Также удобно стартовать сервер на случайном свободном порту, а не на `3000`, который может быть занят. Для этого используем [get-port](https://github.com/sindresorhus/get-port).

1. устанавливаем зависимости
   ```bash
   npm i -D mocha node-fetch get-port
   ```
2. создаем файл с тестом: [дифф с предыдущим шагом](https://github.com/vitalets/alice-workshop/compare/step2...step3)
3. запускаем тесты:
   ```
   $ npm test

   ✓ should return running

   1 passing (30ms)
   ```

[Назад](https://github.com/vitalets/alice-workshop/tree/step2) | [Вперед](https://github.com/vitalets/alice-workshop/tree/step4)
