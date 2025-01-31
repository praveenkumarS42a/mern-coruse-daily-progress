// const fs=require("fs")

// const express=require("express")
// const path=require("path")
// const app=express()
// const jsonData=JSON.parse(fs.readFileSync(path.join(__dirname,"..","models","product.json"),"utf-8"))


// const get_fun=(req,res)=>{
//     try{
//         res.json({
//             status:"completed",
//             count:jsonData.length,
//             data:{
//                 products:jsonData
//             }
//     }).status(200)
//     }
//     catch(e){
//         res.status(500).json({
//              status:"error",
//              message:"failed",
//              error:e.message
//         }

//         )
//     }
// }


// const get_fun1=(req,res)=>{ // conditional routing
//     console.log(req.params)
//     const {id}=req.params
//     console.log(id)
//     const product = jsonData.find((product)=>product.id===Number(id));
//     res.json({
//         status:"correct",
//         id:id,
//         count:"1",
//         data:product
//     })

// }

// const post_fun=(req,res)=>{
//     const id = jsonData.length+1;
//     const newData = {
//         id:id,
//         ...req.body
//     }
//     jsonData.push(newData)
//     fs.writeFileSync(path.join(__dirname,"..","models","product.json"),JSON.stringify(jsonData))
//     res.json({
//         status:"success",
//         data:jsonData
//     })
// }


// const patch_fun=(req,res)=>{
//     let id = req.params.id*1;
//     let up_data = jsonData.find((i)=>i.id==id)
//     let index=jsonData.indexOf(up_data)
//     console.log(jsonData[index])
//     jsonData[index]=Object.assign(up_data,req.body)
//     // up_data.name=req.body.name
//     fs.writeFileSync(path.join(__dirname,"..","models","product.json"),JSON.stringify(jsonData))
//     res.json({
//         status:"success",
//         data:jsonData[index]
//     })
// }


// const put_fun=(req,res)=>{
//     let id = req.params.id*1;
//     let up_data = jsonData.find((i)=>i.id==id)
//     let index=jsonData.indexOf(up_data)
//     console.log(jsonData[index])

//     fs.writeFileSync(path.join(__dirname,"..","models","product.json"),JSON.stringify(jsonData))
//     jsonData[index]=(req.body)
//     res.json({
//         status:"put updated",
//         data:jsonData[index]
//     })  
// }


// const del_fun=(req,res)=>{
//     let id=req.params.id*1
//     let deletedJson=jsonData.filter((i)=>i.id!=id)
//     fs.writeFileSync(path.join(__dirname,"..","models","product.json"),JSON.stringify(deletedJson))
//     res.status(204)
//     res.json({
        
//     })

// }

// module.exports=(get_fun,get_fun1,post_fun,patch_fun,del_fun,put_fun)

const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');

const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname,"..","models","product.json"),"utf-8"))

const getProducts =  (req, res) => {
    try {
        res.json({
            status: "success",
            count: jsonData.length,
            data: {
                products: jsonData
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to fetch products",
            error: error.message
        });
    }
}

const getProductById = (req, res) => {
    let id = req.params.id*1;
    const data = jsonData.find((i)=>i.id==id)
    res.json({
        status:"success",
        data:data
    })
}

const createProduct = (req, res) => {
    try {
        const id = jsonData.length + 1;
        const newData = {
            id: id,
            ...req.body
        }
        jsonData.push(newData)
        fs.writeFileSync(path.join(__dirname,"..","models", "product.json"), JSON.stringify(jsonData))
        res.json({
            status: "success",
            data: newData
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to create product",
            error: error.message
        });
    }
}

const updateProduct = (req, res) => {
    try {
        let id = req.params.id * 1
        let productToUpdate = jsonData.find((i) => i.id == id)
        
        if (!productToUpdate) {
            return res.status(404).json({
                status: "error",
                message: "Product not found"
            });
        }

        let index = jsonData.indexOf(productToUpdate)
        jsonData[index] = {
            ...productToUpdate,
            ...req.body,
            id: id // Preserve the original ID
        }
        
        fs.writeFileSync(path.join(__dirname,"..","models", "product.json"), JSON.stringify(jsonData))
        res.json({
            status: "success",
            data: jsonData[index]
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Failed to update product",
            error: error.message
        });
    }
}

const deleteProduct = (req, res) => {
    let id = req.params.id * 1
    let deletedData = jsonData.filter((i) => i.id != id)
    fs.writeFileSync(path.join(__dirname,"..","models", "product.json"), JSON.stringify(deletedData))
    res.status(204).json({
        status: "success",
        message: "Product deleted successfully"
    })
}

module.exports = {getProducts,getProductById,createProduct,updateProduct,deleteProduct}