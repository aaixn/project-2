import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import AddToDo from './Components/Kanban/AddToDo';
import Kanban from './Components/Kanban/Kanban';
import Pomodoro from './Components/Pomodoro/Pomodoro';
import Quotes from './Components/Quotes/Quotes';

function App() {

  const [quote, setQuote] = useState('')
  const [quoteDisplay, setQuoteDisplay] = useState(false)


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
    <div className="App">
      <button onClick={handleQuoteButton}>" "</button>
      {quoteDisplay && <Quotes quote = {quote} quoteDisplay={quoteDisplay} setQuoteDisplay={setQuoteDisplay}/>}
      <Pomodoro />
      {/* <Kanban /> */}
      {/* <AddToDo /> */}
    </div>
  );
}

export default App;
