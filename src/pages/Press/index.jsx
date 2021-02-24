import React from 'react';

import {
  Footer,
  NavMenu,
  PressRoom,
  RelatedNews,
} from '../../components';

import { Container } from './styles';

const Main = () => {
  return (
    <Container>
       <NavMenu />
      <PressRoom />
      <RelatedNews />
      <Footer />
    </Container>
  );
};

export default Main;
