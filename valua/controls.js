function startup() {

  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">VALUA.org</h1>'+
      '<div id="bodyContent">'+
      '<p><b>VALUA.</b>, is a new project to evaluate and estimate the '+
      'value or price of any product. VALUA creates several live '+
      'Mathematical Models for the user. The user can pick or '+
      'submit a photograph. The project prototype is confidential'+
      'however, the source code will be in the public domain. VALUA! </p>'+
      '<p>VALUA: <a href="http://valua.org">'+
      'http://valua.org</a> '+
      '(January, 2018).</p>'+
      '</div>'+
      '</div>';

      infoWindow.setPosition(pos);
      infoWindow.setContent(contentString);
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }
