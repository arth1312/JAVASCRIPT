// constructor:- special method of class
//  when object is creating then automatically called constructor

class Test {
    constructor() {
        console.log("constructor is called..");
    }

    sayHello() {
        console.log("Say Hello is called..");
    }
}

let obj = new Test();

/*
    Types of constructor:- 1) Default
                           2) Parameterized
                           3) Copy
*/

// 1) Default

class Test1 {
    constructor() {
        console.log("Default constructor is called..");
    }

    sayHello() {
        console.log("Say Hello is called..");
    }
}

let obj1 = new Test1();


// 2) Parameterized

class Test2 {
    constructor(name, age) {
        console.log("Parameterized constructor is called..", name, age);
    }

    sayHello() {
        console.log("Say Hello is called..");
    }
}

let obj2 = new Test2("Rohit", 35);


class Test3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("Parameterized constructor is called..", this.name, this.age);
    }

    sayHello() {
        console.log("Say Hello is called..");
    }
}

let obj3 = new Test3("Virat", 32);