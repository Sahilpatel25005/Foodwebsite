import React from "react";

function CategoryButton({ text }) {
  return (
    <button className="bg-gray-200 rounded-md hover:bg-[#37fd37] font-semibold px-2 py-1 duration-200">
      {text}
    </button>
  );
}

export default CategoryButton;
