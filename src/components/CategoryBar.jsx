import { Link } from "react-router-dom"

const CategoryBar = () => {
  return (
    <div className="category-bar">
      <Link to="/skateboards">Skateboards</Link>
      <Link to="/protection">Protection</Link>
      <Link to="/clothing">Clothing</Link>
      <Link to="/shoes">Shoes</Link>
    </div>
  )
}
export default CategoryBar