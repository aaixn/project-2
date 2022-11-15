import React from 'react'
import wallpapers from '../Wallpaper/Library'
import '../Wallpaper/Wallpaper.css'
import {Link} from 'react-router-dom'

export default function Wallpaper() {
  return (
    <div className='wallpaper-select'>
        <h1>Wallpaper Select</h1>
        <div className='wallpaper-list'>
            {wallpapers.map((item, key) => {
                return(
                    <img src={item} key={key} className='wallpaper'></img>
                )
            })}
        </div>
        <Link to='/'><button className='return-study'>return to study space</button></Link>
    </div>
  )
}
