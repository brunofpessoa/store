import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <h1>title</h1>
      <div>
        <SearchBar />
        <button
          type="button"
          onClick={() => navigate('/cart')}
        >
          cart
        </button>
      </div>

    </header>
  );
}

export default Header;
