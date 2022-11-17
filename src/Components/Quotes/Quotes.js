import React from 'react'
import '../Quotes/Quotes.css'


export default function Quotes({quote}) {
  return (
    <div className='quotes'>
      <h1>{quote.quote}</h1>
      <h2>-{quote.person}</h2>
    </div>
  )
}
