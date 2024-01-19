import Product from "../components/Product";
import allProducts from "../assets/allProducts";

const ItemList = ({ category }) => {
  return (
    <div className="shop">
      <div className="products">
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
