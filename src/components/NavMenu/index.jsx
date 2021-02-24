import React from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import NavMobile from '../NavMobile';

import logoInterno from '../../themes/assets/derby.png';
import LogoQuartoMilhaPreto from '../../themes/assets/LogoQuartoMilhaPreto.svg';

import { Container, NavDesktop } from './styles';

const NavMenu = () => {
  const navDesktop = (
    <NavDesktop>
      <Link to="/"><img src={LogoQuartoMilhaPreto} alt="LogoAbqm" /></Link>

      <div className="nav">
        <Link to="/">Home</Link>

        <Link to="/provas/">Provas</Link>

        <Link to="/imprensa">Sala de Imprensa</Link>

        <Link to="/noticias">Notícias</Link>

        <Link to="/campeoes">Campeões</Link>

        <a
          href="https://seqm.com.br/"
          rel="noopener noreferrer"
          target="_blank"
        >
          SEQM
        </a>
      </div>

      <Link to="/provas/">
      <div className="logoCampeonato">
        <img
          src={logoInterno}
          className="LogoCampeonato"
          alt="LogoCampeonato"
        />
      </div>
      </Link>
    </NavDesktop>
  );

  return <Container>{isMobile ? <NavMobile /> : navDesktop}</Container>;
};

export default NavMenu;
