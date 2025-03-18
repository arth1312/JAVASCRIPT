// Arithmatic :- + - * / % ** ++ --
// Relational :- > >= < <= == != === !===
// Assignment :- += -= *= /= %= **=
// Logical :- && || ! ^
// typeof


// Write a program to swap a number
let a = 13, b = 12;
console.log("The value of a:", a);
console.log("The value of b:", b);

// 1. method
let c;
c = a;
a = b;
b = c;

// 2. method
a = a + b;
b = a - b;
a = a - b;

// 3. method
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("The value of a:", a);
console.log("The value of b:", b);


// Write a program to calculate area of circle
let r = 10;
let area_circle;
area_circle = 3.14 * (r ** 2)
console.log("Area of circle is:", area_circle);


// Write a program to Basic Intrest
let p = 50000, ra = 2.5, t = 3;
console.log("Intreast:", p * ra * t / 100);


// Write a program to calculate area of square
let d = 5;
let area_square;
area_square = d * d;
console.log("Area of square is:", area_square);


// Write a program to calculate area of rectangle
let e = 5;
let f = 10;
let area_rectangle;
area_rectangle = e * f;
console.log("Area of rectangle is:", area_rectangle);


// Write a program to calculate area of triangle
let g = 10;
let h = 5;
let area_triangle;
area_triangle = g * h / 2;
console.log("Area of triangle is:", area_triangle);