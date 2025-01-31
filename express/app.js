// // const http=require("http");
// // const url=require("url");
// // const server=http.createServer()
// // server.on("request",(req,res)=>{
  
// //     console.log("hello everyone");
// // })
// // server.listen(3000)

// // const events=require("events");// contains emitter
// // const customEvent=new events.EventEmitter();
// // customEvent.on("cs",()=>{
// //     console.log("hello")
// // })
// // customEvent.emit("cs");

// // express-js
// // const express=require("express")
// // const app=express()
// // app.get("/",(req,res)=>{
// //     // console.log("hello")
// //     // res.json({ok:true});
// //     res.status(200).sendFile(__dirname+'/index.html');
// //     res.setHeader('Content-Type','text/html');
// //     res.set({'sakthivel':'sece','sakthi':'full-stack developer'});
    
// // })

// // app.listen(3000,()=>{
// //     console.log("server is running");
    
// // })

//     // app.get("/*",(req,res)=>{
//         //         res.json({status:"fail"})
//         // })
//         // app.post("/api/v1/products",(req,res)=>{// req.body is needed to get the data
//         //     console.log(req.body)
//         // })
// //------template for server api------//
//         const express=require("express")
//         const morgan=require("morgan")
//         const app=express();
//         app.use(express.json())
//         // app.use((req,res,next)=>{
//         //     console.log("yes middleware")
//         //     next()
//         // })
//         app.use(morgan("dev"));
//         const {get_fun1,get_fun,put_fun,patch_fun,del_fun,post_fun}=require("./route_handlers/ProductFuncions")
//         // app.get("/api/v1/products/:id/:id1?",get_fun1)
//         // app.get("/api/v1/products",get_fun1)
//         // app.post("/api/v1/products",post_fun)
//         // app.patch("/api/v1/products/:id",patch_fun)
//         app.put("/api/v1/products/:id",put_fun)
//         // app.delete("/api/v1/products/:id",del_fun)
//         app.listen(3000,()=>{
//                 console.log("hello")
//         })

// const http = require('http');

// const server = http.createServer()

// server.on('request', (req, res) => {
//     console.log('Request received');
//     res.end('Hello World');
// });

// server.listen(3000);

// const events = require('events');
// const CustomEvent = new events.EventEmitter();

// CustomEvent.on("cs",()=>{
//     console.log("Event has been triggered");
// })

// CustomEvent.emit("cs");


// const express = require('express')

// const app = express();

// app.get('/', (req, res) => {
//     // console.log("Server called");
//     // res.send('Hello World');
//     // res.json({ok:true})
//     res.status(200).sendFile(__dirname + '/index.html');
//     res.setHeader('Content-Type', 'text/html');
//     res.set({'Name':'SECE','Location':'CBE'});
// });

// app.listen(3000,()=>{
//     console.log("Server is running")
// });

const express = require('express');
const app = express();
app.use(express.json());
const {getProducts,getProductById,createProduct,updateProduct,deleteProduct} = require('./route_handlers/ProductFuncions');
const morgan = require('morgan');
app.use(morgan('dev'));
const productRoute = require("./routes/productRoutes")
// app.use(mid)
// function mid(req,res,next){
//     console.log("Middleware called");
//     next();
// }



app.listen(3119,()=>{
    console.log("http://localhost:3000")
})
