import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { cartContext } from '../context/CartProvider';

function CardItem({ product }) {
  const {
    increaseItemQuantity,
    decreaseItemQuantity,
    removeProductFromCart,
  } = useContext(cartContext);

  const price = parseFloat(product.price).toFixed(2);

  return (
    <div>
      <div>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div>
        <p>{product.title}</p>
        <p>{`R$ ${price}`}</p>
        {product.shipping.free_shipping && <p>Frete Grátis</p>}
        <div>
          <button type="button" onClick={() => decreaseItemQuantity(product.id)}>-</button>
          {product.quantity}
          <button type="button" onClick={() => increaseItemQuantity(product.id)}>+</button>
        </div>
        <button type="button" onClick={() => removeProductFromCart(product.id)}>Remover ao carrinho</button>
      </div>
    </div>
  );
}

CardItem.propTypes = {
  product: propTypes.shape({}),
  title: propTypes.string,
}.isRequired;

export default CardItem;
