import React, { useContext } from 'react';
import { storeContext } from '../context/StoreProvider';

function Categories() {
  const { query, setQuery, setPerformSearch } = useContext(storeContext);

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
