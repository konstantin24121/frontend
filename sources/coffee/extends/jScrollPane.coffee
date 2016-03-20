module.exports = ->

	window._prevHeight = do $(window).height
	window._prevWidth = do $(window).width

	$(window).bind 'resize', -> # Событие переинициализирующее все jsPanel при резайзе по высоте
		if $(@).height() == window._prevHeight and $(@).width() == window._prevWidth
			return null
		if not throttleTimeout
			_callback = ->
				do data.reinitialise for jsp, data of window.jsp
				window._prevHeight = do $(window).height
				window._prevWidth = do $(window).width
				throttleTimeout = null
			throttleTimeout = setTimeout _callback, 50


	# немного расширяет функционал jScrollPane
	$.fn.jScrollPaneExt = ->
		hidedragTimer = hidewheelTimer = showdragTimer = wheelActive = null
		make = ->
			$(@)
				.bind window.events.touchstart, (event) -> # Событие для тачскрина, показываюшее drag-полосу
					_callback = =>
						$('.jspDrag', @).setState 'active'
					@.showdragTimer = setTimeout _callback, 100
					clearTimeout @.hidedragTimer
					return @
				.bind window.events.touchend, (event) -> # Событие для тачскрина, убирающее drag-полосу
					_callback = =>
						$('.jspDrag', @).unsetState 'active'
					@.hidedragTimer = setTimeout _callback, 600
					return @
				.bind window.events.touchmove, (event) -> # Событие для тачскрина, убирающее drag-полосу
					do event.stopPropagation
				.bind 'mousewheel', (event) -> # Событие для колеса мышки, показываюшее и скрывающее drag-полосу
					if not @.wheelActive
						$('.jspDrag', @).setState 'active'
						@.wheelActive = on
					clearTimeout @.hidewheelTimer
					_callback = =>
						$('.jspDrag', @).unsetState 'active'
						@.wheelActive = no
					@.hidewheelTimer = setTimeout _callback, 1000
					return @	
		@.each(make);



