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

 //event listener for the "Add to Cart" button
document.getElementById("cart-btn").addEventListener("click", addToCart);

function addToCart(e) {
  //Retrieve the item details from the card element
  let item = {
    title: document.getElementsByClassName("title")[0].innerText,
    price: document.getElementsByClassName("price")[0].innerText,
    image: document.getElementsByClassName("imge")[0].src
  }
  //Check if the cart is empty
  if (localStorage.getItem("cart") === null) {
    //If the cart is empty, create a new array and add the item to it
    let cart = [];
    cart.push(item);
    //Add the cart array to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    //If the cart is not empty, retrieve the cart array from local storage
    let cart = JSON.parse(localStorage.getItem("cart"));
    //Add the new item to the cart array
    cart.push(item);
    //Add the updated cart array to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  //Alert the user that the item has been added to the cart
  alert("Item added to cart!");
}