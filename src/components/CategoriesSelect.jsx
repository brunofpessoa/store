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
      <form>
        <select
          name="category"
          onChange={({ target }) => setCategoryId(target.value)}
          value={selectedCategory}
        >
          <option value="">
            Selecione uma categoria
          </option>
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
    </>
  );
}

export default Categories;
