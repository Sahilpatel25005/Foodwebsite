import React, { useState } from "react";
import ItemCart from "../ItemsCart/ItemCart";

const Cart = ({handleCart , cartOpen}) => {
  
  return (
 <>
  { cartOpen && (
      <div className="fixed top-0 bottom-0 right-0 bg-white w-full lg:w-[22vw] z-50 rounded-l-md">
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl">My Order</h1>
          <button className="border-2 border-gray-400 px-2 rounded-md  text-xl font-bold" onClick={handleCart}>X</button>
        </div>
        {/* Item portion */}
        <ItemCart />

        {/* bottom portion */}
        <div className="absolute bottom-0">
          <p className="font-semibold">Items : </p>
          <h2 className="font-bold text-xl mb-2">Total Amount :</h2>
          <hr className="w-[270%]" />
          <button className="p-2 bg-brandGreen mt-2 mb-5 text-center font-bold text-white tracking-wider rounded-md lg:w-[20vw] w-[92vw] block">Cheakout</button>
        </div>
      </div>
    </div>
)}
  
 </>  
  
)
};
export default Cart;
