// -------------image slide-----------
let slideIndex = 0;
var slides = document.getElementsByClassName("slider-image");

function showSlides() {
  for (var slide of slides) {
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
var ssl = document.getElementsByClassName("slider-imager");

function showssl() {
  for (var slide of ssl) {
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

// ================fatch==============

class FetchData {
  constructor() {
    this.url = "https://63c8df92904f040a9651b0ac.mockapi.io/hr";
    this.firstPdct = document.querySelector(".first-pdct");
  }

  async getData() {
    try {
      var response = await fetch(this.url);
      var data = await response.json();
      this.displayData(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }

  displayData(data) {
    let template = "";
    data.forEach((item) => {
      template += `
        <div class="first-pdct">
          <h2>${item.name}</h2>
        <img src="${item.avatar}">
        </div>
      `;
    });
    this.firstPdct.innerHTML = template;
  }
}

var fetchData = new FetchData();
fetchData.getData();






