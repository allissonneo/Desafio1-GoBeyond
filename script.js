//Slideshow
var slideIndex = 1;

showSlides(slideIndex);

mostrarSlides(slideIndex);

function moreSlides(n) {
  showSlides(slideIndex += n);
}

function maisSlides(n) {
  mostrarSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function atualSlide(n) {
  mostrarSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carouselPage");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function mostrarSlides(n) {
  var i;
  var slides = document.getElementsByClassName("containerDiv");
  var dots = document.getElementsByClassName("dots");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}