import React from 'react';
import propTypes from 'prop-types';

function ProductCard({ product }) {
  return (
    <div>
      {product.title}
    </div>
  );
}

ProductCard.propTypes = {
  product: propTypes.shape({}),
  title: propTypes.string,
}.isRequired;

export default ProductCard;
