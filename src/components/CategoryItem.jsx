import { Link } from "react-router-dom";

const CategoryItem = ({ name, categoryImage }) => {
  return (
    <div>
      <div>
        <Link to={`/${name}`}>
          <img src={categoryImage} />
        </Link>
      </div>
    </div>
  );
};
export default CategoryItem;
