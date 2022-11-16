import React, { useState } from 'react'
import '../Notepad/Notepad.css'

export default function Notepad() {
    
    const [note, setNote] = useState('')

    const handleChange = (e) => {
        setNote(e.target.value)
    }

    

    return (
    <div className='notepad'>
        <div className='input-note'>
            <textarea placeholder='enter notes here' onChange={handleChange}></textarea>
            <button>save</button>
        </div>
        <div className='sticky-note'>{note}</div>
    </div>
    )
    }
