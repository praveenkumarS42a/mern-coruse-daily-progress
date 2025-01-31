// console.log("hello world");
// console.log("welcome to programming");
// console.log("hello everyone");
// var a=10;
// console.log(a);
// a="value";
// console.log(a);
// a=true;
// console.log(a);
// a=[1,2,3,4]
// console.log(a);
// a={key:1}
// console.log(a);
// // string data type
// console.log("----string data type----");
// var temp=" string data type ";
// console.log(typeof(temp));
// console.log(temp.split(""));
// console.log(temp.split(" "));
// console.log(temp.length);
// temp= temp.trim();
// console.log(temp.length);

// //to find the specific position of a character
// console.log("The chracter at position 3 is ", temp.charAt(3));
// console.log("The index of the character i is ", temp.lastIndexOf('i'));
// var b=123;
// //To convert a integer to string
// console.log(typeof (b.toString()));
// console.log(typeof ""+b);
// console.log(typeof `${b}`); // literals
// //literals are used for multiple lines
// var sakthi=`abcd
// efghij
// kllmnop${b}`
// console.log(sakthi);

// //Numericals
// var number=123.45;
// console.log(Number.parseInt(number));
// var str="123";
// console.log(typeof Number(str));
// console.log(typeof +str);

// //math
// var num1=123.7;
// console.log(Math.pow(2,3));
// console.log(Math.min(2,3,4));

// console.log(Math.max(1,2,3,4,5,6,7));
// console.log(Number.parseInt(Math.random()*100));
// console.log(Math.sqrt(9));
// console.log(Math.cbrt(9));

// //boolean
// var val=false;
// console.log(val);

// //undefined
// var val1;
// console.log(val1);

// var val2=null;

// //arrays
// var arr=[1,2,3,4,5,6,7,8,9,0];
// console.log(arr);
// arr.push(7);
// console.log(arr);
// arr.push(10);
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.unshift(0); //used to add the element in first position
// console.log(arr);
// arr.shift(); //used to remove the first element in the array
// console.log(arr);

// assessment
// var a="hello"
// var b="";
// for(let i=a.length-1;i>=0;i--){
//    b+=a[i];
// }
// console.log(b);
// a=a.split("");
// a=a.reverse();
// a=a.join("");
// console.log(a);
// var s=0;
// while(s<5){ 
//     console.log(s);
//     s++;
// }
// var str2="hello world";
// for(let i of str2){
//     console.log(i);
// }
// var sakthivel=["apple","orange","pineapple"].forEach((i,k)=>{
//     console.log(k,'=', i);
// })

// document.write("hello world");

// var str3="aeiouAEIOU";
// var s=prompt("Enter the value");
// s=s??"a";
// if(s){
//     var g=0;
//     for(let i=0;i<str3.length;i++){
//         if(s==str3[i]){
//             console.log("vowel");
//             g=1;
//             break;
//         }
//     }
//     if(g==0){
//         console.log("consonant");
//     }

//     if(s=='a'||s=='e'||s=='i'||s=='o'||s=='u'){
//         console.log("vowel");
//     }
//     else{
//         console.log("consonant");
//     }
// }
// console.log(eval(1+2-3+7));
// document.write("Hello everyone to the javascript programming");

// functions in javascript
// function add(a,b,c=0){
//     return a+b+c;
// }
// var a=add(10,30,45);
// var b=add(10,20);
// var c=add(40,50);
// console.log(a);
// console.log(b);
// console.log(c);

// //method overloading
// var check;
// check=10;
// console.log(check);

// //differenciation of let and const keywords in it
// const arrowsum=(a,b)=> a+b;

// var ans=arrowsum(3,4);
// console.log(ans);

const arr=[1,2,3,4,5];
// const addelement=(arr)=>{
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(addelement(arr));

//using map function
// let compute=arr.map(i=>i+1)
// console.log(compute);
// console.log(arr);

// filter function in javascript


//use ternary operator for switching like checking the case generate a number using math.random
//with that built a rock paper scissor game

//rock paper scissor game
// function getComputerChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     const randomNumber = Math.floor(Math.random() * 3); 
//     return choices[randomNumber];
//   }
  
//   function determineWinner(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//       return "It's a tie!";
//     } else if (
//       (userChoice === "rock" && computerChoice === "scissors") ||
//       (userChoice === "paper" && computerChoice === "rock") ||
//       (userChoice === "scissors" && computerChoice === "paper")
//     ) {
//       return "You win!";
//     } else {
//       return "You lose!";
//     }
//   }
//   function playGame() {
//     const userChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
//     const computerChoice = getComputerChoice();
//     const result = determineWinner(userChoice, computerChoice);
//     console.log(`You chose: ${userChoice}`);
//     console.log(`Computer chose: ${computerChoice}`);
//     console.log(result);
//   }
//   playGame();





































  



  