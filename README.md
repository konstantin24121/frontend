0. node load
1. npm i
2. grunt build


Команды
----------

| Описание                                                                                                       | Команды к консоли               |
|----------------------------------------------------------------------------------------------------------------|---------------------------------|
| Скачивание всех ресурсов темы. Необходим файл с сервера load.js                                                | node load                       |
| Компиляция статики, выполнение всех заданий watch один раз. довольно бесполезно                                | grunt scompile                  |
| Компилирует js                                                                                                 | grunt js                        |
| Минимизация всего и вся                                                                                        | grunt minify                    |
| Создание изображений и минификация                                                                             | grunt imagecreate               |
| Создание спрайтов и минификация                                                                                | grunt spritecreate              |
| Билд скрипт                                                                                                    | grunt build                     |
| Билд скрипт для многоядерных (4 ядра), с паралелзьмом                                                          | grunt buildcon                  |
| Тест сайта на скорость и оптимальность                                                                         | grunt speedtest                 |
| Отправка темы на сервер                                                                                        | grunt deploy                    |
| Запуск watch в обычном режиме, для мощных машин                                                                | grunt watch --mode=compile      |
| Запуск watch в режиме экономии task'ов. В файле watch оставть только,php css js задания, остальное закоментить | grunt watch --mode=lightcompile |
| Установка новых bower'ов, где {package} имя пакета                                                             | grunt shell:bi:{package}        |
| Удаление пакетов bower'ов, где {package} имя пакета                                                            | grunt shell:bu:{package}        |

А для всего остального есть MasterCard


Режимы
----------

| Описание                                                                                                                             | Переменная | Значение   |
|--------------------------------------------------------------------------------------------------------------------------------------|------------|------------|
| Режим обычной работы, тяжелый, загружает все задания. Используется для билда или вызовов статичных заданий. Режим по умолчанию       | --mode     | dev        |
| Режим watch компилирования. Загружает только задания необходимые для компиляции sources                                              | --mode     | compile    |
| Режим деплоя. Экономит время при инициализации, в случае если нужно сделать только deploy                                            | --mode     | deploy     |
| Режим для слабых машин, значительно разгружает режим  компилирования. Компилируется только css, js, php. Режим по умолчанию выключен | --light    | true/false |
| Режим колхозной непрерывной интеграции.  Кидает измененные скомпиленые файлы прямиком на сервер. Режим по умолчанию выключен         | --live     | true/false |

Пример смены режима на облегченный с интеграцией
`grunt watch --mode=compile --light=true --live=true`


#Как сделать пакеты нормальными или если что-то пошло не так или операция Н#

##NodeLoad##

Обязательно наличие установленного глобально пакета ftp (npm i -g ftp)


##Bourbone##

При компиле в консоль сыпят сообщения что "такой то класс будет удален из следующей версии", все эти сообщение, сюрприз, увеличивают время компиляции. Советую отключить это дерьмо.
  
`bower/bourbone/app/assets/stylesheets/_bourbone.scss`

Закоментить последнюю строку

`@import "bourbon-deprecated-upcoming";`


##Page speed##

Чтобы получать инфу об оптимизации переписать project.domain в файле package.json. И не забыть установить глобально psi 
  
`npm install --g psi`


##Ftp_push##

Обязательно надо настроить параметры проекта в package.json (массив project). В случае если деплой происходит не на нашем сервере то необходимо заменить путь, в файле Gruntfile.js


##Perfbudget##

Чтобы получать инфу об оптимизации переписать domain в файле package.json.


##Сoncurrent##

В настройках указать число ядер. Ускоряет. Не использовать тем у кого меньше 4 ядер.

##Bower через grunt##

Напоминаю что этот плагин и команды устанавливают пакеты в папку web, пакеты для developa ставятся по классической схеме через bower


> ##Depricatнутые##
> 
> ###JadePhp###
> **since 2.5.0 - чтобы не использовать экранирование просто используем окроткий вывод через !=**
>
> Чтобы избавится от *htmlspecialchars* при использовании оператора **=** коментим в файле
>   
> `node_modules/grunt-jade-php/node_modules/jade-php/lib/compiler.js`
> 
> с 178 по 180 и с 210 до 212 строки
> 
> 
> ###Favicons###
> 
> **since 2.5.0 - пакет берется напрямую из репозитоя автора, где он все соблагоизволил поравить.**
> 
> Это дерьмо на винде не будет работать без imagistic (или как то так, так что его надо установить) и с 0.4.0 версией sync-exec. Второе исправить легко, идем в файла
>   
> `node_modules/grunt-favicons/package.json`
> 
> И правим версию
> 
> `"sync-exec": "^0.4.0" -> "sync-exec": "^0.6.0"`
> 
> после чего в этой папке запускаем npm install. Теперь grunt favicons заработает.
> 


