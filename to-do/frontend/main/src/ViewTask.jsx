import React from 'react'
import axios from "axios"
import { useState } from "react"
function ViewTask({task,id,handleUpdate}) {
    const [toggle,setData]=useState(false)
    const [value,setValue]=useState("")



    async function handleDelete(){
        await axios.delete(`http://localhost:3000/api/v1/todo/${id}`)
        handleUpdate()
    }
    async function handleUpdateServer(e){
        e.preventDefault()
        await axios.put(`http://localhost:3000/api/v1/todo/${id}`,{task:value})
        handleUpdate()
    }

  return (
    <div>
        <h1>{task}</h1>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={()=>setData(!toggle)}>Update</button>
        {
            toggle && <form action="">
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
                <button onClick={(e)=>handleUpdateServer(e)}>Update</button>
            </form>


        }

    </div>  
  )
}
export default ViewTask