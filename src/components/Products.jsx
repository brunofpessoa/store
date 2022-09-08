import React, { useContext } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { productContext } from '../context/ProductProvider';
import ProductCard from './ProductCard';

function Products() {
  const { products, loading } = useContext(productContext);

  return (
    <div>
      <ClipLoader loading={loading} color="red" size={30} />

      {!loading && (
      <div className="flex flex-wrap gap-l">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      )}
    </div>
  );
}

export default Products;
