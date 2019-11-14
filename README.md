# Шаг 0 - Подготовительный

1. Откройте терминал и проверьте, что у вас работает докер:
   ```bash
   docker run hello-world
   ```
   Должно получиться примерно так:
   ```
   $ docker run hello-world
   Unable to find image 'hello-world:latest' locally
   latest: Pulling from library/hello-world
   0e03bdcc26d7: Pull complete 
   Digest: sha256:6a65f928fb91fcfbc963f7aa6d57c8eeb426ad9a20c7ee045538ef34847f44f1
   Status: Downloaded newer image for hello-world:latest
   
   Hello from Docker!
   ...
   ```

2. Теперь склонируйте репозиторий:
    ```bash
    git clone https://github.com/vitalets/alice-workshop.git
    ```
3. Перейдите в папку `alice-workshop` и сделайте чекаут на тег `step0`:
   ```bash
   cd alice-workshop
   git checkout -b dev step0
   ```
4. Откройте папку `alice-workshop` в любимом редакторе и приготовьтесь писать код :)

[Готово][next]

[next]: http://bit.ly/alice-workshop_step1
