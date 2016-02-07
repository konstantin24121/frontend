var pngquant = require('imagemin-pngquant');
var pngcrush = require('imagemin-pngcrush');
var advpng = require('imagemin-advpng');
var mozjpeg = require('imagemin-mozjpeg');
var gifsicle = require('imagemin-gifsicle');

module.exports = {
    dynamic: {
    	options:{
    		optimizationLevel: 2,
            progressive: true,
            use: [
                pngquant({speed:1}), 
                pngcrush({reduce: true}), 
                advpng({optimizationLevel:4}), 
                mozjpeg(), 
                gifsicle({interlaced: true})
            ]
    	},
        files: [{
        	flatten: true,
            expand: true, 
            cwd: 'sources/',
            src: ['images/*.{png,gif,jpg}'],
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
            flatten: true,
            expand: true, 
            cwd: 'sources/',
            src: ['images/*.gif'],
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
                mozjpeg(), 
                gifsicle({interlaced: true})
            ]
    	},
        files: [{
        	flatten: true,
            expand: true, 
            src: ['web/img/*.{png,gif,jpg}'],
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
                mozjpeg()
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