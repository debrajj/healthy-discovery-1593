fetch('https://fakestoreapi.com/products')
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let data1 = "";
    console.log(completedata)
    completedata.sort((a,b) => a.price - b.price);
    completedata.map((values) => {
      data1 += `
        <div id="card">
       
          <img src=${values.image} alt="" class="imge">
          <h1 class="title">${values.title}</h1>
     
          <p class="catagory">${values.category}</p>
          <p class="price">₹ ${values.price}</p>
          <button id="btnn">Buy Now</button>
        </div>
      `
    });
    document.getElementById("cards").innerHTML=data1 ;


  }).catch((err) => {
    console.log(err)
  });

document.getElementById("sort").addEventListener("change", function() {
  if (this.value === "high-low") {
    completedata.sort((a,b) => b.price - a.price);
    document.getElementById("cards").innerHTML=data1;
  }
});
