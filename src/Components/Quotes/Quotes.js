import React, { useEffect } from 'react'
import axios from 'axios'


export default function Quotes() {

    const getQuote = () => {
        axios.get('https://zenquotes.io/api/random',
        {
           headers: {
            'Access-Control-Allow-Origin': '*'
           } })
            .then(res => console.log(res.json()))
    }

    getQuote()
  return (
    <div className='Quotes'>
        <button></button>
    </div>
  )
}
