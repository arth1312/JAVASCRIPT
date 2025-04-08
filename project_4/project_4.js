console.log("Question no:- 1");
function greeting(a)
{
    if(a == null)
    {
        console.log("Good Morning");
    }
    else
    {
        console.log("Hello World");
    }
}
greeting(null);
/*
    Output:- Good Morning
*/


console.log("Question no:- 2");
function circleArea(pi, r)
{
    return pi * r * r;
}
console.log("Area of circle:", circleArea(3.14, 10));
/*
    Output:- pi = 3.15, r = 10
             Area of circle: 314
*/


console.log("Question no:- 3");
function triangleArea(l, h)
{
    return (l * h) / 2;
}
console.log("Area of triangle:", triangleArea(10, 20));
/*
    Output:- l = 10, h = 20
             Area of triangle: 100
*/


console.log("Question no:- 4");
function rectangleArea(l, h)
{
    return l * h;
}
console.log("Area of rectangle:", rectangleArea(5, 10));
/*
    Output:- l = 5, h = 10
             Area of rectangle: 50
*/


console.log("Question no:- 5");
function result(a, b, c)
{
    let answer;
    answer = ((b * b) * (4 * a * c)) / (2 * a);
    return answer;
}
let answer = result(5, 8, 2);
console.log("Your answer:", answer);
/*
    Output:- a = 5, b = 8, c = 2
             Your answer: 256
*/


console.log("Question no:- 6");
function result1(a, b)
{
    let answer1;
    answer1 = (a * a) + (2 * a * b) + (b * b);
    return answer1;
}
let answer1 = result1(9, 5);
console.log("Your answer:", answer1);
/*
    Output:- a = 9, b = 5
             Your answer: 196
*/


console.log("Question no:- 7");
function celsius(f)
{
    return (f - 32) / 1.8;
}
console.log("Convert fahrenheit to celsius:", celsius(70));
/*
    Output:- f = 70
             Convert fahrenheit to celsius: 21.11
*/


console.log("Question no:- 8");
function fahrenheit(c)
{
    return (c * 1.8) + 32;
}
console.log("Convert celsius to fahrenheit:", fahrenheit(25));
/*
    Output:- c = 25
             Convert celsius to fahrenheit: 77
*/


console.log("Question no:- 9");
function number(num)
{
    if(num % 2 === 0)
    {
        console.log("The number is even");
    }
    else
    {
        console.log("The number is odd");
    }
}
number(10);
/*
    Output:- num = 10
             The number is even
*/


console.log("Question no:- 10");
function swap(a, b)
{
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("Swap value is:", "a =", a, "b =", b);
}
swap(10, 15);
/*
    Output:- a = 10, b = 15
             Swap value is: a = 15 b = 10
*/