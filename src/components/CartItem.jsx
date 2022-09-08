import React, { useContext } from 'react';
import propTypes from 'prop-types';

import { cartContext } from '../context/CartProvider';

function CartItem({ product }) {
  const {
    increaseItemQuantity,
    decreaseItemQuantity,
    removeProductFromCart,
  } = useContext(cartContext);

  const price = parseFloat(product.price).toFixed(2);

  return (
    <div className="card jc-sb flex flex-column gap-s">
      <img
        className="card-image"
        src={product.thumbnail.replace('I.jpg', 'J.jpg')}
        alt={product.title}
      />
      <div className="flex flex-column gap-m jc-c">
        <p className="card-title">{product.title}</p>
        <p className="bold">{`R$ ${price}`}</p>
        {product.shipping.free_shipping && <p className="green">Frete Grátis</p>}
      </div>
      <div className="flex flex-column gap-s">
        <div className="flex gap-s ai-c">
          <button type="button" onClick={() => decreaseItemQuantity(product.id)}>-</button>
          <p>{product.quantity}</p>
          <button type="button" onClick={() => increaseItemQuantity(product.id)}>+</button>
          <p>{`Disponível: ${product.available_quantity}`}</p>
        </div>
        <button
          type="button"
          onClick={
            () => removeProductFromCart(product.id)
          }
        >
          Remover ao carrinho
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  product: propTypes.shape({}),
}.isRequired;

export default CartItem;
