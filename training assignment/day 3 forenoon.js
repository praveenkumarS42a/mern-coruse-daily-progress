//-----day 3 forenoon-----
//1. pure function
// let global=0;
// function add(a,b){
//     global++;
//     return a+b;
// }
// console.log(add(2,3));
// console.log(add(2,3));
// console.log(global);

//2.closures in javascript
    /* closures are the functions that returns a functions
    usage of closure is tto acheive preserve anything
    it is used for memoization
    */
// function closur(){
//     let temp=0;
//     return ()=>{
//         temp++;
//         console.log(temp);
//     }
// }

// const demo = closur();
// demo();
// demo();

//3.working of memoization
// function closur1(){
//     let temp={};
//     return (val)=>{
//         if(val in temp){
//             console.log("it is already present");
//             return temp[val];
//         }
//         let multiple = val*5;
//         temp[val]=multiple;
//         return multiple;
//     }
// }
// const temp1 = closur1();
// console.log(temp1(10));
// console.log(temp1(10));

//4. local storage
    /* 1.set item
       2.get item 
       3.remove item
    */
// localStorage.setItem("getBack",333);
// console.log(localStorage.getItem("getBack"));
// // localStorage.removeItem("getBack");
// // console.log(localStorage.getItem("getBack"));

// let val=0;
// localStorage.setItem("main",val);
// val++;
// console.log(val);
// console.log(localStorage.getItem("main"));



// let count = 0;
// count = localStorage.getItem("reload");
// count++;
// localStorage.setItem("reload", count);
// console.log(localStorage.getItem("reload"));
//localStorage.removeItem("reload")

// functions
function print(name){
    return `hello my name is ${name}`;
}
console.log(print("praveen"));

//arrow functions

const  greet=(e)=>{
  return `hello i am ${e}`; 
} 
console.log(greet("kumar"));

//call backs
function greet1(name,callback){
    callback(`hello this is ${name}`);
}
greet1("callback",(e)=>);







