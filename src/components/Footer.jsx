import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import SocialMediaIcons from './SocialMediaIcons';

function Footer() {
  return (
    <div className="footer pad-m flex flex-column gap-s ai-c">
      <SocialMediaIcons />
      <a href="https://github.com/brunofpessoa/store" target="_blank" rel="noreferrer">
        <div className="flex gap-s ai-c">
          <FaHandPointRight size={20} />
          Acesse o repositório
        </div>
      </a>
      <p>© 2022, Bruno Pessoa. Todos os direitos reservados</p>
    </div>
  );
}

export default Footer;
