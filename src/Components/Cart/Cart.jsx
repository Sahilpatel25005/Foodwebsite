import React from "react";
import ItemCart from "../ItemsCart/ItemCart";
import { useSelector } from "react-redux";
import { PiSmileySadBold } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = ({ handleCart, cartOpen }) => {
  const item = useSelector((state) => state.cart.cart);
  
  
  const totalAmount = item.reduce(
    (totalItems, item) => totalItems + item.qty * item.price,
    0
  );
  const totalItems = item.reduce(
    (totalItems, item) => totalItems + item.qty,
    0
  );

  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed top-0 bottom-0 right-0 bg-white w-full  lg:w-[22vw] z-50 rounded-l-md ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 `}
      >
        <div className="p-4">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl">My Order</h1>
            <button
              className="border-2 border-gray-400 px-2  rounded-md  text-sm font-bold active:opacity-50 active:bg-black active:text-white "
              onClick={handleCart}
            >
              X
            </button>
          </div>
          {/* Item portion */}

          {item.length > 0 ? (
            item.map((food) => {
              return (
                <ItemCart
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  price={food.price}
                  rating={food.rating}
                  qty={food.qty}
                  img={food.img}
                />
              );
            })
          ) : (
            <h2 className="text-2xl  text-center py-44 opacity-30">
              {" "}
              Your Cart is empty !!!!!!{" "}
              <PiSmileySadBold className="text-6xl  mt-4 absolute left-[40%] sm:left-[47%] lg:left-[42%]" />
            </h2>
          )}

          {/* bottom portion */}
          <div className="absolute bottom-0 bg-white ">
            <p className="font-semibold">Items : {totalItems} </p>
            <h2 className="font-bold text-xl mb-2">
              Total Amount : {totalAmount}
            </h2>
            <hr className="w-[270%]" />
            <button
              onClick={() => navigate("/success")}
              className=" p-2 bg-brandGreen mt-2 mb-5 text-center font-bold text-white tracking-wider rounded-md lg:w-[20vw] w-[92vw] block"
            >
              Cheakout
            </button>
          </div>
        </div>
      </div>
      <div className="  fixed bottom-6 right-6 ">
        <div
          className={`p-2 bg-white rounded-full shadow-md cursor-pointer ${
            totalItems > 0 && "animate-bounce delay-500 transition-all  "
          } `}
          onClick={handleCart}  
        >
          <FaShoppingCart className="text-2xl " />
        </div>
      </div>
    </>
  );
};
export default Cart;
