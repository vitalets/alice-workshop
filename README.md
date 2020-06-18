# Шаг 2.1 - запускаемся в докере

Теперь запустим наш HTTP сервер в докер-контейнере.
Использование докера позволяет всем работать в одинаковом окружении,
избежать ошибок из-за разных версий Node.js и других особенностей настройки вашей операционной системы.

Запустим сразу 2 контейнера (это все описано в файле `docker-compose.yml`, но в него мы углубляться не будем):
- `webhook` - HTTP сервер на Node.js, слушает порт `3000`
- `ngrok` - туннелер, который сделает наш сервер доступным в интернете по урлу `https://XXXXXXXX.eu.ngrok.io`

![Схема работы](https://user-images.githubusercontent.com/1473072/85388151-6c767300-b54e-11ea-877b-d5969bfe8b47.png)

1. Выполните в терминале команду запуска контейнеров:
   ```bash
   docker-compose up -d
   ```
   <details>
       <summary>Пример вывода:</summary>
       
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

2. Также посмотрите логи нашего сервера:
   ```bash
   docker-compose logs webhook
   ```
   <details>
       <summary>Пример корректных логов:</summary>

       $ docker-compose logs webhook
       Attaching to alice-workshop_webhook_1
       webhook_1  | [nodemon] 2.0.4
       webhook_1  | [nodemon] to restart at any time, enter `rs`
       webhook_1  | [nodemon] watching path(s): src/**/*
       webhook_1  | [nodemon] watching extensions: js,mjs,json
       webhook_1  | [nodemon] starting `node src/index.js`
       webhook_1  | Server started on http://localhost:3000, tunnel: http://localhost:4040
   </details>
3. Проверьте, что наш сервер работает: откройте http://localhost:3000 - должна отобразиться строка `Running`
4. Проверьте, что сервер также доступен из интернета: откройте http://localhost:4040 и перейдите по ссылке вида `https://XXXXXXXX.eu.ngrok.io`
   <details>
     <summary>Пример интерфейса ngrok</summary>
     <img src="https://user-images.githubusercontent.com/1473072/83938603-84c06100-a7de-11ea-825c-912e3766931f.png">
   </details>

Если что-то пошло не так:
- <details>
     <summary>docker: Error response from daemon: Mounts denied:...</summary>
  
     [Разрешите докеру доступ к папке проекта.](https://docs.docker.com/docker-for-mac/osxfs/#namespaces)
  </details>
- <details>
     <summary>Couldn't connect to Docker daemon at http+unix://var/run/docker.sock - is it running?</summary>
  
     Попробуйте перезапустить докер. Если после этого снова не заработает, попробуйте выполнить команду через sudo:
     `sudo docker-compose up -d`
  </details>
- По остальным ошибкам попробуйте вбить в поиск текст ошибки или посмотреть раздел [Troubleshoot](https://docs.docker.com/docker-for-mac/troubleshoot/) на сайте докера

[Назад][prev] | [Вперед][next]

[prev]: https://github.com/vitalets/alice-workshop/tree/step2
[diff]: https://github.com/vitalets/alice-workshop/compare/step2...step2.1
[next]: https://github.com/vitalets/alice-workshop/tree/step3
