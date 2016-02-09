var optionsArray = {
    host: global['host'],
    authKey: global['user'],
    dest: global['dest']
};

module.exports = {
   	all: {
        options: optionsArray,
        files: [{
            src: [
                "sources/**/*.*",
                "views/**/*.*",
                "web/**/*.*",
                "grunt/**/*.*",
                ".bowerrc",
                ".gitignore",
                ".htaccess",
                "*.php",
                "Gruntfile.js",
                "package.json",
                "bower.json",
            ],
        }]
    },
    css: {
    	options: optionsArray,
        files: [{
            src: [  
            	"web/css/*.*",
            ],
        }]
    },
    js: {
    	options: optionsArray,
        files: [{
            src: [  
            	"web/js/*.*",
            ],
        }]
    },
    php: {
    	options: optionsArray,
        files: [{
            src: [  
            	"views/**/*.*",
            ],
        }]
    },
    image: {
    	options: optionsArray,
        files: [{
            src: [  
            	"web/img/*.*",
            ],
        }]
    },
    sprites: {
    	options: optionsArray,
        files: [{
            src: [  
            	"web/sprites/*.*",
            ],
        }]
    },
    svg: {
    	options: optionsArray,
        files: [{
            src: [  
            	"web/svg/*.*",
            ],
        }]
    },
    yii: {
    	options: optionsArray,
        files: [{
            src: [  
            	"*.php",
            ],
        }]
    }

}
