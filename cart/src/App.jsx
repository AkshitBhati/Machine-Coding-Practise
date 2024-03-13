import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './page/Home'
import Product from './page/Product'
import Cart from './page/Cart'

const App = () => {


  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      
    </>
  )
}

export default App
