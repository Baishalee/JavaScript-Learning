// Arithmetic Operators
// let a = 4;
// let b = 1;

// console.log("a = ", a, "& b = ", b);
// console.log("a + b = ", a + b);      //Addition
// console.log("a - b = ", a - b);      //Subtraction
// console.log("a * b = ", a * b);      //Multiplication
// console.log("a / b = ", a / b);      //Division
// console.log("a % b = ", a % b);      //Modulus (give the remider value)
// console.log("a ** b = ", a ** b);    //Exponential (a^b)

//Unray Operators
// let x = 5;

// console.log("x = ", x);
// console.log("x++ = ", x++);           //Post-increment
// console.log("x = ", x);

// console.log("++x = ", ++x);           //Pre-increment
// console.log("x = ", x);

// console.log("x-- = ", x--);           //Post-decrement
// console.log("x = ", x);

// console.log("--x = ", --x);           //Pre-decrement
// console.log("x = ", x);

//Asignment Operators
// let y = 5;

// y += 1;                               //y = y + 1
// console.log("y = ", y)                //y = 6

// y -= 1;                               //y = y - 1
// console.log("y = ", y)                //y = 4

// y *= 1;                               //y = y * 1
// console.log("y = ", y)                //y = 5

// y /= 1;                               //y = y / 1
// console.log("y = ", y)                //y = 5

// y %= 1;                               //y = y % 1
// console.log("y = ", y)                //y = 0

// y **= 1;                             //y = y ** 1
// console.log("y = ", y)               //y = 5

//Comparison Operators
// let p = 5;
// let q = 4;

// console.log("5 == 4", p == q);           //False
// console.log("5 != 4", p != q);           //True

// let r = 5;
// let s = 5;

// console.log("5 == 5", r == s);           //True
// console.log("5 != 5", r != s);           //False

// let c = 5;
// let d = "5";

// console.log("5 == 5", c == d);           //True
// console.log("5 === 5", c === d);         //False

// let e = 5;
// let f = "5";

// console.log("5 != 5", e != f);           //False
// console.log("5 !== 5", e !== f);         //True

// let g = 5;
// let h = 4;

// console.log("5 < 4", g < h);              //False
// console.log("5 > 4", g > h);              //True

// let i = 5;
// let j = 5;

// console.log("5 <= 5", i <= j);              //True
// console.log("5 >= 5", i >= j);              //True

// let k = 5;
// let l = 4;

// console.log("5 <= 4", k < l);              //False
// console.log("5 >= 4", k > l);              //True
// console.log("4 <= 5", l <= k);             //True
// console.log("4 >= 5", l >= k);             //False

//Logical Operators
//Logical AND Operator (&&)
// let m = 5;
// let n = 4;

// cond1 = m > n; //True
// cond2 = m == 5; //True
// console.log("cond1 && cond2 = ", cond1 && cond2); //True

// cond1 = m < n; //False
// cond2 = m == 5; //True
// console.log("cond1 && cond2 = ", cond1 && cond2); //False

// cond1 = m > n; //True
// cond2 = n == 5; //False
// console.log("cond1 && cond2 = ", cond1 && cond2); //False

// cond1 = m < n; //False
// cond2 = m == 4; //False
// console.log("cond1 && cond2 = ", cond1 && cond2); //False

//Logical OR Operator (||)
// let t = 5;
// let u = 4;

// cond1 = t > u; //True
// cond2 = t == 5; //True
// console.log("cond1 || cond2 = ", cond1 || cond2); //True

// cond1 = t < u; //False
// cond2 = t == 5; //True
// console.log("cond1 || cond2 = ", cond1 || cond2); //True

// cond1 = t > u; //True
// cond2 = u == 5; //False
// console.log("cond1 || cond2 = ", cond1 || cond2); //True

// cond1 = t < u; //False
// cond2 = t == 4; //False
// console.log("cond1 || cond2 = ", cond1 || cond2); //False

//Logical NOT Operator (!)
// let v = 5;
// let w = 4;

// cond1 = v > w; //True
// cond2 = w == 5; //False
// console.log("! cond1 = ", ! cond1); //False
// console.log("! cond2 = ", ! cond2); //True

//Conditional Statement
//IF Statement
// Example-1
// let mark1 = 50;
// if (mark1 >= 30){
//     console.log("Result1 : ", "Pass")
// }
// if (mark1 < 30){
//     console.log("Result1 : ", "Fail")
// }                                       //Pass

// let mark2 = 20;
// if (mark2 >= 30){
//     console.log("Result2 : ", "Pass")
// }
// if (mark2 < 30){
//     console.log("Result2 : ", "Fail")
// }                                       //Fail

// Example-2
// let age1 = 50;
// if (age1 >= 18){
//     console.log("You can VOTE")
// }
// if (age1 < 18){
//     console.log("You can't VOTE")
// }                                       //Vote

// let age2 = 15;
// if (age2 >= 18){
//     console.log("You can VOTE")
// }
// if (age2 < 18){
//     console.log("You can't VOTE")
// }                                       //Can't Vote

// Example-3
// let mode1 = "DARK";
// let color1;
// if (mode1 === "DARK"){
//     color1 = "Black";
// }
// if (mode1 === "LIGHT"){
//     color1 = "White";
// }                                  
// console.log(color1)     //Black

// let mode2 = "LIGHT";
// let color2;
// if (mode2 === "DARK"){
//     color2 = "Black";
// }
// if (mode2 === "LIGHT"){
//     color2 = "White";
// }                                  
// console.log(color2)     //White

//IF-ELSE Statement
// Example-1
// let passMark1 = 50;
// if (passMark1 >= 30){
//     console.log("Result1 : ", "Pass")
// }
// else{
//     console.log("Result1 : ", "Fail")
// }                                       //Pass

// let passMark2 = 20;
// if (passMark2 >= 30){
//     console.log("Result2 : ", "Pass")
// }
// else{
//     console.log("Result2 : ", "Fail")
// }                                       //Fail

// Example-2
// let voterAge1 = 50;
// if (voterAge1 >= 18){
//     console.log("You can VOTE")
// }
// else{
//     console.log("You can't VOTE")
// }                                       //Vote

// let voterAge2 = 15;
// if (voterAge2 >= 18){
//     console.log("You can VOTE")
// }
// else{
//     console.log("You can't VOTE")
// }                                       //Can't Vote

// Example-3
// let themeMode1 = "DARK";
// let themeColor1;
// if (themeMode1 === "DARK"){
//     themeColor1 = "Black";
// }
// else{
//     themeColor1 = "White";
// }                                  
// console.log(themeColor1)     //Black

// let themeMode2 = "LIGHT";
// let themeColor2;
// if (themeMode2 === "DARK"){
//     themeColor2 = "Black";
// }
// else{
//     themeColor2 = "White";
// }                                  
// console.log(themeColor2)     //White

//Example-4 (To check ODD or EVEN)
// let num1 = 10;
// if (num1 % 2 === 0){
//     console.log(num1, "is EVEN")
// }
// else{
//     console.log(num1, "is ODD")
// }                                  //Even

// let num2 = 5;
// if (num2 % 2 === 0){
//     console.log(num2, "is EVEN")
// }
// else{
//     console.log(num2, "is ODD")
// }                                  //Odd

//IF-ELSE-IF Statement
//Example-1
// let cgpa = 10;
// let remark;

// if (cgpa >= 9){
//     remark = "OUTSTANDING";
// }
// else if (cgpa >= 8){
//     remark = "EXCELLENT";
// }
// else if (cgpa >= 7){
//     remark = "VERYGOOD";
// }
// else{
//     remark = "GOOD";
// }
// console.log("Remark : ", remark);

//Example - 2
// let ageGroup = 0.6;
// let group;

// if (ageGroup <= 1){
//     group = "NEWBORN";
// }
// else if (ageGroup >= 1){
//     group = "BABY";
// }
// else if (ageGroup >= 2){
//     group = "TOODLERS";
// }
// else{
//     group = "KID";
// }
// console.log("Group : ", group);

//Example - 2
// let websiteTheme  = "Default";
// let websiteColor;

// if (websiteTheme === "Dark"){
//     websiteColor = "BLACK";
// }
// else if (websiteTheme === "Light"){
//     websiteColor = "WHITE";
// }
// else{
//     websiteColor = "BLUE";
// }
// console.log("Website color : ", websiteColor);

//Ternary Operators
//Example-1
// let totalMark = 60;
// let finalResult = (totalMark >= 30) ? "PASS" : "FAIL";
// console.log(finalResult);

//Example-2
// let myAge = 30;
// let display = (myAge >= 18) ? "VOTE" : "CAN NOT VOTE";
// console.log(display);// Arithmetic Operators
// let a = 4;
// let b = 1;

// console.log("a = ", a, "& b = ", b);
// console.log("a + b = ", a + b);      //Addition
// console.log("a - b = ", a - b);      //Subtraction
// console.log("a * b = ", a * b);      //Multiplication
// console.log("a / b = ", a / b);      //Division
// console.log("a % b = ", a % b);      //Modulus (give the remider value)
// console.log("a ** b = ", a ** b);    //Exponential (a^b)

