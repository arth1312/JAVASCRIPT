// Callback function:- one function as a argument in another function (Callback Hell)
function Test(Callback){
    console.log("Test function");
    Callback();
}
function Hello(){
    console.log("Hello function");
}
Test(Hello);


// Promises:- pending, resolve, reject (Promises Hell)
// let data = new Promise((resolve, reject) => {
//     let a = true;
//     if(a == true){
//         resolve("resolve promise");
//     }
//     else{
//         reject("reject promise");
//     }
// })
// data.then(res => console.log(res)).catch(err => console.log(err))


// Async / Await
// async function test() {
//     let data = await new Promise((resolve, reject) => {
//         let a = true;
//         if(a == true){
//             resolve("resolve promise");
//         }
//         else{
//             reject("reject promise");
//         }
//     })
// }
// test();