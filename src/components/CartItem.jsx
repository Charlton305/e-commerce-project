import { ShopContext } from "../context/shop-context";
import { useContext } from "react";

const CartItem = ({ id, productName, price, productImage }) => {
  const { cartItems, addToCart, removeFromCart, inputCartAmount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p className="cart-item__price">£{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={e => inputCartAmount(id, Number(e.target.value))}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
