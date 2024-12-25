import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
    cartItems: [],
    addToCart: (product:any) => {product},
  });

type ProductType = {
    id:string | number,
    name: string,
    image:string,
    quantity:number,
    price:number
}
export const CartProvider = ({ children }:any) => {
  const [cartItems, setCartItems] = useState<any>([]);

  const addToCart = (product: ProductType) => {
    setCartItems((prevItems: any[]) => {
      const updatedCart = [...prevItems, product];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart)); 
      return updatedCart;
    });
  };

  useEffect(() => {
    const savedItems = localStorage.getItem("cartItems")
    if (savedItems) setCartItems(JSON.parse(savedItems));
  },[]);

  return (
    <CartContext.Provider value={{cartItems, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};
