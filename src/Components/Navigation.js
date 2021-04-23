import logo from "../Assets/Icons/logo.svg";
import cartIcon from "../Assets/Icons/cart.svg";
import { Link } from "react-router-dom";
import routes from "../Utils/routes";
import Divider from './Divider';
import useCart from '../Hooks/useCart'



const Navigation = () => {

  const { cartProductCount , openCartDropdown } = useCart()

  const openProductDropdown = () => {
    if(cartProductCount) {
      openCartDropdown()
    }
    return;
  }

  const renderLogo = () => {
    return (
      <div>
        <Link to={routes.landingPage}>
          <img width="124" height="19.67" src={logo} alt="Behamas logo" />
        </Link>
      </div>
    );
  };
  
  const renderCart = () => {
    return (
      <div className="nav__cart">
        <button onClick={openProductDropdown} type="button" className="nav__cart--button">
          <img width="32" height="32" src={cartIcon} alt="cart icon" />
        </button>
        {!!cartProductCount && <div className="nav__cart--counter">{cartProductCount}</div>}
      </div>
    );
  };


  return (
      <>
    <nav className="layout__container--content nav">
      <div className="nav__wrapper">
        {renderLogo()}
        {renderCart()}
      </div>
    </nav>
    <Divider />
    </>
  );
};

export default Navigation;
