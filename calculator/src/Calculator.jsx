import { Button } from '@chakra-ui/react';
import React from 'react'

const Calculator = () => {
    const btnValues = [
        ["C", "+-", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
      ];
  return (
    <div className='border rounded-md bg-blue-900 bg-opacity-85 w-[30%] m-auto mt-10'>
        <div className='h-20'></div>
        <div className='grid grid-cols-4 gap-4 p-3'>
        {btnValues.flat().map((btn, i) => (
            <Button className='bg-white py-3 rounded-md'>{btn}</Button>
        ))}
        </div>
    </div>
  )
}

export default Calculator
