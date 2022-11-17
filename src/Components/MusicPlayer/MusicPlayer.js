// import React, { useEffect, useState, useRef } from 'react'
// import '../MusicPlayer/MusicPlayer.css'
// import musicLibrary from '../MusicPlayer/MusicLibrary'
// import Draggable from 'react-draggable'
// import {BsFillSkipBackwardCircleFill} from 'react-icons/bs'
// import {BsFillSkipForwardCircleFill} from 'react-icons/bs'
// import {BsFillPlayCircleFill} from 'react-icons/bs'

// export default function MusicPlayer() {

//   const [currentSongIndex, setCurrentSongIndex] = useState(0)
//   const { title, artist, audio } = musicLibrary[currentSongIndex];
//   const [playing, setPlaying] = useState(false)

//   const audioRef = useRef(newAudio(audio))

//   useEffect(() => {
//     playing ? audioRef.current.play() : audioRef.current.pause()
//   })


//   const next = () => {
//     if ((currentSongIndex + 1) > musicLibrary.length) {
//       setCurrentSongIndex(0)
//     } setCurrentSongIndex(currentSongIndex + 1)
//   }

//   const prev = () => {
//     if (currentSongIndex !== 0) {
//       setCurrentSongIndex(currentSongIndex - 1)
//     }
//   }

//   useEffect(() => {

//   }, [])

//   return (
//     <Draggable>
//         <div className='music-player'>
//         <audio src={musicLibrary[currentSongIndex].audio} ref={audioEl}></audio>
//         <div>now playing</div>
//         <div>
//             <div className='song-image'></div>
//             <h3>{musicLibrary[0].title}</h3>
//             <p>{musicLibrary[0].artist}</p>
//             <BsFillSkipBackwardCircleFill onClick={prev}/>
//             <BsFillPlayCircleFill className='play-button' onClick={() => setPlaying(!playing)}/>
//             <BsFillSkipForwardCircleFill onClick={next}/>
//         </div>
//         </div>
//     </Draggable>
//   )
// }
