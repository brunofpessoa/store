import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import { GiShoppingCart } from 'react-icons/gi';
import { FaStoreAlt } from 'react-icons/fa';

import SearchBar from './SearchBar';
import { cartContext } from '../context/CartProvider';

function Header({ showSearchBar }) {
  const { cart } = useContext(cartContext);
  const navigate = useNavigate();

  return (
    <header>
      <div>
        <FaStoreAlt />
        <h1>Bruno&apos;s Store</h1>
      </div>
      <div>
        { showSearchBar && <SearchBar />}
        <button
          type="button"
          onClick={() => navigate('/cart')}
        >
          <GiShoppingCart />
          {cart.length > 0 && <p>{cart.length}</p>}
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
