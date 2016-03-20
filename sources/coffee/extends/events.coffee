module.exports = ->
	# -------------------------
	# JavaScript add cross events
	# -------------------------
	msPointerSupported = window.navigator.msPointerEnabled
	window.events = 
		'touchstart': if msPointerSupported then 'MSPointerDown' else 'touchstart'
		'touchmove': if msPointerSupported then 'MSPointerMove' else 'touchmove'
		'touchend': if msPointerSupported then 'MSPointerUp' else 'touchend'
		'animationend': 'animationend webkitAnimationEnd oanimationend MSAnimationEnd'
		'transitionend': 'transitionend webkitTransitionEnd otransitionend MSAnimationEnd'
	