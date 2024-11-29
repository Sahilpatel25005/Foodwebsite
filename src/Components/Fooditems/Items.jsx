import React from "react";
import FoodData from "../../FoodData/FoodData";
import FoodItems from "./FoodItems";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function Items() {
  const handleaToast = (name) => {
    toast.success(`${name} Added Successfully`);
  };

  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-4 sm:grid-cols-3 ">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((data) => (
          <FoodItems
            key={data.id}
            id={data.id}
            name={data.name}
            desc={data.desc}
            price={data.price}
            rating={data.rating}
            img={data.img}
            handleaToast={handleaToast}
          />
        ))}
      </div>
    </>
  );
}

export default Items;
