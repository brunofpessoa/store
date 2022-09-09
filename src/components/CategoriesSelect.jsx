import React, { useContext } from 'react';

import { productContext } from '../context/ProductProvider';

function Categories() {
  const {
    categories, setCategoryId, selectedCategory,
  } = useContext(productContext);

  return (
    <form>
      <select
        name="category"
        onChange={({ target }) => setCategoryId(target.value)}
        value={selectedCategory}
      >
        {categories.map((category) => (
          <option
            key={category.id}
            type="radio"
            id={category.id}
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default Categories;
