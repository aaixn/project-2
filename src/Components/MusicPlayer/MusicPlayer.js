import React from 'react'
import '../MusicPlayer/MusicPlayer.css'
import Draggable from 'react-draggable'
import {BsFillSkipBackwardCircleFill} from 'react-icons/bs'
import {BsFillSkipForwardCircleFill} from 'react-icons/bs'
import {BsFillPlayCircleFill} from 'react-icons/bs'

export default function MusicPlayer() {
  return (
    <Draggable>
        <div className='music-player'>
        <div>now playing</div>
        <div>
            <div className='song-image'></div>
            <h3>title</h3>
            <p>artist</p>
            <BsFillSkipBackwardCircleFill />
            <BsFillPlayCircleFill />
            <BsFillSkipForwardCircleFill />
        </div>
        </div>
    </Draggable>
  )
}
