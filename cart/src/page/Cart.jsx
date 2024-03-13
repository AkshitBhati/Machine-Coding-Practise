import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cartState, dispatch } = useContext(CartContext);
  
    const removeItem = (data) => {
        dispatch({ type:"REMOVE_TO_CART", payload:data })
    }

  return (
    <div className="w-[90%] m-auto flex flex-col mt-2 rounded-md p-2 gap-2">
      {cartState?.cartItems.map((cart) => {
        return (
          <div className="border border-gray-300 shadow-md cursor-pointer w-[90%] m-auto flex justify-around items-center p-1" key={cart.id}>
            <img
              src={cart.image}
              alt="Product Image"
              className="h-[100px] rounded-md w-[100px]"
            />
            <h2 className="font-semibold text-sm">{cart.title}</h2>
            
            <button 
            className="bg-blue-500 p-2 rounded-md text-white cursor-pointer"
            onClick={() => removeItem(cart)}
            >
            Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
