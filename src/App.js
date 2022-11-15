import React from 'react';
import './App.css';
import Wallpaper from './Components/Wallpaper/Wallpaper';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {


  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/wallpapers' element = {<Wallpaper />}></Route>
      </Routes>
    </div>
  );
}

export default App;
