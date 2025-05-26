let select = document.querySelector('select');

fetch("https://dog.ceo/api/breeds/list/all")
.then(res => res.json())
.then(data => {
    let breedList = Object.keys(data.message);

    breedList.forEach(breed => {
      let option = document.createElement('option');
      option.innerHTML = breed;
      option.setAttribute('value', breed);
      select.append(option);
    });
})
.catch(err => console.log(err));

document.querySelector("button").addEventListener("click", () => {
    let breedList = select.value;

    fetch(`https://dog.ceo/api/breed/${breedList}/images`)
        .then(res => res.json())
        .then(data => {
            let dogList = data.message;
            document.querySelector("#test").innerHTML = "";

            dogList.forEach(dog => {
                let img = document.createElement('img');
                img.setAttribute('src', dog); 
                img.setAttribute('width', "200px");
                img.setAttribute('height', "200px");
                img.style.padding = "5px";
                document.querySelector("#test").prepend(img);
            });
        })
    .catch(err => console.log(err));
});
