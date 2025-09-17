import React from 'react'
import CreateTdo from './components/createTdo'
import Todos from './components/Todos'
import { useState } from 'react'

const App = () => {
const [todo,settodo]=useState([]);

fetch("http://localhost:3000/get").then(async function(res){
  const json= await res.json();
  settodo(json.data)
})
  return (
    <div>
     <CreateTdo/>
     <Todos todo={todo}/>
    </div>
  )
}

export default App
