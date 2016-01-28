module.exports = {
    libs: {
        files: [{
            expand: true,
            cwd: 'sources/libs',
            src: ['**'],
            dest: 'web/libs/',
        }],
    },
    yiiB: {
        files: [{
            expand: true,
            cwd: 'sources',
            src: ['*.php'],
            dest: '',
        }],
    }
}
