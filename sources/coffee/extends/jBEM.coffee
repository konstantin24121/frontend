module.exports = ->
	#-------------------------
	# BEM functions
	#-------------------------

	###
	Get block name from DOM-element
	@return {String}	      bloc name
	###
	$.fn.extend
		getBlock: ->
			regexp = ///
				(^|\s)        #начинается с начала строки либо с пробела
				([\da-zA-Z-]+) #любое количество буквоцифр
				[_{2}$]*      #оканчивается двумя слешами либо ничем нихера
				///
			_class = $(@).attr 'class'
			if not regexp.test _class
				''
			else
				block = regexp.exec _class
				block[2]

	###
	Get element name from DOM-element
	@return {String}          element name
	###
	$.fn.extend
		getElement: ->
			regexp = ///
				\s*             #начинается с пробела, который вообщем то может отсутстовать
				[\da-zA-Z]+     #имя блока из любых букв и цифр
				__([\da-zA-Z-]+) #два underscor'a  и затем имя элемента
				\s?             #может окончится пробелом
				///
			_class = $(@).attr 'class'
			if not regexp.test _class
				''
			else
				element = regexp.exec _class
				element[1]

	###
	Create class-modifier
	@param  {String} modifier modifier name
	@return {String}          class modificator
	###
	$.fn.extend
		_createModifier: (modifier) ->
			if not modifier
				return null
			modifier = '_' + modifier

	###
	Add class-modifier to DOM-element
	@param  {String} modifier modifier name
	@return this          
	###
	$.fn.extend
		addModifier: (modifier) ->
			if not modifier
				return null
			_modifier = "_#{modifier}";
			if $(@).hasClass _modifier
				$(@)
			else
				$(@).addClass _modifier

	###
	Remove add class-modifier at DOM-element
	@param  {String} modifier modifier name
	@return this          
	###
	$.fn.extend
		removeModifier: (modifier) ->
			if not modifier
				return null
			_modifier = "_#{modifier}";
			$(@).removeClass _modifier
			$(@)

	###
	Toggle class-modifier for DOM-element
	@param  {String} modifier modifier name
	@return this          
	###
	$.fn.extend
		toggleModifier: (modifier) ->
			if not modifier
				return null
			_modifier = "_#{modifier}";
			$(@).toggleClass _modifier
			$(@)

	###
	Add class-state to DOM-element
	@param  {String} state state name
	@return this          
	###
	$.fn.extend
		setState: (state) ->
			if not state
				return null
			_state = "is-#{state}";
			if $(@).hasClass _state
				$(@)
			else
				$(@).addClass _state

	###
	Remove add class-state at DOM-element
	@param  {String} state state name
	@return this          
	###
	$.fn.extend
		unsetState: (state) ->
			if not state
				return null
			_state = "is-#{state}";
			$(@).removeClass _state
			$(@)

	###
	Toggle class-state for DOM-element
	@param  {String} state state name
	@return this          
	###
	$.fn.extend
		toggleState: (state) ->
			if not state
				return null
			_state = "is-#{state}";
			$(@).toggleClass _state
			$(@)

	###
	Check class-state at DOM-element
	@param  {String} state state name
	@return this          
	###
	$.fn.extend
		hasState: (state) ->
			if not state
				return null
			_state = "is-#{state}";
			return $(@).hasClass _state