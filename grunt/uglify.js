module.exports = 
{
    js: {
        files: [{
            expand: true,
            cwd: 'web/js',
            src: ['**/*.js', '!**/*.min.js'],
            dest: 'web/js',
            ext: '.min.js'
        }]
    },
    libs: {
        files: [{
            expand: true,
            cwd: 'web/libs',
            src: ['**/*.js', '!**/*.min.js'],
            dest: 'web/libs/',
            ext: '.min.js',
            extDot: 'last',
        }]
    }
}