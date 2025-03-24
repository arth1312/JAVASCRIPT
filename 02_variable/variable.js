// variable :- var, let and const

// 1. variable :- var (Global scope variable)

var a = 10;
console.log(a);

var a = 20;
console.log(a);

var a = 10;
console.log(a);
{
    var a = 20;
    console.log(a);
}
console.log(a);

// 2. variable :- let (reuseble not, block-scope variable)

let a = 10;
console.log(a);

let a = 20;
console.log(a);

let a = 10;
console.log(a);
{
    let a = 20;
    console.log(a);
}
console.log(a);

// 3. variable :- const (reuseble not, block-scope variable)

const a = 10;
console.log(a);

const a = 20;
console.log(a);

const a = 10;
console.log(a);
{
    const a = 20;
    console.log(a);
}
console.log(a);