import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import logo from "../images/logos/download.webp";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo__container">
        <img className="navbar-logo" src={logo} alt="skateboard logo" height={100}/>
      </div>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
