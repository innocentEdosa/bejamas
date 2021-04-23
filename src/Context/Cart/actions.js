import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types";

export const addToCartAction = (product) => (dispatch) =>
  dispatch({ type: ADD_TO_CART, product });

export const removeFromCartAction = (product) => (dispatch) =>
  dispatch({ type: REMOVE_FROM_CART, product });

export const clearCartAction = (dispatch) => dispatch({ type: CLEAR_CART });
