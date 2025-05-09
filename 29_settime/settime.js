// SETTIMEOUT, SetInterval, clearTimeout, clearInterval

// 1. setTimeout function
setTimeout(() => {
    console.log("setTimeout called...!")
},3000)


// 2. setTimeout function
setInterval(() => {
    console.log("setInterval called...!")
},3000)


// 2. setTimeout function
let id = setTimeout(() => {
    console.log("setTimeout called...!")
},3000)
console.log("setTimeout:-", id);
clearTimeout(id);


let ID = setInterval(() => {
    console.log("setInterval called...!")
},3000)
console.log("setInterval:-", ID);
clearInterval(ID);