/* Generate random gradient */

function gradient() {

  function randcol(hx) {
    for ( var i = 0; i < 6; i++ ) {
      hx = hx + Math.floor( Math.random() * 16 ).toString( 16 );
    }
    return hx;
  }
  
  // First colour
  var fromcolour = randcol('#');
  // Second colour
  var tocolour = randcol('#');

  // Degrees
  var degrees = Math.round( Math.random() * 360 );
  if ( 90 - degrees < 0 ) { // calculate degrees for old browser vendor
    var obdegrees = 450 -  degrees
  } else {
    var obdegrees = 90 - degrees
  }
  
  // Get the background colour
  var gradient = "linear-gradient(" + degrees + "deg, " + fromcolour + ", " + tocolour + ")";

  // Assign strings to variables for the "Show CSS code"
  var cssclass = "<span class='StorageClass'>background</span>: "
  var cssattr = "<span class='cssFunctionName'>linear-gradient</span>("
  var oldBrowsers = cssclass + fromcolour + "&semi; <span class='Comment'>/* Fallback for old browsers*/</span>"
  var oldWebkit = cssclass + "<span class='Comment'>-webkit-</span>" + cssattr + obdegrees + "<span class='Constant'>deg</span>, " + fromcolour + ", " + tocolour + ")&semi; <span class='Comment'>/* Old Webkit*/</span>"
  var oldMoz = cssclass + "<span class='Comment'>-moz-</span>" + cssattr + obdegrees + "<span class='Constant'>deg</span>, " + fromcolour + ", " + tocolour + ")&semi; <span class='Comment'>/* Old Firefox */</span>"
  var oldOpera = cssclass + "<span class='Comment'>-o-</span>" + cssattr + obdegrees + "<span class='Constant'>deg</span>, " + fromcolour + ", " + tocolour + ")&semi; <span class='Comment'>/* Opera */</span>"
  var modernBrowsers = cssclass + cssattr + degrees + "<span class='Constant'>deg</span>, " + fromcolour + ", " + tocolour + ")&semi;"
  
  var getCssGradient = oldBrowsers + "<br />" + oldWebkit + "<br />" + oldMoz + "<br />" + oldOpera + "<br />" + modernBrowsers

  
  document.body.style.background = gradient;
  document.getElementById("getcss").innerHTML = getCssGradient;
  
}

/* Show CSS code */

function showHideCss(){

  var preButton = document.getElementById("button_show");
  var preBox = document.getElementById("getcss");

  preButton.addEventListener("click", function (event) {
      if (preBox.style.display == "block") {
        preBox.style.display = "none";
        preButton.innerHTML = "Show CSS code";
      } else {
        preBox.style.display = "block";
        preButton.innerHTML = "Hide CSS code";
      }
    }
  );
}

document.onload = gradient();
document.onload = showHideCss();

