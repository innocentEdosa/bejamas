import React from "react";
import useThunkReducer from "../../Hooks/useThunkReducer";
import { cartReducer, initialState } from "./reducer";

export const CartContext = React.createContext();

const CartContextWrapper = ({ children }) => {
  const [cartState, dispatch] = useThunkReducer(
    cartReducer,
    initialState
  );

  const value = {
    cartState,
    dispatch,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

export default CartContextWrapper;
