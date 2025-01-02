// //let   -->    block scope variable(Cannot be re-declared in the same scope but can be updated)
// for (let i = 0; i < 3; i++) {
//     console.log("Inside loop: i = ", i);
//   }
// // console.log(`Outside loop: i = ${i}`);   // Error: i is not defined
// /*Inside loop: i = 0
// Inside loop: i = 1
// Inside loop: i = 2*/

// /*let   -->    block scope variable(Cannot be re-declared in the same scope 
// and must be initialized at the time of declaration)*/
// const PI = 3.14159;
// console.log(PI); // Output: 3.14159

// const arr = [1, 2, 3];
// arr.push(4); // Allowed (mutating the array)
// console.log(arr); // Output: [1, 2, 3, 4]

// //Arrow function   -->
// // Regular function
// function add(a, b) {
//     return a + b;
//   }
  
// // Arrow function
//   const addArrow = (a, b) => a + b;
  
//   console.log(add(5, 3));       // Output: 8
//   console.log(addArrow(5, 3));  // Output: 8
  
// // Arrow function without parameters
//   const greet = () => 'Hello, World!';
//   console.log(greet()); // Output: Hello, World!
  
// //Destructuring    -->
// //Array Destructuring:
// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;

// console.log(a); // Output: 1
// console.log(b); // Output: 2
// console.log(c); // Output: 3

// // Skipping elements
// const [first, , third] = numbers;
// console.log(third); // Output: 3

// //Object Destructuring   -->
// const person = { name: 'XYZ', age: 25 };
// const { name, age } = person;

// console.log(name); // Output: XYZ
// console.log(age);  // Output: 25

// // Renaming variables
// const { name: fullName } = person;
// console.log(fullName); // Output: XYZ

// //Template literals    -->
// const name1 = 'ABC';
// const age1 = 25;

// const message = `Hello, my name is ${name1}, and I am ${age1} years old.`;
// console.log(message);    // Output: Hello, my name is ABC, and I am 25 years old.

// // Multi-line strings
// const multiLine = `This is
// a multi-line
// string.`;
// console.log(multiLine);
// /*
// Output:
// This is
// a multi-line
// string.
// */
