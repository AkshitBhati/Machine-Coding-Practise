import React from 'react'
import Home from './page/Home'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Splitwise from './page/Splitwise'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>

   <Route path='/' element={<Home />}/>
   <Route path='/split-page/:id' element={<Splitwise />}/>
    </Routes>
    </>
  )
}

export default App
