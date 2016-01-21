module.exports = {
	def:{
		command: function () {
            return 'echo We haven\'t default task more. Try to watch in aliases.yaml or watch.js files. If you need to create theme exec `grunt build`';
        },
	},
    installBower: {
        command: 'bower install',
        options: {
            execOptions: {
                cwd: 'sources'
            }
        }
    },
    bi: {
        command: function (pack) {
            return 'bower install -S ' + pack;
        },
        options: {
            execOptions: {
                cwd: 'sources'
            }
        }
    },
    bu: {
        command: function (pack) {
            return 'bower uninstall -S ' + pack;
        },
        options: {
            execOptions: {
                cwd: 'sources'
            }
        }
    },
    speedDesktope:{
    	command: 'psi '+ global['domain'] + ' --strategy=desktop --optimized --threshold=85'
    },
    speedMobile:{
    	command: 'psi '+ global['domain'] + ' --strategy=mobile --optimized --threshold=85'
    }
}
