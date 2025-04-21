let images = [
    { "id": 1, "image": 'https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg' },
    { "id": 2, "image": 'https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg' },
    { "id": 3, "image": 'https://wowslider.com/sliders/demo-88/data1/images/auto334158_1920.jpg' },
    { "id": 4, "image": 'https://wowslider.com/sliders/demo-74/data1/images/budapest342499_1280.jpg' },
    { "id": 5, "image": 'https://wowslider.com/sliders/demo-74/data1/images/london441853_1280.jpg' },
    { "id": 6, "image": 'https://wowslider.com/sliders/demo-74/data1/images/budapest342499_1280.jpg' },
    { "id": 7, "image": 'https://wowslider.com/sliders/demo-62/data1/images/audi87448_1280.jpg' },
    { "id": 8, "image": 'https://wowslider.com/sliders/demo-62/data1/images/car101975_1280.jpg' },
    { "id": 9, "image": 'https://wowslider.com/sliders/demo-34/data1/images/greatwilder1400498.jpg' },
    { "id": 10, "image": 'https://wowslider.com/sliders/demo-34/data1/images/matterhorn1364829.jpg' },
    { "id": 11, "image": 'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg' },
    { "id": 12, "image": 'https://wowslider.com/sliders/demo-18/data1/images/london830775.jpg' },
]


let index = 0;

function startSlider(id) {
    let imageElement = document.getElementById("image");
    imageElement.style.opacity = 0;

    setTimeout(() => {
        let imageElement = document.getElementById("image");
        imageElement.src = images[id].image;
        imageElement.style.opacity = 1;
    })
}
function previmg() {
    if (index == 0) {
        index = images.length - 1;
    }
    else {
        index--;
    }
    startSlider(index);
}

function nextimg() {
    if (index >= images.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    startSlider(index);
}
startSlider(index);
