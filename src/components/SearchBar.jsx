import React, { useContext } from 'react';
import { productContext } from '../context/ProductProvider';

function Categories() {
  const { query, setQuery, setPerformSearch } = useContext(productContext);

  function search(event) {
    event.preventDefault();
    setPerformSearch(true);
  }

  return (
    <form>
      <input
        type="text"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />

      <button
        type="submit"
        onClick={search}
      >
        Pesquisar
      </button>
    </form>
  );
}

export default Categories;
