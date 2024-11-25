import React from "react";
import FoodData from "../../FoodData/FoodData";
import { FaStar } from "react-icons/fa";

function FoodItems() {
  return (
    <>
      <div className="py-3">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-3 gap-7  ">
            {FoodData.map((data, index) => (
              <div className="bg-white p-5 rounded-md " key={index}>
                <div className="flex justify-center items-center ">
                  <img
                    src={data.img}
                    alt=""
                    className="w-[200px] h-[130px] cursor-grab hover:scale-110 duration-500  "
                  />
                </div>

                {/* name & price */}
                <div className="flex justify-between items-center mt-2 gap-3">
                  <p className="text-sm font-semibold ">{data.name}</p>
                  <p className="text-[#37fd37] font-semibold">₹{data.price}</p>
                </div>

                  {/* discription */}
                <p className="overflow-ellipsis overflow-hidden whitespace-nowrap mt-2">
                  {data.desc}
                </p>

                {/* bottom style */}
                <div className="flex justify-between  mt-3 ">
                  <div className="flex justify-center items-center gap-2 ">
                    <FaStar className="text-xl text-yellow-500" />
                    <p className="text-xl font-bold">{data.rating}</p>
                  </div>
                  <button className="py-1 px-2 font-bold text-sm text-white bg-[#37fd37] rounded-lg s">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodItems;
