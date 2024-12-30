// //Objects -->
// //Example :-
// const student = {
//     fullName: "BAISHALEE NEGI",
//     education: "M.Tech",
//     cgpa: 8.75,
//     printMark: function () {
//         console.log("cgpa = ", this.cgpa);
//     },
// };         //student.cgpa = 8.75

// //Example :-
// const employee = {
//     calcTax1() {
//         console.log("tax rate is 10%");
//     },
//     calcTax2: function () {
//         console.log("tax rate is 10%");
//     },
// };         //employee.calcTax = tax rate is 10%

// //Example :-
// const emp1 = {
//     salary: 5000,
// };

// const emp2 = {
//     salary: 5000,
// };

// const emp3 = {
//     salary: 5000,
//     calcTax1() {
//         console.log("tax rate is 15%");
//     }
// };

// emp1.__proto__ = employee;

// //Class -->
// //Example :-
// class ToyotaCar {
//     constructor(brand, milage) {
//         console.log("create new brand");
//         this.brand = brand;
//         this.milage = milage;
//     }

//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

//     // setBrand(brand) {
//     //     this.brandName = brand;
//     // }
// };

// let Nexus = new ToyotaCar("Nexus", 20);
// console.log("Nexus");
// let Kia = new ToyotaCar("Kia", 15);

// let Fortuner = new ToyotaCar("Fortuner", 10);

// //Inheritance -->
// //Example :-
// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent { }
// let obj = new Child();

// //Example :-
// class Person {
//     constructor() {
//         this.catagory = "human beings"
//     }

//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }
// }

// class Doctor extends Person {
//     work() {
//         console.log("cure people");
//     }
// }

// class Engineer extends Person {
//     work() {
//         console.log("create new things");
//     }
// }

// let xyz = new Doctor();
// let abc = new Engineer();

// //Super Keyword -->
// //Example :-
// class Student {
//     constructor() {
//         console.log("enter parent constructor");
//         this.catagory = "human beings"
//     }

//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }
// }

// class Education extends Student {
//     constructor(branch) {
//         console.log("enter child constructor");
//         super();    //invoke parent class constructor
//         this.branch = branch;
//         console.log("exit child constructor");

//     }
//     work() {
//         console.log("study");
//     }
// }

// let pqr = new Education("Botany");

// /*you are creating a website for your college. create a class User with 2 properties, name 
// & email. It also has a method called viewData() that allows user to view website data*/
// let DATA = "secret information";

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("data = ", DATA);
//     }
// }
// let student1 = new User("ABC", "abc@gmail.com");
// let student2 = new User("XYZ", "xyz@gmail.com");
// let teacher = new User("PQR", "pqr@gmail.com");

// /*create a new class called Admin which inherits from Users. Add a new medthod called editData
// to Admin that allows it to edit website data.*/
// let INFO = "secret information";

// class Users {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewInfo() {
//         console.log("info = ", INFO);
//     }
// }
// class Admin extends Users {
//     constructor(name, email) {
//         super(name, email);
//     }
//     editInfo() {
//         INFO = "some new value";
//     }
// }
// let Admin1 = new Admin("Admin", "admin@gmail.com");

//Error Handling -->
//Example :-
let a = 10;
let b = 1;
console.log("a = ", a);
console.log("a = ", a);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);

try{
console.log("a * b = ", a * c);     //error handling
}catch(err){
    console.log(err);
};

console.log("a / b = ", a / b);

