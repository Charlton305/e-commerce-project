import Product from "./Product";
import allProducts from "../../assets/allProducts";

const ItemList = ({ category }) => {
  return (
    <div className="products">
      <div className="products__container">
        {allProducts.map(item => {
          if (item.category == category) {
            return <Product key={item.id} {...item} />;
          }
        })}
      </div>
    </div>
  );
};
export default ItemList;
