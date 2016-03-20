# Форма обратного звонка
module.exports = ->

	$form = $("#callbackForm");
	
	_callback = (el) ->
		if $(el).val().length is 0
			$(el).unsetState 'dirty'
		else
			$(el).setState 'dirty'

	$('input', $form).on 'keydown', ->
		_callback @
		
	$('input', $form).focusout ->
		el = @
		setTimeout (-> _callback el ), 50

	callbackSendForm = (form, data, hasError) ->
		return false if hasError
		$.ajax
			url: yupeCallbackSendUrl,
			type: 'POST',
			data: do form.serialize,

			beforeSend: -> 
				$('button[type="submit"]', $form).prop 'disabled', yes	
				
			complete: -> 
				$('button[type="submit"]', $form).prop 'disabled', no

			success: (response) ->
				$form.trigger 'reset' if response.result

				app.notification
					.notify 'show', 
						title: 'Заявка принята'
						text: response.data

			error: -> 
				app.notification
					.notify 'show', 
						title: 'На сервере произошла ошибка'
						text: 'Попробуйте повторить попытку позже'
		false
		