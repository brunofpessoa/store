import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import CartItem from '../components/CartItem';
import Header from '../components/Header';
import { cartContext } from '../context/CartProvider';

function Cart() {
  const { cart } = useContext(cartContext);
  const navigate = useNavigate();

  function renderEmptyCart() {
    return (
      <div>
        <p>Seu carrinho está vazio.</p>
      </div>
    );
  }

  function renderCartItems() {
    const subtotal = cart.reduce((acc, curr) => acc + parseFloat(curr.price) * curr.quantity, 0);
    return (
      <div className="flex flex-wrap gap-l pad-l jc-c ai-sb">
        {cart.map((item) => (
          <CartItem
            key={`${item.id}${item.catalog_product_id}`}
            product={item}
          />
        ))}
        <p>{`Subtotal: R$ ${subtotal.toFixed(2)}`}</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      {cart.length > 0
        ? renderCartItems()
        : renderEmptyCart()}

      <button
        type="button"
        onClick={() => navigate('/')}
      >
        Continue comprando
      </button>
    </div>
  );
}

export default Cart;
