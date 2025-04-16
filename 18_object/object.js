// Object:- Everthing is object
// define:- key: value(string, number, boolen, null, undefined, function)

// let data = new Object()

// let data = {}
// console.log(data);
// console.log(typeof data);

let data = {
    name: "Arth Koradiya",
    age: 25,
    email: 'abc@test.in',
    indian: true,
    sayHello: function ()
              {
                console.log("Hello All");
              }
}
console.log(data);


// Access two method:-

// 1. Dot(.) method:-
console.log(data.name); 
console.log(data.age);
console.log(data.email);
console.log(data.indian);
data.sayHello()

// ['key'] method:-
console.log(data['name']);
console.log(data['age']);
console.log(data['email']);
console.log(data['indian']);

data.name = "Rohit Sharma";
data['hello'] = 100;
console.log(data);

delete data.age;
console.log(data);

// Main method:-

// 1. hasOwnProperty
console.log(data.hasOwnProperty('name'));

// 2. key
console.log(Object.keys(data));

// 3. values
console.log(Object.values(data));