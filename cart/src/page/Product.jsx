import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import Rating from '../component/Rating';

const Product = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const { dispatch } = useContext(CartContext);

  const fetchProductData = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then((data) => setData(data))
      .catch(error => console.error('Error fetching product data:', error));
  };

  useEffect(() => {
    fetchProductData();
  }, [id]); // Include id as a dependency to fetch data when the id changes

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: data });
  };

  return (
    <div className='flex flex-col sm:flex-row w-full m-auto mt-10'>
      {data && data.title ? (
        <>
          <aside className='sm:w-1/2 m-auto'>
            <img src={data.image} alt="" className='h-[300px] m-auto' />
          </aside>
          <aside className='sm:w-1/2 m-auto flex flex-col gap-2'>
            <h2 className='font-semibold text-2xl'>{data.title}</h2>
            <p className='text-md'>{data.description}</p>
            <h2 className='font-semibold text-2xl'>$ {data.price}</h2>

            <Rating value={data.rating?.rate || 0} />
            <button
              className='bg-blue-500 w-[30%] text-white py-2 rounded-md cursor-pointer'
              onClick={addToCart}
            >
              Add to cart
            </button>
          </aside>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
