import React from 'react'
import axios from "axios"
import { useState } from 'react'
import View from './view'
const Search = () => {
  const [value,setValue]=useState("");  
  const [data,setData]=useState([])
  async function handleViews(){
      let res = await axios.get(`http://127.0.0.1:3000/api/v1/search?search=${value}`)
      console.log(res);
      setData(res.data);
  }
  function handleClick(e){
      e.preventDefault();
      handleViews();
  }
  return (
    <>
    <form action=''>
        <input value = {value} onChange = {(e)=>setValue(e.target.value)}  type="text" placeholder='Enter'/>
        <button onClick={(e)=>handleClick(e)}>Submit</button>
        </form>
        {
          data.map((i)=> <View title={i.title} description={i.description}/>)
        }
    </>
  )
}

export default Search