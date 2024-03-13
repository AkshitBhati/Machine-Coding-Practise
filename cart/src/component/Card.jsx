import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {
  const navigate = useNavigate()

  const navigateToProductPage = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <div className='border border-gray-300 rounded-md overflow-hidden shadow-md cursor-pointer' onClick={() => navigateToProductPage(data.id)}>
      <img
        src={data.image}
        alt="Image"
        className='object-cover h-[300px] w-full rounded-t-md'
      />
      <div className='p-4'>
        <h3 className='text-center font-bold text-lg'>Price: ${data.price}</h3>
        <p className='text-center'>{data.title}</p>
      </div>
    </div>
  );
};

export default Card;
