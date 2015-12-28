module.exports = {
    dynamic: {
    	options:{
    		optimizationLevel: 1
    	},
        files: [{
        	flatten: true,
            expand: true, 
            cwd: 'sources/',
            src: ['images/*.{png,gif,jpg}'],
            dest: 'web/img'
        }]
    },
    staticly:{
    	options:{
    		optimizationLevel: 1
    	},
        files: [{
        	flatten: true,
            expand: true, 
            src: ['web/img/*.{png,gif,jpg}'],
            dest: 'web/img'
        }]
    },
    sprite: {
    	options:{
    		optimizationLevel: 1
    	},
        files: [{
        	flatten: true,
            expand: true, 
            src: ['web/sprites/*.{png,gif,jpg}'],
            dest: 'web/sprites'
        }]
    }
}