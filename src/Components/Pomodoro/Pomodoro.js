import React, { useState, useEffect } from "react";
import '../Pomodoro/Pomodoro.css'
import Draggable from "react-draggable";

const Pomodoro = () => {

    const [min, setMin] = useState(25)
    const [sec, setSec] = useState(0)
    const [message, setMessage] = useState(false)
    const [start, setStart] = useState(false)


    const displayMin = min < 10 ? `0${min}` : min
    const displaySec = sec < 10 ? `0${sec}` : sec


    useEffect(() => {
        if (start === true) {
            let timer = setInterval(() => {
                clearInterval(timer)
                
                if (sec === 0) {
                    if(min === 0) {
                        let minutes = message ? 24 : 4
                        let seconds = 59
    
                        setSec(seconds)
                        setMin(minutes)
                        setMessage(!message)
                    } else {
                        setSec(59)
                        setMin(min-1)
                    }
                } else {
                    setSec(sec - 1)
                }
            }, 1000)
            
        }
    }, [sec, start, message, min])


    const startClicked = () => {
        setStart(!start)
    }




    return(
        <Draggable>
            <div className='pomodoro'>
                <div>
                    <p className="message">{message ? 'good work! time for a break!' : 'get to work!'}</p>
                </div>
                <div>
                    <h1 className="timer">{displayMin}:{displaySec}</h1>
                </div>
                <button className="start" onClick={startClicked}>{start ? 'pause' : 'start'}</button>
            </div>
        </Draggable>
    )
}

export default Pomodoro