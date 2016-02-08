//TODO get module from global

var Client = require(NODE_PATH + 'ftp'),
	path = require('path'),
	fs = require('fs');


var dest = '/www/five.dcmr.ru/themes/frontend/',
	root = '.temp/',
	pathes = [
		'.bowerrc',
		'.gitignore',
		'Gruntfile.js',
		'bower.json',
		'package.json',
		'sources/',
		'grunt/'
	];

var c = new Client();
c.on('ready', function() {
	var file = dir = '';


	function closeConnection(errMsg) {
        if (errMsg) {
            console.log('Error:' + errMsg);
        } 
        c.end();
    }

	function download() {
        if (pathes.length < 1) {

            closeConnection();
            return; // We are completed, close connection and end the program
        }
        var element = pathes.pop();
        if( /\.+/.test(element) ){
        	//Если файл то будем качать
        	file = element;
	        c.get(dest + file, function(err, stream) {
				//Получаем в файл контент
				if (err) throw err;
				var curDir = root + file;
				stream.pipe(fs.createWriteStream(curDir));
				console.log('File '+ curDir + ' dowload');
			 	download();
			});
        }else{
        	//Если папка то будем делать реккурсивный запрос и вытаскивать все, что только можно
        	dir = element;
        	//И сразу создаем ее локально
        	if (!fs.existsSync(root + dir)){
				fs.mkdirSync(root + dir);
			}
        	c.list(dest + dir ,function(err, list) {
				if (err) throw err;

				//Все файлы и папки в списке добавляем в очередь скачивания
				list.forEach(function(i, index, arr){
					if (arr[index].type === 'd'){
						//Если директория то добавим в конце /
						pathes.push(dir + arr[index].name + '/');
					}else{
						pathes.push(dir + arr[index].name);
					}
				})
				download();
			});
        }         
    }
    download();
});

c.connect({
	host: '88.198.10.230',
	user: 'mak',
	password: 'gt[frjlth'
});