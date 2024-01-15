const Product = ({ id, productName, price, productImage }) => {
  return (
    <div>
      <p>{id}</p>
      <p>{productName}</p>
      <p>{price}</p>
      <img src={productImage} />
    </div>
  );
};
export default Product;
