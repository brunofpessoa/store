import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import propTypes from 'prop-types';
import requestCategories from '../services/categoriesApi';

const storeContext = createContext();

function StoreProvider({ children }) {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const data = await requestCategories();
    setCategories(data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  const value = useMemo(() => ({
    categories,
  }));

  return (
    <storeContext.Provider value={value}>
      {children}
    </storeContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default StoreProvider;
