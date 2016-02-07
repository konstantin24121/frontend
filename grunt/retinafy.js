module.exports = {
    images: {
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
        files: [{
            flatten: true,
            expand: true,
            cwd: 'sources/',
            src: ['images/**/*.{png,jpg}'],
            dest: 'web/img'
        }],
    },
    icons: {
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
        files: [{
            expand: true,
            cwd: 'sources/',
            src: ['icons/**/*.{png,jpg}'],
            dest: '.temp/'
        }]
    }
}
