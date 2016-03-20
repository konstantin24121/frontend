# Reference: 
# http:#www.onextrapixel.com/2012/12/10/how-to-create-a-custom-file-input-with-jquery-css3-and-php/
module.exports = ->

	_plugin = ($, window) ->
		# Browser supports HTML5 multiple file?
		multipleSupport = typeof $('<input/>')[0].multiple is not 'undefined'
		isIE = /msie/i.test navigator.userAgent

		$.fn.customFile = ->

			@.each ->

				$file = $(@).addClass 'custom-file-upload-hidden' # the original file input
				$wrap = $ '<div class="file-upload-wrapper">'
				$input = $ '<input type="text" class="file-upload-input" />'
				#Button that will be used in non-IE browsers
				$button = $ '<button type="button" class="file-upload-button"><i class="fa fa-cloud-upload"></i> Выберите файл</button>'
				#Hack for IE
				$label = $ '<label class="file-upload-button" for="#{file[0].id}"><i class="fa fa-cloud-upload"></i> Выберите файл</label>'

				# Hide by shifting to the left so we
				# can still trigger events
				$file.css
					position: 'absolute'
					left: '-9999px'

				$wrap
					.insertAfter $file
					.append $file, $input, (if isIE then $label else $button)

				# Prevent focus
				$file.attr 'tabIndex', -1
				$button.attr 'tabIndex', -1

				$button.click 
				_click = ->
					$file
						.focus()
						.click(); # Open dialog

				$button.click _click
				$input.click _click

				$file.change ->

					files = []
					fileArr = filename = null

					# If multiple is supported then extract
					# all filenames from the file array
					if multipleSupport
						fileArr = $file[0].files
						files.push file.name for file in fileArr 
						# for (i = 0, len = fileArr.length; i < len; i++) {
						# 	files.push(fileArr[i].name);
						# }
						filename = files.join ', '

						# If not supported then just take the value
						# and remove the path to just show the filename
					else
						filename = $file.val().split('\\').pop()

					$input
						.val filename # Set the value
						.attr 'title', filename # Show filename in title tootlip
						.focus() # Regain focus

				$input.on
					blur:  ->
						$file.trigger 'blur'
					keydown: (e) ->
						if e.which is 13 # Enter
							if not isIE
								$file.trigger 'click'
						else if e.which is 8 or e.which is 46 # Backspace & Del
							# On some browsers the value is read-only
							# with this trick we remove the old input and add
							# a clean clone with all the original events attached
							$file.replaceWith $file = $file.clone true
							$file.trigger 'change'
							$input.val ''
						else if e.which is 9 # TAB
							return
						else # All other keys
							false

		# # Old browser fallback
		if not multipleSupport
			$(document).on 'change', 'input.customfile',  ->

				$this = $(@)
				# Create a unique ID so we
				# can attach the label to the input
				uniqId = 'customfile_' + (new Date()).getTime()
				$wrap = do $this.parent

				# Filter empty input
				$inputs = $wrap.siblings().find('.file-upload-input').filter -> not this.value
				$file = $('<input type="file" id="#{uniqId}" name="' + $this.attr('name') + '"/>');

				# 1ms timeout so it runs after all other events
				# that modify the value have triggered
				_callback = ->
					# Add a new input
					if $this.val()
						# Check for empty fields to prevent
						# creating new inputs when changing files
						if not $inputs.length
							$wrap.after $file
							do $file.customFile
						# Remove and reorganize inputs
					else
						$inputs.parent().remove()
						# Move the input so it's always last on the list
						$wrap.appendTo $wrap.parent()
						$wrap.find('input').focus()
				setTimeout _callback, 1

	_plugin jQuery, window

	# $('input[type=file]').customFile()