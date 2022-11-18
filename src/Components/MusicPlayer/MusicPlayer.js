import React, { useEffect, useState, useRef } from 'react'
import '../MusicPlayer/MusicPlayer.css'
import Draggable from 'react-draggable'
import {BsFillSkipBackwardCircleFill} from 'react-icons/bs'
import {BsFillSkipForwardCircleFill} from 'react-icons/bs'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import {BsPauseCircleFill} from 'react-icons/bs'

export default function MusicPlayer({musicLibrary}) {
  
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [playing, setPlaying] = useState(false);
    const { title, artist, audio, image } = musicLibrary[currentSongIndex]
    const audioRef = useRef(new Audio(audio));
    const intervalRef = useRef();
    const isReady = useRef(false);
    const { duration } = audioRef.current
    const currentPercent = duration ? `${(trackProgress / duration) * 100}%` : '0%'
    const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercent}, salmon), color-stop(${currentPercent}, darkgray))
  `;

    const prev = () => {
        currentSongIndex - 1 < 0 ? setCurrentSongIndex(musicLibrary.length - 1) : setCurrentSongIndex(currentSongIndex - 1)
    }
    const next = () => {
        currentSongIndex < musicLibrary.length - 1 ? setCurrentSongIndex(currentSongIndex + 1) : setCurrentSongIndex(0)
    }

    const startTime = () => {
        clearInterval(intervalRef.current)

        intervalRef.current = setInterval(() => {
            audioRef.current.ended ? next() : setTrackProgress(audioRef.current.currentTime)
        }, [1000])
    }

    useEffect(() => {
        if (playing) {
            audioRef.current.play()
            startTime()
        } else {
            audioRef.current.pause()
        }
    }, [playing])

    useEffect(() => {
        return () => {
            audioRef.current.pause()
            clearInterval(intervalRef.current)
        }
    }, [])

    useEffect(() => {
        audioRef.current.pause()

        audioRef.current = new Audio(audio)
        setTrackProgress(audioRef.current.currentTime)

        if (isReady.current) {
            audioRef.current.play()
            setPlaying(true)
            startTime()
        } isReady.current = true
    }, [currentSongIndex])



  return (
    <Draggable>
        <div className='music-player'>
            <img src={image} className='song-image'></img>
            <h1 className='song-title'>{title}</h1>
            <h4 className='artist'>{artist}</h4>
            <input
            type="range"
            defaultValue={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            style={{ background: trackStyling }}
            />
            <div className='controls'>
                <BsFillSkipBackwardCircleFill onClick={prev} cursor='pointer'/>
                {playing ? <BsPauseCircleFill onClick={() => setPlaying(!playing)} cursor='pointer'/> : <BsFillPlayCircleFill onClick={() => setPlaying(!playing)} cursor='pointer'/>}
                <BsFillSkipForwardCircleFill onClick={next} cursor='pointer'/>
            </div>
        </div>
    </Draggable>
  )
}
