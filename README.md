# Шаг 1 - Добавляем package.json и зависимости

1. Создайте в корне файл `package.json`
2. Добавьте в него название и версию нашего приложения
3. Добавьте зависимости:
  * [micro](https://github.com/zeit/micro) - пакет для создания HTTP-сервера
  * [nodemon](https://github.com/remy/nodemon) - пакет для автоматического перезапуска сервера после редактирования файлов
  
Вызывать `npm install` не нужно - это сделает за нас докер.   
  
Все изменения кода смотрите в [диффе][diff]
(изменения в `README.md` лучше сразу схлопывать, чтобы не мешали).

[Назад][prev] | [Вперед][next]

[prev]: https://github.com/vitalets/alice-workshop/tree/step0
[diff]: https://github.com/vitalets/alice-workshop/compare/step0...step1
[next]: https://github.com/vitalets/alice-workshop/tree/step2
