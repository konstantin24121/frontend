var optionsArray =  {
        authKey: "mak",
        host: "88.198.10.230",
        dest: "/www/arr.dcmr.ru/themes/yohoho/web",
    };
module.exports = 
{
    css: {
        options: optionsArray,
        files: [{
            expand: true,
            cwd: 'web',
            src: [
                "css/**/*",
            ]
        }]
    },
    js: {
        options: optionsArray,
        files: [{
            expand: true,
            cwd: 'web',
            src: [
                "js/**/*",
            ]
        }]
    },
    favicons: {
        options: optionsArray,
        files: [{
            expand: true,
            cwd: 'web',
            src: [
                "favicon/**/*",
            ]
        }]
    },
    img: {
        options: optionsArray,
        files: [{
            expand: true,
            cwd: 'web',
            src: [
                "img/**/*",
            ]
        }]
    },
    fonts: {
        options: optionsArray,
        files: [{
            expand: true,
            cwd: 'web',
            src: [
                "fonts/**/*",
            ]
        }]
    },
    svg: {
        options: optionsArray,
        files: [{
            expand: true,
            cwd: 'web',
            src: [
                "svg/**/*",
            ]
        }]
    },
    components: {
        options: optionsArray,
        files: [{
            expand: true,
            cwd: 'web',
            src: [
                "components/**/*",
            ]
        }]
    },
    bower: {
        options: optionsArray,
        files: [{
            expand: true,
            cwd: 'web',
            src: [
                "bower/**/*",
            ]
        }]
    },
    views:{
    	options: optionsArray,
        files: [{
            expand: true,
            cwd: 'view',
            src: [
                "/**/*",
            ]
        }]
    }
}