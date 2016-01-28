module.exports = {
    options: {
        livereload: true,
    },
    php: {
        files: ['sources/jade/**/*.jade'],
        tasks: ['newer:jadephp'],
    },
    css: {
        files: ['sources/sass/**/*.sass'],
        tasks: ['sass'],
    },
    //alternative preprocessor
    // css_alt: {
    //     files: ['sources/less/**/*.less'],
    //     tasks: ['less'],
    // },
    favicon: {
        files: ['sources/favicon.*'],
        tasks: ['favicons'],
    },
    fonts: {
        files: ['sources/fonts.yml'],
        tasks: ['font_loader:get'],
    },
    js: {
        files: ['sources/coffee/**/*.coffee'],
        tasks: ['newer:coffee'],
    },
    image: {
        files: ['sources/images/*.{png,gif,jpg}'],
        tasks: ['newer:retinafy','newer:imagemin:staticly'],
    },
    sprites: {
        files: ['sources/icons/*.{png,gif,jpg}'],
        tasks: ['newer:retinafy','newer:imagemin:sprite', 'sprite'],
    },
    svg: {
        files: ['sources/vector/*.svg'],
        tasks: ['newer:svgmin'],
    },
    yii: {
        files: ['sources/*.php'],
        tasks: ['newer:copy:yiiB'],
    },
    
    
    // configFiles: {
    //     files: ['web/svg/**/*.svg'],
    //     options: {
    //         reload: true
    //     }
    // }
}
