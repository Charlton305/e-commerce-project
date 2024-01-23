import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import { ShoppingCart } from "phosphor-react";
import logo from "../../images/logos/download.webp";

const Navbar = () => {
  const { getItemsInCart } = useContext(ShopContext);
  const itemCount = getItemsInCart();

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
          <Link className="shopping-cart__container" to="/cart">
            <ShoppingCart className="shopping-cart" size={32} />
            {itemCount > 0 && (
              <div className="shopping-cart__basket-count">{itemCount}</div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
