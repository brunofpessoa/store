import React, { useContext } from 'react';
import { storeContext } from '../context/StoreProvider';
import ProductCard from './ProductCard';

function Products() {
  const { products } = useContext(storeContext);

  return (
    <div>
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}

export default Products;
