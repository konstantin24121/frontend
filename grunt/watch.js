module.exports = {
    options: {
        livereload: true,
    },
    php: {
        files: ['sources/jade/**/*.jade'],
        tasks: ['newer:jadephp'],
    },
    css: {
        files: ['sources/sass/**/*.scss'],
        tasks: ['sass'],
    },
    //alternative preprocessor
    css_alt: {
        files: ['sources/less/**/*.less'],
        tasks: ['less'],
    },
    favicon: {
        files: ['sources/favicon.*'],
        tasks: ['favicons'],
    },
    fonts: {
        files: ['sources/fonts.yml'],
        tasks: ['font_loader'],
    },
    js: {
        files: ['sources/coffee/**/*.coffee'],
        tasks: ['newer:coffee'],
    },
    image: {
        files: ['sources/images/*.{png,gif,jpg}'],
        tasks: ['newer:retinafy','newer:imagemin:staticly'],
    },
    
    
    configFiles: {
        files: ['web/svg/**/*.svg'],
        options: {
            reload: true
        }
    }
}
