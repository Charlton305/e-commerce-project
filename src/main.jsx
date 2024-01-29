import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import ShopContextProvider from "./context/shop-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <Router>
        <App />
      </Router>
    </ShopContextProvider>
  </React.StrictMode>
);
