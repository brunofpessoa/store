import React, { useContext } from 'react';
import { productContext } from '../context/ProductProvider';
import ProductCard from './ProductCard';

function Products() {
  const { products } = useContext(productContext);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
