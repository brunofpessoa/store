import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import propTypes from 'prop-types';
import requestCategories from '../services/categoriesApi';
import requestProducts from '../services/productsApi';

export const storeContext = createContext();

function StoreProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('MLB1051');
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [performSearch, setPerformSearch] = useState(false);

  async function getCategories() {
    setLoading(true);
    const data = await requestCategories();
    setCategories(data);
    setLoading(false);
  }

  useEffect(() => {
    getCategories();
  }, []);

  function setCategoryId(id) {
    setQuery('');
    setSelectedCategory(id);
  }

  async function getProducts() {
    setLoading(true);
    const data = await requestProducts(selectedCategory, query);
    setProducts(data);
    setLoading(false);
    setPerformSearch(false);
  }

  useEffect(() => {
    getProducts();
  }, [selectedCategory]);

  useEffect(() => {
    if (performSearch) {
      getProducts();
    }
  }, [performSearch]);

  const value = useMemo(() => ({
    categories,
    selectedCategory,
    setCategoryId,
    products,
    loading,
    query,
    setQuery,
    setPerformSearch,
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
