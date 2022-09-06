import React from 'react';
import Categories from '../components/Categories';
import Products from '../components/Products';
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <Products />
    </div>
  );
}

export default Home;
