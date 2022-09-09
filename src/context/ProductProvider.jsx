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
import requestDescription from '../services/descriptionApi';

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
  const [description, setDescription] = useState('');
  const [installments, setInstallments] = useState({ quantity: 'quantity', amount: 0 });

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

  async function getDescription() {
    const data = await requestDescription(selectedProduct);
    setDescription(data.plain_text);
  }

  function getInstallments() {
    const { installments: paymentData } = products
      .find((product) => product.id === selectedProduct);
    setInstallments(paymentData);
  }

  useEffect(() => {
    if (selectedProduct !== '') {
      getProductDetail();
      getDescription();
      getInstallments();
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
    description,
    installments,
    setSelectedCategory,
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
