import products from "../products";
import Product from "../components/Product";

const Store = () => {
  return (
    <div>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};
export default Store;
