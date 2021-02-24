import React from 'react';

import {
  Footer,
  NavMenu,
  ChampionsContent,

} from '../../components';

import { Container } from './styles';

const Main = () => {
  return (
    <Container>
      <NavMenu />
      <ChampionsContent />
      <Footer />
    </Container>
  );
};

export default Main;
