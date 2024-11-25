import React , {useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import CategoryMenu from '../Components/Category/CategoryMenu'
import FoodItems from '../Components/Fooditems/FoodItems'
import Cart from '../Components/Cart/Cart'
import Carticon from '../Components/Cart/Carticon'


const Home = () => {
  const [cartOpen, setCartOpen] = useState(true);

  const handleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart  handleCart={handleCart} cartOpen={cartOpen} />  
      <Carticon handleCart={handleCart}  />
    </div>
  )
}

export default Home
