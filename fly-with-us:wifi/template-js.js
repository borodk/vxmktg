function changeWiFiTab(type) {

	document.getElementById('video_streaming').style.display = 'none';
  document.getElementById('video_streaming_bt').className  = 'tab-list__item';
  document.getElementById('web_browsing').style.display = 'none';
  document.getElementById('web_browsing_bt').className  = 'tab-list__item';
  document.getElementById('tv_channels').style.display = 'none';
  document.getElementById('tv_channels_bt').className  = 'tab-list__item';

  document.getElementById(type).style.display = 'block';
  document.getElementById(type + '_bt').className  = 'tab-list__item is-selected';
}