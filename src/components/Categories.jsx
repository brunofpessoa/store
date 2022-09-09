import React, { useContext } from 'react';

import { productContext } from '../context/ProductProvider';

function Categories() {
  const {
    categories, setCategoryId, selectedCategory,
  } = useContext(productContext);

  return (
    <form className="flex flex-column gap-s pad-l fit-content categories">
      <h2>Categorias</h2>
      {categories.map((category) => (
        <button
          key={`button${category.id}`}
          className={selectedCategory === category.id ? 'text-left' : 'transparent-btn black text-left'}
          type="button"
          id={category.id}
          onClick={() => setCategoryId(category.id)}
        >
          {category.name}
        </button>
      ))}
    </form>
  );
}

export default Categories;
