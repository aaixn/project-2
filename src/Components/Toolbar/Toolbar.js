import React from 'react'
import '../Toolbar/Toolbar.css'
import {BsCalendarEvent} from 'react-icons/bs'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {BsFillKanbanFill} from 'react-icons/bs'
import {BsPencilSquare} from 'react-icons/bs'
import {BsFillImageFill} from 'react-icons/bs'
import {GiTomato} from 'react-icons/gi'
import {Link} from 'react-router-dom'

export default function Toolbar({kanbanDisplay, setKanbanDisplay, noteDisplay, setNoteDisplay, dateDisplay, setDateDisplay, pomodoroDisplay, setPomodoroDisplay}) {
  return (
    <div className='toolbar'>
        <div className='tool'><BsCalendarEvent onClick={() => setDateDisplay(!dateDisplay)}/></div>
        <div className='tool'><BsMusicNoteBeamed /></div>
        <div className='tool'><BsFillKanbanFill onClick={() => setKanbanDisplay(!kanbanDisplay)}/></div>
        <div className='tool'><BsPencilSquare onClick={() => setNoteDisplay(!noteDisplay)}/></div>
        <div className='tool' onClick={() => setPomodoroDisplay(!pomodoroDisplay)}><GiTomato /></div>
        <Link to='/wallpapers'><div className='tool'><BsFillImageFill color='salmon'/></div></Link>
    </div>
  )
}
