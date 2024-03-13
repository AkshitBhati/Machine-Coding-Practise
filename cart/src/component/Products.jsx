import React, { useEffect, useState } from 'react'
import Card from './Card'

const Products = () => {
    const [data, setData] = useState([])
    
    const fetchProducts = () => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then((data) => setData(data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {data.map((data, index) => (
        <React.Fragment key={index}>
        <Card data={data} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default Products
