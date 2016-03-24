var pngquant = require('imagemin-pngquant');
var pngcrush = require('imagemin-pngcrush');
var advpng = require('imagemin-advpng');
var mozjpeg = require('imagemin-mozjpeg');
var gifsicle = require('imagemin-gifsicle');

module.exports = {
    dynamic: {
        options:{
            optimizationLevel: 7,
            progressive: true,
            use: [
                pngquant({speed:1}), 
                pngcrush({reduce: true}), 
                advpng({optimizationLevel:4}), 
                mozjpeg({
                    quality: 100, 
                    progressive: true,
                }), 
                gifsicle({interlaced: true})
            ]
        },
        files: [{
            expand: true, 
            cwd: 'sources/images/',
            src: ['**/*.{png,gif,jpg}'],
            dest: 'web/img'
        }]
    },
    dynamicGif: {
        options:{
            optimizationLevel: 2,
            progressive: true,
            use: [gifsicle({interlaced: true})]
        },
        files: [{
            expand: true, 
            cwd: 'sources/images/',
            src: ['**/*.gif'],
            dest: 'web/img'
        }]
    },
    staticly:{
        options:{
            optimizationLevel: 2,
            progressive: true,
            use: [
                pngquant({speed:1}), 
                pngcrush({reduce: true}), 
                advpng({optimizationLevel:4}), 
                mozjpeg({
                    quality: 100, 
                    progressive: true,
                }), 
                gifsicle({interlaced: true})
            ]
        },
        files: [{
            expand: true,
            cwd: 'web/img/', 
            src: ['**/*.{png,gif,jpg}'],
            dest: 'web/img'
        }]
    },
    sprite: {
        options:{
            optimizationLevel: 2,
            progressive: true,
            use: [
                pngquant({speed:1}), 
                pngcrush({reduce: true}), 
                advpng({optimizationLevel:4}), 
                mozjpeg({
                    quality: 100, 
                    progressive: true,
                }), 
                gifsicle({interlaced: true})
            ]
        },
        files: [{
            flatten: true,
            expand: true, 
            src: ['web/sprites/*.{png,jpg}'],
            dest: 'web/sprites'
        }]
    }
}