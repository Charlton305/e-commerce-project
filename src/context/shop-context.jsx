import { createContext } from "react";
import { useState } from "react";
import allProducts from "../assets/allProducts";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < allProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = props => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = allProducts.find(
          product => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const getItemsInCart = () => {
    let count = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        count += cartItems[item];
      }
    }
    return count;
  };

  const addToCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const inputCartAmount = (itemId, amount) => {
    setCartItems(prev => ({ ...prev, [itemId]: amount }));
  };

  const clearBasket = () => {
    setCartItems(() => getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    inputCartAmount,
    clearBasket,
    getTotalCartAmount,
    getItemsInCart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
