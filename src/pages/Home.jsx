import React from 'react';

import Categories from '../components/Categories';
import Products from '../components/Products';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header showSearchBar />
      <div className="flex">
        <Categories />
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
