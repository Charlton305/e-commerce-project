import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = ({ id, productName, price, productImage }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img className="product__image" src={productImage} />
      <p className="product__description">
        <b>{productName}</b>
      </p>
      <p className="product__description">£{price}</p>
      <button className="product__button" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
      </button>
    </div>
  );
};
export default Product;
