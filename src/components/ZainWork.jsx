import React, { useState } from 'react'

const ZainWork = () => {
    const [text,setText]=useState('')
  return (
    <div>
        Search:<input type='search' onChange={(e)=>setText(e.target.value)}></input>
        <h1>{text}</h1>
        <p>Codding </p>
    </div>
  )
}

export default ZainWork