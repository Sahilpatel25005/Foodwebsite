import React from "react";
import { FaStar } from "react-icons/fa";
import { addtoCart } from "../Slice/CartSlice";
import { useDispatch } from "react-redux";

function FoodItems({ id, name, price, rating, img, desc, handleaToast }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="font-bold lg:w-[250px] sm:w-[220px] w-full bg-white p-5 flex flex-col rounded-lg gap-2">
        <img
          src={img}
          alt=""
          className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
        />
        <div className="text-sm flex justify-between">
          <h2>{name}</h2>
          <span className="text-green-500 ">₹{price}</span>
        </div>
        <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
        <div className="flex justify-between ">
          <span className="flex justify-center items-center">
            <FaStar className="mr-1 text-yellow-400" /> {rating}
          </span>
          <button
            className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
            onClick={() => {
              dispatch(addtoCart({ id, name, price, img, rating, qty: 1 }));
              handleaToast(name);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default FoodItems;
