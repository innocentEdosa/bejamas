import closeIcon from "../Assets/Icons/close.svg";
import Button from "../Components/Button";
import PropTypes from "prop-types";

const CartDropdown = ({ clearCart, productList, close }) => {

    const clearCartHandler = () => {
        clearCart();
        close()
    }
  return (
    <div className="cartDropDown">
      <button
        name="close button"
        onClick={close}
        className="cartDropDown__closeBtn"
      >
        <img src={closeIcon} alt="close icon" width="18" height="18" />
      </button>
      <ul className="cartDropDown__products">
        {productList?.map((product) => {
          const alt = product?.image?.alt;
          return (
            <>
              <li key={product?.id} className="cartDropDown__product">
                <span className=" cartDropDown__product--details">
                  <h6>{product?.name}</h6>
                  <span>{`$${product?.price}`}</span>
                </span>
                <span className="cartDropDown__product--img ">
                  <img
                    src={product?.image?.src}
                    alt={alt}
                    width="149"
                    height="86"
                  />
                </span>
              </li>
              <li>
                <hr className="cartDropDown__product--divider"></hr>
              </li>
            </>
          );
        })}
      </ul>

      <div className="cartDropDown__clearBtn">
        <Button onClick={clearCartHandler} secondary>
          <span className="cartDropDown__clearBtn--cta">CLEAR</span>
        </Button>
      </div>
    </div>
  );
};

CartDropdown.propTypes = {
  productList: PropTypes.shape([]),
  close: PropTypes.func,
};
export default CartDropdown;
