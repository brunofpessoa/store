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
    <form className="flex gap-m">
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          value={query}
          placeholder="buscar produtos..."
          onChange={({ target }) => setQuery(target.value)}
        />
      </label>

      <button
        type="submit"
        onClick={search}
      >
        <div className="flex ai-c gap-s jc-c ">
          Pesquisar
          <BiSearchAlt />
        </div>
      </button>
    </form>
  );
}

export default Categories;
