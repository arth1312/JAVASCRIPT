let title = document.querySelector("#title");
let desc = document.querySelector("#desc");
let price = document.querySelector("#price");
let category = document.querySelector("#category");

let editTitle = document.querySelector("#editTitle");
let editDesc = document.querySelector("#editDesc");
let editPrice = document.querySelector("#editPrice");
let editCategory = document.querySelector("#editCategory");

 
let addForm = document.querySelector("#add-book");
let editForm = document.querySelector("#edit-book");
let editBookForm = document.querySelector("#edit-book-form");
let addBookForm = document.querySelector("#add-book-form");

let editIndex = null;

addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let books = JSON.parse(localStorage.getItem('books')) || [];
    let newBook = {
        title: title.value,
        desc: desc.value,
        price: price.value,
        category: category.value
    }

    books.push(newBook)
    // sessionStorage.setItem('books', JSON.stringify( books));
    localStorage.setItem('books', JSON.stringify( books));
    displayData();
    addForm.reset();
});


function displayData() {
    let books = JSON.parse(localStorage.getItem('books'));
    // console.log(books);
    let rowData = "";
    books.forEach((book, index) => {
        let row = `
        <tr>
            <td>${index + 1} </td>
            <td>${book.title} </td>
            <td>${book.desc} </td>
            <td>${book.category} </td>
            <td>${book.price} </td>
            <td><button onclick="editBook(${index})">Edit</button> </td>
            <td><button onclick="deleteBook(${index})">Delete</button> </td>
        </tr>
        `
        rowData = rowData + row;
    })
    document.querySelector('#view-book').innerHTML = rowData;
};

displayData();



function deleteBook(id){
    let books = JSON.parse(localStorage.getItem('books'))
    books.splice(id, 1);
    // books = books.filter((book) => book.title != title)
    localStorage.setItem('books', JSON.stringify(books));
    displayData();
}

function editBook(id){
    let books = JSON.parse(localStorage.getItem('books'));
    // console.log(books[id]);
    let book = books[id];

    editTitle.value = book.title;
    editPrice.value = book.price;
    editCategory.value = book.category;
    editDesc.value = book.desc;

    addBookForm.style.display = "none"
    editBookForm.style.display = "block";

    editIndex = id;
}

editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let books = JSON.parse(localStorage.getItem('books')) || [];
    books[editIndex] = {
        title: editTitle.value,
        desc: editDesc.value,
        price: editPrice.value,
        category: editCategory.value
    }

    // sessionStorage.setItem('books', JSON.stringify( books));
    localStorage.setItem('books', JSON.stringify( books));
    displayData();

    addBookForm.style.display = "block"
    editBookForm.style.display = "none";

    editIndex = null;
    

}); 


