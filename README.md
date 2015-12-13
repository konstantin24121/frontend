#Команды#

Компиляция статики, выполнение всех заданий watch один раз. довольно бесполезно

`grunt scompile`

Минимизация всего и вся

`grunt minify`

Создание изображений и минификация

`grunt imagecreate`

Билд скрипт

`grunt build`

Тест Google Page speed

`grunt speedtest`

Запуск watch

`grunt watch --mode=compile`




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
