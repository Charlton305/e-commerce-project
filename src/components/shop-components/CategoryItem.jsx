import { Link } from "react-router-dom";

const capitalizeFirstLetter = s => s.charAt(0).toUpperCase() + s.slice(1);

const CategoryItem = ({ name, categoryImage }) => {
  return (
    <Link className="category-item" to={`/${name}`}>
      <img className="category-item__image" src={categoryImage} />
      <div className="category-item__title">{capitalizeFirstLetter(name)}</div>
    </Link>
  );
};
export default CategoryItem;
