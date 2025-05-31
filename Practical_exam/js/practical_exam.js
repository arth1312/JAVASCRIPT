// Add to product
let currentSearch = "";

document.querySelector("#ProductForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let productName = document.querySelector("#Product_name").value;
    let productImage = document.querySelector("#Product_image").value;
    let price = document.querySelector("#Price").value;
    let category = document.querySelector("#Category").value;

    let formData = {
        Product_name: productName,
        Product_image: productImage,
        Price: price,
        Category: category
    };
    let products = JSON.parse(localStorage.getItem("Product")) || [];
    products.push(formData);

    localStorage.setItem("Product", JSON.stringify(products));
    document.querySelector("form").reset();

    addProductToList();
});

document.querySelector("#searchInput").addEventListener("input", (e) => {
    currentSearch = e.target.value.toLowerCase();
    addProductToList();
});

function addProductToList() {
    let allData = JSON.parse(localStorage.getItem("Product")) || [];

    if(currentSearch) {
        allData = allData.filter(product => product.Product_name.toLowerCase().includes(currentSearch));
    }

    let result = "";
    allData.forEach((record, index) => {
        let row = `
            <div class="product-cards" data-index="${index}">
                <div class="product-card__image">
                    <img src="${record.Product_image}" alt="${record.Product_name}" width="100">
                </div>
                <div class="product-card__info">
                    <h2 class="product-card__title">${record.Product_name}</h2>
                    <p class="product-card__category">${record.Category}</p>
                    <div class="product-card__price-row">
                        <span class="product-card__price">${record.Price}</span>
                    </div>
                    <div class="product-card__btn">
                        <button class="product-card__Edit" data-index="${index}">Edit</button>
                        <button class="product-card__Delete" data-index="${index}">Delete</button>
                    </div>
                </div>
            </div>
        `;
        result = result + row;
    });

    document.querySelector(".cont").innerHTML = result;

    document.querySelectorAll(".product-card__Edit").forEach((button) => {
        button.addEventListener("click", editProduct);
    });

    document.querySelectorAll(".product-card__Delete").forEach((button) => {
        button.addEventListener("click", deleteProduct);
    });
}

function editProduct(e) {
    let index = e.target.closest(".product-card__Edit").dataset.index;
    let products = JSON.parse(localStorage.getItem("Product")) || [];

    let product = products[index];

    document.querySelector("#Product_name").value = product.Product_name;
    document.querySelector("#Product_image").value = product.Product_image;
    document.querySelector("#Price").value = product.Price;
    document.querySelector("#Category").value = product.Category;

    products.splice(index, 1);
    localStorage.setItem("Product", JSON.stringify(products));

    addProductToList();
}

function deleteProduct(e) {
    let index = e.target.closest(".product-card__Delete").dataset.index;
    let products = JSON.parse(localStorage.getItem("Product")) || [];

    products.splice(index, 1);
    localStorage.setItem("Product", JSON.stringify(products));

    addProductToList();
}

addProductToList();