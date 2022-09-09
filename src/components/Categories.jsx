import React, { useContext } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { productContext } from '../context/ProductProvider';

function Categories() {
  const {
    categories, setCategoryId, loading, selectedCategory,
  } = useContext(productContext);

  return (
    <>
      {categories.length < 1 && <ClipLoader loading={loading} color="red" size={30} />}
      <form className="flex flex-column gap-s pad-l fit-content categories">
        <h2 className="text-center">Categorias</h2>
        {categories.map((category) => (
          <button
            key={`button${category.id}`}
            className={selectedCategory === category.id ? '' : 'transparent-btn black'}
            type="button"
            id={category.id}
            onClick={() => setCategoryId(category.id)}
          >
            {category.name}
          </button>
        ))}
      </form>
    </>
  );
}

export default Categories;
