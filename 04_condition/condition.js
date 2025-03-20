// condition statement => if, if else, nested, ladder, switch, ternery(?:)

// Q-1 Enter two value find smallest.
let a = 20, b = 100;
if(a < b)
{
    console.log("a is small..")
}
else
{
    console.log("b is small..")
}

// Q-2 Enter one value find its positive or negative.
let x = -50;
if(x > 0){
    console.log("Positive number")
}
else
{
    console.log("Negative number")
}

// Q-3 Enter one value find its divisible by 5 or not.
let n = 15;
if(n % 5 === 0)
{
    console.log("number is divisible by 5")
}
else
{
    console.log("number is not divisible by 5")
}

// Q-4 Enter one value find its divisible by 5 and 3 or not.
let y = 28;
if(y % 5 === 0 && y % 3 === 0)
{
    console.log("number is divisible by 5 and 3")
}
else
{
    console.log("number is not divisible by 5 and 3")
}

// Q-5 Enter Student marks wheather pass or not.
let mark = 40;
if(mark >= 35)
{
    console.log("Pass")
}
else
{
    console.log("fail")
}

// Q-6 Enter year find its leap year or not.
let year = 2024;
if(year % 4 === 0)
{
    console.log("leap year")
}
else
{
    console.log("not leap year")
}

// Q-7 Enter a, b, c find largest among them.
let p = 10, q = 12, r = 5;
if(p > q && p > r)
{
    console.log("p is largest")
}
else if(q > p && q > r)
{
    console.log("q is largest")
}
else
{
    console.log("r is largest")
}