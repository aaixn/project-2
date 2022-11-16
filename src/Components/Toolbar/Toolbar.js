import React from 'react'
import '../Toolbar/Toolbar.css'
import {BsFillCalendarFill} from 'react-icons/bs'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import {BsFillStickyFill} from 'react-icons/bs'
import {BsFillImageFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Toolbar({kanbanDisplay, setKanbanDisplay, noteDisplay, setNoteDisplay}) {
  return (
    <div className='toolbar'>
        <div className='tool'><BsFillCalendarFill/></div>
        <div className='tool'><BsMusicNoteBeamed /></div>
        <div className='tool'><BsFillCheckSquareFill onClick={() => setKanbanDisplay(!kanbanDisplay)}/></div>
        <div className='tool'><BsFillStickyFill onClick={() => setNoteDisplay(!noteDisplay)}/></div>
        <Link to='/wallpapers'><div className='tool'><BsFillImageFill color='salmon'/></div></Link>
    </div>
  )
}
