import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Components/Slice/CartSlice";
import CategorySlice from "../Components/Slice/CategorySlice";
import SearchSlice from "../Components/Slice/SearchSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
  },
});

export default store;
