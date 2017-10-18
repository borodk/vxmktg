function changeFirstTab(type) {

	document.getElementById('check_in').style.display = 'none';
  document.getElementById('check_in_bt').className  = 'tab-list__item';
  document.getElementById('directions').style.display = 'none';
  document.getElementById('directions_bt').className  = 'tab-list__item';
  document.getElementById('transportation').style.display = 'none';
  document.getElementById('transportation_bt').className  = 'tab-list__item';
  document.getElementById('parking').style.display = 'none';
  document.getElementById('parking_bt').className = 'tab-list__item';

  document.getElementById(type).style.display = 'block';
  document.getElementById(type + '_bt').className  = 'tab-list__item is-selected';
}

function changeSecondTab(type) {

  document.getElementById('car_rental').style.display = 'none';
  document.getElementById('car_rental_bt').className = 'tab-list__item';
  document.getElementById('hotel').style.display = 'none';
  document.getElementById('hotel_bt').className = 'tab-list__item';
  document.getElementById('airline').style.display = 'none';
  document.getElementById('airline_bt').className = 'tab-list__item';

  document.getElementById(type).style.display = 'block';
  document.getElementById(type + '_bt').className  = 'tab-list__item is-selected';
}