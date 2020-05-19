# Шаг 3 - превращаем сервер в навык Алисы

Чтобы сервер смог выступать в роли навыка Алисы, он должен возвращать не строку, а JSON согласно [протоколу](https://yandex.ru/dev/dialogs/alice/doc/protocol-docpage/).
Пока будем использовать минимальный набор полей - пусть наш навык отвечает `Привет` на любые фразы пользователя.
 
1. Замените в ответе сервера строку `Running` на JSON, см [дифф][diff]
2. Проверьте в браузере: http://localhost:3000 - должен отобразиться JSON с ответом навыка

[Назад][prev] | [Готово][next]

[prev]: https://github.com/vitalets/alice-workshop/tree/step2.1
[diff]: https://github.com/vitalets/alice-workshop/compare/step2.1...step3
[next]: http://bit.ly/alice-workshop_step4
