import React from 'react'
import '../Kanban/AddToDo.css'

export default function AddToDo({setAddToDo, addToDo}) {


  return (
    <div className='add-todo'>
      <form>
        <input type='text'></input>
        <button className='add-todo-button' onClick={() => setAddToDo(!addToDo)}>add to todo</button>
      </form>
    </div>
  )
}
