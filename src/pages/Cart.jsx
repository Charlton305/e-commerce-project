import allProducts from "../assets/allProducts";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {allProducts.map(product => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} {...product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: £{totalAmount.toFixed(2)} </p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};
export default Cart;
