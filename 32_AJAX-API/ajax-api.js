// AJAX :- Asynchronous JavaScript with XML

document.querySelector("button").addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.onload = function() {
        // console.log(this.responseText);
        // document.writeln(this.responseText);

        let div = document.getElementById("test");
        let data = JSON.parse(this.responseText);
        data.forEach((user) => {
            let li = document.createElement("li");
            li.innerHTML = user.title;
            div.append(li);
        });
    };
    xhr.send();  
});
