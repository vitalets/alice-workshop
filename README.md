# Шаг 5 - разделяем голос и текст

Теперь, когда тестирование налажено, можно глубже поизучать возможности платформы.
Сейчас голосовой ответ и текст на экране пользователя совпадают. Но иногда их нужно разделить.
Модифицируем наш навык, чтобы он выводил на экран `Привет`, а голосом произносил `Привет, я ваш голосовой помощник`.

1. Добавьте в `src/index.js` поле `tts` согласно [диффу][diff]
2. Проверьте на смартфоне или на вкладке Тестирование

Если изменения не подтягиваются в навык, проверьте в логах сервера, что он перезагружается при изменении файлов:
```bash
docker-compose logs -f webhook
```
Должно быть так:
```
webhook_1  | [nodemon] restarting due to changes...
webhook_1  | [nodemon] starting `node src/index.js`
webhook_1  | Server started on http://localhost:3000, tunnel: http://localhost:4040
webhook_1  | [nodemon] restarting due to changes...
webhook_1  | [nodemon] starting `node src/index.js`
webhook_1  | Server started on http://localhost:3000, tunnel: http://localhost:4040
```

[Назад][prev] | [Готово][next]

[prev]: https://github.com/vitalets/alice-workshop/tree/step4.2
[diff]: https://github.com/vitalets/alice-workshop/compare/step4.2...step5
[next]: http://bit.ly/alice-workshop_step6
