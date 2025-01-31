//   --------   DAY 2 ASYNCHORONOUS JAVASCRIPT --------

//   function sayhello(){
//     setTimeout(()=>{
//       console.log("hello");
//     },5000);
    

//   }
//   function saybye(){
//     console.log("bye!");
//   }
//   sayhello();
//   saybye();


// let i=0;
//   const interval = setInterval(()=>{
//     console.log("hello world");
//     i++;
//     if(i==3){
//       clearInterval(interval);
//     }
//   },5000)

// promises
// let taketicket = new Promise((may,may_not)=>{
//   if(true){
//     may("yes booked");
//   }
//   else{
//     may_not("not yet booked");
//   }
// })

// taketicket.then((e)=>{
//   console.log(e)
// }).catch((e)=>{
//   console.log(e);
// })


// let taketicket1 = new Promise((may,may_not)=>{
//   if(true){
//     may("yes booked");
//   }
//   else{
//     may_not("not yet booked");
//   }
// })

// Promise.all([taketicket,taketicket1]).then((e)=>{
//   console.log(e);
// }).catch((e)=>{
//   console.log(e);
// })

// Promise.allSettled([taketicket,taketicket1]).then((e)=>{
//   console.log(e);
// }).catch((e)=>{
//   console.log(e);
// })

// //api request
// const data = async()=>{
//   const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
//   return response;
// }

// data().then((e)=>{
//   console.log(e);
//   console.log(e.json());
// }).catch((e)=>{
//   console.log(e);
// })

// // select tag from html
//     /* 1.getElementByid
//        2.getElementsByclassName
//        3.getElementsByTagName
//        4.querySelector
//        5.querySelectorAll
//     */
// let h1 = document.getElementById("tag1");
// console.log(h1);

// text manipulation
        /* 1.innerHTML
           2.innerText
           3.textContent
        */
// h1.innerHTML = "hello there"
// h1.innerText = "Hello there";
// h1.textContent = "hello there"

// console.log(h1.textContent)

/* location
   history
   screen object
*/

// //location
// location.assign("google.com");
// console.log(screen.orientation);
// history.back()


// // create tag using js dynamicallly
// let div = document.createElement("div");
// let textNode = document.createTextNode("create using js");
// div.className="divClass";

// // to insert multiple classes - use classList
// div.append(textNode);
// console.log(div);

// let body = document.getElementById("data");
// body.append(div);

// let class1 = document.getElementsByClassName("a")[0];
// console.log(class1);

// let list = document.getElementsByTagName("li")[0]
// let list = document.querySelectorAll("ul li");
// console.log(list);

// const groceryList = document.getElementById("groceryList");
// const groceries = ["Milk", "Eggs", "Bread", "Cheese", "Apples", "Bananas", "Yogurt"];

// for (let i = 0; i < groceries.length; i++) {
//   const listItem = document.createElement("li");
//   listItem.textContent = groceries[i];
//   groceryList.append(listItem);
// }

// // Accessing and manipulating list items (example):
// const firstItem = document.querySelector('#groceryList li:first-child');
// firstItem.style.fontWeight = 'bold'; // Make the first item bold


// let ul = document.createElement("ul");
// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");
// let li4 = document.createElement("li");
// let li5 = document.createElement("li");
// let li6 = document.createElement("li");
// ul.append(li1,li2,li3,li4,li5);


// // create a value for list items
// let text1 = document.createTextNode("onion");
// let text2 = document.createTextNode("carrot");
// let text3 = document.createTextNode("orange");
// let text4 = document.createTextNode("cherry");
// let text5 = document.createTextNode("banana");

// li1.append(text1);
// li2.append(text2);
// li3.append(text3);
// li4.append(text4);
// li5.append(text5);

// console.log(ul);
// body.append(ul);

// // how to style this list using javascript
// // ul.className = "divClass";
// // ul.setAttribute("id","tag");

// // ul.style.color="red";
// // ul.style.backgroundColor="yellow";

// // to write sequence of style
// ul.style.cssText=`color:pink;
//                 background-color:green;`;

// let li7= document.createElement("li");
// let text7 = document.createTextNode("melon");
// li7.append(text7);
// ul.append(li7);
let body = document.getElementById("data");
const arr = ["apple","banana","mango","orange","cherry","guava"];
let ul = document.createElement("ul");
arr.map((i)=>{
    let li = document.createElement("li");
    let temp = document.createTextNode(i);
    li.prepend(temp);
    ul.prepend(li);
})
body.append(ul);
console.log(ul);

// body.children[0].remove();
let li = document.getElementById("one");
li.remove();
// for add at first the method  used is prepend


// date object or constructor
    /* used to get date time and soon */
let date = new Date();
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());



















