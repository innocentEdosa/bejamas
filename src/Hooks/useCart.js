import { useState, useContext, useMemo, useEffect } from "react";
import { includes } from "lodash";
import { CartContext } from "../Context/Cart";
import { addToCartAction } from "../Context/Cart/actions";

const useCart = (product = {}) => {
  const {
    cartState: { productInCartIDs, cartProductCount },
    dispatch,
  } = useContext(CartContext);

  const [isInCart, setIsInCart] = useState(false);
  

  const isProductInCart = useMemo(() => {
    const isInCart = includes(productInCartIDs, product?.id);
    return isInCart;
  }, [productInCartIDs, product?.id]);

  useEffect(() => {
    setIsInCart(isProductInCart);
  }, [isProductInCart]);

  const addProductToCartHandler = (e) => {
    e.preventDefault();
    dispatch(addToCartAction(product));
  };

  return {
    isProductInCart,
    isInCart,
    cartProductCount,
    addProductToCartHandler,
  };
};

export default useCart;
