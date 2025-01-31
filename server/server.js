// 1.create http server in node js
// const fs = require("fs");
// const http=require("http");
// const url=require("url");
// http.createServer((req,res)=>{
//     let {query}=url.parse(req.url,true);
//     console.log(query);
//     fs.readFile("index.html","utf-8",(err,data)=>{
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.end(data);
//     })
   
// }).listen(5000,()=>console.log("server is running"));
// there are two ways like we can assign it to the variiable also

// if the port is already in use it may show an error like the port is already in use

// const http = require("http")
// const fs = require("fs")
// const url = require("url")

// // Add file watcher for sample.txt
// fs.watch('sample.txt', (eventType, filename) => {
//     const timestamp = new Date().toLocaleString()
//     console.log(`File ${filename} was ${eventType} at: ${timestamp}`)
// })

// const server = http.createServer((req,res)=>{
//     // Log timestamp for each request
//     const timestamp = new Date().toLocaleString()
//     console.log(`Request received at: ${timestamp}`)
    
//     let {query} = url.parse(req.url,true)
//     console.log(query)
//     res.end("hi")
// })

// server.listen(3000,()=>{
//     const startTimestamp = new Date().toLocaleString()
//     console.log(`Server started at: ${startTimestamp}`)
//     console.log("Server is running on port 3000")
// })

// --- BACKEND-DAY-2----//
// 1-sending the json to the server
// const http=require("http");
// const fs=require("fs");
// const jsonData=fs.readFileSync("product.json","utf-8");
// console.log(jsonData);
// const htmldata=fs.readFileSync("index.html","utf-8");

// const server=http.createServer((req,res)=>{
//     // res.writeHead(200,{"Content-Type":"application/json"})
//     // res.end(jsonData);
//     let path=req.url;
//     if(path==="/home" || path=="/"){
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.end(htmldata);
//     }
//     else if(path==="/contact"){
//         res.end("contact");
//     }
//     else if(path=="/about"){
//         res.end("about");
//     }
//     else if(path=="/products"){
//         res.end("products");
//     }
//     else{
//         res.end("404")
//     }
// }).listen(3000,()=>{
//     console.log("http://127.0.0.1:3000")
// })

// 2. we have to create four routes 

// const http=require("http");
// const fs=require("fs");
// const path=require("path")

// const data=fs.readFileSync(path.join(__dirname,"templates","template.html"),"utf-8");
// const product=fs.readFileSync("product.html","utf-8");
// http.createServer((req,res)=>{
//     let path=req.url
//     if(path=="/Home" || path=="/"){
//         res.end(data.replace("{{%CONTENT%}}","you are at home"));
//     }
//     else if(path=="/About"){
//         res.end(data.replace("{{%CONTENT%}}","you are at about"));
//     }
//     else if(path=="/Contact"){
//         res.end(data.replace("{{%CONTENT%}}","you are at contact"));
//     }
//     else if(path=="/Products"){
//         res.end(data.replace("{{%CONTENT%}}","you are at products"));
//     }
//     else{
//         res.end("404");
//     }
// }).listen(3000,()=>{
//     console.log("http://127.0.0.1:3000")
// })


// const http = require("http")
// const fs = require("fs")
// const path = require("path")
// const data = fs.readFileSync(path.join(__dirname,"templates","template.html"),"utf-8")
// const productData = fs.readFileSync(path.join(__dirname,"templates","product.html"),"utf-8")
// const jsonData = JSON.parse(fs.readFileSync("product.json","utf-8"))
// let temp=jsonData.map((prod)=>{
//     let output=productData.replace("{{%IMG%}}",prod.productImage);
//     output=output.replace("{{%NAME%}}",prod.name)
//     output=output.replace("{{%MODNAME%}}",prod.modeName);
//     output=output.replace("{{%MODNUM%}}",prod.modelNumber);
//     output=output.replace("{{%SIZE%}}",prod.size);
//     output=output.replace("{{%CAMERA%}}",prod.camera);
//     output=output.replace("{{%PRICE%}}",prod.price);
//     output=output.replace("{{%COL%}}",prod.color);
//     return output;
// })
// temp=temp.join(",")

// const server = http.createServer((req,res)=>{
//     let path = req.url
//     path = path.toLowerCase()
//     if(path === "/home" || path === "/"){
//         res.end(data.replace("{{%CONTENT%}}","You are at Home"))
//     }
//     else if(path === "/contact"){
//         res.end(data.replace("{{%CONTENT%}}","You are at Contact"))
//     }
//     else if(path === "/about"){
//         res.end(data.replace("{{%CONTENT%}}","You are at About"))
//     }
//     else if(path === "/products"){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.end(data.replace("{{%CONTENT%}}",temp))
//     }
//     else{
//         res.end("404 not found")
//     }

// })
// server.listen(3000,()=>{
//     console.log("http://127.0.0.1:3000")
// })

const url=require("url")
const http = require("http")
const fs = require("fs")
const path = require("path")
const data = fs.readFileSync(path.join(__dirname,"templates","template.html"),"utf-8")
const productData = fs.readFileSync(path.join(__dirname,"templates","product.html"),"utf-8")
const jsonData = JSON.parse(fs.readFileSync("product.json","utf-8"))
// console.log(jsonData)
let productHtmlArray = jsonData.map((prod)=>{
    let output = productData.replace("{{%IMAGE%}}",prod.productImage)
    output = output.replace("{{%NAME%}}",prod.name)
    output = output.replace("{{%MODNAME%}}",prod.modeName)
    output = output.replace("{{%MODNUMBER%}}",prod.modelNumber)
    output = output.replace("{{%SIZE%}}",prod.size)
    output = output.replace("{{%CAMERA%}}",prod.camera)
    output = output.replace("{{%PRICE%}}",prod.price)
    output = output.replace("{{%COLOR%}}",prod.color)
    output = output.replace("{{%ID%}}",prod.id)
    return output
})
productHtmlArray = productHtmlArray.join("")
// console.log(productHtmlArray)
function renderProduct(prod){
    let output = productData.replace("{{%IMAGE%}}",prod.productImage)
    output = output.replace("{{%NAME%}}",prod.name)
    output = output.replace("{{%MODNAME%}}",prod.modeName)
    output = output.replace("{{%MODNUMBER%}}",prod.modelNumber)
    output = output.replace("{{%SIZE%}}",prod.size)
    output = output.replace("{{%CAMERA%}}",prod.camera)
    output = output.replace("{{%PRICE%}}",prod.price)
    output = output.replace("{{%COLOR%}}",prod.color)
    output = output.replace("{{%ID%}}",prod.id)
    return output
}

const server = http.createServer((req,res)=>{
    let path = req.url
    path = path.toLowerCase()
    let {query,pathname}=url.parse(req.url,true)
    pathname=pathname.toLowerCase()
    console.log(query)
    if(path === "/home" || path === "/"){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data.replace("{{%CONTENT%}}","You are at Home"))
    }
    else if(path === "/contact"){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data.replace("{{%CONTENT%}}","You are at Contact"))
    }
    else if(path === "/about"){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data.replace("{{%CONTENT%}}","You are at About"))
    }
    else if(pathname === "/products"){
        res.writeHead(200, {'Content-Type': 'text/html'})
        let id=query.id*1
        if(query.id){
           let find =  jsonData.find(item=>item.id===id);
           res.end(data.replace("{{%CONTENT%}}",renderProduct(find)))

        }
        else{
            res.end(data.replace("{{%CONTENT%}}",productHtmlArray))
        }
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end("404 not found")
    }
})
server.listen(3000,()=>{
    console.log("http://127.0.0.1:3000")
})