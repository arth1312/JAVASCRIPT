// Q-1
{
    console.log("Question no:- 1");
    let i = 1, n;
    n = +prompt("Enter your number:");
    while(i <= 10)
    {
        console.log(n, "x", i, "=", n * i);
        i++;
    }

    /*
        Output:-    Question no:- 1
                    9 'x' 1 '=' 9  to  9 'x' 10 '=' 90
    */
}

// Q-2
{
    console.log("Question no:- 2");
    let i = 1, j = 5;
    let fact = 1;
    while(i <= j)
    {
        fact *= i;
        i++;
    }
    console.log("Your factorial is:", fact);

    /*
        Output:-    Question no:- 2
                    Your factorial is: 120
    */
}

// Q-3
{
    console.log("Question no:- 3");
    let number = prompt("Enter number:");
    let orig = number;
    let power = 0;
    do
    {
        let rem = number % 10;
        power = power + rem ** 3;
        number = Math.floor(number / 10);
    }while(number > 0)
    if(orig == power)
    {
        console.log("The number is armstrong");
    }
    else
    {
        console.log("The number is not armstrong");
    }

    /*
        Output:-    Question no:- 3
                    Enter number: 153
                    The number is armstrong
    */
}

// Q-4
{
    console.log("Question no:- 4");
    let number = prompt("Enter number:");
    let original = number;
    let reverse = 0;
    while(number > 0)
    {
        let rem = number % 10;
        reverse = (reverse * 10) + rem;
        number = Math.floor(number / 10);
    }
    if(original == reverse)
    {
        console.log("The number is palindrom");
    }
    else
    {
        console.log("The number is not palindrom");
    }

    /*
        Output:-    Question no:- 4
                    Enter number: 121
                    The number is palindrom
    */
}

// Q-5
{
    console.log("Question no:- 5");
    let a = 0, b = 1, c;
    let i = 1;
    while(i <= 10)
    {
        console.log(a);
        c = a + b;
        a = b;
        b = c;
        i++;
    }

    /*
        Output:-    Question no:- 5
                    0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    */
}

// Q-6
{
    console.log("Question no:- 6");
    let sum = 0;
    let n = 0;
    do
    {
        sum = sum + n;
        n++;
    }while(n <= 30)
    console.log("Sum is:", sum);

    /*
        Output:-    Question no:- 6
                    Sum is: 465
    */
}

// Q-7
{
    console.log("Question no:- 7");
    let n = 1;
    do
    {
        if(n % 3 == 0)
        {
            if(n % 5 == 0)
            {
                console.log("FizzBuzz");
            }
            else
            {
                console.log("Fizz");
            }
        }
        else if(n % 5 == 0)
        {
            console.log("Buzz");
        }
        else
        {
            console.log(n);
        }
        n++;
    }while(n <= 100)

    /*
        Output:-    Question no:- 7
                    1, 2, Fizz, 4, Buzz, Fizz, 7, ....., 14, FizzBuzz, ......., 97, 98, Fizz, Buzz
    */ 
}

// Q-8
{
    // console.log("Question no:- 8");
    
}

// Q-9
{
    console.log("Question no:- 9");
    let i = 1;
    let sum = 0;
    for(i = 1; i * i <= 100; i++)
    {
        console.log(i * i);
        sum = sum + i * i;
    }
    console.log("Sum is:", sum);

    /*
        Output:-    Question no:- 9
                    1, 4, 9, 16, 25, 36, 49, 64, 81, 100
                    Sum is: 385
    */
}

// Q-10
{
    console.log("Question no:- 10");
    let i, j;
    for(i = 5; i >= 1; i--)
    {
        let data = "";
        for(j = 5; j >= i; j--)
        {
            data += j + " ";
        }
        console.log(data, " ");
    }

    /*
        Output:-    Question no:- 10
                    5
                    5 4
                    5 4 3
                    5 4 3 2
                    5 4 3 2 1
    */
}

// Q-11
{
    console.log("Question no:- 11");
    let i, j, data, value = 1;
    for(i = 1; i <= 5; i++)
    {
        data = "";
        for(j = 1; j <= i; j++)
        {
            data += value + " ";
            value++;
        }
        console.log(data);
    }

    /*
        Output:-    Question no:- 11
                    1
                    2 3
                    4 5 6
                    7 8 9 10
                    11 12 13 14 15
    */
}