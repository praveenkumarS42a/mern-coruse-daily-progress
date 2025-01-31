// ----- day 2 afternoon
// Exceptional handling in javascript


// function divideNumbers(a, b) {
//     try {
//         if (b === 0) {
//             throw new Error("Division by zero is not allowed.");
//         }
//         let result = a / b;
//         console.log(`Result: ${result}`);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//     } finally {
//         console.log("Execution completed.");
//     }
// }
// divideNumbers(10, 2); 
// divideNumbers(10, 0); 

//---- event handling in java-----//

// let button = document.getElementById("one");
// button.addEventListener("dblclick",()=>{
//     alert("you have clicked the button");
// })

// let parent = document.getElementsByClassName("div1")[0];
// parent.addEventListener("dblclick",()=>{
//     alert("you have clicked the parent div 12")})

// let child1 = document.getElementsByClassName("div2")[0];
// child1.addEventListener("mouseleave",(e)=>{
//     e.stopPropagation()
//     alert("you have clicked the child1 div")})














// to remove the eventlistener
// const event1=(e)=>{
//     console.log(e.target.tagName);
//     remove();
// }
// child1.addEventListener("dblclick",event1);
// const remove=()=>{
//     child1.removeEventListener("dblclick",event1);
//     alert("removed successfullly");
// }


// keyboard events in javascript
const catchkeyboard=(e)=>{
    console.log(e);
}
window.addEventListener("keydown",catchkeyboard);

let date = new Date();
let date1 = date.getDate();
let hours = date.getHours()
let minutes = date.getMinutes();
let seconds = date.getSeconds();



