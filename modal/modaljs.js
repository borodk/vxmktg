//modal.js

//from jquery cookbook

//adaptation to be an alert modal
function alertModal(title, message){
	
	//do some math
	function sizeModal() {
		//modal dimensions
		var $modal = $('#modal_window');
		var $modal_width = $modal.outerWidth();
		var $modal_height = $modal.outerHeight();
		var $modal_top = '-' + Math.floor($modal_height / 2) + 'px';
		var $modal_left = '-' + Math.floor($modal_width / 2) + 'px';
		//set modal
		$('#modal_window').css('margin-top', $modal_top).css('margin-left', $modal_left);
	}

	//reveal the modal
	function showModal(){
		//Unveil the wrapper
		$('#modal_wrapper').show();
		//size it
		sizeModal();
		//reveal modal window
		$('#modal_window').css('visibility', 'visible').show();
	}

	//insert modal at end of <body>
	$('body').append('<div id="modal_wrapper"> <div id="modal_overlay"></div> <div id="modal_window"> <div id="modal_bar_content"></div> <div id="modal_content"></div> </div> </div> ');
	//add modal content
	//title
	$('#modal_bar_content').html("<div id='modal_bar'>" + title + "</div>" + "<div id='close_button'>&nbsp;</div>");
	//body
	$('#modal_content').html(message);

	showModal();

	//hide modal elements
	$('#modal_overlay, #close_button').click(function() {
		//hide the modal
		$('#modal_wrapper').hide();
		//hide because images might load later. (Part of image content implementation, probably not needed here, but is safeguard)
		$('#modal_window').css('visibility', 'hidden');
		//destroy modal content
		$('#modal_content').html('');
		//reset modal title
		$('#modal_bar').html('');
		//nofollow
		this.blur();
		return false;
	});

	//rerun the layout function when the media query threshold is crossed. ie recenter
	widthCheck = window.matchMedia("(max-width: 639px)");
	widthCheck.addListener(sizeModal);
}