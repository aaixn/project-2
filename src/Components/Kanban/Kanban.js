import React, { useState, useEffect } from 'react'
import '../Kanban/Kanban.css'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import AddToDo from './AddToDo'

export default function Kanban() {
    const [addToDo, setAddToDo] = useState(false)

    const [kanban, setkanban] = useState({ 
        todo: ['po', 'goop', 'buh'],
        inProg: [],
        complete: [],
    })

    // kanban = {
    //     todo = {[]},
    //     inprogress = {[]},
    //     complete = {[]}
    // }

    // localStorage.setItem('kanban', JSON.stringify(kanban))

    // localStorage.getItem()

    // const inProgress = window.localStorage.getItem("kanban").inProgress

    // setInprogres(..inProgress, )

    // setkanban(kanban => ({
    //     ...kanban,
    //     inProg: ['bung', 'pung']
    // }))

    // useEffect(() => {
    //     localStorage.setItem("kanban", JSON.stringify({kanban}))
    // }, [kanban])




  return (
    <div className='kanban'>
        <div className='chart'>
            <div className='todo'>
                <p>to do</p>
                {(kanban.todo.map((item, key) => {
                    return <p key={key}>{item}</p>
                }))}
                <BsFillArrowRightCircleFill />
            </div>
            <div className='in-progress'>
                <p>in progress</p>
                {(kanban.inProg.map((item, key) => {
                    return <p key={key}>{item}</p>
                }))}
                <BsFillArrowLeftCircleFill />
                <BsFillArrowRightCircleFill />
            </div>
            <div className='complete'>
                <p>complete</p>
                {(kanban.complete.map((item, key) => {
                    return <p key={key}>{item}</p>
                }))}
                <BsFillArrowLeftCircleFill />
            </div>
        </div>
        <button onClick={() => {setAddToDo(true)}}>+</button>
        <AddToDo addToDo={addToDo} setAddToDo = {setAddToDo}/>
    </div>
  )
}
