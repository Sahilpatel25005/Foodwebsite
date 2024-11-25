import React from "react";
import CategoryButton from "./CategoryButton";

const CategoryMenu = ({ text }) => {
  return (
    <>
      <div className="mt-10">
        <div className="container">
          <h1 className="text-xl font-bold text-center mb-3 sm:text-start">
            Find the best food
          </h1>
          <div className=" py-4 gap-3 flex overflow-x-scroll sm:overflow-x-hidden scroll-smooth ">
            <CategoryButton text="All" />
            <CategoryButton text="Lunch" />
            <CategoryButton text="Breakfast" />
            <CategoryButton text="Dinner" />
            <CategoryButton text="Snacks" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryMenu;
