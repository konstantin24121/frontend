var	path = require('path'),
	fs = require('fs');

//Получаем имя пользователя
var userName = process.env['USERPROFILE'].split(path.sep)[2];
//Подрубаем глобальный пакет
var Client = require('C:/Users/'+userName+'/AppData/Roaming/npm/node_modules/ftp');



var c = new Client();
c.on('ready', function() {
	var file = dir = '';


	function closeConnection(errMsg) {
        if (errMsg) {
            console.log('Error:' + errMsg);
        } 
        c.end();
        fs.unlink('load.js')
    }

	if (!fs.existsSync(load.root) && load.root !== ''){
		fs.mkdirSync(load.root);
	}

	function download() {
        if (load.pathes.length < 1) {

            closeConnection();
            return; // We are completed, close connection and end the program
        }
        var element = load.pathes.pop();
        if( /\.+/.test(element) ){
        	//Если файл то будем качать
        	file = element;
	        c.get(load.dest + file, function(err, stream) {
				//Получаем в файл контент
				if (err) throw err;
				var curDir = load.root + file;
				stream.pipe(fs.createWriteStream(curDir));
				console.log('File '+ curDir + ' dowload');
			 	download();
			});
        }else{
        	//Если папка то будем делать реккурсивный запрос и вытаскивать все, что только можно
        	dir = element;
        	//И сразу создаем ее локально
        	if (!fs.existsSync(load.root + dir)){
				fs.mkdirSync(load.root + dir);
			}
        	c.list(load.dest + dir ,function(err, list) {
				if (err) throw err;

				//Все файлы и папки в списке добавляем в очередь скачивания
				list.forEach(function(i, index, arr){
					if (arr[index].type === 'd'){
						//Если директория то добавим в конце /
						load.pathes.push(dir + arr[index].name + '/');
					}else{
						load.pathes.push(dir + arr[index].name);
					}
				})
				download();
			});
        }         
    }
    download();
});

//Настройка закачки
var load = {
	host: '88.198.10.230',
	user: 'mak',
	password: 'gt[frjlth',
	dest: '/www/five.dcmr.ru/themes/frontend/',
	root: '',
	pathes: [
		'.bowerrc',
		'.gitignore',
		'Gruntfile.js',
		'bower.json',
		'package.json',
		'sources/',
		'grunt/'
	]
}

c.connect({
	host: load.host,
	user: load.user,
	password: load.password
});