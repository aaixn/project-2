import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import './DateTime.css'

export default function DateTime() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000)
    }, [])

    return (
    <Draggable>
        <div className='clock'>
            <h2>{date.toLocaleDateString('en-us', {month: 'long', day: 'numeric', year: 'numeric'})}</h2>
            <h1>{date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</h1>
        </div>
    </Draggable>
    )
}
