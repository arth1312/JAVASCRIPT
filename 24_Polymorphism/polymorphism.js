// Polymorphism:- 
/*
    -> Poly:- many
    -> morphism:- convert into one form to another form
*/

/*
    Types:- 1. method overriding
            2. method overloading
*/

// 1. method overriding

class Animal {
    barking() {
        console.log("Barking method");
    }
}
class Dog extends Animal{
    barking() {
        super.barking();
        console.log("dog is barking");
    }
}
class Cat extends Animal {
    barking() {
        console.log("cat is barking");
    }
}

let d = new Dog();
d.barking();