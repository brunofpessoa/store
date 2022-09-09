import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductProvider from './context/ProductProvider';
import CartProvider from './context/CartProvider';
import Detail from './pages/Details';
import Checkout from './pages/Checkout';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:productId" element={<Detail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
