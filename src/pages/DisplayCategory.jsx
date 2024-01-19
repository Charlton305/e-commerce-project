import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";

const DisplayCategoryList = () => {
  const category = useParams().category;
  const capitalizeFirstLetter = s => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div>
      <div className="shopTitle">
        <h1>{capitalizeFirstLetter(category)}</h1>
      </div>
      <ItemList category={category} />
    </div>
  );
};
export default DisplayCategoryList;
