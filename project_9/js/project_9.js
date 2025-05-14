// Add to Cart

let Product_Form = document.querySelector("#ProductForm");
let Product_Name = document.querySelector("#Product_name");
let Product_Image = document.querySelector("#Product_image");
let Product_Price = document.querySelector("#Product_price");
let Product_description = document.querySelector("#Product_description");

Product_Form.addEventListener('submit', (e) => {
    e.preventDefault();

    let products = JSON.parse(sessionStorage.getItem('products')) || [];

    let formData = {
        Product_name: Product_Name.value,
        Product_image: Product_Image.value,
        Product_price: Product_Price.value,
        Product_description: Product_description.value
    }

    products.push(formData)

    localStorage.setItem('products', JSON.stringify(products));
    displayProduct();
    Product_Form.reset();
});

function displayProduct() {
    let products = JSON.parse(localStorage.getItem('products'));

    let rowData = "";
    products.forEach((record, index) => {
        let row = `
            <div class="product-cards" data-index="${index}">
                <div class="product-card__image"> 
                    <img src="${record.Product_image}" alt="${record.Product_name}" width="100">
                </div>
                <div class="product-card__info">
                    <h2 class="product-card__title">${record.Product_name}</h2>
                    <p class="product-card__description">${record.Product_description}</p>
                    <div class="product-card__price-row">
                        <span class="product__price">${record.Product_price}</span>
                        <button href="#" class="Product-card__btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        rowData = rowData + row;
    })
};
document.querySelector(".cont").innerHTML = rowData;
displayProduct();