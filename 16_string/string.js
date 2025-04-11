// String:- like array

// let str = "Arth";
// console.log(str);
// console.log(str.length);



let data = "     JavaScript Language     ";

// String Method:-

// 1. slice:- remove some part
console.log(data.slice(2, 10));

// 2. toUpperCase:- convert to UPPERCASE
console.log(data.toUpperCase());

// 3. toLowerCase:- convert to lowercase
console.log(data.toLowerCase());

// 4. trim:- remove extra space from start and and
console.log(data.trim());
console.log(data.trimStart());
console.log(data.trimEnd());

// 5. replace:- repace to character/ word
console.log(data.replace('a', 'A'));
console.log(data.replaceAll('a', 'A'));

// 6. padStart, padEnd
data = "Arth Koradiya";
console.log(data.padStart(5, "*"));
console.log(data.padEnd(5, "*"));