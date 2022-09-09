import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-column page">
      <Header />
      <div className="flex flex-column ai-c gap-l pad-l">
        <h2>Compra finalizada com sucesso!</h2>
        <p>Não se preocupe, eu sei seu endereço. Chega no sábado!</p>
        <p>E deixa que eu pago!</p>
        <button
          className="fit-content"
          type="button"
          onClick={() => navigate('/')}
        >
          Continue comprando
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
