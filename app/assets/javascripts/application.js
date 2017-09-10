// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets
//= require underscore
//= require gmaps/google
//= require materialize-sprockets
//= require materialize/extras/nouislider



var range = document.getElementById('slider');

range.style.height = '400px';
range.style.margin = '0 auto 30px';

noUiSlider.create(slider, {
	start: [ 1450, 2050, 2350, 3000 ], // 4 handles, starting at...
	margin: 300, // Handles must be at least 300 apart
	limit: 600, // ... but no more than 600
	connect: true, // Display a colored bar between the handles
	direction: 'rtl', // Put '0' at the bottom of the slider
	orientation: 'vertical', // Orient the slider vertically
	behaviour: 'tap-drag', // Move handle on tap, bar is draggable
	step: 150,
	tooltips: true,
	format: wNumb({
		decimals: 0
	}),
	range: {
		'min': 1300,
		'max': 3250
	},
	pips: { // Show a scale with the slider
		mode: 'steps',
		stepped: true,
		density: 4
	}
});

handler = Gmaps.build('Google');
handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
  markers = handler.addMarkers([
    {
      "lat": 13.735215,
      "lng": 100.522976,
      "picture": {
        "url": "http://people.mozilla.com/~faaborg/files/shiretoko/firefoxIcon/firefox-32.png",
        "width":  32,
        "height": 32
      },
      "infowindow": "hello!"
    }
  ]);
  handler.bounds.extendWith(markers);
  handler.fitMapToBounds();
});


setTimeout(function(){
    document.getElementById('spinner').className = 'spun';
}, 5000);
