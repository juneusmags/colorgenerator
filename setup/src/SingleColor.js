import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight,index}) => {
  const [alert, setAlert] = useState(false)
  const bgk = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const copyClipboard = () => {
    setAlert(true)
    navigator.clipboard.writeText(hex)
  }
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    }, 1000)
    return () => clearTimeout(timeout)
  },[alert])
  return (
    <>
      
      <article className = {`color`} style = {{backgroundColor : `rgb(${bgk})`}}>
        <p>{weight}</p>
        <p>{hex}</p>
        <button onClick = {copyClipboard}>Copy Hex Code</button>
        {alert ? <p>Copied to clip Board</p> : null}
      </article>
    </>
  )
}

export default SingleColor
