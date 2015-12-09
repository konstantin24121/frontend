module.exports = 
{
    options: {
        debug: true,
        precomposed: false,
        trueColor: true,
        appleTouchBackgroundColor: 'none',
        firefox: true,
        androidHomescreen: true,
        coast: true,
        firefoxManifest: 'web/favicon/manifest.webapp',
        windowsTile: true,
        tileBlackWhite: false,
        tileColor: '#00aae7',
        html: 'web/favicon/favicon.html',
        HTMLPrefix: "{path}/"
    },
    icons: {
        src: 'sources/favicon.*',
        dest: 'web/favicon/'
    }
}