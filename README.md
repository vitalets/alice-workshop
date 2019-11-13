# Шаг 2 - создаем HTTP сервер

Для работы навыка нужен HTTP сервер.
Когда пользователь общается с навыком через Алису, от Яндекса приходят POST запросы на url сервера.
На этом шаге создадим HTTP сервер, который будет слушать `3000` порт и на все запросы отвечать строкой `Running`.

1. Создайте файл `src/index.js` и напишите код сервера (см. [дифф][diff])

Проверку сервера сделаем на следующем шаге, запустив его в докере.

[Назад][prev] | [Готово][next]

[prev]: https://github.com/vitalets/alice-workshop/tree/step1
[diff]: https://github.com/vitalets/alice-workshop/compare/step1...step2
[next]: http://bit.ly/alice-workshop_step2-1
