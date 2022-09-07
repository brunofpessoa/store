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
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <p>{product.title}</p>
        <p>{`R$ ${price}`}</p>
        {product.shipping.free_shipping && <p>Frete Grátis</p>}
        <div>
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
