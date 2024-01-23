import { Route, Routes } from "react-router-dom";
import "./styles/styles.scss";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Navbar from "./components/app-components/Navbar";
import Products from "./pages/Products";
import CategoryBar from "./components/app-components/CategoryBar";

const App = () => {
  return (
    <div>
      <Navbar />
      <CategoryBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/:category" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
export default App;
