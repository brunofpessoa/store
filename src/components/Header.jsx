import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import { GiShoppingCart } from 'react-icons/gi';
import { FaStoreAlt } from 'react-icons/fa';

import SearchBar from './SearchBar';
import CategoriesSelect from './CategoriesSelect';
import { cartContext } from '../context/CartProvider';

function Header({ showSearchBar }) {
  const { cart } = useContext(cartContext);
  const navigate = useNavigate();

  return (
    <header className="flex flex-column pad-l gap-m theme">
      <div className="flex flex-wrap width-100">
        <div className="flex grow">

          <button type="button" className="transparent-btn" onClick={() => navigate('/')}>
            <div className="flex ai-c gap-l theme">
              <FaStoreAlt size={50} />
              <h1>Bruno&apos;s Store</h1>
            </div>
          </button>
        </div>
        <div className="flex jc-sb grow">
          <div className="flex ai-c">
            { showSearchBar && <SearchBar />}
          </div>
          <div className="flex">
            <button
              className="transparent-btn"
              type="button"
              onClick={() => navigate('/cart')}
            >
              <div className="flex ai-c">
                <GiShoppingCart size={40} />
                {cart.length > 0 && <p>{cart.length}</p>}
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="select-categories">
        <CategoriesSelect />
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
