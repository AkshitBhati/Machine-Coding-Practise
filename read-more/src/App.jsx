import React, { useState } from 'react'

const App = () => {
  const [toogle, setToogle] = useState(false)
  const dataFromApi = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sapiente, molestiae, voluptates sint, et incidunt consequuntur doloribus nisi eius nulla itaque nobis quam magni nostrum laudantium error quasi! Recusandae, fugiat!"
  
  const sliceData = dataFromApi.slice(0,100)

  const readMoreHandler = () => {
    setToogle(!toogle)
  }
  return (
    <div className='read-more-container'>
      {dataFromApi.length > 100 ? (
      <p>{toogle ? dataFromApi : sliceData}.... <span style={{fontWeight:"600"}} onClick={readMoreHandler}>{toogle ? "Read Less" : "Read More"}</span></p> 
      ) : (<p>{dataFromApi}</p>)}
    </div>
  )
}

export default App
