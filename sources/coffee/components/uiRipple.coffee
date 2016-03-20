module.exports = ->
	# Ripple эффект при клике на эллемент обладающий поведением

	$ripple = $ '.ripple'

	$ripple.on 'click.ui.ripple', (e) ->
			# Пока один волна не закончится, вторую не начинаем
			$t = $ @
			if $t.hasState 'animated' then return null else $t.setState 'animated'

			$offset = do $t.offset
			$circle = $t.find '.ripple__circle'

			x = e.pageX - $offset.left
			y = e.pageY - $offset.top

			$circle.css 
				top: y + 'px'
				left: x + 'px'

			$circle.setState 'active'
			false

	$ripple.on window.events.animationend, ->
		$('.ripple__circle', @).unsetState 'active'
		$(@).unsetState 'animated'
		window.location = $(@).attr('href');