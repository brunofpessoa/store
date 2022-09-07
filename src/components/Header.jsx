import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header() {
  const navigate = useNavigate();

  return (
    <div>
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

    </div>
  );
}

export default Header;
