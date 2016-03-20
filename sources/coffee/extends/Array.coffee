module.exports = ->
	# -------------------------
	# Array object functions
	# -------------------------
	Array::shiftArray = (shift) ->
		arr = @
		shift %= arr.length
		if shift < 0
			shift = Math.abs shift
			_b = arr[0..shift - 1]
			_a = arr[shift..]
		else if shift > 0 
			_arrLen = arr.length - shift;
			_b = arr[0.._arrLen - 1]
			_a = arr[_arrLen..]
		else
			return @
		_array = _a.concat _b
