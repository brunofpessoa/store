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
    <header className="flex jc-sb pad-l">
      <div className="flex ai-c gap-l">
        <FaStoreAlt />
        <h1>Bruno&apos;s Store</h1>
      </div>
      <div className="flex ai-c">
        { showSearchBar && <SearchBar />}
      </div>
      <div className="flex">
        <button
          type="button"
          onClick={() => navigate('/cart')}
        >
          <div className="flex ai-c gap-s">
            <GiShoppingCart />
            {cart.length > 0 && <p>{cart.length}</p>}
          </div>
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
