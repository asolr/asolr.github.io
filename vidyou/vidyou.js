
function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var allImages = "";

for (var i = 0; i < 25; i++) {
  var width = getRandomSize(200, 400);
  var height =  getRandomSize(200, 400);
  allImages += '<img src="https://placekitten.com/'+width+'/'+height+'" alt="pretty kitty">';
}

//$('#photos').append(allImages);

window.onload = choosePic;

var theAd = 0;
var adImages = new Array("pink.png","yellow.png","blue.jpg");

function choosePic() {
  theAd = Math.floor(Math.random() * adImages.length);
  document.getElementById("advertising").src = adImages[theAd];

  rotate();
}

function rotate() {
  theAd++;
  if (theAd == adImages.length) {
    theAd = 0;
  }
  document.getElementById("advertising").src = adImages[theAd];

  setTimeout(rotate, 3 * 1000);
}
