// check the palindrom number
// console.log("check the palindrom number")
// let num = prompt("Enter number:");
// let original = num;
// let reverse = 0;
// while(num > 0)
// {
//     let rem = num % 10;
//     reverse = (reverse * 10) + rem;
//     num = Math.floor(num / 10);
// }
// if(original == reverse)
// {
//     console.log("The number is palindrom");
// }
// else
// {
//     console.log("The number is not palindrom");
// }



// check the armstrong number
// console.log("check the armstrong number")
// let number = prompt("Enter number:");
// let orig = number;
// let power = 0;
// while(number > 0)
// {
//     let rem = number % 10;
//     power = power + rem ** 3;
//     number = Math.floor(number / 10);
// }
// if(orig == power)
// {
//     console.log("The number is armstrong");
// }
// else
// {
//     console.log("The number is not armstrong");
// }

// print reverse number
console.log("Print reverse number");
let n = 123;
let originl = n;
let rev = 0;
while(n > 0)
{
    let rem = n % 10;
    rev = (rev * 10) + rem;
    n = Math.floor(n / 10);
}
console.log("Reverse number:", rev);