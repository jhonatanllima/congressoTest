import React from 'react';
import { isMobile } from 'react-device-detect';

import bg from '../../themes/assets/bg-site.png'
import bgMobile from '../../themes/assets/bgMobile.png'

import { Container } from './styles';

export default function background() {
  return (
  <Container>
    {isMobile
      ? <img src={bgMobile} alt="backbgMobileground" />
      : <img src={bg} alt="background" />
    }
  </Container>
  );
}
