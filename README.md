# Шаг 12 - Проверка ответов

Теперь добавим проверку ответов.
Нужно учесть, что фраза пользователя может содержать дополнительный текст.
Например, можно сказать `4`, а можно `я думаю ответ 4`. 
Поэтому используем регулярное выражение, чтобы вытащить из поля `request.command` только число. 
Это число и сравним с ожидаемым результатом.

1. Добавьте проверку ответов в функции `isCorrectAnswer()` с помощью регулярного выражения, см. [дифф][diff]
2. Протестируйте на смартфоне разные варианты ответов

[Назад][prev] | [Готово][next]

[prev]: https://github.com/vitalets/alice-workshop/tree/step11
[diff]: https://github.com/vitalets/alice-workshop/compare/step11...step12
[next]: http://bit.ly/alice-workshop_step13
