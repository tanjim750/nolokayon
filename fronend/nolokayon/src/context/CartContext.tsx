import { createContext, useContext, useEffect, useState } from 'react';
import { UserInfo } from './UserInfo';
import fetchData from '../components/fetchData';
import apiUrl from '../components/APIURL';

export const CartContext = createContext({
    cartItems: [],
    addToCart: () => {},
  });


export const CartProvider = ({ children }:any) => {
  const [cartItems, setCartItems] = useState<any>([]);
  const {visitor}:any =  useContext(UserInfo);

  const getCartItems = async () => {
    console.log('Getting Cart',visitor,visitor.visitor_id);
    const url = apiUrl +"checkout?visitor_id="+visitor.visitor_id;
    const result = await fetchData(url);
    if (result.status == 200){
      setCartItems(result.items)
    }
  };

  const addToCart = () => {
    getCartItems();
  };

  useEffect(() => {
    getCartItems();
  },[visitor]);

  return (
    <CartContext.Provider value={{cartItems, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};
