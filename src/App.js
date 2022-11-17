import React, { useEffect, useState } from 'react';
import './App.css';
import Wallpaper from './Components/Wallpaper/Wallpaper';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {

  const [wallpaper, setWallpaper] = useState('https://i.imgur.com/UlPvCp3.png')
  
  return (
    <div className="App" style={{backgroundImage: `url(${wallpaper})`}}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/wallpapers' element = {<Wallpaper setWallpaper={setWallpaper}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
