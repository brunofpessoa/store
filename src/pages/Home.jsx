import React from 'react';

import Categories from '../components/Categories';
import Products from '../components/Products';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header showSearchBar />
      <div>
        <Categories />
        <Products />
      </div>
    </div>
  );
}

export default Home;
