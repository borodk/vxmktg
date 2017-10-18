function changeTab(type) {
	document.getElementById('one_up_mc').style.display = 'none';
  document.getElementById('one_up_mc_bt').className  = 'tab-list__item';
  document.getElementById('one_up_mcs').style.display = 'none';
  document.getElementById('one_up_mcs_bt').className  = 'tab-list__item';
  document.getElementById('one_up_fc').style.display = 'none';
  document.getElementById('one_up_fc_bt').className  = 'tab-list__item';

  document.getElementById(type).style.display = 'block';
  document.getElementById(type + '_bt').className  = 'tab-list__item is-selected';
}