import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const Product = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const fetchProductData = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const { dispatch } = useContext(CartContext);
  
  const addToCart = (data) => {
    dispatch({ type: "ADD_TO_CART", payload: data });
  };

  return (
    <div className='flex flex-col sm:flex-row w-full m-auto mt-10'>
      <aside className='sm:w-1/2 m-auto'>
        <img src={data.image} alt="" className='h-[300px] m-auto' />
      </aside>
      <aside className='sm:w-1/2 m-auto flex flex-col gap-2'>
        <h2 className='font-semibold text-2xl'>{data.title}</h2>
        <p className='text-md'>{data.description}</p>
        <h2 className='font-semibold text-2xl'>$ {data.price}</h2>

        <button
          className='bg-blue-500 w-[30%] text-white py-2 rounded-md cursor-pointer'
          onClick={() => addToCart(data)}
        >
          Add to cart
        </button>
      </aside>
    </div>
  );
};

export default Product;
