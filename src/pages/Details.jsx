import React, { useContext } from 'react';
import { cartContext } from '../context/CartProvider';
import { productContext } from '../context/ProductProvider';

function Detail() {
  const {
    products,
    productDetail: {
      id,
      price,
      thumbnail,
      title,
      shipping,
      attributes,
    },
  } = useContext(productContext);
  const { addProductToCart, removeProductFromCart, cart } = useContext(cartContext);

  function addOrRemoveItem() {
    const item = products.find((product) => product.id === id);
    const alreadyInCart = cart.some((cartItem) => cartItem.id === id);

    if (alreadyInCart) {
      removeProductFromCart(id);
    } else {
      addProductToCart(item);
    }
  }

  if (id !== undefined) {
    const formattedPrice = parseFloat(price).toFixed(2);

    return (
      <div>
        <div>
          <img src={thumbnail.replace('I.jpg', 'J.jpg')} alt={title} />
          <div>
            <p>{title}</p>
            <p>{`R$ ${formattedPrice}`}</p>
            {shipping.free_shipping && <p>Frete Grátis</p>}
            <button
              type="button"
              onClick={addOrRemoveItem}
            >
              {cart.some((cartItem) => cartItem.id === id)
                ? 'Remover do carrinho'
                : 'Adicionar ao carrinho'}
            </button>
          </div>
        </div>

        <table>
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
}

export default Detail;
