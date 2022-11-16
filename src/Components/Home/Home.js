import React, { useState } from 'react'
import axios from 'axios';
import Kanban from '../Kanban/Kanban'
import Pomodoro from '../Pomodoro/Pomodoro';
import Quotes from '../Quotes/Quotes';
import Toolbar from '../Toolbar/Toolbar';
import {BsFillChatQuoteFill} from 'react-icons/bs'
import '../Home/Home.css'


export default function Home() {
    const [quote, setQuote] = useState('')
    const [quoteDisplay, setQuoteDisplay] = useState(false)
    const [kanbanDisplay, setKanbanDisplay] = useState(false)
    const [musicDisplay, setMusicDisplay] = useState(false)
    const [calendarDisplay, setCalendarDisplay] = useState(false)



  const getQuote = () => {
    axios.get('https://motivational-quote-api.herokuapp.com/quotes/random')
      .then(res => setQuote(res.data))
  }

  const handleQuoteButton = () => {
    setQuoteDisplay(!quoteDisplay)
    getQuote()

    setTimeout(() => {
      setQuoteDisplay(false)
    }, 10000)
  }

    return (
    <div className='home'>
        <div className='quote-div'><BsFillChatQuoteFill className='quote-button' onClick={handleQuoteButton}/></div>
        {quoteDisplay && <Quotes quote = {quote} quoteDisplay={quoteDisplay} setQuoteDisplay={setQuoteDisplay}/>}
        <Pomodoro />
        {kanbanDisplay && <Kanban />}
        <footer><Toolbar kanbanDisplay={kanbanDisplay} setKanbanDisplay = {setKanbanDisplay}/>
        </footer>
    </div>
    )
    }
