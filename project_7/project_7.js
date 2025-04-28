// Question no. 1
// console.log("Question no:- 1");
class School {
    student(name, email, contactNo) {
        console.log("Name:-", name);
        console.log("Email:-", email);
        console.log("Contact No:-", contactNo);
    }

    faculty(name, email, contactNo) {
        console.log("Name:-", name);
        console.log("Email:-", email);
        console.log("Contact No:-", contactNo);
    }
}
console.log("student details:-");
let obj = new School();
obj.student("Virat", "virat018@gmail.com", 9856482164);
obj.student("Niraj", "niraj124@gmail.com", 8562482154);

console.log(" ");
console.log("faculty details:-");
let obj1 = new School();
obj1.faculty("Mr.Mohit", "mohit3456@gmail.com", 7658942310);
obj1.faculty("Mr.Krish", "krish893@gmail.com", 9562462101);

/*
    Output:- Question no:- 1
             student details:-
             Name:- Virat
             Email:- virat018@gmail.com
             Contact No:- 9856482164
             
             faculty details:-
             Name:- Mr.Mohit
             Email:- mohit3456@gmail.com
             Contact No:- 7658942310
             Name:- Mr.Krish
             Email:- krish893@gmail.com
             Contact No:- 9562462101
*/


// Question no. 2
console.log("Question no:- 2");
class person {
    constructor (name , age){
        this.name = name;
        this.age = age;
    }
}
class employee extends person{
    employeedata(){
        console.log("Employee name", this.name, "and his age is", this.age);
    }
}
let emp = new employee("Arth", 20);
emp.employeedata();
/*
    Output:- Question no:- 2
             Employee name Arth and his age is 20
*/


// Question no. 3
console.log("Question no:- 3");
class Employee {
    constructor() {
        console.log("constructor called");
    }
}
let Emp = new Employee();
/*
    Output:- Question no:- 3
             constructor called
*/


// Question no. 4
console.log("Question no:- 4");
class Shape {
    circleArea(r) {
        console.log("Area of circle is:-", 3.14 * r * r);
    }
    rectangleArea(w, h) {
        console.log("Area of rectangle is:-", w * h)
    }
}
let shap  = new Shape();
shap.circleArea(19);
shap.rectangleArea(10, 20);
/*
    Output:- Question no:- 4
             Area of circle is:- 1133.54
             Area of rectangle is:- 200
*/