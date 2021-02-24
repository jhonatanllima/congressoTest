import React from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { Container } from './styles';

export default function MenuItems() {
  return (
    <Container>
      {isMobile ? <Link to="/">Home</Link> : ''};
      <Link to="/provas/">Provas</Link>
      <Link to="/noticias">Notícias</Link>
      <Link to="/imprensa">Sala de Imprensa</Link>
      <Link to="/campeoes">Campeões</Link>
    </Container>
  );
}
