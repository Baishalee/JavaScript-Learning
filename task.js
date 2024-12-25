// FizzBuzz program in JavaScript
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// Function to calculate the factorial of a given positive number
// function factorial(n) {
//     if (n < 0) {
//         throw new Error("Factorial is not defined for negative numbers.");
//     }
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(5)); // 120

// Function to find all duplicate elements in an array
// function findDuplicates(arr) {
//     let seen = new Set();
//     let duplicates = new Set();

//     for (let item of arr) {
//         if (seen.has(item)) {
//             duplicates.add(item);
//         } else {
//             seen.add(item);
//         }
//     }

//     return Array.from(duplicates);
// }

// console.log(findDuplicates([1, 2, 3, 4, 5, 3, 2, 6, 7, 2])); // [2, 3]