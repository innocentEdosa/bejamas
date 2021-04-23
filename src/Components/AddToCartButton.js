import Button from "./Button";
import PropTypes from 'prop-types';


const AddToCartButton = ({
  classes,
  onClick,
  inCart,
}) => {
  return (
    <Button disabled={inCart} onClick={onClick} primary type="button">
      <span className={classes}>
        {inCart ? 'ADDED TO CART' : 'ADD TO CART'}
      </span>
    </Button>
  );
};

AddToCartButton.propTypes = {
  classes: PropTypes.string,
  onClick: PropTypes.func,
}


export default AddToCartButton;
