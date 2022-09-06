import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import propTypes from 'prop-types';
import requestCategories from '../services/categoriesApi';

export const storeContext = createContext();

function StoreProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  async function getCategories() {
    const data = await requestCategories();
    setCategories(data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  function setCategoryId(id) {
    setSelectedCategory(id);
  }

  const value = useMemo(() => ({
    categories,
    selectedCategory,
    setCategoryId,
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
