module.exports = ->

	# Микроплагин для уведомлений

	### 
	Настройки
	 	delay: 3000  задержка перед закрытием сообщения 

	Создание
		$('#notifications').notify delay:6000

	API
		$('#notifications')
			.notify 'show', 
				title: 'Зад'
				text: 'Спокойно пухлозадый',
				0
				
		$('#notifications').notify 'close' 

	Задержка закрытия заданая меньше, чем скорость появления блокирует закрытие 
	###
	_plugin = ($, window) ->
		methods = 
			init: (options) ->
				options = $.extend
					_blocked: no
					delay: 3000
					,options

				@.each ->
					data = $(@).data('tooltip')
					_this = $(@)

					$(@).data 'tooltip', options if not data

					$(@).on window.events.transitionend, ->
						$(@).data('tooltip')._blocked = no

					$('[class*="__close"]',@).on 'click', ->
						_this.notify('close')

			# Показать сообщение
			# info object информация в сообщении
			#      title string заголовок
			#      text string текст сообщения
			#      showtime bool показывать время

			show: (info, delay = $(@).data('tooltip').delay) ->
				data = $(@).data('tooltip')
				return false if data._blocked

				data._blocked = yes
				
				info = $.extend
					title: 'No title'
					text: 'No text',
					showtime: no
					,info

				if delay
					_callback = =>
						@.notify('close')
					setTimeout _callback, delay

				$('[class*="__title"]', @).html info.title
				$('[class*="__descr"]', @).html info.text	
				if info.showtime
					date = new Date
					$('[class*="__time"]', @).html  "#{date.getHoursWithZero()}:#{date.getMinutesWithZero()}"

				@.setState 'show'

			#Закрыть сообщение
			close: ->
				data = $(@).data('tooltip')
				if !data._blocked
					@.unsetState 'show'
				else
					console.warn 'Noty can\'t be close, because his blocked by transition', @

		$.fn.notify = (method) ->
			if methods[method]
		    	methods[ method ].apply  this, Array.prototype.slice.call( arguments, 1 )
		    else if typeof method is 'object' or not method
		    	methods.init.apply this, arguments
		    else
		    	$.error "Method with name #{method} not exist for jQuery.notify"
		     

	_plugin jQuery, window
