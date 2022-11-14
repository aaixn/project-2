import React, { useState } from 'react'
import '../Kanban/Kanban.css'

export default function Kanban() {

    const [todo, setTodo] = useState([])
    const [inProg, setInProg] = useState([])
    const [complete, setComplete] = useState([])
    const [addToDo, setAddToDo] = useState(false)

  return (
    <div className='kanban'>
        <div className='chart'>
            <div className='todo'>
                <p>to do</p>
                {(todo.map((item, key) => {
                    return <p key={key}>{item}</p>
                }))}
            </div>
            <div className='in-progress'>
                <p>in progress</p>
                {(inProg.map((item, key) => {
                    return <p key={key}>{item}</p>
                }))}
            </div>
            <div className='complete'>
                <p>complete</p>
                {(complete.map((item, key) => {
                    return <p key={key}>{item}</p>
                }))}
            </div>
        </div>
        <button onClick={() => {setAddToDo(true)}}>+</button>
    </div>
  )
}
