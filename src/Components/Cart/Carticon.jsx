import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function Carticon({handleCart}) {
  return (
    <div className='fixed bottom-6 right-6 '>
  <div className="p-2 bg-white rounded-full shadow-md cursor-pointer" onClick={handleCart}>
  <FaShoppingCart className='text-2xl'/>
  </div>
    </div>
  )
}

export default Carticon
