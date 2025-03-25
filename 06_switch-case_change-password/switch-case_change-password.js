// Switch Case

console.log("addition, subtraction, multiplication and division");
let a = 5, b = 5;
let choice = Number(prompt("Enter your choice"));

switch (choice) {
    case 1:
        console.log("a and b addition is:", a + b);
        break;
    case 2:
        console.log("a and b subtraction is:", a - b);
        break;
    case 3:
        console.log("a and b multiplication is:", a * b);
        break;
    case 4:
        console.log("a and b division is:", a / b);
        break;
    default:
        console.log("Invalid your choice!!");
        break;
}


// Change password

console.log("Change Password");
let oldPassword = "1312", newPassword = "131205", confPassword = "131205";
if(oldPassword == newPassword)
{
    console.error("old password and new password both are same..");
}
else
{
    if(newPassword == confPassword)
    {
        console.log("Your password is change..");
    }
    else
    {
        console.error("new password and confirm password both are not same..");
    }
}