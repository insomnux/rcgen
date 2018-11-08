"use strict";

/* Catch input from colour picker */
function pickTheCol() {
  var initCol = document.getElementById("pickcol").value;
  var pickCol = document.querySelector("#pickcol");
  pickCol.value = initCol;
  pickCol.select();
  return pickCol;
}

window.addEventListener("load", pickTheCol, false);

/* Generate two colours and a degrees number for the random gradient */

function gradient() {
  function randcol(hx) {
    for ( var i = 0; i < 6; i++ ) {
      hx = hx + Math.floor( Math.random() * 16 ).toString( 16 );
    }
    return hx;
  }

  // First colour
  var chooseColour = pickTheCol()
  if (chooseColour.value != "#000000" ) {
    var fromcolour = chooseColour.value
  } else {
    fromcolour = randcol('#');
  }

  // Second colour
  var tocolour = randcol('#');

  // Degrees
  var degrees = Math.round( Math.random() * 360 );
  if ( 90 - degrees < 0 ) { // calculate degrees for old browser vendor
    var obdegrees = 450 -  degrees
  } else {
    obdegrees = 90 - degrees
  }

  // Get the background colour
  var cgradient = "linear-gradient(" + degrees + "deg, " + fromcolour + ", " + tocolour + ")";

  return {fromcolour, tocolour, degrees, obdegrees, cgradient};
}
document.body.style.background = gradient().cgradient;


/* Assign strings to variables for the "Show CSS code" */
function uglyFunction() {
  var fromCol = gradient().fromcolour;
  var toCol = gradient().tocolour;
  var nDegrees = gradient().degrees;
  var nObdegrees = gradient().obdegrees;
  var cssclass = "<span class='StorageClass'>background</span>: "
  var cssattr = "<span class='cssFunctionName'>linear-gradient</span>("

  var oldBrowsers, oldWebkit, oldMoz, oldOpera, modernBrowsers, getCssGradient;
  oldBrowsers = cssclass + fromCol + "&semi; <span class='Comment'>/* Fallback for old browsers*/</span>"
  oldWebkit = cssclass + "<span class='Comment'>-webkit-</span>" + cssattr + nObdegrees + "<span class='Constant'>deg</span>, " + fromCol + ", " + toCol + ")&semi; <span class='Comment'>/* Old Webkit*/</span>"
  oldMoz = cssclass + "<span class='Comment'>-moz-</span>" + cssattr + nObdegrees + "<span class='Constant'>deg</span>, " + fromCol + ", " + toCol + ")&semi; <span class='Comment'>/* Old Firefox */</span>"
  oldOpera = cssclass + "<span class='Comment'>-o-</span>" + cssattr + nObdegrees + "<span class='Constant'>deg</span>, " + fromCol + ", " + toCol + ")&semi; <span class='Comment'>/* Opera */</span>"
  modernBrowsers = cssclass + cssattr + nDegrees + "<span class='Constant'>deg</span>, " + fromCol + ", " + toCol + ")&semi;"
  
  getCssGradient = oldBrowsers + "<br />" + oldWebkit + "<br />" + oldMoz + "<br />" + oldOpera + "<br />" + modernBrowsers;
  return getCssGradient;
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

document.onload = showHideCss();
document.getElementById("getcss").innerHTML = uglyFunction();

document.getElementById("button_gen").addEventListener("click", function() {
  pickTheCol();
  gradient();
  document.body.style.background = gradient().cgradient;
  document.getElementById("getcss").innerHTML = uglyFunction();
})

