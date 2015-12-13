module.exports =
{
	//without retina
    // sprite_example_mixins: {
    // 	algorithmOpts: {sort: true},
    //     src: '.temp/icons/example/*.png',
    //     dest: 'web/sprites/example.png',
    //     imgPath: '../sprites/example.png',
    //     destCss: 'sources/sass/modules/Sprites/example.scss',
    //     cssTemplate: function (params) {
    //         var spriteClassName = 'se';
    //         var result = '@mixin '+spriteClassName+' {\n\tdisplay: inline-block;\n\tbackground-image: url('+params.items[0].image+');\n\tbackground-repeat: no-repeat;\n\twidth: ' + params.items[0].px.width + ';\n\t' +
    //                 'height: ' + params.items[0].px.height + ';' + '\n}\n';
    //         for (var i = 0, ii = params.items.length; i < ii; i += 1) {
    //         	if(!/@2x/.test(params.items[i].name))
	   //              result += '@mixin '+spriteClassName+'-' + params.items[i].name + '{@include '+ spriteClassName +';' +
	   //                  'background-position: ' + params.items[i].px.offset_x + ' ' + params.items[i].px.offset_y + ';width: ' + params.items[i].px.width + ';' +
	   //                  'height: ' + params.items[i].px.height + ';' +'}\n';
    //         }
    //         return result;
    //     }
    // },
    // sprite_example_styles: {
    // 	algorithmOpts: {sort: true},
    //     src: '.temp/icons/example/*.png',
    //     dest: 'web/sprites/example.png',
    //     imgPath: '../sprites/example.png',
    //     destCss: 'web/css/example.css',
    //     cssTemplate: function (params) {
    //         var spriteClassName = 'se';
    //         var result = '.'+spriteClassName+' {\n\tdisplay: inline-block;\n\tbackground-image: url('+params.items[0].image+');\n\tbackground-repeat: no-repeat;\n\twidth: ' + params.items[0].px.width + ';\n\t' +
    //                 'height: ' + params.items[0].px.height + ';' +'\n}\n';
    //         for (var i = 0, ii = params.items.length; i < ii; i += 1) {
    //         	if(!/@2x/.test(params.items[i].name))
	   //              result += '.'+spriteClassName+'-' + params.items[i].name + '{background-position: ' + params.items[i].px.offset_x + ' ' + params.items[i].px.offset_y + ';width: ' + params.items[i].px.width + ';' +
	   //                  'height: ' + params.items[i].px.height + ';' +'}\n';
    //         }
    //         return result;
    //     }
    // },
    
    //With retina
    sprite_example_retina_mixins: {
    	algorithmOpts: {sort: true},
        src: '.temp/icons/example/*.png',
        dest: 'web/sprites/example.png',
        imgPath: '../sprites/example.png',
        retinaSrcFilter: '.temp/icons/example/*@2x.png',
        retinaDest: 'web/sprites/example@2x.png',
        retinaImgPath: '../sprites/example@2x.png',
        destCss: 'sources/sass/modules/Sprites/example.scss',
        cssTemplate: function (params) {
            var spriteClassName = 'se';
            var result = '@mixin '+spriteClassName+' {\n\tdisplay: inline-block;\n\tbackground-image: url('+params.items[0].image+');\n\tbackground-repeat: no-repeat;\n\twidth: ' + params.items[0].px.width + ';\n\t' +
                    'height: ' + params.items[0].px.height + ';' +'\n\tbackground-size:'+params.items[0].px.total_width+' '+params.items[0].px.total_height+';\n\t@include retina{\n'+
                '\t\tbackground-image: url('+params.items[0].image.replace(/.png/g,"@2x.png")+');\n\t}\n}\n';
            for (var i = 0, ii = params.items.length; i < ii; i += 1) {
            	if(!/@2x/.test(params.items[i].name))
	                result += '@mixin '+spriteClassName+'-' + params.items[i].name + '{@include '+ spriteClassName +';' +
	                    'background-position: ' + params.items[i].px.offset_x + ' ' + params.items[i].px.offset_y + ';width: ' + params.items[i].px.width + ';' +
	                    'height: ' + params.items[i].px.height + ';' +'}\n';
            }
            return result;
        }
    },
    sprite_example_retina_styles: {
    	algorithmOpts: {sort: true},
        src: '.temp/icons/example/*.png',
        dest: 'web/sprites/example.png',
        imgPath: '../sprites/example.png',
        retinaSrcFilter: '.temp/icons/example/*2x.png',
        retinaDest: 'web/sprites/example@2x.png',
        retinaImgPath: '../sprites/example@2x.png',
        destCss: 'web/css/example.css',
        cssTemplate: function (params) {
            var spriteClassName = 'se';
            var result = '.'+spriteClassName+' {\n\tdisplay: inline-block;\n\tbackground-image: url('+params.items[0].image+');\n\tbackground-repeat: no-repeat;\n\twidth: ' + params.items[0].px.width + ';\n\t' +
                    'height: ' + params.items[0].px.height + ';' +'\n\tbackground-size:'+params.items[0].px.total_width+' '+params.items[0].px.total_height+';\n\t@media (min--moz-device-pixel-ratio: 1.3),(-o-min-device-pixel-ratio: 2.6/2),(-webkit-min-device-pixel-ratio: 1.3),(min-device-pixel-ratio: 1.3),(min-resolution: 1.3dppx) {\n'+
                '\t\tbackground-image: url('+params.items[0].image.replace(/.png/g,"@2x.png")+');\n\t}\n}\n';
            for (var i = 0, ii = params.items.length; i < ii; i += 1) {
            	if(!/@2x/.test(params.items[i].name))
	                result += '.'+spriteClassName+'-' + params.items[i].name + '{' +
	                    'background-position: ' + params.items[i].px.offset_x + ' ' + params.items[i].px.offset_y + ';width: ' + params.items[i].px.width + ';' +
	                    'height: ' + params.items[i].px.height + ';' +'}\n';
            }
            return result;
        }
    },
}