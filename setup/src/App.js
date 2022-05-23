import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor]= useState('')
  const [error, setError] = useState(false)
  const [colorList, setColorList] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault()
    try{
      let colors = new Values(color).all(10)
      setColorList(colors)
      setError(false)
      console.log(colors)
    }
    catch(error){
      setError(true)
      console.log(error)
    }
    
    
  }
  return (
    <section>
      <form onSubmit = {handleSubmit}>
        <label htmlFor='color'>Color</label>
        <input className = {`${error ? "error" : null}`} placeholder = "type color" id= "color" type = "text" value = {color} name = {color} onChange = {(e)=>{setColor(e.target.value)}}/>
        <button>Submit</button>
      </form>
      <h1>List of Colors</h1>
      <section>
        {colorList.map((color, index)=>{
          console.log(color)
          return <SingleColor key ={index} {...color} index = {index}/>
        })}
      </section>
    </section>
  )
}

export default App
