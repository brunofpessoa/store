import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import propTypes from 'prop-types';
import { saveToLocalStorage, getFromLocalStorage } from '../helpers/handleLocalStorage';

export const cartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addProductToCart(item) {
    if (!cart.some((cartItem) => cartItem.id === item.id)) {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  function removeProductFromCart(id) {
    const newCart = cart.filter((cartItem) => cartItem.id !== id);
    setCart(newCart);
  }

  function increaseItemQuantity(id) {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCart(newCart);
  }

  function decreaseItemQuantity(id) {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        if (cartItem.quantity > 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
      }
      return cartItem;
    });
    setCart(newCart);
  }

  useEffect(() => {
    setCart(getFromLocalStorage('cart'));
  }, []);

  useEffect(() => {
    if (cart.length > 1) {
      saveToLocalStorage('cart', cart);
    }
  }, [cart]);

  const value = useMemo(() => ({
    cart,
    addProductToCart,
    removeProductFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  }));

  return (
    <cartContext.Provider value={value}>
      {children}
    </cartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default CartProvider;
