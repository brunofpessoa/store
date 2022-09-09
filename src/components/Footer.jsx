import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

function Footer() {
  return (
    <div className="footer pad-m flex flex-column ai-c">
      <SocialMediaIcons />
      <p>© 2022, Bruno Pessoa. Todos os direitos reservados</p>
    </div>
  );
}

export default Footer;
