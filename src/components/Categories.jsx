import React, { useContext } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { productContext } from '../context/ProductProvider';

function Categories() {
  const { categories, setCategoryId, loading } = useContext(productContext);

  return (
    <>
      {categories.length < 1 && <ClipLoader loading={loading} color="red" size={30} />}
      <form className="flex flex-column gap-s pad-l fit-content categories">
        {categories.map((category) => (
          <label htmlFor={category.id} key={category.id} className="flex ai-c gap-s">
            <input
              name="category"
              type="radio"
              id={category.id}
              value={category.id}
              onChange={({ target }) => setCategoryId(target.value)}
            />
            {category.name}
          </label>
        ))}
      </form>
    </>
  );
}

export default Categories;
