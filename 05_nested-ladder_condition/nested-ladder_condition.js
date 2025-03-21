// Enter a, b, c find largest among them.
let a = 100, b = 50, c = 300;
if(a > b)
{
    if(a > c)
    {
        console.log("a is largest");
    }
    else
    {
        console.log("c is largest");
    }
}
else
{
    if(b > c)
        {
            console.log("b is max");
        }
        else
        {
            console.log("c is max");
        }
}


// Q-1
let unit = 400;
let bill;
if(unit <= 100)
{
    bill = unit * 0.60;
}
else if(unit <= 300)
{
    bill = 100 * 0.60 +(unit - 100) * 0.80;
}
else
{
    bill = 100 * 0.60 + 200 * 0.80 + (unit - 300) * 0.90;
}
if(bill < 50)
{
    bill = 50;
}
if(bill > 300)
{
    bill = bill * 1.15;
}
console.log("bill:", bill);


// Q-2
let age = 16;
if(age >= 18)
{
    console.log("Your are eligible for voting");
}
else
{
    console.log("Your are not eligible for voting");
}



// Q-5
let marks = 91;
if(marks >= 75)
{
    console.log("Grade A");
}
else if(marks >= 60)
{
    console.log("Grade B");
}
else if(marks >= 45)
{
    console.log("Grade C");
}
else if(marks >= 35)
{
    console.log("Grade D");
}
else
{
    console.log("You Fail");
}


// Q-6
let x = 3500, y = 250;
if(x < 2000 || x > 3000)
{
    console.log("x:", x);
}
if(y >= 100 && y <= 500)
{
    console.log("y:", y);
}