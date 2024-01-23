import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

const CartItem = ({ id, productName, price, productImage }) => {
  const { cartItems, addToCart, removeFromCart, inputCartAmount } =
    useContext(ShopContext);

  return (
    <div className="cart-item">
      <img src={productImage} />
      <div className="cart-item__description">
        <p>
          <b>{productName}</b>
        </p>
        <p className="cart-item__price">£{price}</p>
        <div className="cart-item__count">
          <button
            className="cart-item__button"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            value={cartItems[id]}
            onChange={e => inputCartAmount(id, Number(e.target.value))}
          />
          <button className="cart-item__button" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
