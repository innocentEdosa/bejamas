import {
  useState,
  useContext,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from "react";
import { includes } from "lodash";
import { CartContext } from "../Context/Cart";
import { addToCartAction, clearCartAction } from "../Context/Cart/actions";
import { notify } from "../Utils/eventEmitter";
import CartDropdown from "../Components/CartDropdown";

const useCart = (product = {}) => {
  const isLoaded = useRef(null);

  const {
    cartState: { productInCart, productInCartIDs, cartProductCount },
    dispatch,
  } = useContext(CartContext);

  const [isInCart, setIsInCart] = useState(false);

  const clearCart = useCallback(() => {
    dispatch(clearCartAction);
  }, [dispatch]);

  const isProductInCart = useMemo(() => {
    const isInCart = includes(productInCartIDs, product?.id);
    return isInCart;
  }, [productInCartIDs, product?.id]);

  useEffect(() => {
    setIsInCart(isProductInCart);
  }, [isProductInCart]);

  const openCartDropdown = useCallback(() => {
    notify(
      "mainAlert",
      <CartDropdown clearCart={clearCart} productList={productInCart} />,
      {
        classes: "cartDropDown__wrapper",
      }
    );
  }, [productInCart, clearCart]);

  useEffect(() => {
    if (isLoaded.current && !!productInCart?.length) {
      openCartDropdown();
    } else {
      isLoaded.current = true;
    }
  }, [productInCart, openCartDropdown]);

  const addProductToCartHandler = (e) => {
    e.preventDefault();
    dispatch(addToCartAction(product));
  };

  return {
    isProductInCart,
    isInCart,
    cartProductCount,
    addProductToCartHandler,
    clearCart,
    openCartDropdown,
  };
};

export default useCart;
