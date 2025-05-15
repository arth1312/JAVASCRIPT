let ProductForm = document.querySelector(".ProductForm");
let ProductName = document.querySelector("#Product_name");
let ProductImage = document.querySelector("#Product_image");
let ProductPrice = document.querySelector("#Product_price");
let ProductDescription = document.querySelector("#Product_description");

ProductForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let products = JSON.parse(localStorage.getItem('products')) || [];

    let formData = {
        Product_name: ProductName.value,
        Product_image: ProductImage.value,
        Product_price: ProductPrice.value,
        Product_description: ProductDescription.value
    };

    products.push(formData);
    localStorage.setItem('products', JSON.stringify(products));

    displayProduct();

    ProductForm.reset();
});

function displayProduct() {
    let products = JSON.parse(localStorage.getItem('products')) || [];

    let rowData = "";
    products.forEach((record, index) => {
        let row = `
            <div class="product-cards" data-index="${index}">
                <div class="product-card__image">
                    <img src="${record.Product_image}" alt="${record.Product_name}">
                </div>
                <div class="product-card__info">
                    <h5 class="product-card__title">${record.Product_name}</h5>
                    <p class="product-card__description">${record.Product_description}</p>
                    <div class="product-card__price-row">
                        <span class="product-card__price">${record.Product_price}</span>
                        <button class="Product-card__btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        rowData = rowData + row;
    });

    document.querySelector(".cont").innerHTML = rowData;
    document.querySelectorAll(".Product-card__btn").forEach((btn, index) => {
        btn.addEventListener("click", () => addToCart(index))
    });
}

function addToCart(index) {
    let products = JSON.parse(localStorage.getItem('Product')) || [];
    let cartProducts = JSON.parse(localStorage.getItem('CartProducts')) || [];
    let productToAdd = products[index];
    cartProducts.push(productToAdd);
    localStorage.setItem('CartProducts', JSON.stringify(cartProducts));
    alert(`${productToAdd.Product_name} added to cart`);
}

displayProduct();