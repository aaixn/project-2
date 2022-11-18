import React from 'react'
import './Note.css'
import Draggable from 'react-draggable'
import {BsFillTrashFill} from 'react-icons/bs'

export default function Note({setNoteDisplay}) {
    

    return (
    <Draggable>
        <div className='note'>
            <div className='note-title'>
                <h2 contentEditable='true' suppressContentEditableWarning='true'>title</h2>
            </div>
            <div className='note-content'>
                <p contentEditable='true' suppressContentEditableWarning='true'>write your notes here</p>
            </div>
            <BsFillTrashFill style={{
                alignSelf: 'flex-end',
                color: '#ed1c24',
                cursor:'pointer',
            }}
            onClick = {() => {
                setNoteDisplay(false)
            }}/>
        </div>
    </Draggable>
    )
    }
