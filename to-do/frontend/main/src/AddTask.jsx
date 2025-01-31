import React from "react"
import { useState,useEffect } from "react"
import ViewTask from "./ViewTask"
import axios from "axios"

function AddTask() {
    const [task,setTask]=useState("")
    const [data,setData]=useState([])
    async function fetchData(){
        const response=await axios.get("http://localhost:3000/api/v1/todo")
        setData(response.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    async function handleSubmit(e){
        e.preventDefault()
        const res = await axios.post("http://localhost:3000/api/v1/todo",{task:task})
        setData([...data,res.data])
        fetchData()
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="addtask">Add Task</label>
                <input type="text" placeholder="Enter task" value={task} onChange={(e)=>setTask(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Add Task</button>
            </form>
            <div>
            {data.length > 0 && data.map((item) =>
                <ViewTask key={item._id} id={item._id} task={item.task} handleUpdate={fetchData}  />
            )}
            </div>
        </div>
    )
}
export default AddTask