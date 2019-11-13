# Шаг 2 - создаем HTTP сервер

Итак, для работы навыка нам нужен HTTP сервер. Он будет получать запросы пользователей и возвращать ответ.
На этом шаге создадим HTTP сервер, который будет слушать `3000` порт и на все запросы отвечать строкой `Running`.

1. Создайте файл `src/index.js` и напишите код сервера (см. [дифф][diff])
2. Запустите сервер в докере:
   ```bash
   docker-compose up -d
   ```
   По этой команде автоматически скачается образ c Node.js 12, на котором запустится контейнер с нашим http сервером.
   Также во втором контейнере запустится ngrok, который сделает наш сервер доступным в интернете.
   Это все описано в файле `docker-compose.yml`, но его мы касаться не будем.
   <details>
       <summary>Пример вывода в терминале:</summary>
       
       $ docker-compose up -d
       Creating network "alice-workshop_default" with the default driver
       Building webhook
       Step 1/4 : FROM node:12-alpine
       12-alpine: Pulling from library/node
       cbdbe7a5bc2a: Pull complete
       ...
       Creating alice-workshop_ngrok_1   ... done
       Creating alice-workshop_webhook_1 ... done
   </details>
   <details>
     <summary>Схема</summary>
     <img src="https://user-images.githubusercontent.com/1473072/84703260-a4832200-af60-11ea-81d2-8ae595e176ec.png">
   </details>

3. Посмотрите логи сервера:
   ```bash
   docker-compose logs webhook
   ```
   <details>
       <summary>Пример логов:</summary>

       $ docker-compose logs webhook
       Attaching to alice-workshop_webhook_1
       webhook_1  | [nodemon] 2.0.4
       webhook_1  | [nodemon] to restart at any time, enter `rs`
       webhook_1  | [nodemon] watching path(s): src/**/*
       webhook_1  | [nodemon] watching extensions: js,mjs,json
       webhook_1  | [nodemon] starting `node src/index.js`
       webhook_1  | Server started on http://localhost:3000, tunnel: http://localhost:4040
   </details>
4. Проверьте, что наш сервер работает: откройте http://localhost:3000 - должна отобразиться строка `Running`
5. Проверьте, что сервер также доступен из интернета: откройте http://localhost:4040 и перейдите по ссылке вида `https://XXXXXXXX.eu.ngrok.io`
   <details>
     <summary>Пример</summary>
     <img src="https://user-images.githubusercontent.com/1473072/83938603-84c06100-a7de-11ea-825c-912e3766931f.png">
   </details>

[Назад][prev] | [Готово][next]

[prev]: https://github.com/vitalets/alice-workshop/tree/step1
[diff]: https://github.com/vitalets/alice-workshop/compare/step1...step2
[next]: http://bit.ly/alice-workshop_step3
