import React from "react";
import useThunkReducer from "../../Hooks/useThunkReducer";
import { productReducer, initialState } from "./reducer";

export const ProductContext = React.createContext();

const ProductContextWrapper = ({ children }) => {
  const [productState, dispatch] = useThunkReducer(
    productReducer,
    initialState
  );

  const value = {
    productState,
    dispatch,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContextWrapper;
