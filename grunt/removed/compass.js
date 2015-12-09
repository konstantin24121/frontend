module.exports = 
{
    compile: {
        options: {
            sassDir: 'sources/sass/views',
            cssDir: 'web/css',
            fontsDir: 'web/fonts',
            environment: 'development',
            noLineComments: false,
            require: ['susy', 'breakpoint'],
            outputStyle: 'nested',
            sourcemap: true,
            relativeAssets: true,
        }
    }
}