import React from 'react'

const Todos = ({todo}) => {
  return (
    <div>
      {todo.map((t)=>{
      return(  <div>
        <h1>{t.title}</h1>
        <h2>{t.description}</h2>
        <button>{t.completed == true ? "completed" : "Mark as completed "}</button>
        </div>
)})}
    </div>
  )
}

export default Todos
