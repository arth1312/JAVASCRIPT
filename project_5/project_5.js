// Question no. 1
console.log("Question no:- 1")
let myColor = ["Red", "Green", "White", "Black"]

let output1 = myColor.join(",")
console.log("Output1:-", output1)
// Output1:- Red,Green,White,Black

let output2 = myColor.join("+")
console.log("Output2:-", output2)
// Output2:- Red+Green+White+Black

let output3 = myColor.slice(0, -1).join(",")
console.log("Output3:-", output3)
// Output3:- Red,Green,White

let output4 = myColor[0]
console.log("Output4:-", output4)
// Output4:- Red

let output5 = myColor.slice(1, 3).join(",")
console.log("Output5:-", output5)
// Output5:- Green,White

let orange = [myColor, "orange"]
let output6 = orange.join(",")
console.log("Output6:-", output6)
// Output6:- Red,Green,White,Black,orange


// Question no. 2
console.log("Question no:- 2")
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("Using for loop")
let sum = 0
for(let i = 0; i < a.length; i++)
{
    sum = sum + a[i]
}
console.log("All element sum for loop:-", sum)
// All element sum:- 45

console.log("Using forEach loop")
let sum1 = 0
a.forEach((num) =>
{
    sum1 += num
})
console.log("All element sum1 forEach loop:-", sum1)
// All element sum1 forEach loop:- 45


// Question no. 3
console.log("Question no:- 3")
let value = [1, 44, 90, 443, 34, 10, 55]
let max = value[0], min = value[0]
console.log(value)

for(let i = 0; i < value.length; i++)
{
    if(value[i] > max)
    {
        max = value[i]
    }
    if(value[i] < min)
    {
        min = value[i]
    }
}
console.log("Maximum value is:-", max)
// Maximum value is:- 443

console.log("Minimum value is:-", min)
// Minimum value is:- 1


// Question no. 4
console.log("Question no:- 4")
let b = ['A', 'B', 'c', 'd']
let datavalue = b.map(char => char.charCodeAt())
console.log(datavalue)
// Output:- [65, 66, 99, 100]


// Question no. 5
console.log("Question no:- 5")
let number = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20]
data = number.filter((value, index) =>
{
    return 0 < value
})
console.log(data)
// Output:- [1, 5, 12, 19, 20]


// Question no. 6
console.log("Question no:- 6")
let arr = [2, 5, 6, 3, 8, 9]
let square = arr.map(num => num * num)
console.log(square)
// Output:- [4, 25, 36, 9, 64, 81]


// Question no. 7
console.log("Question no:- 7")
let number1 = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20]

number1 .sort((a, b) => a - b)
console.log(number1)
// Output:- [0, 1, 5, 5, 12, 12, 17, 19, 20, 20, 23]

number1 .reverse((a, b) => a - b)
console.log(number1)
// Output:- [23, 20, 20, 19, 17, 12, 12, 5, 5, 1, 0]

let myColor1 = ["Red", "Green", "White", "Black"]
console.log(myColor1.sort())
// Output:- ['Black', 'Green', 'Red', 'White']

console.log(myColor1.reverse())
// Output:- ['White', 'Red', 'Green', 'Black']


// Question no. 8
console.log("Question no:- 8")
let word = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby']
let filterword = word.filter(words => words.length <= 8)
console.log(filterword)
// Output:- ['Python', 'Go', 'Java', 'PHP', 'Ruby']


// Question no. 9
console.log("Question no:- 9")
let x = "airplane"
console.log(x.slice(2, 3))
// Output:- r

let y = "oxoxoxox"
console.log(y.replace(/x/g, "X"))
// Output:- oXoXoXoX

let z = "A New Java Book"
console.log(z.toLowerCase())
// Output:- a new java book
console.log(z.toUpperCase())
// Output:- A NEW JAVA BOOK


// Question no. 10
console.log("Question no:- 10")
let array = [12, 34, 55, 100, 50]
console.log(array.reverse())
// Output:- [50, 100, 55, 34, 12]


// Question no. 11
console.log("Question no:- 11")
let found = [10, 55, 45, 19, 90, 13, 12, 88]
console.log(found.includes(13))
// Output:- true
console.log(found.includes(455))
// Output:- false


// Question no. 12
console.log("Question no:- 12")
let name = "Arth Koradiya"
console.log(name.length)
// Output:- 13


// Question no. 13
console.log("Question no:- 13")
let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning"
console.log(input.replace(/dog/g, "cat"))
// Output:- I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning


