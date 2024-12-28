// //DOM manipulation --> selecting with ID
// let heading = document.getElementById("heading"); //h1
// console.log(heading);
// console.dir(heading);

// let button = document.getElementById("button"); //button
// console.log(button);
// console.dir(button);

// //DOM manipulation --> selecting with CLASS-NAME
// let headings = document.getElementsByClassName("headings"); //h2, h3, h4
// console.log(headings);
// console.dir(headings);

// //DOM manipulation --> selecting with TagName
// let para = document.getElementsByTagName("p");  //paragraph
// console.log(para);
// console.dir(para);

// //DOM manipulation --> selecting with querySelector
// let firstEl = document.querySelector("#heading");   //first element
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".headings");   //all element
// console.dir(allEl);
 
/*Create a H2 heading element with text-"Hello JavaScript". Append "from JavaScript Tutorial" 
to this text using JS*/
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from JavaScript Tutorial";

/*Create 3 divs with common class name - "box". Access them and add unique text to each of them*/
// let divs = document.querySelectorAll(".box");   
// console.dir(divs);
// console.log(divs[0]);

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

// let i = 1;
// for(div of divs) {
//     div.innerText = `new unique value ${i}`;
//     i++;
// }

/*create a new button element. give it a text "click me!" backgroud-color: red, color: white.
insert the button as the first element inside the body tag*/
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";
// document.querySelector("body").prepend(newBtn);

/*create a <p> tag in html, give it a class and some styling. now create a new class in css and
try to append this class to the <p> element. did you notice, how you overwrite the class name
when you add a new one? solve this problem using classlist.*/
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// para.setAttribute("class", "newClass");
// para.classList.add("class", "newClass");
// console.log(para.classList);