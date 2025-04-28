// DOM:- Document Object Model
// Element:- id, class, tagName

// 1. getElementById
function clickMe() {
    let h2 = document.getElementById("test")
    console.log(h2)
    h2.innerHTML = "Javascript"
}

// 2. getElementByTagName
// function clickMe() {
//     let h2 = document.getElementsByTagName("h2")
//     console.log(h2)
//     h2[0].innerHTML = "Javascript"
// }

// 3. getElementByClassName
// function clickMe() {
//     let h2 = document.getElementsByClassName("hello")
//     console.log(h2)
//     h2[0].innerHTML = "Javascript"
// }

// 4. querySelector, querySelectorAll
// function clickMe() {
//     let h2 = document.querySelectorAll('.hello')
//     console.log(h2)
//     h2[0].innerHTML = "Javascript"
// }

// 5. style add
// function clickMe() {
//     let h2 = document.getElementsById("test")
//     console.log(h2)
//     h2.innerHTML = "Javascript"
//     h2.style.color = "blue"
// }

// 6. removeAttribute
// function clickMe() {
//     let h2 = document.getElementById("test")
//     h2 = removeAttribute('class');
//     console.log(h2)
//     h2.innerHTML = "Javascript"
// }

// 7. setAttribute
// function clickMe() {
//     let h2 = document.getElementById("test")
//     h2 = addAttribute('name', 'abc');
//     console.log(h2)
//     h2.innerHTML = "Javascript"
// }

// 8.
const button = document.getElementById('btn')
button.addEventListener('click', clickMe)
button.addEventListener('click', () => {
    console.log("Arth Koradiya");
})