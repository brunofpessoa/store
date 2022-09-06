import React, { useContext } from 'react';
import { storeContext } from '../context/StoreProvider';

function Categories() {
  const { categories, setCategoryId } = useContext(storeContext);

  return (
    <form>
      {categories.map((el) => (
        <label htmlFor={el.id} key={el.id}>
          <input
            name="category"
            type="radio"
            id={el.id}
            value={el.id}
            onChange={({ target }) => setCategoryId(target.value)}
          />
          {el.name}
        </label>
      ))}
    </form>
  );
}

export default Categories;
