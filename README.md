# Шаг 2 - создаем HTTP сервер

Для работы навыка нам нужен HTTP сервер, который будет получать запросы пользователей и возвращать ответ.
Можно использовать [expressjs](https://expressjs.com), но есть более современная альтернатива - [micro](https://github.com/zeit/micro).
На этом шаге создаем сервер, который на все запросы отвечает строкой `Running`.

Изменения кода по всем пунктам видны в [диффе](https://github.com/vitalets/alice-workshop/compare/step1...step2).

1. устанавливаем `micro-dev` (для разработки) и `micro` (для продакшена):
   ```bash
   npm i -D micro-dev
   npm i micro
   ```
2. создаем сервер в файле `src/index.js`
3. создаем в `package.json` скрипт запуска сервера
4. проверяем, что сервер запускается
   ```bash
   npm run dev
   ```

[Назад](https://github.com/vitalets/alice-workshop/tree/step1) | [Вперед](https://github.com/vitalets/alice-workshop/tree/step3)
