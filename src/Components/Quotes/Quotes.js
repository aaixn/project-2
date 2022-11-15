import React from 'react'
import '../Quotes/Quotes.css'


export default function Quotes({quote}) {
  return (
    <div className='quotes'>
      <h2>{quote.quote}</h2>
      <h4>-{quote.person}</h4>
    </div>
  )
}
