import axios from 'axios';
import './App.css';
import Pomodoro from './Components/Pomodoro/Pomodoro';
import Quotes from './Components/Quotes/Quotes';

function App() {

  

  const getQuote = () => {
    axios.get('https://zenquotes.io/api/random', {}
  )
      .then(res => res.json())
      .then(res => console.log(res))
  }

  getQuote()

  return (
    <div className="App">
      {/* <Quotes /> */}
      <Pomodoro />
    </div>
  );
}

export default App;
