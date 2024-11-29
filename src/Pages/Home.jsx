import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import CategoryMenu from "../Components/Category/CategoryMenu";
import Cart from "../Components/Cart/Cart";

import Items from "../Components/Fooditems/Items";

const Home = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <Items />
      <Cart handleCart={handleCart} cartOpen={cartOpen} />
    </div>
  );
};

export default Home;
