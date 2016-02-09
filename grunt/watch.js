module.exports = global['light']
?{
    options: {
        livereload: true,
    },
    php: {
        files: ['sources/jade/**/*.jade'],
        tasks: global['live']?['newer:jadephp', 'newer:ftp_push:php']:['newer:jadephp'],
    },
    css: {
        files: ['sources/sass/**/*.scss'],
        tasks: global['live']?['sass','newer:ftp_push:css']:['sass'],
    },
    js: {
        files: ['sources/coffee/**/*.coffee'],
        tasks: global['live']?['newer:coffee','newer:ftp_push:js']:['newer:coffee'],
    },
}
:{
	options: {
        livereload: true,
    },
    php: {
        files: ['sources/jade/**/*.jade'],
        tasks: global['live']?['newer:jadephp', 'newer:ftp_push:php']:['newer:jadephp'],
    },
    css: {
        files: ['sources/sass/**/*.scss'],
        tasks: global['live']?['sass','newer:ftp_push:css']:['sass'],
    },
    js: {
        files: ['sources/coffee/**/*.coffee'],
        tasks: global['live']?['newer:coffee','newer:ftp_push:js']:['newer:coffee'],
    },
    favicon: {
        files: ['sources/favicon.*'],
        tasks: ['favicons'],
    },
    fonts: {
        files: ['sources/fonts.yml'],
        tasks: ['font_loader:get'],
    },
    image: {
        files: ['sources/images/*.{png,gif,jpg}'],
        tasks: global['live']?['newer:retinafy','newer:imagemin:staticly','newer:ftp_push:image']:['newer:retinafy','newer:imagemin:staticly'],
    },
    sprites: {
        files: ['sources/icons/*.{png,gif,jpg}'],
        tasks: global['live']?['newer:retinafy','newer:imagemin:sprite', 'sprite','newer:ftp_push:sprites']:['newer:retinafy','newer:imagemin:sprite', 'sprite'],
    },
    svg: {
        files: ['sources/vector/*.svg'],
        tasks: global['live']?['newer:svgmin','newer:ftp_push:svg']:['newer:svgmin'],
    },
    yii: {
        files: ['sources/*.php'],
        tasks: global['live']?['newer:copy:yiiB','newer:ftp_push:yii']:['newer:copy:yiiB'],
    },
}


    //alternative preprocessor
    // css_alt: {
    //     files: ['sources/less/**/*.less'],
    //     tasks: ['less'],
    // },
    
    // configFiles: {
    //     files: ['web/svg/**/*.svg'],
    //     options: {
    //         reload: true
    //     }
    // }
