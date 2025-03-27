// Print out 10 to 1
console.log("Print out 10 to 1");
for(let i = 10; i >= 1; i--)
{
    console.log(i);
}

// print out 51 to 99
console.log("print out 51 to 99");
for(let i = 51; i <= 99; i++)
{
    console.log(i);
}

// Enter n and print out 1 to n
console.log("Enter n and print out 1 to n");
let x = +prompt("Enter your number:");
for(let i = 1; i <= x; i++)
{
    console.log(i);
}

// Enter n and print out n to 1
console.log("Enter n and print out n to 1");
let y = +prompt("Enter your number:");
for(let i = y; i >= 1; i--)
{
    console.log(i);
}

// Enter n and print out -n to n
console.log("Enter n and print out -n to n");
let a = +prompt("Enter your negative number:");
let b = +prompt("Enter your positive number:");
for(let i = a; i <= b; i++)
{
    console.log(i);
}

// print odd number
console.log("print odd number");
let z = +prompt("enter your number:");
for(i = 1; i <= z; i++)
{
    if(i % 2 == 1)
    {
        console.log(i);
    }
}

// print even number
console.log("print odd number");
let n = +prompt("enter your number:");
for(i = 2; i <= n; i = i + 2)
{
    console.log(i);
}