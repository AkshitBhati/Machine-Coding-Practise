import React, { useEffect, useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [userInterval, setUserInterval ] = useState(1000)
  const [isPause, setIsPause] = useState(false)
  let intervalTime = 1000 

  useEffect(() => {
    let timer
    if (!isPause && counter > 0) {
    timer = setTimeout(() => {
      setCounter((prev) => prev -1)
      
    }, intervalTime)
  }
    return () => clearInterval(timer) 
  }, [counter, intervalTime, isPause])

  let startCounter = function (){
    if(counter === 0){
      setCounter(userInterval)
    }
    setIsPause(false)
  }

  let pauseCounter = function (){
    setIsPause(true)
  }

  let stopCounter = function (){
    setCounter(0)
    setIsPause(false)
  }
  const handleChange = (event) => {
    setUserInterval(event.target.value);
  };

  const resumeCOunter = () => {
    setIsPause(false)
  }

  return (
    <div>
      <h1>Counter : {counter}</h1>
    <input type="text" onChange={handleChange} value={userInterval} />
      {isPause ? (<button onClick={resumeCOunter}> resume</button> ): (<button onClick={pauseCounter}> pause</button>)}
      <button onClick={startCounter}>start</button>
      <button onClick={stopCounter}>stop</button>
    </div>
  )
}

export default App
