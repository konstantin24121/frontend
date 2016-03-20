module.exports = ->

	$mod = $('.mod'); 
	
	$modCallback= $('#callbackModal .mod__body');
	window.jsp.modCallback = null
	$modCallback.jScrollPane().jScrollPaneExt()
	window.jsp.modCallback = $modCallback.data 'jsp'

	$modAddReview= $('#addReviewModal .mod__body');
	window.jsp.modAddReview = null
	$modAddReview.jScrollPane().jScrollPaneExt()
	window.jsp.modAddReview = $modAddReview.data 'jsp'

	$('button[data-toggler="modal"]').on 'click', -> $($(@).data('target')).toggleState 'fade'

