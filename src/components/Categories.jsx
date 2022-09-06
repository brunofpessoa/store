import React, { useContext } from 'react';
import { storeContext } from '../context/StoreProvider';

function Categories() {
  const { categories, setCategoryId } = useContext(storeContext);

  return (
    <form>
      {categories.map((category) => (
        <label htmlFor={category.id} key={category.id}>
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
  );
}

export default Categories;
