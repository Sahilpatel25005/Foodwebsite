import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const exist = state.cart.find((item) => item.id === action.payload.id);
      if (exist) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : { ...item }
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    removefromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    plusBtn: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty + 1 }
          : { ...item }
      );
    },
    minusBtn: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty - 1 }
          : { ...item }
      );
    },
  },
});
export const { plusBtn, addtoCart, removefromCart, minusBtn } =
  CartSlice.actions;
export default CartSlice.reducer;
