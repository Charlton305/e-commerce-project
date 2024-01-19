import { Route, Routes } from "react-router-dom";
import "./styles/styles.scss";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import DisplayCategory from "./pages/DisplayCategory";
import CategoryBar from "./components/CategoryBar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <CategoryBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/:category" element={<DisplayCategory />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
export default App;