//Unray Operators
// let x = 5;

// console.log("x = ", x);
// console.log("x++ = ", x++);           //Post-increment
// console.log("x = ", x);

// console.log("++x = ", ++x);           //Pre-increment
// console.log("x = ", x);

// console.log("x-- = ", x--);           //Post-decrement
// console.log("x = ", x);

// console.log("--x = ", --x);           //Pre-decrement
// console.log("x = ", x);

//Asignment Operators
// let y = 5;

// y += 1;                               //y = y + 1
// console.log("y = ", y)                //y = 6

// y -= 1;                               //y = y - 1
// console.log("y = ", y)                //y = 4

// y *= 1;                               //y = y * 1
// console.log("y = ", y)                //y = 5

// y /= 1;                               //y = y / 1
// console.log("y = ", y)                //y = 5

// y %= 1;                               //y = y % 1
// console.log("y = ", y)                //y = 0

// y **= 1;                             //y = y ** 1
// console.log("y = ", y)               //y = 5

//Comparison Operators
// let p = 5;
// let q = 4;

// console.log("5 == 4", p == q);           //False
// console.log("5 != 4", p != q);           //True

// let r = 5;
// let s = 5;

// console.log("5 == 5", r == s);           //True
// console.log("5 != 5", r != s);           //False

// let c = 5;
// let d = "5";

// console.log("5 == 5", c == d);           //True
// console.log("5 === 5", c === d);         //False

// let e = 5;
// let f = "5";

// console.log("5 != 5", e != f);           //False
// console.log("5 !== 5", e !== f);         //True

// let g = 5;
// let h = 4;

// console.log("5 < 4", g < h);              //False
// console.log("5 > 4", g > h);              //True

// let i = 5;
// let j = 5;

// console.log("5 <= 5", i <= j);              //True
// console.log("5 >= 5", i >= j);              //True

// let k = 5;
// let l = 4;

// console.log("5 <= 4", k < l);              //False
// console.log("5 >= 4", k > l);              //True
// console.log("4 <= 5", l <= k);             //True
// console.log("4 >= 5", l >= k);             //False

//Logical Operators
//Logical AND Operator (&&)
// let m = 5;
// let n = 4;

// cond1 = m > n; //True
// cond2 = m == 5; //True
// console.log("cond1 && cond2 = ", cond1 && cond2); //True

// cond1 = m < n; //False
// cond2 = m == 5; //True
// console.log("cond1 && cond2 = ", cond1 && cond2); //False

// cond1 = m > n; //True
// cond2 = n == 5; //False
// console.log("cond1 && cond2 = ", cond1 && cond2); //False

// cond1 = m < n; //False
// cond2 = m == 4; //False
// console.log("cond1 && cond2 = ", cond1 && cond2); //False

//Logical OR Operator (||)
// let t = 5;
// let u = 4;

// cond1 = t > u; //True
// cond2 = t == 5; //True
// console.log("cond1 || cond2 = ", cond1 || cond2); //True

// cond1 = t < u; //False
// cond2 = t == 5; //True
// console.log("cond1 || cond2 = ", cond1 || cond2); //True

// cond1 = t > u; //True
// cond2 = u == 5; //False
// console.log("cond1 || cond2 = ", cond1 || cond2); //True

// cond1 = t < u; //False
// cond2 = t == 4; //False
// console.log("cond1 || cond2 = ", cond1 || cond2); //False

//Logical NOT Operator (!)
// let v = 5;
// let w = 4;

// cond1 = v > w; //True
// cond2 = w == 5; //False
// console.log("! cond1 = ", ! cond1); //False
// console.log("! cond2 = ", ! cond2); //True

//Conditional Statement
//IF Statement
// Example-1
// let mark1 = 50;
// if (mark1 >= 30){
//     console.log("Result1 : ", "Pass")
// }
// if (mark1 < 30){
//     console.log("Result1 : ", "Fail")
// }                                       //Pass

// let mark2 = 20;
// if (mark2 >= 30){
//     console.log("Result2 : ", "Pass")
// }
// if (mark2 < 30){
//     console.log("Result2 : ", "Fail")
// }                                       //Fail

// Example-2
// let age1 = 50;
// if (age1 >= 18){
//     console.log("You can VOTE")
// }
// if (age1 < 18){
//     console.log("You can't VOTE")
// }                                       //Vote

// let age2 = 15;
// if (age2 >= 18){
//     console.log("You can VOTE")
// }
// if (age2 < 18){
//     console.log("You can't VOTE")
// }                                       //Can't Vote

