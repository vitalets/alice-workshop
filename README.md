# Шаг 7 - добавляем кнопки-подсказки

В ответе навыка можно добавить кнопки-подсказки.
Они помогают пользователю понять, какие варианты ответа есть в данный момент.
Нажатие на кнопку отправит ее `title` в навык - как будто пользователь произнес это голосом.

<details>
 <summary>Выглядят кнопки так</summary>
 <img width="300" src="https://user-images.githubusercontent.com/1473072/85176031-8af41a00-b281-11ea-9fc8-4ac207460573.png">
</details>

1. Добавьте в JSON ответа поле `buttons` с 2 кнопками: `Здравствуй` и `Как дела?`, см. [дифф][diff]
2. Понажимайте эти кнопки в навыке на смартфоне или на вкладке Тестирование
3. Проверьте, чем отличаются кнопки с параметром `hide: true|false`

[Назад][prev] | [Вперед][next]

[prev]: https://github.com/vitalets/alice-workshop/tree/step6
[diff]: https://github.com/vitalets/alice-workshop/compare/step6...step7
[next]: https://github.com/vitalets/alice-workshop/tree/step8
