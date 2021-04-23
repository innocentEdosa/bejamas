import clsx from "clsx";
import PropTypes from "prop-types";

const Button = ({ type, onClick, children, primary, disabled}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx({
        button: true,
        "button--primary": primary,
      })}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
  primary: PropTypes.bool,
};
export default Button;
