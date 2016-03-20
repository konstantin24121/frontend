module.exports = {
    libs: {
        files: [{
            expand: true,
            cwd: 'sources/libs',
            src: ['**'],
            dest: 'web/libs/',
        }],
    },
}
