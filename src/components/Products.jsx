import React, { useContext } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { productContext } from '../context/ProductProvider';
import ProductCard from './ProductCard';

function Products() {
  const { products, loading } = useContext(productContext);

  return (
    <div className="flex width-100 jc-c pad-l">
      <ClipLoader loading={loading} color="red" size={30} />

      {!loading && (
      <div className="flex flex-wrap gap-l jc-c">
        {products.length > 1 && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products.length < 1 && <h2>Nenhum produto encontrado</h2>}
      </div>
      )}
    </div>
  );
}

export default Products;
