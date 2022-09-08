import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import ClipLoader from 'react-spinners/ClipLoader';
import { BsCartXFill, BsCartPlusFill } from 'react-icons/bs';

import { cartContext } from '../context/CartProvider';
import { productContext } from '../context/ProductProvider';
import Header from '../components/Header';

function Detail() {
  const {
    products,
    loading,
    productDetail: {
      id,
      price,
      // thumbnail,
      title,
      shipping,
      attributes,
      pictures,
    },
  } = useContext(productContext);
  const { addProductToCart, removeProductFromCart, cart } = useContext(cartContext);

  const navigate = useNavigate();

  function addOrRemoveItem() {
    const item = products.find((product) => product.id === id);
    const alreadyInCart = cart.some((cartItem) => cartItem.id === id);

    if (alreadyInCart) {
      removeProductFromCart(id);
    } else {
      addProductToCart(item);
    }
  }

  function renderDetails() {
    return (
      <div className="flex flex-column gap-l pad-l">
        <div className="flex gap-l detail-main pad-l">
          <Carousel>
            {pictures.map((pic, index) => (
              <img key={pic.id} src={pic.secure_url} alt={`imagem ${index}`} />))}
          </Carousel>
          <div className="flex flex-column gap-m pad-m section">
            <p>{title}</p>
            <p>{`R$ ${parseFloat(price).toFixed(2)}`}</p>
            {shipping.free_shipping && <p>Frete Grátis</p>}
            <div className="flex flex-column gap-m ai-c">
              <button
                type="button"
                onClick={addOrRemoveItem}
              >
                {cart.some((cartItem) => cartItem.id === id)
                  ? (
                    <div className="flex ai-c gap-s">
                      Remover do carrinho
                      <BsCartXFill size={20} style={{ fill: 'crimson' }} />
                    </div>
                  )
                  : (
                    <div className="flex ai-c gap-s">
                      Adicionar ao carrinho
                      <BsCartPlusFill size={20} />
                    </div>
                  )}
              </button>
              <button
                type="button"
                onClick={() => navigate('/cart')}
              >
                Ir para o carrinho
              </button>
            </div>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Especificações</th>
            </tr>
          </thead>
          <tbody>
            {attributes.map((att) => (
              <tr key={att.id}>
                <td>{att.name}</td>
                <td>{att.value_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <Header />
      {id
        ? renderDetails()
        : <ClipLoader loading={loading} color="red" size={30} />}
    </div>
  );
}

export default Detail;
