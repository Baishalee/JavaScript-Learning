// ARRAYS in JavaScript
// let marks = [75, 80, 85, 90, 95, 100];
// console.log(marks);
// let names = ["ABC", "IJK", "XYZ", "PQR", "LMN"];
// console.log(names);

//using FOR-Loop
// let fullNames = ["ABC", "IJK", "XYZ", "PQR", "LMN"];
// for (let i = 0; i<fullNames.length; i++) {
//     console.log(fullNames[i]);
// }

//using FOR-OF-Loop
// for (let students of fullNames) {
//     console.log(students);
// }

/* Example --> For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class */
// let scores = [85, 97, 44, 37, 76, 60];
// sum = 0;
// for (let value of scores) {
//     sum += value; 
// }
// console.log("sum = ", sum);
// let avg = sum / scores.length;
// console.log(`average marks of the class = ${avg}`);

/* Example --> For a given array with price of items -> [185, 197, 144, 137, 176, 160]. All items have 
an offer of 10% OFF on them. Change the arrary to store final price after applying final offer*/
// let items = [185, 197, 144, 137, 176, 160];
// for (let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);

// Array Methodes (PUSH) --> add element in  the end
// let foodItems = ["Biscuits", "Mixture", "Chips", "Cake"];
// foodItems.push("Pizza", "Burger");
// console.log(foodItems);

// Array Methodes (POP) --> delete element in the end
// let veggies = ["Potato", "Tamato", "Chilli", "Carrot"];
// console.log(veggies);
// let deletedItem = veggies.pop();
// console.log(veggies);
// console.log("deleted item = ", deletedItem);

// Array Methodes (toString)
// let markScore = [55, 80, 75, 60, 45];
// console.log(markScore);
// console.log(markScore.toString());

// Array Methodes (CONCAT, UNSHIFT, SHIFT, SLICE, SPLICE)
// let marvelHeroes = ["ironman", "thor", "spiderman"];
// let dcHeroes = ["batman", "superman"];
// let heroes = marvelHeroes.concat(dcHeroes);  //CONCAT
// console.log(heroes);

// marvelHeroes.unshift("antman");  //UNSHIFT --> add elements in the start
// console.log(marvelHeroes);

// let newValue = marvelHeroes.shift();   //SHIFT --> delete elements in the start
// console.log("deleted hero = ", newValue);
// console.log(marvelHeroes);

// console.log(marvelHeroes.slice(1, 2));  //SLICE

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 101, 102);

//add element
// arr.splice(2, 0, 101);

//delete element
// arr.splice(3,1);

//replace element
// arr.splice(3, 1, 101)

/*Create an array to store a companies -> "Netflix", "Microsoft", "IBM", "Uber", "Google", "Bloomberg"
a. Remove the first company from the array
b. Remove Uber and add Ola in its place
c. Add Amazon at the end*/
// let companies = ["Netflix", "Microsoft", "IBM", "Uber", "Google", "Bloomberg"];
// console.log(companies);
// console.log(companies.shift());
// console.log(companies);
// companies.splice(2, 1, "Ola");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);