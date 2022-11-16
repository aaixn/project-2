import React, { useState } from 'react'
import '../Kanban/AddToDo.css'

export default function AddToDo({setAddToDo, addToDo, kanban, setkanban}) {

  const [newToDo, setNewToDo] = useState()

  const handleChange = (e) => {
    setNewToDo(e.target.value)
  }

  const handleAddToDoButton = () => {
    setkanban(kanban => ({
      ...kanban,
      todo: [...kanban.todo, newToDo]
    }))
  }

  return (
    <div className='add-todo'>
      <form>
        <input type='text' className='todo-input' onChange={handleChange}></input>
        <button className='add-todo-button' onClick={() => {
          handleAddToDoButton()
          setAddToDo(!addToDo)
          }}>add to todo</button>
      </form>
    </div>
  )
}
