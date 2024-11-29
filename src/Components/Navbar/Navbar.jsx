import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../Components/Slice/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="py-3">
        <div className="container ">
          <div className="flex flex-col gap-5 justify-between lg:flex-row">
            <div className="text-xl font-semibold text-gray-600">
              {new Date().toUTCString().slice(0, 16)}
              <p className="text-2xl font-semibold pt-2 text-black">
                Food Website
              </p>
            </div>
            <div className="">
              <input
                onChange={(e) => dispatch(setSearch(e.target.value))}
                type="search"
                className="border-[2px] text-sm bg-white border-gray-400 rounded-md w-full px-3 py-2   lg:w-[350px]  "
                placeholder="Search here"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
