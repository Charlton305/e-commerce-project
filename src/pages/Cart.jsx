import allProducts from "../assets/allProducts";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";
import CartItem from "../components/cart-components/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <h1>Your Cart Items</h1>
      <div className="cart-items">
        {allProducts.map(product => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} {...product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="checkout__subtotal">
            Subtotal: £{totalAmount.toFixed(2)}{" "}
          </p>
          <div className="checkout__button-container">
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <h1 className="cart__empty">Your Cart is Empty</h1>
      )}
    </div>
  );
};
export default Cart;
