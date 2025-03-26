// Q-1
console.log("Question no :- 1");
let units = 150, bill;
if(units <= 50)
{
    bill = units * 1;
    console.log("The electic bill:-", bill);
}
else if(units <= 100)
{
    bill = units * 2;
    console.log("The electic bill:-", bill);
}
else if(units <= 150)
{
    bill = units * 3;
    console.log("The electic bill:-", bill);
}
else if(units > 250)
{
    bill = units * 4;
    console.log("The electic bill:-", bill);
}
/*
    Output:- Question no :- 1
             The electic bill:- 450
*/


// Q-2
console.log("Question no :- 2")
let choice;
choice = +(prompt("Enter your choice:-"));
switch(choice)
{
    case 1:
        console.log("Winter");
        break;
    case 2:
        console.log("Winter");
        break;
    case 3:
        console.log("Winter");
        break;
    case 4:
        console.log("Winter");
        break;
    case 5:
        console.log("Summer");
        break;
    case 6:
        console.log("Summer");
        break;
    case 7:
        console.log("Summer");
        break;
    case 8:
        console.log("Summer");
        break;
    case 9:
        console.log("Monsoon");
        break;
    case 10:
        console.log("Monsoon");
        break;
    case 11:
        console.log("Monsoon");
        break;
    case 12:
        console.log("Monsoon");
        break;
    default:
        console.log("Invalid season");
}
/*
    Output:- Question no :- 2
             Enter your choice:- 11
             Monsoon
*/


// Q-3
console.log("Question no :- 3");
let amount, year, rate, interest;
amount = 15000;
year = 3;
if(year < 3)
{
    console.log("Invalid input");
}
else if(year > 3 && year <= 5)
{
    interest = amount * year * 3 / 100;
    console.log("Interest:-", interest);
}
else if(year > 5 && year <= 8)
{
    interest = amount * year * 5 / 100;
    console.log("Interest:-", interest);
}
else if(year > 8 && year <= 12)
{
    interest = amount * year * 12 / 100;
    console.log("Interest:-", interest);
}
else
{
    interest = amount * year * 15 / 100;
    console.log("Interest:-", interest);
}
/*
    Output:- Question no :- 3
             Interest:- 6750
*/


// Q-4
console.log("Question no :- 4");
let vote = 40;
if(vote >= 18)
{
    console.log("You are eligible for voting!!");
}
else
{
    console.log("You are not eligible for voting!!");
}
/*
    Output:- Question no :- 4
            You are eligible for voting!!
*/


// Q-5
console.log("Question no :- 5");
let age = 80;
if(age <= 17)
{
    console.log("You are children");
}
else if(age <= 50)
{
    console.log("You are adult");
}
else
{
    console.log("You are senior citizen");
}
/*
    Output:- Question no :- 5
             You are old men
*/
