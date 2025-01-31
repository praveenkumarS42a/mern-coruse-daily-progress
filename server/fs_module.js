const fs=require("fs");
// fs.writeFile("sample.txt","hello everyone",(err)=>{});
// fs.appendFile("index.txt","\nappended data",(err)=>{});
// fs.readFile("index.txt","utf-8",(err,data)=>{
//     console.log(data);
// })
// fs.unlink("index.txt",(err)=>{});

// try{
//     fs.readFile("index.txt",(err,data)=>{
//         if(err){
//             throw err;
//         }
//     })
// }
// catch(err){
//     console.log(err);
// }
// fs.readFile("index.txt",(err,data)=>{
//             if(err){
//                 throw err;
//             }
//         })
// process.on("uncaughtException",(err)=>{
//     console.log(err.message);
// })
// fs.mkdir("folder",(err)=>{});
// fs.readFile("index.txt","utf-8",(err,data)=>{
//     console.log(data);
// });
// console.log("log anything"); it is known as event loop
// const data = fs.readFileSync("sample.txt","utf-8")
// console.log(data);
// console.log("outside");

// 1.create a file
fs.writeFile("First_file.txt","First File data",(err)=>{
    fs.appendFile("First_file.txt","\nAppended data",(err)=>{
        fs.readFile("First_file.txt","utf-8",(err,data)=>{
            console.log(data);
        })
    })
})
