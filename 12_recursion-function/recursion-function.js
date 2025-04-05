// factorial number in recursion function
{
    function Test(n)
    {
        console.log("inside is:", n);
        if(n < 5)
        {
            Test(n + 1);
        }
    }
}
Test(1);