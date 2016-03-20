module.exports = ->
	#-------------------------
	# swipe functions
	#-------------------------
	$.fn.swipe =  ( callback, capture = false) ->
		touchDown = false
		originalPosition = null
		$el = $(@)

		swipeInfo = ( event ) ->
			x = event.changedTouches[0].pageX
			y = event.changedTouches[0].pageY
			dx = dy = null

			dx =  if x > originalPosition.x then "right" else "left"
			dy =  if y > originalPosition.y then "down" else "up"

			direction: 
				x: dx,
				y: dy
			offset:
				x: x - originalPosition.x
				y: originalPosition.y - y

		_touchstartHandler =  ( event ) ->
			touchDown = true
			originalPosition =
				x: event.changedTouches[0].pageX
				y: event.changedTouches[0].pageY

		_touchendHandler = ( event ) ->
			touchDown = false
			originalPosition = null


		_touchmoveHandler = ( event ) ->
			return undefined if !touchDown
			# event.stopPropagation() if capture

			info = swipeInfo event
			callback info.direction, info.offset, $el

		$el.get(0).addEventListener window.events.touchstart, _touchstartHandler, capture
		$el.get(0).addEventListener window.events.touchmove, _touchmoveHandler, capture
		$el.get(0).addEventListener window.events.touchend, _touchendHandler, capture