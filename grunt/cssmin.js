module.exports = 
{
    target: {
        files: [{
            expand: true,
            cwd: 'web/css',
            src: ['*.css', '!**/*.min.css'],
            dest: 'web/css',
            ext: '.min.css',
            extDot: 'last',
        }]
    }
}