#Что есть в сборке#

- NodeLoad - скрипт настроеный на скачку всего необходимого внутри темы, для развертки
- [Bower task](https://github.com/yatskevich/grunt-bower-task) для установки bower-пакетов 
- [Shell](https://github.com/sindresorhus/grunt-shell) для работы с консолью, и консольными командами
- [Haml](https://github.com/alexluke/grunt-haml-php) для компиляции Haml в Php
- [SASS](https://github.com/gruntjs/grunt-contrib-sass) для компиляции SASS в CSS
- [Clean](https://github.com/gruntjs/grunt-contrib-clean) для удаления файлов
- [Cmq](https://github.com/buildingblocks/grunt-combine-media-queries) для сборки медиазапросов
- [Cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) для минификации CSS
- [Favicons](https://github.com/gleero/grunt-favicons) для создания favicon'ок
- [FileCreator](https://github.com/travis-hilterbrand/grunt-file-creator) для создания файлов
- [FtpPush](https://github.com/Robert-W/grunt-ftp-push) для деплоя
- [FontLoader](https://github.com/konstantin24121/grunt-font-loader) для загрузки шрифтов с ftp
- [Coffee](https://github.com/gruntjs/grunt-contrib-coffee) для компиляции CoffeeScript в JS
- [Webpack](https://github.com/webpack/grunt-webpack) для [Webpack](http://webpack.github.io/) сборки JS
- [Uglify](https://github.com/gruntjs/grunt-contrib-uglify) для минификации JS файлов
- [Retinafy](https://github.com/JrSchild/grunt-retinafy) для создания ретина-изображений
- [Spritesmith](https://github.com/Ensighten/grunt-spritesmith) для создания спрайтов и стилей для них
- [Imagemin](https://github.com/gruntjs/grunt-contrib-imagemin) для минификации IMG и PNG
- [Watch](https://github.com/gruntjs/grunt-contrib-watch) для livereload
- [Newer](https://github.com/tschaub/grunt-newer) для отбрасывания из выборок файлов, которые не изменились
- [Perfbudget](https://github.com/tkadlec/grunt-perfbudget) тестируем скорость, альтернатива pagespeed, но круче
- [Copy](https://github.com/gruntjs/grunt-contrib-copy) для копирования файлов
- [LoadConfig](https://github.com/firstandthird/load-grunt-config) для разбиения настроек тасков по файлам
- [Time](https://github.com/sindresorhus/time-grunt) время выполнения заданий
- [Svgmin](https://github.com/sindresorhus/grunt-svgmin) для минификации векторной графики

###Alternative
- [jadePhp](https://github.com/viniwrubleski/jade-php) для компиляции Jade в Php
- [Less](https://github.com/gruntjs/grunt-contrib-less) для компиляции LESS в CSS


###Что есть, но пока что не используется###

- [Сoncurrent](https://github.com/sindresorhus/grunt-concurrent) Время билда должно быть весьма велико чтобы что то параллелить, сейчас такой надобности нету, наоборот рпоигрыш наблюдается. На многоядерных можно пользовать.

###Depricated###
Либо не используется, либо пока не найдено приминения

- [Compass](https://github.com/gruntjs/grunt-contrib-compass) старый компилятор и фрейм Compass для SASS. Исключен из за высокого времени на компиляцию
- [Notify](https://github.com/dylang/grunt-notify) подымает сообщения, с помощью Growl'a. Пищало, лишнее время на загрузку таска. Не нужно, если держать окно консоли поверх остальных
- [Periodic](https://github.com/bealearts/grunt-periodic) периодический запуск заданий, оказалось не то что надо, так как занимается лишь повторением задач, в случае если они не были запущены ни разу за указанный период. Практического применения не найдено
- [Pagespeed](https://github.com/jrcryer/grunt-pagespeed) проходит проверку в Google insight pageSpeed. Пока не работает и зависает, пока что не применимо.
- [Concat](https://github.com/gruntjs/grunt-contrib-concat) конкатенирует файлы, без надобности, теперь.
- [HTML5 Manifest](https://github.com/gunta/grunt-manifest) для кеширования и оффлайн страниц, пока таких задач не возникало