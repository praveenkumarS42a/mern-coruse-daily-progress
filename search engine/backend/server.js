const { log } = require("console");
const express = require("express");
const http = require("http");
const db = require("./db/db")
const courseSchema = require("./models/schema")
const path = require("path")
const app =express()
const cors = require("cors")
app.use(cors())
app.get('/api/v1/search',async (req,res)=>{
    await db();
    let query = req.query.search
    const course = await courseSchema.find({title:{$regex:query,$options:"i"}})
    console.log(query)  
    // console.log(course)
    //  res.send("hello everyone");
    res.json(course);
})
app.listen(3000,()=>{
    console.log("server is running");
    
})