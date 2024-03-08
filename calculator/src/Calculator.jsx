import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaBackspace } from "react-icons/fa";

const Calculator = () => {
  const [btnText, setBtnText] = useState("");
  const btnValues = [
    ["/", "%", "C", "delete-last"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  //using eval
  //   const buttonText = (text) => {
  //     setBtnText((prevText) => {
  //       if (text === "=") {

  //         const result = eval(prevText.join(''));
  //         return [result];
  //       } else if (text === "C") {
  //         return [];
  //       } else {

  //         return [...prevText, text];
  //       }
  //     });
  //   };

  const evaluate = () => {
    const expression = btnText.join('');
  
    try {
      // Regular expression to match valid mathematical expressions
      const regex = /^(\d+(\.\d+)?[+\-*/%]?)+\d+$/;
      if (!regex.test(expression)) {
        throw new Error('Invalid expression');
      }
  
      // Using the Function constructor to avoid eval
      const result = new Function('return ' + expression)();
      return [result.toString()];
    } catch (error) {
      console.error('Error during evaluation:', error.message);
      return ['Error'];
    }
  };
  
  const buttonText = (text) => {
    setBtnText((prevText) => {
      if (text === 'C') {
        return [];
      } else if (text === 'delete-last') {
        return prevText.slice(0, -1);
      } else if (text === '=') {
        const result = evaluate();
        return result;
      }
      return [...prevText, text];
    });
  };
  

  return (
    <div className="border rounded-md bg-blue-900 bg-opacity-85 w-full sm:w-[70%] md:w-[45%] lg:w-[30%] m-auto mt-10">
      <div className="h-20 flex justify-end items-center text-3xl text-white px-4">
        {btnText}
      </div>
      <div className="grid grid-cols-4 gap-4 p-3">
        {btnValues.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((btn, colIndex) => (
              <Button
                key={colIndex}
                className="bg-white py-3 rounded-md text-xl"
                onClick={() => buttonText(btn)}
              >
                {btn === "delete-last" ? <FaBackspace /> : btn}
              </Button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
