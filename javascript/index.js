// -------------image slide-----------
let slideIndex = 0;
const slides = document.getElementsByClassName("slider-image");

function showSlides() {
  for (const slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  slideIndex++;
  if (slideIndex === slides.length) { slideIndex = 0; }
  setTimeout(showSlides, 6000);
}

document.querySelector(".slider-prev-btn").addEventListener("click", function(){
  slideIndex = (slideIndex + slides.length - 1) % slides.length;
  showSlides();
});

document.querySelector(".slider-next-btn").addEventListener("click", function(){
  slideIndex = (slideIndex + 1) % slides.length;
  showSlides();
});


showSlides();

let sIndex = 0;
const ssl = document.getElementsByClassName("slider-imager");

function showssl() {
  for (const slide of ssl) {
    slide.style.display = "none";
  }
  ssl[sIndex].style.display = "block";
  sIndex++;
  if (sIndex === ssl.length) { sIndex = 0; }
  setTimeout(showssl, 4000);
}

document.querySelector(".slider-prev-btnn").addEventListener("click", function(){
  sIndex = (sIndex + ssl.length - 1) % ssl.length;
  showssl();
});

document.querySelector(".slider-next-btnn").addEventListener("click", function(){
  sIndex = (sIndex + 1) % ssl.length;
  showssl();
});

showssl();





