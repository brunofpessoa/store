import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import propTypes from 'prop-types';

import requestCategories from '../services/categoriesApi';
import requestProducts from '../services/productsApi';
import requestProductDetail from '../services/productDetailApi';

export const productContext = createContext();

function ProductProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('MLB1051');
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [performSearch, setPerformSearch] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productDetail, setProductDetail] = useState({});

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

  async function getProductDetail() {
    setLoading(true);
    const data = await requestProductDetail(selectedProduct);
    setProductDetail(data);
    setLoading(false);
  }

  useEffect(() => {
    if (selectedProduct !== '') {
      getProductDetail();
    }
  }, [selectedProduct]);

  const value = useMemo(() => ({
    categories,
    selectedCategory,
    setCategoryId,
    products,
    loading,
    query,
    setQuery,
    setPerformSearch,
    selectedProduct,
    setSelectedProduct,
    productDetail,
  }));

  return (
    <productContext.Provider value={value}>
      {children}
    </productContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default ProductProvider;
