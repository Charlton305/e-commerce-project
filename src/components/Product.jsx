import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { useParams } from "react-router-dom";

const Product = ({ id, productName, price, productImage }) => {
  const category = useParams().category;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>£{price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
      </button>
    </div>
  );
};
export default Product;
