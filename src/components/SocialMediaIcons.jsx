import React from 'react';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

function SocialMediaIcons() {
  return (
    <nav>
      <ul className="flex gap-l pad-s">
        <li>
          <a href="https://www.linkedin.com/in/brunofpessoa/" target="_blank" rel="noreferrer">
            <img className="icon" src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/bruno.f.pessoa/" target="_blank" rel="noreferrer">
            <img className="icon" src={instagram} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="https://github.com/brunofpessoa/" target="_blank" rel="noreferrer">
            <img className="icon" src={github} alt="github" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SocialMediaIcons;
