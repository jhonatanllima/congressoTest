import React, { useState } from 'react';

import { isMobile } from 'react-device-detect';

import {
  News,
  Footer,
  NavMenu,
  RelatedNews,
  SocialsMidia,
} from '../../components';

import { Container } from './styles';

const Main = () => {
  const [id, setId] = useState(null);

  return (
    <Container>
      {isMobile ? '' : <SocialsMidia />}
      <NavMenu />
      <News id={id} />
      <RelatedNews setId={setId} />
      <Footer/>
    </Container>
  );
};

export default Main;
