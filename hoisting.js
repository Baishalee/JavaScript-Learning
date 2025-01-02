// //Hoisting  -->
// //Hoisting with var:
// console.log(a); // Output: undefined
// var a = 10;
// console.log(a); // Output: 10

// /*The var a declaration is hoisted to the top, but its initialization (a = 10) remains in place*/

// //Hoisting with let and const:
// //console.log(b); // Error: Cannot access 'b' before initialization
// let b = 20;
// console.log(b); // Output: 20

// //console.log(PI);   // Error: Cannot access 'PI' before initialization
// const PI = 3.14159;
// console.log(PI); // Output: 3.14159

// //Hoisting with Functions:
// //Function Declaration -->
// greet();   // Output: Hello!

// function greet() {
//     console.log("Hello!");
// }

// /*The entire function declaration is hoisted, so it can be called before it is defined*/

// //Function Expression -->
// // greet();   // Error: greet is not a function
// var greet = function () {
//     console.log("Hello!");
// };
// greet(); // Output: Hello!

// /*Only the var greet declaration is hoisted, not the function expression. Initially, greet is undefined.*/

// //Combining Scope and Hoisting:
// //Example:
// function example() {
//     console.log(x); // Output: undefined (due to hoisting of `var x`)
//     var x = 10;
//     console.log("x = ", x);

//     if (true) {
//         let y = 20;
//         console.log("y = ", y); // Output: 20
//     }
//     // console.log(y); // Error: y is not defined (block-scoped `let`)
// }

// example();
