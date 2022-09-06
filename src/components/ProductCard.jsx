import React from 'react';
import propTypes from 'prop-types';

function ProductCard({ product }) {
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
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: propTypes.shape({}),
  title: propTypes.string,
}.isRequired;

export default ProductCard;
