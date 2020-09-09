/* ----- wat hieronder staat neergezet omdat dat altijd bovenaan staat in javascript, zodat de javascript beter werkt en er minder errors wordt aangegeven. Geleerd via Inleiding Programmeren schooljaar 2018-2019, gehaald via mijn eindopdracht document mario.js ------*/

/* jslint browser:true, devel:true, eqeq:true, plusplus:true, sloppy:true, vars:true, white:true*/
/* eslint-env browser */
/*eslint 'no-console':0 */

/* -----------------------------------------------------------------------------------------------------------*/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}

// bron: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_dots2


