# Шаг 16 - Что дальше?

Вот теперь наш навык готов и ждет своих первых учеников!

Осталось его **задеплоить**. Варианты такие:
1. выложить на облачную платформу с поддержкой Node.js: [Heroku](https://www.heroku.com/), [Vercel](https://vercel.com/) (в прошлом Now) 
2. разместить в виде [Yandex Cloud Function](https://cloud.yandex.ru/docs/functions/), для навыков Алисы это **бесплатно**
3. развернуть свой VPS и выложить на него   

После деплоя появится постоянный webhook URL, который нужно будет вставить в настройках навыка вместо `https://XXXXXXXX.eu.ngrok.io`.
 
Конечно, есть много вариантов **дальнейшего развития навыка**:
- добавить операции умножения, вычитания, деления
- добавить больше звуков и картинок
- ввести игровую механику, начислять очки за правильные ответы
- еще идеи?

Технически, **можно улучшить следующее**:
- заменить регулярные выражения на [механизм интентов](https://yandex.ru/dev/dialogs/alice/doc/nlu-docpage/)
- подключить [AppMetrika](https://yandex.ru/dev/dialogs/alice/doc/appmetrica-docpage/)
- добавить автотесты (например с помощью [alice-tester](https://github.com/vitalets/alice-tester))
- подключить другие библиотеки из подборки [awesome-alice](https://github.com/sameoldmadness/awesome-alice)

Спасибо за участие!

Присоединяйтесь к сообществу разработчиков навыков [в телеграмме](https://t.me/yadialogschat).

[Назад][prev]

[prev]: https://github.com/vitalets/alice-workshop/tree/step15
