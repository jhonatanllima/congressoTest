import React from 'react';
import ReactGA from 'react-ga';
import { isMobile } from 'react-device-detect';

import {
  Header,
  LiveHome,
  NavMobile,
  LastedNews,
  FooterHome,
  Background,
} from '../../components';

import { Container } from './styles';

ReactGA.initialize('UA-88283231-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function Main() {

  return (
    <Container>
      {isMobile && <NavMobile /> }
      <Background />
      <Header />
      <LiveHome />
      <LastedNews />
      <FooterHome />
    </Container>
  );
}
