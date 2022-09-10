import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import CartItem from '../components/CartItem';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { cartContext } from '../context/CartProvider';

function Cart() {
  const { cart, setCart } = useContext(cartContext);
  const navigate = useNavigate();

  function renderEmptyCart() {
    return (
      <div className="flex flex-column gap-l ai-c pad-l width-100">
        <p className="large bold">Seu carrinho está vazio.</p>
        <button
          className="fit-content"
          type="button"
          onClick={() => navigate('/')}
        >
          Continue comprando
        </button>
      </div>
    );
  }

  function performCheckout() {
    setCart([]);
    navigate('/checkout');
  }

  function renderCartItems() {
    const subtotal = cart.reduce((acc, curr) => acc + parseFloat(curr.price) * curr.quantity, 0);
    return (
      <div className="flex gap-l pad-l flex-wrap jc-c">
        <div className="flex flex-wrap gap-l jc-c ai-sb max-width-50">
          {cart.map((item) => (
            <CartItem
              key={`${item.id}${item.catalog_product_id}`}
              product={item}
            />
          ))}

        </div>
        <div className="flex flex-column gap-m resume pad-m">
          <h2>Resumo da compra</h2>
          {cart.map((cartItem) => (
            <div className="flex gap-m" key={`${cartItem.quantity}${cartItem.title}`}>
              <p>{cartItem.quantity}</p>
              <p>{cartItem.title}</p>
            </div>
          ))}
          <button
            type="button"
            onClick={() => navigate('/')}
          >
            Continue comprando
          </button>
          <p className="large">
            Subtotal:
            <span className="bold">
              {` R$ ${subtotal.toFixed(2)}`}
            </span>
          </p>
          <button
            className="theme bold"
            type="button"
            onClick={performCheckout}
          >
            Finalizar compra
          </button>
        </div>

      </div>
    );
  }

  return (
    <div className="flex flex-column page">
      <Header />
      {cart.length > 0
        ? renderCartItems()
        : renderEmptyCart()}
      <Footer />
    </div>
  );
}

export default Cart;
