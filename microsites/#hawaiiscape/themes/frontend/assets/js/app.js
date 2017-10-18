var app;

jQuery(document).ready(function($) {

	/*
	INITIALIZE VX Hawaii Campaign App
	*/
	app = new VXapp;

	/*--------------------------------------
	Open external links in new window/tab
	--------------------------------------*/
	$('[rel="external"]').on('click', function(e) {
		e.preventDefault();
		window.open( $(this).attr('href'), '_blank' );
	});

	$('[data-anchor]').on('click', function(e) {
		e.preventDefault();
		var ele = $('#'+$(this).data('anchor'));
		TweenLite.to(window, 2, {
			scrollTo: {
				y: ele.offset().top
			},
			ease:Power2.easeInOut
		});
	});

});