const express=require("express")
const app=express()
const DB=require("./db/db")
const cors=require("cors")
app.use(cors())
const todoSchema=require("./model/schema")
app.use(express.json())
app.get("/api/v1/todo",async(req,res)=>{
   await DB();
   const task=await todoSchema.find();
   console.log(task)
   res.json(task)
})
app.post("/api/v1/todo",async(req,res)=>{
    await DB()
    const body=await req.body
    const status=await todoSchema.create(body)  
    res.json(status)
})
app.put("/api/v1/todo/:id",async(req,res)=>{
    try {
        await DB();
        const id = req.params.id;
        const response = await todoSchema.updateOne(
            { _id: id },
            { $set: { task: req.body.task } }
        );
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
app.delete("/api/v1/todo/:id",async(req,res)=>{
    try {
        await DB();
        const id = req.params.id;
        const response = await todoSchema.deleteOne({ _id: id });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
app.listen(3000,()=>{
    console.log("server running") 
 })