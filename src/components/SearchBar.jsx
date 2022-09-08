import React, { useContext } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

import { productContext } from '../context/ProductProvider';

function Categories() {
  const { query, setQuery, setPerformSearch } = useContext(productContext);

  function search(event) {
    event.preventDefault();
    setPerformSearch(true);
  }

  return (
    <form>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          value={query}
          placeholder="buscar produtos, marcas e mais..."
          onChange={({ target }) => setQuery(target.value)}
        />
      </label>

      <button
        type="submit"
        onClick={search}
      >
        Pesquisar
        <BiSearchAlt />
      </button>
    </form>
  );
}

export default Categories;
