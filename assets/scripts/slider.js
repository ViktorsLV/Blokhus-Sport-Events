/* TESTIMONIALS */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//https://www.w3schools.com/howto/howto_js_slideshow.asp - SOURCE 



/* POP-UP FOR NEWSLETTER */
function popUp() {
  // Get the alert div element
  let alert = document.getElementById("pop-up-message");

  // Add the "show" class to alert div
  alert.className = "show";

  // After 4 seconds, remove the show class from alert div
  setTimeout(function () {
    alert.className = alert.className.replace("show", "");
  }, 4000);
}