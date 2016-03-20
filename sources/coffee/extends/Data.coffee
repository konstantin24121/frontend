module.exports = ->
	# -------------------------
	# JavaScript change functions
	# -------------------------
	Date::getHoursWithZero = ->
		hours = do @.getHours
		if (hours.length == 1)
			hours = "0" + hours
		else
			hours

	Date::getMinutesWithZero = ->
		minutes = do @.getMinutes
		if (minutes.length == 1)
			minutes = "0" + minutes
		else
			minutes