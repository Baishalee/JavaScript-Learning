// //Closure  -->
// //Basic Closure Example:
// function outer() {
//     let message = "Hello, Closure!";

//     function inner() {
//         console.log(message);    //Accesses 'message' from the outer function
//     }

//     return inner;
// }

// const closureFunction = outer();   //outer() has executed
// closureFunction();                //Output: Hello, Closure!

// //Using Closures to Create Private Variables:
// function createCounter() {
//     let count = 5;   // Private variable

//     return {
//         increment: () => {
//             count++;
//             return count;
//         },
//         decrement: () => {
//             count--;
//             return count;
//         },
//         getCount: () => count,
//     };
// }

// const counter = createCounter();
// console.log(counter.increment()); // Output: 6
// console.log(counter.increment()); // Output: 7
// console.log(counter.increment()); // Output: 8
// console.log(counter.decrement()); // Output: 7
// console.log(counter.decrement()); // Output: 6
// console.log(counter.decrement()); // Output: 5
// console.log(counter.getCount());  // Output: 1

// //Closures in Event Listeners:
// function attachListener() {
//     let count = 0;

//     document.getElementById("myButton").addEventListener("click", () => {
//         count++;
//         console.log(`Button clicked ${count} times`);
//     });
// }

// attachListener();

// //Closures for Function Factories:
// function multiplier(factor) {
//     return (number) => number * factor;
// }

// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(5)); // Output: 10
// console.log(triple(5)); // Output: 15

// //Maintaining State in Async Operations:
// function createTimers() {
//     for (let i = 1; i <= 3; i++) {
//         setTimeout(() => {
//             console.log(`Timer ${i}`);
//         }, i * 1000);
//     }
// }

// createTimers();
// // Output:
// // Timer 1 (after 1 second)
// // Timer 2 (after 2 seconds)
// // Timer 3 (after 3 seconds)

