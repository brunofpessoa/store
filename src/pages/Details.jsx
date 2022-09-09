import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import ClipLoader from 'react-spinners/ClipLoader';
import { BsCartXFill, BsCartPlusFill } from 'react-icons/bs';

import { cartContext } from '../context/CartProvider';
import { productContext } from '../context/ProductProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Detail() {
  const {
    products,
    loading,
    description,
    installments: {
      quantity,
      amount,
    },
    productDetail: {
      id,
      price,
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
        <div className="flex gap-l detail-main pad-l jc-c flex-wrap">
          <div className="carousel">
            <Carousel>
              {pictures.map((pic, index) => (
                <img className="carousel-img" key={pic.id} src={pic.secure_url} alt={`imagem ${index}`} />))}
            </Carousel>
          </div>
          <div className="flex flex-column gap-m pad-m section detail-resume">
            <h2>{title}</h2>
            <p className="bold large">{`R$ ${parseFloat(price).toFixed(2)}`}</p>
            <p className="large green">{`${quantity} x R$ ${amount.toFixed(2)}`}</p>
            {shipping.free_shipping && <p className="green">Frete Grátis</p>}
            <div className="flex flex-column gap-m ai-c">
              <button
                className="width-100"
                type="button"
                onClick={addOrRemoveItem}
              >
                {cart.some((cartItem) => cartItem.id === id)
                  ? (
                    <div className="flex ai-c jc-c gap-s">
                      Remover do carrinho
                      <BsCartXFill size={20} style={{ fill: 'crimson' }} />
                    </div>
                  )
                  : (
                    <div className="flex ai-c jc-c gap-s">
                      Adicionar ao carrinho
                      <BsCartPlusFill size={20} />
                    </div>
                  )}
              </button>
              <button
                className="width-100"
                type="button"
                onClick={() => navigate('/cart')}
              >
                Ir para o carrinho
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-column gap-l pad-l detail-main">

          <h2>
            Descrição do produto
          </h2>
          <p>{description}</p>
          <h2>
            Especificações técnicas
          </h2>
          <div>
            <table className="width-100">
              <thead>
                <tr>
                  <th>Atributo</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {attributes.map((att, index) => (
                  <tr key={att.id} className={index % 2 === 0 ? 'odd-row' : 'even-row'}>
                    <td>{att.name}</td>
                    <td>{att.value_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="flex flex-column page">
      <Header />
      {id
        ? renderDetails()
        : <ClipLoader loading={loading} color="red" size={30} />}
      <Footer />
    </div>
  );
}

export default Detail;
