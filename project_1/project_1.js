// Q-1 Write a JavaScript program to find the area of a triangle.

var a = 10;
var b = 5;
var area_triangle;
area_triangle = a * b / 2;
console.log("Area of traingle:", area_triangle);
// Output :- Area of traingle: 25


// Q-2 Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.



// Q-3 Write a JavaScript program to find the area of a rectangle.

var c = 10;
var d = 15;
var area_rectangle;
area_rectangle = c * d;
console.log("Area of rectangle is:", area_rectangle);
// Output :- Area of rectangle is: 150


// Q-4 Write a JavaScript program to find the area of a circle.

var r = 10;
var area_circle;
area_circle = 3.14 * (r ** 2)
console.log("Area of circle is:", area_circle);
// Output :- Area of circle is: 314


// Q-5 Write a JavaScript program to convert to Feet into Inches.

var feet = 20;
var inche;
inche = feet * 12;
console.log("convert feet to inche:", inche);
// Output :- convert feet to inche: 240


// Q-6 Write a JavaScript program to calculate given formulas :-
// a^2 - b^2 = (a-b)(a+b)

var a = 10;
var b = 5;
var leftSide = a ** 2 - b ** 2;
var rightSide = (a - b) * (a + b);
console.log("leftSide a^2 - b^2:", leftSide, "rightSide (a-b) * (a+b):", rightSide);
// Output :- leftSide a^2 - b^2: 75    rightSide (a-b) * (a+b): 75

// (a-b)^2 = a^2 - 2ab + b^2
var a = 10;
var b = 5;
var leftSide = (a-b) ** 2;
var rightSide = a ** 2 - 2 * a * b + b ** 2;
console.log("leftSide (a-b)^2:", leftSide, "rightSide a^2 - 2ab + b^2:", rightSide);
// Output :- leftSide (a-b)^2: 25   rightSide a^2 - 2ab + b^2: 25

// (a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc
var a = 10;
var b = 5;
var c = 15;
var leftSide = (a+b+c) ** 2;
var rightSide = a ** 2 + b ** 2 + c ** 2 + 2 * a * b + 2 * a * c + 2 * b * c ;
console.log("leftSide (a+b+c)^2:", leftSide, "rightSide a^2 + b^2 + c^2 + 2ab + 2ac + 2bc:", rightSide);
// Output :- leftSide (a+b+c)^2: 900   rightSide a^2 + b^2 + c^2 + 2ab + 2ac + 2bc: 900

// (a-b-c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc
var a = 10;
var b = 5;
var c = 15;
var leftSide = (a-b-c) ** 2;
var rightSide = a ** 2 + b ** 2 + c ** 2 - 2 * a * b - 2 * a * c + 2 * b * c ;
console.log("leftSide (a-b-c)^2:", leftSide, "rightSide a^2 + b^2 + c^2 - 2ab - 2ac + 2bc:", rightSide);
// Output :- leftSide (a+b+c)^2: 100   rightSide a^2 + b^2 + c^2 - 2ab - 2ac + 2bc: 100

// (a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3
var a = 10;
var b = 5;
var leftSide = (a-b) * (a-b) * (a-b);
var rightSide = a * a * a - 3 * a ** 2 * b + 3 * a * b ** 2 - b * b * b;
console.log("leftSide (a-b)^3:", leftSide, "rightSide a^3 - 3a^2b + 3ab^2 - b^3:", rightSide);
// Output :- leftSide (a-b)^3: 125 rightSide a^3 - 3a^2b + 3ab^2 - b^3: 125