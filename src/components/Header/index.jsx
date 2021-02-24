import React from 'react';
import { isMobile } from 'react-device-detect';

import HomeNavContent from '../HomeNavContent';

import YoutubeHome from '../../themes/assets/youtubeHome.svg';
import FacebookHome from '../../themes/assets/facebookHome.svg';
import DataPremiacao from '../../themes/assets/dataPremiacao.png';
import InstagramHome from '../../themes/assets/instagramHome.svg';
import LogoCampeonato from '../../themes/assets/LogoCampeonato.png';
import LogoQuartoMilhaDourado from '../../themes/assets/LogoQuartoMilhaDourado.svg';

import { MenuItems } from '..';

import { Container, TopContent, Banner, SocialsHome, Background } from './styles';

function Header() {
  return (
    <Background>

      <Container>
        {isMobile ? '' : <MenuItems />}

          {isMobile ? (
            <TopContent>
              <img src={DataPremiacao} alt="Data de Premiação" style={{width: '90%', marginBottom: '-28vh', marginRight: '-24vw', marginLeft: '10vw'}} />
              <div className="logoMobile">
                <img src={LogoQuartoMilhaDourado} alt="Logo Abqm" />
              </div>
            </TopContent>
          ) : (
          <TopContent>
          <img src={LogoQuartoMilhaDourado} alt="Logo Abqm" style={{width: '11vw'}} />

          <div style={{flexDirection: 'column'}}>
          <SocialsHome>
            <a
            href="https://www.youtube.com/channel/UCI7n-NUxB84gx-A6MgD4YJA"
            target="_blank"
            rel="noopener noreferrer"
            >
              <img src={YoutubeHome} alt="Youtube" />{' '}
            </a>
            <a
            href="https://www.instagram.com/abqmoficial/"
            target="_blank"
            rel="noopener noreferrer"
            >
              <img src={InstagramHome} alt="Instagram" />{' '}
            </a>
            <a
            href="https://www.facebook.com/abqmoficial/"
            target="_blank"
            rel="noopener noreferrer"
            >
              <img src={FacebookHome} alt="Facebook" />{' '}
            </a>
            <div>
              <p>@abqmoficial</p>
            </div>
          </SocialsHome>
            <img src={DataPremiacao} alt="Data de Premiação" className="dataPremiacao" />
          </div>
        </TopContent>
        )}

        <Banner>
          <img src={LogoCampeonato} alt="Logo Campeonato" />
        </Banner>

      </Container>

    <HomeNavContent />
  </Background>
  );
}

export default Header;
