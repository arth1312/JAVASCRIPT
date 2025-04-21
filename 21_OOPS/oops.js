// OOPS:- object orianted programming language

// class:-blueprint of a object is class (state:- variable, behavior:- method)
// object:- instant of a class is object
// this:- instant of the object

class Test {
    name = "Arth Koradiya";
    age = 20;

    display(a) {
        return("Display function called " + a + " " + this. age);
    }
}

let obj = new Test();
console.log(obj);
console.log(obj.age);
console.log(obj.name);
console.log(obj.display);
console.log(obj.display());
console.log(obj.display(1312))