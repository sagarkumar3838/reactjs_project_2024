import React from 'react'
import "./style.css"
import { useState } from 'react'


const Todo = () => {

    const [todos , setTodos] = useState([]);
    const [input , setInput] = useState("");

    const handleChange = () =>{

        setTodos((todos)=>{
          return   todos.concat({
                text:input,
                id:Math.floor(Math.random() * 10)

            })
        })

        setInput("");
    }

    const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id !== id))

  return (
   
    <div className='container'>

    <div className='upper'>
    <h1 >Todo List</h1>
    </div>
   
    <input type="text" placeholder='ADD YOUR TASK...' value={input} onChange={(e)=> setInput(e.target.value)}/>
     <button onClick={handleChange} >submit</button>
     <ul className='todos-list'>
     {todos.map(({text , id})=>(
      <li className='todo' key={id}>
        <span>{text}</span>
        <button className="close" onClick={()=> removeTodo(id)}>x</button>
      </li>
     ))}
     
     </ul>

    </div>
  )
}

export default Todo
