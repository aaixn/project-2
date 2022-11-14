import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Quotes({quote, quoteDisplay, setQuoteDisplay}) {

  // const [quoteDisplay, setQuoteDisplay] = useState(false)



  return (
    <div className='Quotes'>
      <h2>{quote.quote}</h2>
      <h4>-{quote.person}</h4>
      <p>hi</p>
    </div>
  )
}
