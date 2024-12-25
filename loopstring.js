//FOR Loop
//Print 1 to 5 
// for (let i = 1; i <= 5; i++){
//     console.log("i = ", i);
// }

//Print 5 times anything
// for (let count = 1; count <= 5; count++){
//     console.log("JavaScript Tutorial");
// }
// console.log("Loop has ended.");

//Calculate sum of 1 to 5
// let sum1 = 0;
// for (let i = 1; i <= 5; i++){
//     sum1 = sum1 + i;
// }
// console.log("sum1 = ", sum1);

//Calculate sum of 1 to n
// let sum = 0;
// let n = prompt("Enter a number : ");
// for (let i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log("sum = ", sum);

//WHILE Loop
//Print 1 to 5 
// let i = 1;
// while (i <= 5) {
//     console.log ("i = ", i);
//     i++;
// }                 //End of the loop don't use semicolon 

//DO-WHILE Loop
//Print 1 to 10
// let j = 1;
// do {
//     console.log ("j = ", j);
//     j++;
// } while (j <= 10);     //End of the loop use semicolon 

//FOR-OF Loop --> use for strings and arrays, not for object
/* Syntax  -->  for (let value of strVar) {
                // do some work
                } */
// let str = "JavaScript Tutorial";
// let size = 0;
// for (let i of str) {
//     console.log("i = ", i);     //iterator -> characters
//     size++;
// }                        
// console.log("string size = ", size)   //18 + space = 19

//FOR-IN Loop  --> use for objects
/* Syntax  -->  for (let key of objVar) {
                // do some work
                } */
// let student = {
//     name : "Baishalee Negi",
//     age : 30,
//     education : "M.Tech",
//     cgpa : 8.75,
// };
// for (let key in student){
//     console.log("key = ", key, "value = ", student[key]);
// }

//Example-1 (Print 0 to 100)
// for (let number = 0; number <=100; number++){
//     console.log ("number = ", number);
// }

//Example-2 (Print all even between 0 to 100)
// for (let number1 = 0; number1 <=100; number1++){
//     if (number1 % 2 == 0) {
//     console.log ("number1 = ", number1);
//    }
// }

//Example-3 (Print all odd between 0 to 100)
// for (let number2 = 0; number2 <=100; number2++){
//     if (number2 % 2 !== 0) {
//     console.log ("number2 = ", number2);
//    }
// }

/*Example-4 (Create a game where you start with ant random numer. Ask the user to keep 
guessing the game number until the user enters correct value)*/
// let gameNum = 25;
// let userNum = prompt("Guess the game number : ");
// while (userNum != gameNum){
//     userNum = prompt("You entered wrong number, Guess again : ");
// }
// console.log("Congratulations, you entered the right number!")

// A loop with a BREAK statement
// for (let i = 0; i < 10; i++) {
//     if (i === 3) { break; }
//     console.log("i = ", i);
//   }                           //when the loop counter (i) is 3,the break statement ends the loop.

//A loop with a CONTINUE statement
// for (let i = 0; i < 10; i++) {
//     if (i === 3) { continue; }
//     console.log("i = ", i);
//   }                             //The continue statement "jumps over" one iteration in the loop.

//STRINGS
// let str = "JavaScript";
// str = str.toUpperCase();
// console.log(str);
// console.log(str[0]);
// console.log (str.slice(1, 4));

//Template Literals
// let specialString = `This is a template literal`;
// console.log(specialString);
// console.log(typeof specialString);

//Example
// let obj = {
//     item: "Pen",
//     price: 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// console.log("the cost of", obj.item, "is", obj.price, "rupees");

/*Example --> Prompt the user to enter the username. Generate a username for them based on the input.
Start username @, followed by their fullname and ending with the fullname length*/
// let fullName = prompt("Enter fullname without ant space : ");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);