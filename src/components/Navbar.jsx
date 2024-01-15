import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to="/">Store</Link>
      <Link to="/cart">Cart</Link>
    </div>
  )
}
export default Navbar