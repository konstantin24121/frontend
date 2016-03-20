module.exports = ->
	map = null
	infoWindowsEX = []
	googleCanvas = $('#google-map-canvas')

	adds = [
			"lat": 0
			"lon": 0
			"addres": "Nothing"
			"title": "Zad"
			'worktime': 'dan'
		]

	# styleArray = [
	# 		featureType: "all"
	# 		stylers: [
	# 			saturation: -80
	# 			gamma:	0.74
	# 		]
	# 	,
	# 		featureType: "road.arterial"
	# 		elementType: "geometry"
	# 		stylers: [
	# 			hue: "#00ffee"
	# 			saturation: 100
	# 		]
	# 	,
	# 		featureType: "poi.business"
	# 		elementType: "labels"
	# 		stylers: [
	# 			visibility: "off"
	# 		]
	# ]

	initialize = ->
		mapOptions = 
			zoom: 15
			disableDefaultUI: true
			center: new google.maps.LatLng 51.7691747, 55.1322862
			styles: styleArray

		map = new google.maps.Map document.getElementById('google-map-canvas'), mapOptions
		for key in adds
			marker = new google.maps.Marker 
				position: new google.maps.LatLng key.lat, key.lon 
				map: map
				icon: yupeMainAssets + '/img/google-marker.png'

			html = createInfoHtml key
			makeInfoWin marker, html
		return yes


	closeAllInfoWindows = ->
		do infoWindow.close for infoWindow in infoWindowsEX
		return on

	createInfoHtml = (markerInfo) ->
		return """
				<div class="map__info">
					<table class="map__table">
						<tr>
							<td colspan=2>
								<div class="map__info-title">#{markerInfo.title}</div>
								<div class="map__info-text">#{markerInfo.addres}</div>
							</td>
						</tr>
				</div>
				""";

	makeInfoWin = (marker, data) ->
		infowindow = new InfoBubble 
			map: map
			content: data
			padding: 0
			minWidth: 1
			minHeight: 1
			shadowStyle: 0
			backgroundColor: 'transparent'
			borderColor: 'transparent'
			hideCloseButton: true
			backgroundClassName: 'map-infobuble'
			arrowSize: 1
			disableAnimation: true

		infoWindowsEX.push infowindow
		google.maps.event.addListener marker, 'click', ->
			do closeAllInfoWindows
			infowindow.open map, marker

			$('.map-infobuble').parent('div')
				.css 'overflow','visible'
				.css 'max-width','1px'
				.css 'max-height','1px'

	do initialize

	googleCanvas.on 'click', ->
		do closeAllInfoWindows

	$(window).bind 'resize', -> # Событие переинициализирующее googlemap
		if $(@).height() == window._prevHeight and $(@).width() == window._prevWidth
			return null
		if not throttleTimeout
			_callback = ->
				do initialize
				window._prevHeight = do $(window).height
				window._prevWidth = do $(window).width
			throttleTimeout = setTimeout _callback, 50
	