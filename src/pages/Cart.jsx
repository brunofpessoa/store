import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
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
    return cart.map((item) => (
      <CartItem
        key={`${item.id}${item.catalog_product_id}`}
        product={item}
      />
    ));
  }

  return (
    <div>
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
