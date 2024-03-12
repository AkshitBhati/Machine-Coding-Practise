import React from 'react'

const Input = ({ handleChange, value, reset }) => {
  return (
    <>
    <input type="text" 
    placeholder='Search year or population' 
    onChange={(e) => handleChange(e.target.value)} 
    value={value}
    />
    <button onClick={reset}>reset</button>
    </>
  )
}

export default Input
