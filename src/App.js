import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import AddToDo from './Components/Kanban/AddToDo';
import Kanban from './Components/Kanban/Kanban';
import Pomodoro from './Components/Pomodoro/Pomodoro';
import Quotes from './Components/Quotes/Quotes';
import Toolbar from './Components/Toolbar/Toolbar';
import {BsFillChatQuoteFill} from 'react-icons/bs'

function App() {

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

    // setTimeout(() => {
    //   setQuoteDisplay(false)
    // }, 10000)
  }


  
  return (
    <div className="App">
      <div className='quote-div'><BsFillChatQuoteFill className='quote-button' onClick={handleQuoteButton}/></div>
      {quoteDisplay && <Quotes quote = {quote} quoteDisplay={quoteDisplay} setQuoteDisplay={setQuoteDisplay}/>}
      <Pomodoro />
      {kanbanDisplay && <Kanban />}
      {/* <AddToDo /> */}
      <footer><Toolbar kanbanDisplay={kanbanDisplay} setKanbanDisplay = {setKanbanDisplay}/>
      </footer>
    </div>
  );
}

export default App;
