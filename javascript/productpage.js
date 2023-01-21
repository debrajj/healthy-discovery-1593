class FetchData {
    constructor() {
        this.url = "https://63c8df92904f040a9651b0ac.mockapi.io/hr";
        this.productContainer = document.querySelector(".product-card");
    }

    async getData() {
        try {
            var response = await fetch(this.url);
            var data = await response.json();
            this.displayData(data);
        } catch (error) {
            console.error(error);
        }
    }
    displayData(data) {
        let template = "";
        data.forEach((item) => {
            template += `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${item.avatar}">
                    
                        <h5>${item.name}</h5>
                        <h6>RS${item.price}</h6>
                        <button>Buy Now</button>
                    </div>
                </div>
            `;
        });
        this.productContainer.innerHTML = template;
    }
    
}
var fetchData = new FetchData();
fetchData.getData();

