module.exports = {
	options: {
        plugins: [
            {cleanupIDs: false},
        ]
    },
	dist: {
         files: [{
            expand: true,
            cwd: 'sources/vector',
            src: ['*.svg'],
            dest: 'web/svg/',
        }],
    }
}