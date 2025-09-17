import React, { useState } from 'react'



const CreateTdo = () => {
  const [title,SetTitle]=useState("");
const [Description,SetDescription]=useState("")
  return (
    <div>
      <input  type="text"  placeholder='enter the title ' onChange={function(e){const value=e.target.value;
        console.log(e.target.value)
        SetTitle(e.target.value);
      }}/> <br />
      <input type="text" placeholder='enter the description' onChange={function(e){const v=e.target.value; 
      console.log(v)
        SetDescription(e.target.value)
      }} /> <br />
      <button onClick={()=>{ fetch("http://localhost:3000/post",{
        method:"POST",
        body:JSON.stringify({
          title:title,
          description:Description
        }),
        headers:{
          "Content-Type":"application/json"
        }
       }).then(async function(res){
        const json=await res.json();
        alert("todo is created")
      })}}> submit</button>
    </div>
  )
}

export default CreateTdo
