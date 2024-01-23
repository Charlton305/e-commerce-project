import { useParams } from "react-router-dom";
import ProductList from "../components/products-components/ProductList";

const Products = () => {
  const category = useParams().category;
  const capitalizeFirstLetter = s => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div>
      <div className="shop__title">
        <h1>{capitalizeFirstLetter(category)}</h1>
      </div>
      <ProductList category={category} />
    </div>
  );
};
export default Products;
