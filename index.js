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



fetch('https://fakestoreapi.com/products')
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let data1 = "";
    console.log(completedata)
    completedata.map((values) => {
      data1 += `
        <div id="card">
       
          <img src=${values.image} alt="" class="imge">
          <h1 class="title">${values.title}</h1>
     
          <p class="catagory">${values.category}</p>
          <p class="price">₹ ${values.price}</p>
          <p class="id">id ~ ${values.id}</p>
          <button id="cart-btn">Buy Now</button>
        </div>
      `
    });
    document.getElementById("cards").innerHTML=data1 ;
    document.getElementById("cart-btn").addEventListener("click", addToCart);

  }).catch((err) => {
    console.log(err)
  });


document.getElementById("cart-btn").addEventListener("click", addToCart);

function addToCart(e) {

  let item = {
    title: document.getElementsByClassName("title")[0].innerText,
    price: document.getElementsByClassName("price")[0].innerText,
    image: document.getElementsByClassName("imge")[0].src
  }

  if (localStorage.getItem("cart") === null) {
 
    let cart = [];
    cart.push(item);
 
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
  
    let cart = JSON.parse(localStorage.getItem("cart"));
 
    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  alert("Item added to cart!");
}