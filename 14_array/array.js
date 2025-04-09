// Array:- collection of element
// index:- start with 0

let arr = [10, 20, 30, 40, 50];
console.log(arr);
console.log(arr[0]);


// Array method:- push, pop, unshift, shift, splice

let data = [10, 20, 30, 40, 50]
console.log(data);

// 1. push:- add element into last position
data.push(60);
console.log(data);

// 2. pop:- remove element into last position
data.pop();
console.log(data);

// 3. unshift:- add element into first position
data.unshift(70);
console.log(data);

// 4. shift:- remove element into first position
data.shift();
console.log(data);

// 5. splice:- add / remove element into any position
// add element any position
data.splice(2, 0, 80);
console.log(data);

// remove element any position
data.splice(2, 1);
console.log(data);

// remove element and add element any position
data.splice(2, 2, 90, 100, 110);
console.log(data);