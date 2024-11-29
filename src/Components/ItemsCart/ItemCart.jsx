import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removefromCart, plusBtn, minusBtn } from "../Slice/CartSlice";
import toast from "react-hot-toast";

function ItemCart({ name, id, price, qty, img }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-4 flex gap-1 w-full shadow-md ">
        <div className="">
          <img src={img} alt="" className="w-[56px] h-[56px] " />
        </div>

        {/* name & delteicon */}

        <div className="w-full ">
          <div className="flex justify-between  px-1 items-start">
            <div>
              <h2 className="font-semibold">{name}</h2>
            </div>
            <div>
              <AiFillDelete
                className="mt-[6px] font-semibold cursor-pointer "
                onClick={() => {
                  dispatch(removefromCart({ id, img, name, price, qty }));

                  toast(`${name} removed!!`, {
                    icon: "👋",
                  });
                }}
              ></AiFillDelete>
            </div>
          </div>

          {/* price & qty + , -  */}

          <div className="flex justify-between px-1 py-1 items-center">
            <p className=" font-semibold text-brandGreen">₹{price}</p>
            <div className="flex gap-2">
              <AiOutlinePlus
                className="  border-2 border-gray-700 font-bold p-[2px] text-xl rounded-md hover:border-none hover:bg-brandGreen hover:text-white"
                onClick={() => (qty >= 1 ? dispatch(plusBtn({ id })) : qty)}
              />
              <p className="mt-[-2px] font-semibold text-brandGreen">{qty}</p>
              <AiOutlineMinus
                className="  border-2 border-gray-700 font-semibold p-[2px] text-xl rounded-md hover:border-none hover:bg-brandGreen hover:text-white"
                onClick={() => (qty > 1 ? dispatch(minusBtn({ id })) : qty)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCart;
