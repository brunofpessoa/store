import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { BsCartPlusFill, BsFillCartCheckFill } from 'react-icons/bs';

import { cartContext } from '../context/CartProvider';
import { productContext } from '../context/ProductProvider';

function ProductCard({ product }) {
  const { addProductToCart, cart } = useContext(cartContext);
  const { setSelectedProduct } = useContext(productContext);
  const navigate = useNavigate();

  const price = parseFloat(product.price).toFixed(2);

  function goToDetail() {
    setSelectedProduct(product.id);
    navigate(`/detail/${product.id}`);
  }

  return (
    <div className="flex flex-column gap-m card">
      <div
        role="button"
        tabIndex={0}
        onKeyPress={goToDetail}
        onClick={goToDetail}
        className="flex flex-column gap-m"
      >
        <img src={product.thumbnail} alt={product.title} />
        <div className="flex flex-column gap-s">
          <p>{product.title}</p>
          <p>{`R$ ${price}`}</p>
          {product.shipping.free_shipping && <p>Frete Grátis</p>}
        </div>
      </div>
      <button
        type="button"
        onClick={() => addProductToCart(product)}
      >
        Adicionar ao carrinho
        {cart.some((cartItem) => cartItem.id === product.id)
          ? <BsFillCartCheckFill />
          : <BsCartPlusFill />}
      </button>
    </div>

  );
}

ProductCard.propTypes = {
  product: propTypes.shape({}),
  title: propTypes.string,
}.isRequired;

export default ProductCard;
