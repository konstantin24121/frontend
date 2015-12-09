module.exports = {
    options: {
        sizes: {
            '50%': {
                suffix: ''
            },
            '100%': {
                suffix: '@2x'
            }
        }
    },
    files: {
        flatten: true,
        expand: true,
        cwd: 'sources/',
        src: ['images/*.{png,gif,jpg}'],
        dest: 'web/img'
    }
}
