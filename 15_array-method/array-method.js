let data = [10, 20, 30, 40, 50, 60]
console.log(data);

// 6. include:- check element present or not.
console.log(data.includes(60));


// 7. Array.isArray:- array or not.
console.log(Array.isArray(data));


// 8. findIndex:- find out index number of element
console.log(data.findIndex ((ele) =>
{
    return ele > 30;
}))


// 9. filter:- filter data
let res = data.filter ((ele) =>
    {
        return ele <= 30;
    })
console.log(res);


// 10. indexOf:- find out index number
console.log(data.indexOf(50));


// 11. every:- check all element satisfied or not
let result = data.every ((ele) =>
{
    return ele <= 400;
})
console.log(result);


// 12. some:- check one element satisfied or not
let result1 = data.some ((ele) =>
{
    return ele >= 30;
})
console.log(result1);


// 13. forEach:- itracte of array / no return
let result2 = data.forEach ((ele, i) =>
{
    console.log(i, ele);
})
console.log(result2);


// 14. map:- return a new array
let result3 = data.map ((ele) =>
{
    return ele * 3;
})
console.log(result3);


// 15. find:- find out the element
let result4 = data.find ((ele) => ele >= 30);
console.log(result4);