import React from 'react'
import '../Quotes/Quotes.css'


export default function Quotes({quote}) {
  return (
    <div className='quotes'>
      <h1>{quote.text}</h1>
      <h2>-{quote.author}</h2>
    </div>
  )
}
