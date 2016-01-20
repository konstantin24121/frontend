module.exports = {
    domain: {
        options: {
            url: global['domain'],
            key: 'A.401f54183ba86796454c91dd0b886200',
            runs: 3,
            location: 'ec2-eu-west-1:Chrome',
            budget: {
            	render: '2000',
            	visualComplete: '2500',
		        SpeedIndex: '2300',
		        fullyLoaded: '3000'
            },
            output: 'wpt-results.json',
            timeout: 300,
        }
    }
}
