import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types";

export const initialState = {
    cartProductCount: 0,
  productInCartIDs: [],
  productInCart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
    const updatedCartProductCount = state?.cartProductCount + 1
      const updatedProductInCart = [action?.product, ...state?.productInCart];
      const updatedProductInCartIDs = [
        action?.product?.id,
        ...state?.productInCartIDs,
      ];

      return {
        ...state,
        productInCart: updatedProductInCart,
        productInCartIDs: updatedProductInCartIDs,
        cartProductCount: updatedCartProductCount
      };
    }
    default:
      return state;
  }
};
