// let button1 = document.querySelector(".button1");

// button1.onclick = (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
        
// };

// let button2 = document.querySelector(".button2");

// button2.ondblclick = () => {
//     console.log("button is double clicked.");
//     let x = prompt("Enter a number : ");
//     x--;
//     console.log(x);   //9
// };

// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log('you are inside div')
// };

// button1.addEventListener("click", () => {
//     console.log("button is clicked.");
// });

// button1.addEventListener("click", () => {
//     console.log("button is double clicked.");
// });

// button1.addEventListener("click", () => {
//     console.log("button is clicked - handler1");
// });

// button1.addEventListener("click", () => {
//     console.log("button is clicked - handler2");
// });

// const handler3 = () => {
//     console.log("button is clicked - handler3");
// };

// button1.addEventListener("click", () => {
//     console.log("button is clicked - handler4");
// });

// button1.removeEventListener("click", handler3);

/*create a toggle button that changes the screen  to dark mode when clicked and 
light mode when clicked again.*/

let modeBtn = document.querySelector ('.mode');
let currMode = "light";

modeBtn.addEventListener("click", () => {
if (currMode === "light") {
    currMode = "dark";
    // document.querySelector('body').style.backgroundColor = "black";
    document.querySelector('body').classList.add("dark");
    document.querySelector('body').classList.remove("light");

} else {
    currMode = "light";
    // document.querySelector('body').style.backgroundColor = "white";
    document.querySelector('body').classList.add("light");
    document.querySelector('body').classList.remove("dark");

}

console.log("current mode : ", currMode);
});