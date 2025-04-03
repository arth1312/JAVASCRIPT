// Four types of function:- NANR(No Arguments No Return), NAWR(No Arguments With Return), WANR(With Arguments No Return), WAWR(With Arguments With Return)

// 1. NANR(No Arguments No Return)
{
    // function addition()
    // {
    //     let a = 20, b = 50;
    //     console.log("Addition of a and b:", a + b);
    // }
    // addition();
}

// 2. NAWR(No Arguments With Return)
{
    // function subtraction()
    // {
    //     let a = 40, b = 15;
    //     let c;
    //     c = a - b;
    //     return c;
    // }
    // console.log(subtraction());
}

// 3. WANR(With Arguments No Return)
{
    // function multiplication(a, b)
    // {
    //     console.log("Multiplication of a and b:", a * b);
    // }
    // multiplication(10, 10);
}

// 4. WAWR(With Arguments With Return)
{
    function interest(p, t, r)
    {
        return p * t * r / 100;
    }
    console.log("Interest:",interest(20000, 3, 2.6));
}