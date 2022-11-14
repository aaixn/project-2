import React, { useState, useEffect } from "react";

const Pomodoro = () => {

    const [min, setMin] = useState(25)
    const [sec, setSec] = useState(0)
    const [message, setMessage] = useState(false)
    const [start, setStart] = useState(false)


    useEffect(() => {
        if (start === true) {

            let timer = setInterval(() => {
                clearInterval(timer)
                
                if (sec === 0) {
                    if(min !== 0) {
                        setSec(59)
                        setMin(min-1)
                    } else {
                        let minutes = message ? 24 : 4
                        let seconds = 59
    
                        setSec(seconds)
                        setMin(minutes)
                        setMessage(!message)
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

    
    const timerMin = min < 10 ? `0${min}` : min
    const timerSec = sec < 10 ? `0${sec}` : sec



    return(
        <div className='pomodoro'>
            <div className="message">
                {message ?? <div>It's time for a break!</div>}
            </div>
            <div className="timer">{timerMin}:{timerSec}</div>
            <button className="start" onClick={startClicked}>{start ? 'pause' : 'start'}</button>
        </div>
    )
}

export default Pomodoro