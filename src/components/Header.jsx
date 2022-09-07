import React from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';

function Header({ showSearchBar }) {
  const navigate = useNavigate();

  return (
    <header>
      <h1>title</h1>
      <div>
        { showSearchBar && <SearchBar />}
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

Header.propTypes = {
  showSearchBar: propTypes.bool,
};

Header.defaultProps = {
  showSearchBar: false,
};

export default Header;