// Example-3
// let mode1 = "DARK";
// let color1;
// if (mode1 === "DARK"){
//     color1 = "Black";
// }
// if (mode1 === "LIGHT"){
//     color1 = "White";
// }                                  
// console.log(color1)     //Black

// let mode2 = "LIGHT";
// let color2;
// if (mode2 === "DARK"){
//     color2 = "Black";
// }
// if (mode2 === "LIGHT"){
//     color2 = "White";
// }                                  
// console.log(color2)     //White

//IF-ELSE Statement
// Example-1
// let passMark1 = 50;
// if (passMark1 >= 30){
//     console.log("Result1 : ", "Pass")
// }
// else{
//     console.log("Result1 : ", "Fail")
// }                                       //Pass

// let passMark2 = 20;
// if (passMark2 >= 30){
//     console.log("Result2 : ", "Pass")
// }
// else{
//     console.log("Result2 : ", "Fail")
// }                                       //Fail

// Example-2
// let voterAge1 = 50;
// if (voterAge1 >= 18){
//     console.log("You can VOTE")
// }
// else{
//     console.log("You can't VOTE")
// }                                       //Vote

// let voterAge2 = 15;
// if (voterAge2 >= 18){
//     console.log("You can VOTE")
// }
// else{
//     console.log("You can't VOTE")
// }                                       //Can't Vote

// Example-3
// let themeMode1 = "DARK";
// let themeColor1;
// if (themeMode1 === "DARK"){
//     themeColor1 = "Black";
// }
// else{
//     themeColor1 = "White";
// }                                  
// console.log(themeColor1)     //Black

// let themeMode2 = "LIGHT";
// let themeColor2;
// if (themeMode2 === "DARK"){
//     themeColor2 = "Black";
// }
// else{
//     themeColor2 = "White";
// }                                  
// console.log(themeColor2)     //White

//Example-4 (To check ODD or EVEN)
// let num1 = 10;
// if (num1 % 2 === 0){
//     console.log(num1, "is EVEN")
// }
// else{
//     console.log(num1, "is ODD")
// }                                  //Even

// let num2 = 5;
// if (num2 % 2 === 0){
//     console.log(num2, "is EVEN")
// }
// else{
//     console.log(num2, "is ODD")
// }                                  //Odd

//IF-ELSE-IF Statement
//Example-1
// let cgpa = 10;
// let remark;

// if (cgpa >= 9){
//     remark = "OUTSTANDING";
// }
// else if (cgpa >= 8){
//     remark = "EXCELLENT";
// }
// else if (cgpa >= 7){
//     remark = "VERYGOOD";
// }
// else{
//     remark = "GOOD";
// }
// console.log("Remark : ", remark);

//Example - 2
// let ageGroup = 0.6;
// let group;

// if (ageGroup <= 1){
//     group = "NEWBORN";
// }
// else if (ageGroup >= 1){
//     group = "BABY";
// }
// else if (ageGroup >= 2){
//     group = "TOODLERS";
// }
// else{
//     group = "KID";
// }
// console.log("Group : ", group);

//Example - 2
// let websiteTheme  = "Default";
// let websiteColor;

// if (websiteTheme === "Dark"){
//     websiteColor = "BLACK";
// }
// else if (websiteTheme === "Light"){
//     websiteColor = "WHITE";
// }
// else{
//     websiteColor = "BLUE";
// }
// console.log("Website color : ", websiteColor);

//Ternary Operators
//Example-1
// let totalMark = 60;
// let finalResult = (totalMark >= 30) ? "PASS" : "FAIL";
// console.log(finalResult);

//Example-2
// let myAge = 30;
// let display = (myAge >= 18) ? "VOTE" : "CAN NOT VOTE";
// console.log(display);

//Example-3
// let number1 = 10;
// let numberType1 = (number1 % 2 === 0) ? "is EVEN" : "is ODD";
// console.log(number1, numberType1);

// let number2 = 5;
// let numberType2 = (number2 % 2 === 0) ? "is EVEN" : "is ODD";
// console.log(number2, numberType2);

//Example-4
// let numberIs = prompt("Enter a number : ");
// let numberType = (numberIs % 2 === 0) ? "is EVEN" : "is ODD";
// console.log(numberIs, numberType);

//Switch Operator
// let devices = prompt("What he/she want : ");
// switch (devices) {
//     case "Fan" :
//         console.log ("Turn on the Fan");
//         break;
//     case "TV" :
//         console.log ("Turn on the TV");
//         break;
//     case "Tubelight" :
//         console.log ("Turn on the Tubelight");
//         break;
//     case "AC" :
//         console.log ("Turn on the AC");
//         break;
//     default :
//      console.log ("No Action Needed")
//       break;
// }
// console.log("Anything else..!?");