
function initControls() {
  var uluru = {lat: -25.363, lng: 131.044};
  var chicago = {lat: 41.85, lng: -87.65};
  /*var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: uluru
});
*/
var contentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
'<div id="bodyContent">'+
'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
'sandstone rock formation in the southern part of the '+
'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
'south west of the nearest large town, Alice Springs; 450&#160;km '+
'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
'features of the Uluru - Kata Tjuta National Park. Uluru is '+
'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
'Aboriginal people of the area. It has many springs, waterholes, '+
'rock caves and ancient paintings. Uluru is listed as a World '+
'Heritage Site.</p>'+
'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
'(last visited June 22, 2009).</p>'+
'</div>'+
'</div>';

var infowindow = new google.maps.InfoWindow({
  content: contentString
});

var marker = new google.maps.Marker({
  position: chicago,
  map: map,
  title: 'Uluru (Ayers Rock)'
});
marker.addListener('click', function() {
  infowindow.open(map, marker);
});
}

var chicago = {lat: 41.85, lng: -87.65};

/**
* The CenterControl adds a control to the map that recenters the map on
* Chicago.
* @constructor
* @param {!Element} controlDiv
* @param {!google.maps.Map} map
* @param {?google.maps.LatLng} center
*/
function CenterControl(controlDiv, map, center) {
  // We set up a variable for this since we're adding event listeners
  // later.
  var control = this;

  // Set the center property upon construction
  control.center_ = center;
  controlDiv.style.clear = 'both';

  // Set CSS for the control border
  var goCenterUI = document.createElement('div');
  goCenterUI.id = 'goCenterUI';
  goCenterUI.title = 'Click to recenter the map';
  controlDiv.appendChild(goCenterUI);

  // Set CSS for the control interior
  var goCenterText = document.createElement('div');
  goCenterText.id = 'goCenterText';
  goCenterText.innerHTML = 'Center Map';
  goCenterUI.appendChild(goCenterText);

  // Set CSS for the setCenter control border
  var setCenterUI = document.createElement('div');
  setCenterUI.id = 'setCenterUI';
  setCenterUI.title = 'Click to change the center of the map';
  controlDiv.appendChild(setCenterUI);

  // Set CSS for the control interior
  var setCenterText = document.createElement('div');
  setCenterText.id = 'setCenterText';
  setCenterText.innerHTML = 'Set Center';
  setCenterUI.appendChild(setCenterText);

  // Set up the click event listener for 'Center Map': Set the center of
  // the map
  // to the current center of the control.
  goCenterUI.addEventListener('click', function() {
    var currentCenter = control.getCenter();
    map.setCenter(currentCenter);
  });

  // Set up the click event listener for 'Set Center': Set the center of
  // the control to the current center of the map.
  setCenterUI.addEventListener('click', function() {
    var newCenter = map.getCenter();
    control.setCenter(newCenter);
  });
}

/**
* Define a property to hold the center state.
* @private
*/
CenterControl.prototype.center_ = null;

/**
* Gets the map center.
* @return {?google.maps.LatLng}
*/
CenterControl.prototype.getCenter = function() {
  return this.center_;
};

/**
* Sets the map center.
* @param {?google.maps.LatLng} center
*/
CenterControl.prototype.setCenter = function(center) {
  this.center_ = center;
};
