1. npm i
2. Правка favicons и phpJade
3. grunt build

#Команды#
----------

######Компиляция статики, выполнение всех заданий watch один раз. довольно бесполезно######

`grunt scompile`

######Минимизация всего и вся######

`grunt minify`

######Создание изображений и минификация######

`grunt imagecreate`

######Создание спрайтов и минификация######

`grunt spritecreate`

######Билд скрипт######

`grunt build`

Для многоядерных

`grunt buildcon`

######Тест Page speed######

`grunt speedtest`

######Запуск watch######

В обычном режиме, для мощных машин

`grunt watch --mode=compile`

В режиме экономии task'ов. В файле watch оставть только  php css js задания, остальное закоментить

`grunt watch --mode=lightcompile`

######Установка новых bower'ов######

`grunt shell:b:{package}` где {package} имя пакета


#Как сделать пакеты нормальными#

##JadePhp##

Чтобы избавится от *htmlspecialchars* при использовании оператора **=** коментим в файле
  
`node_modules/grunt-jade-php/node_modules/jade-php/lib/compiler.js`

с 178 по 180 и с 210 до 212 строки


##Bourbone##

При компиле в консоль сыпят сообщения что "такой то класс будет удален из следующей версии", все эти сообщение, сюрприз, увеличивают время компиляции. Советую отключить это дерьмо.
  
`bower/bourbone/app/assets/stylesheets/_bourbone.scss`

Закоментить последнюю строку

`@import "bourbon-deprecated-upcoming";`


##Favicons##

Это дерьмо на винде не будет работать без imagistic (или как то так, так что его надо установить) и с 0.4.0 версией sync-exec. Второе исправить легко, идем в файла
  
`node_modules/grunt-favicons/package.json`

И правим версию

`"sync-exec": "^0.4.0" -> "sync-exec": "^0.6.0"`

после чего в этой паке запускаем npm install. Теперь grunt favicons заработает.


##Page speed##

Чтобы получать инфу об оптимизации переписать domain в файле grunt/shell. И не забыть установить глобально psi 
  
`npm install --g psi`


##Perfbudget##

Обязательно указать в package.json параметр domain 


##Сoncurrent##

В настройках указать число ядер. Ускоряет.


#Что есть в сборке#

- [Bower task](https://github.com/yatskevich/grunt-bower-task) для установки bower-пакетов 
- [Shell](https://github.com/sindresorhus/grunt-shell) для работы с консолью, и консольными командами
- [jadePhp](https://github.com/viniwrubleski/jade-php) для компиляции Jade в Php
- [SASS](https://github.com/gruntjs/grunt-contrib-sass) для компиляции SASS в CSS
- [Less](https://github.com/gruntjs/grunt-contrib-less) для компиляции LESS в CSS
- [Clean](https://github.com/gruntjs/grunt-contrib-clean) для удаления файлов
- [Cmq](https://github.com/buildingblocks/grunt-combine-media-queries) для сборки медиазапросов
- [Сoncurrent](hhttps://github.com/sindresorhus/grunt-concurrent) для ускорения сборки (только для многоядерных)
- [Cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) для минификации CSS
- [Favicons](https://github.com/gleero/grunt-favicons) для создания favicon'ок
- [FontLoader](https://github.com/konstantin24121/grunt-font-loader) для загрузки шрифтов с ftp
- [Coffee](https://github.com/gruntjs/grunt-contrib-coffee) для компиляции CoffeeScript в JS
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

###Что есть, но пока что не используется###
- [FtpPush](https://github.com/Robert-W/grunt-ftp-push) будет использоваться для деплой-скрипта

###Depricated###
Либо не используется, либо пока не найдено приминения

- [Compass](https://github.com/gruntjs/grunt-contrib-compass) старый компилятор и фрейм Compass для SASS. Исключен из за высокого времени на компиляцию
- [Notify](https://github.com/dylang/grunt-notify) подымает сообщения, с помощью Growl'a. Пищало, лишнее время на загрузку таска. Не нужно, если держать окно консоли поверх остальных
- [Periodic](https://github.com/bealearts/grunt-periodic) периодический запуск заданий, оказалось не то что надо, так как занимается лишь повторением задач, в случае если они не были запущены ни разу за указанный период. Практического применения не найдено
- [Pagespeed](https://github.com/jrcryer/grunt-pagespeed) проходит проверку в Google insight pageSpeed. Пока не работает и зависает, пока что не применимо.
- [Concat](https://github.com/gruntjs/grunt-contrib-concat) конкатенирует файлы, без надобности, теперь.
- [HTML5 Manifest](https://github.com/gunta/grunt-manifest) для кеширования и оффлайн страниц, пока таких задач не возникало