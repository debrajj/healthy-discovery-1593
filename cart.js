document.getElementById("btnn").addEventListener("click", function() {
  let title = document.querySelector(".title").innerText;
  let img_src = document.querySelector(".imge").src;
  let description = document.querySelector("p").innerText;
  let category = document.querySelector(".catagory").innerText;
  let price = document.querySelector(".price").innerText;

  let cart_item = {
      title: title,
      img_src: img_src,
      description: description,
      category: category,
      price: price
  }

  let cart_data = JSON.parse(localStorage.getItem("cart")) || [];
  cart_data.push(cart_item);
  localStorage.setItem("cart", JSON.stringify(cart_data));
});
