import categories from "../assets/categories";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  return (
    <div>
      {categories.map(category => (
        <CategoryItem key={category.name} {...category} />
      ))}
    </div>
  );
};
export default CategoryList;
