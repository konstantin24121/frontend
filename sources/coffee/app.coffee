do require('./extends/events') # extend events
do require('./extends/Array') # extend Array
do require('./extends/Data') # extend Data
do require('./extends/jBem') # create jBem
do require('./components/plugins/swipe') # create swipe
do require('./components/plugins/notify') # create notify plugin


$(document).ready ->
	uiRipple = do require('./components/uiRipple') # create Ripple
	# modal = do require('./widgets/mod') # create modal window
	exports.callbackSendForm = do require('./widgets/forms/callback') # create callback
	
	# Отключение любой анимации при ресайзе
	$(window).resize ->
		clearTimeout offAnimationT
		$('html').setState 'off-animation'
		
		callback = ->
			$('html').unsetState 'off-animation'
		offAnimationT = setTimeout callback, 1000

	exports.notification = $('#notifications').notify delay: 6000


	this.on 'click', ->
		require.ensure [], (require) ->
			modal = require('./widgets/mod')
			do modal
		, 'mod'