import React, { createContext, useContext, useState } from 'react';

//CONTEXTO
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === producto.id);
      if (itemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1; 
        return updatedCart;
      } else {
        return [...prevCart, { ...producto, quantity: 1 }];
      }
    });
  };

  const changeQuantity = (index, delta) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const updatedQuantity = updatedCart[index].quantity + delta;
      
      if (updatedQuantity >= 1) {
        updatedCart[index].quantity = updatedQuantity;
      }
      
      return updatedCart;
    });
  };

  const removeItem = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cart, agregarAlCarrito, changeQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
