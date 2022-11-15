import React from 'react'
import '../Toolbar/Toolbar.css'
import {BsFillCalendarFill} from 'react-icons/bs'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import {BsFillStickyFill} from 'react-icons/bs'
import {BsFillImageFill} from 'react-icons/bs'

export default function Toolbar({kanbanDisplay, setKanbanDisplay}) {
  return (
    <div className='toolbar'>
        <div className='tool'><BsFillCalendarFill/></div>
        <div className='tool'><BsMusicNoteBeamed /></div>
        <div className='tool'><BsFillCheckSquareFill onClick={() => setKanbanDisplay(!kanbanDisplay)}/></div>
        <div className='tool'><BsFillStickyFill /></div>
        <div className='tool'><BsFillImageFill /></div>
    </div>
  )
}
