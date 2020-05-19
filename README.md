# Шаг 9 - разделяем логику и текст ответов

Сейчас весь код лежит в одном файле `src/index.js`: и логика, и тексты ответов.
А в следующих шагах у нас добавится еще больше текстов.
Поэтому проведем рефакторинг: вынесем формирование ответов в отдельный файл `src/replies.js`,
чтобы не смешивать их в бизнес-логикой.

1. Вынесите функции формирования ответов в отдельный файл `src/replies.js`, см [дифф][diff]
2. Проверьте, что после рефакторинга навык работает

[Назад][prev] | [Вперед][next]

[prev]: https://github.com/vitalets/alice-workshop/tree/step8
[diff]: https://github.com/vitalets/alice-workshop/compare/step8...step9
[next]: https://github.com/vitalets/alice-workshop/tree/step10
