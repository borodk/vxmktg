var share_url = 'http://makeyourhawaiiscape.com';
//var share_url = 'https://developers.facebook.com/docs';
var share_title = 'Make Your Hawaiiscape';
var social_text = 'Hey, Virgin America, I need a #Hawaiiscape!';
var custom_pre = 'Hey Virgin America, I need a #Hawaiiscape! ';
var option_pre = 'Hey Virgin America, ';
var twitter_option_pre = 'Hey @VirginAmerica, ';
var twitter_custom_pre = 'Hey @VirginAmerica, I need a #Hawaiiscape! ';
//var social_post = ' Check out';

$(document).ready(function() {
	
	if (page_name == 'enter-social') {

		$('#twitter-btn').attr('href', twitter_link(social_text));
		$('#linkedin-btn').attr('href', linkedin_link(social_text));

	}

	$('#facebook-btn').on('click', function(e) {
		
		e.preventDefault();
		
		var btn = $(this);
		var btn_id = btn.attr('id');
		
		var social_option = $('#social_options').val();
		var social_custom = $('#social_custom').val();
		
		if (social_custom != '') {

			social_text = custom_pre + $('#social_custom').val();

		} else if (social_option != '') {
			
			social_text = option_pre + $('#social_options').val().replace(/\\/g, ''); + ' #Hawaiiscape';
			
		}

		FB.ui({
		  method: 'feed',
		  link: share_url,
		  title: share_title,
		  description: social_text,
		}, function(response) {
			
			if (typeof response != 'undefined') {
			
				// post was successful
				
				update_entry('facebook', btn);
				
			}
			
		});
		
	});
	
	$('#linkedin-btn').on('click', function(e) {
		
		e.preventDefault();
		
		window.open($(this).attr('href'), 'linkedin', 'width=520,height=570,location=no,status=no');
		
		update_entry('linkedin', $('#linkedin-btn'));
		
	});
	
	$('#social_custom').keyup(function() {
		
		// if ($('#social_options').val() != 'custom') {
			
		// 	return;
			
		// }
		
		var social_text = $(this).val();
		
		$('#twitter-btn').attr('href', twitter_link(twitter_custom_pre + social_text, false));
		$('#linkedin-btn').attr('href', linkedin_link(custom_pre + social_text));
		
	});
	
	$('#social_options').on('change', function() {
		
		var option = $(this).val();
		var custom = $('#social_custom').val();

		if (option != '') {

			social_text = option.replace(/\\/g, '');

			$('#twitter-btn').attr('href', twitter_link(twitter_option_pre + social_text));
			$('#linkedin-btn').attr('href', linkedin_link(option_pre + social_text + ' #Hawaiiscape'));

		} else if (custom != '') {

			social_text = custom;
		
			$('#twitter-btn').attr('href', twitter_link(twitter_custom_pre + social_text, false));
			$('#linkedin-btn').attr('href', linkedin_link(custom_pre + social_text));

		} else {

			$('#twitter-btn').attr('href', twitter_link(social_text));
			$('#linkedin-btn').attr('href', linkedin_link(social_text));

		}
				
	});	
	
	if (typeof twttr != 'undefined') {
	
		twttr.ready(
			function (twttr) {
				
				twttr.events.bind(
					'tweet',
					function (event) {
						
						update_entry('twitter', $('#twitter-btn'));
						
					}
				);
			}
		);
	
	}

	/**
	 * Global Sharing
	 */
	
	$('.social.icon-fb').on('click', function (e) {

		e.preventDefault();

		var btn = $(this);

		var url = btn.attr('data-url');
		var title = btn.attr('data-title');
		var desc = btn.attr('data-desc');

		console.log(url);

		FB.ui({
			method: 'feed',
			link: url,
			title: title,
			description: desc,
		}, function(response) {
			// console.log('shared');
		});

	});

	$('.social.icon-in').on('click', function (e) {

		e.preventDefault();

		window.open($(this).attr('href'), 'linkedin', 'width=520,height=570,location=no,status=no');

	});
	
});

function update_entry(network, btn) {
	
	$.ajax({
		url: '/entry/update',
		method: 'POST',
		data: {
			_token: token,
			network: network
		},
		success: function(data) {
			if (data.success == true) {
				// succes
				btn.addClass('disabled');
				$('.error').remove();
				$('.entered').removeClass('hidden');
				$('.tell-us').addClass('hidden');
				
				if ($('.social-btn.disabled').length == 3) {
					
					$('#finish-btn').text('I\'m Done');
					
				}
			} else {
				$('h3').after('<div class="error">There was an error adding an entry.</div>');
			}
		},
		error: function(xhr, status, error) {
			$('h3').after('<div class="error">There was an error adding an entry.</div>');
		}
	});
	
}

function twitter_link(social_text, hashtag) {
	
	if (typeof hashtag == 'undefined') {
		hashtag = true;
	}

	var tw_link = 'https://twitter.com/intent/tweet?text='+encodeURIComponent(social_text)+'&url='+encodeURIComponent(share_url);

	if (hashtag) {
		tw_link += '&hashtags=Hawaiiscape';
	}

	return tw_link;

}

function linkedin_link(social_text) {
	
	return 'https://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(share_url)+'&title='+encodeURIComponent(share_title)+'&summary='+encodeURIComponent(social_text);
	
}
//# sourceMappingURL=social.js.map