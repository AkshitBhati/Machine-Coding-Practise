import React from 'react'
import { FaRegStar, FaRegStarHalf, FaStar } from "react-icons/fa";

const Rating = ({ value }) => {
  return (
    <div className='flex gap-1'>
      <span>
        {value >= 1 ?( <FaStar className='text-yellow-500'/> ): value >= 0.5 ? ( <FaRegStarHalf className='text-yellow-500' /> ) : ( <FaRegStar /> ) }
      </span>
      <span>
        {value >= 2 ?( <FaStar className='text-yellow-500'/> ): value >= 1.5 ? ( <FaRegStarHalf className='text-yellow-500' /> ) : ( <FaRegStar /> ) }
      </span>
      <span>
        {value >= 3 ?( <FaStar className='text-yellow-500'/> ): value >= 2.5 ? ( <FaRegStarHalf className='text-yellow-500' /> ) : ( <FaRegStar /> ) }
      </span>
      <span>
        {value >= 4 ?( <FaStar className='text-yellow-500'/> ): value >= 3.5 ? ( <FaRegStarHalf className='text-yellow-500' /> ) : ( <FaRegStar /> ) }
      </span>
      <span>
        {value >= 5 ?( <FaStar className='text-yellow-500'/> ): value >= 4.5 ? ( <FaRegStarHalf className='text-yellow-500' /> ) : ( <FaRegStar /> ) }
      </span>
    </div>
  )
}

export default Rating
