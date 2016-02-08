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
    }
}
