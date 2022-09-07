import React, { useContext } from 'react';
import CardItem from '../components/CartItem';
import { cartContext } from '../context/CartProvider';

function Cart() {
  const { cart } = useContext(cartContext);

  return (
    <div>
      {cart.map((item) => <CardItem key={`${item.id}${item.catalog_product_id}`} product={item} />)}
    </div>
  );
}

export default Cart;
