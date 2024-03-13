import React, { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const { cartState } = useContext(CartContext);
  const cartSize = cartState.cartItems.length;
  
  return (
    <div className="bg-gray-300 w-full p-3 flex justify-between">
      <Link to="/">
        <h1>Logo</h1>
      </Link>

      <div className="flex items-center gap-2 relative">
        <Link to="/cart"><CiShoppingCart className="text-2xl" /></Link>
        {cartSize > 0 && (
          <div className="bg-red-500 rounded-full w-5 h-5 text-white text-xs absolute -top-2 -right-2  flex items-center justify-center">
            {cartSize}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
