import React, { useEffect, useState } from "react";

import Fooddata from "../../FoodData/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Slice/CategorySlice";

const CategoryMenu = ({}) => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(Fooddata.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectCategory = useSelector((state) => state.category.category);

  return (
    <>
      <div className="mt-10">
        <div className="container">
          <h1 className="text-xl font-bold text-center mb-3 sm:text-start">
            Find the best food
          </h1>
          <div className=" py-4 gap-3 flex overflow-x-scroll sm:overflow-x-hidden scroll-smooth ">
            <button
              className={`bg-gray-200 rounded-md hover:bg-black hover:text-white font-semibold px-2 py-1 duration-200 ${
                selectCategory === "All" && "bg-black text-white"
              }`}
              onClick={() => dispatch(setCategory("All"))}
            >
              All
            </button>
            {categories.map((category, index) => {
              return (
                <button
                  className={` bg-gray-200 rounded-md hover:bg-black hover:text-white font-semibold px-2 py-1 duration-200 ${
                    selectCategory === category && "bg-black text-white"
                  }`}
                  onClick={() => dispatch(setCategory(category))}
                  text={category}
                  key={index}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryMenu;
