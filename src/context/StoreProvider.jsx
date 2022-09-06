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
  const [loading, setLoading] = useState(true);

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
    setSelectedCategory(id);
  }

  async function getProducts() {
    setLoading(true);

    const data = await requestProducts(selectedCategory);
    setProducts(data);

    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, [selectedCategory]);

  const value = useMemo(() => ({
    categories,
    selectedCategory,
    setCategoryId,
    products,
    loading,
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
