import { useRef} from "react";
import AddToCartButton from "./AddToCartButton";
import { debounce } from "lodash";
import PropTypes from "prop-types";
import useCart from "../Hooks/useCart";

const ProductCard = ({
  bestSeller,
  featured,
  hasCta,
  product,
  productImage,
}) => {
  const togglerRef = useRef(null);

  const { isInCart, addProductToCartHandler } = useCart(product);

  const showCta = useRef(
    debounce(
      () => {
        if (togglerRef.current) {
          togglerRef.current.checked = true;
        }
      },
      500,
      {
        trailing: true,
      }
    )
  );

  const hideCta = () => {
    showCta?.current?.cancel();
    if (togglerRef.current) {
      togglerRef.current.checked = false;
    }
  };

  return (
    <div
      onMouseOver={showCta.current}
      onMouseLeave={hideCta}
      className="productCard"
    >
      <img
        className="productCard--img"
        src={productImage?.src}
        alt={productImage?.alt || "product display"}
      />
      {featured && (
        <div className="productCard__tag productCard__tag--featured">
          <h6>Photo of the day</h6>
        </div>
      )}
      {bestSeller && (
        <div className="productCard__tag productCard__tag--bestSeller">
          <h6>Best Seller</h6>
        </div>
      )}
      {hasCta && (
        <>
          <input
            ref={togglerRef}
            type="checkbox"
            className=" productCard__btn--toggler hidden"
          />
          <div className="productCard__btn--cta">
            <AddToCartButton
              inCart={isInCart}
              onClick={addProductToCartHandler}
              classes="productCard--cta"
            />
          </div>
        </>
      )}
    </div>
  );
};

ProductCard.defaultProps = {
  bestSeller: false,
  featured: false,
  hasCta: false,
};
ProductCard.propTypes = {
  productBanner: PropTypes.string,
  product: PropTypes.shape({}),
  bestSeller: PropTypes.bool.isRequired,
  featured: PropTypes.bool.isRequired,
  hasCta: PropTypes.bool.isRequired,
};

export default ProductCard;
