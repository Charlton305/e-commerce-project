import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import logo from "../../images/logos/download.webp";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo-container">
          <Link to="/">
            <img className="navbar__logo" src={logo} alt="skateboard logo" />
          </Link>
        </div>
        <div className="navbar__links-container">
          <Link to="/">Shop</Link>
          <Link to="/cart">
            <ShoppingCart className="shopping-cart" size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
