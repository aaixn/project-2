import React, { useState, useEffect } from 'react'
import '../Kanban/Kanban.css'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import AddToDo from './AddToDo'
import Draggable from 'react-draggable'

export default function Kanban() {

    const moveStyle = {
        color: '444444',
        cursor: 'pointer',
        fontSize: '1.3em',
    }

    const [addToDo, setAddToDo] = useState(false)

    const [kanban, setkanban] = useState({ 
        todo: [],
        inProg: [],
        complete: [],
    })

    const [moveItem, setMoveItem] = useState('')

    

    const moveToDo = () => {
        setkanban(kanban => ({
            ...kanban,
            todo: [...kanban.todo, moveItem]
        }))
    }

    const moveInProg = () => {
        setkanban(kanban => ({
            ...kanban,
            inProg: [...kanban.inProg, moveItem]
        }))
    }

    const moveComplete = () => {
        setkanban(kanban => ({
            ...kanban,
            complete: [...kanban.complete, moveItem]
        }))
    }

  return (
    <Draggable>
        <div className='kanban'>
            <div className='chart'>
                <div className='kanban-section'>
                    <h3>to do</h3>
                    {(kanban.todo.map((item, key) => {
                        return <p className='kanban-item' key={key} onClick={() => {setMoveItem(item)}} style={{textDecoration: moveItem===item ? 'underline' : 'none'}}>{item}</p>
                    }))}
                    <div className='move-section'>
                        <BsFillPlusCircleFill className='add' style={moveStyle} onClick={() => setAddToDo(!addToDo)}/>
                        <BsFillArrowRightCircleFill className='move-button' style={moveStyle} onClick={()=> {
                            moveInProg()
                            setkanban(kanban => ({
                                ...kanban,
                                todo: kanban.todo.filter(item => item !== moveItem)
                            }
                            ))
                            setMoveItem('')
                        }}/>
                    </div>
                </div>
                <div className='kanban-section'>
                    <h3>in progress</h3>
                    {(kanban.inProg.map((item, key) => {
                        return <p className='kanban-item' key={key} onClick={() => setMoveItem(item)} style={{textDecoration: moveItem===item ? 'underline' : 'none'}}>{item}</p>
                    }))}
                    <div className='move-section'>
                        <BsFillArrowLeftCircleFill className='move-button' style={moveStyle} onClick={()=> {
                            moveToDo()
                            setkanban(kanban => ({
                                ...kanban,
                                inProg: kanban.inProg.filter(item => item !== moveItem)
                            }))
                            setMoveItem('')
                            }}/>
                        <BsFillArrowRightCircleFill className='move-button' style={moveStyle} onClick={()=> {
                            moveComplete()
                            setkanban(kanban => ({
                                ...kanban,
                                inProg: kanban.inProg.filter(item => item !== moveItem)
                            }))
                            setMoveItem('')
                        }}/>
                    </div>
                </div>
                <div className='kanban-section'>
                    <h3>complete</h3>
                    {(kanban.complete.map((item, key) => {
                        return <p className='kanban-item' key={key} onClick={() => setMoveItem(item)} style={{textDecoration: moveItem===item ? 'underline' : 'none'}}>{item}</p>
                    }))}
                    <div className='move-section'>
                        <BsFillArrowLeftCircleFill className='move-button' style={moveStyle} onClick={()=> {
                            moveInProg()
                            setkanban(kanban => ({
                                ...kanban,
                                complete: kanban.complete.filter(item => item !== moveItem)
                            }))
                            setMoveItem('')
                        }}/>
                    </div>
                </div>
            </div>
            {addToDo && <AddToDo addToDo={addToDo} setAddToDo = {setAddToDo} kanban = {kanban} setkanban = {setkanban}/>}
        </div>
    </Draggable>
  )
}
