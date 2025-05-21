// document.querySelector("button").addEventListener("click", () => {
//     let div = document.getElementById("test");

//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res = res.json());
//     then(data => {
//         let img = document.createElement('img');
//         img.setAttribute('src', data.message);
//         img.setAttribute('width', "280px");
//         img.setAttribute('height', "280px");
//         div.prepend(img);
//     })
//     .catch(err => console.log(err));
// });


document.querySelector("button").addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.onload = function () {
        let div = document.getElementById("test");
        let data = JSON.parse(this.responseText);
        let img = document.createElement('img');
        img.setAttribute('src', data.message);
        img.setAttribute('width', "280px");
        img.setAttribute('height', "280px");
        div.prepend(img);
    };
    xhr.send();
});
