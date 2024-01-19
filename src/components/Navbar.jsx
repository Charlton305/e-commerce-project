import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import logo from "../images/logos/skateboard-logo.webp";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="skateboard logo" height={100}/>
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
