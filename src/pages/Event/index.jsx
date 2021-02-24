import React from 'react';

import {
  Footer,
  NavMenu,
  EventContent,
} from '../../components';

import { Container } from './styles';

const Main = () => {
  return (
    <Container>
      <NavMenu />
      <EventContent />
      <Footer />
    </Container>
  );
};

export default Main;
