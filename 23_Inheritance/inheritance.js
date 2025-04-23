// Inheritance:- child class access parent class and parent class not access child class
/*
    Types of Inheritance:- 1) single inheritance
                           2) multilevel inheritance
                           3) hierarchical inheritance
                           4) multiple inheritance
                           5) hybrid(virtual) inheritance
*/

// 1) single inheritance:-
class Parent {
    sayParent() {
        console.log("Parent class called");
    }
}
class Child extends Parent {
    sayChild() {
        console.log("Child class called");
    }
}

let obj = new Child;
obj.sayParent();
obj.sayParent();


// 2) multilevel inheritance:-
class AB {
    sayA() {
        console.log("AB class called");
    }
}
class BC extends AB {
    sayB() {
        console.log("B class called");
    }
}
class CD extends BC {
    sayC() {
        console.log("c class called");
    }
}

let a = new CD();
a.sayA();
a.sayB();
a.sayC();


// 3) hierarchical inheritance:-
class A {
    sayA() {
        console.log("A class called");
    }
}
class B extends A {
    sayB() {
        console.log("B class called");
    }
}
class C extends A {
    sayC() {
        console.log("C class called");
    }
}

let c = new C();
c.sayA();
c.sayC();