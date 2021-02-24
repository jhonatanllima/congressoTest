import React from 'react';
import { isMobile } from 'react-device-detect';

import Shadow from '../../themes/assets/shadow-news.svg';
import LogoAbqm from '../../themes/assets/logoRodape.png';
import YoutubeHome from '../../themes/assets/youtubeHome.svg';
import FacebookHome from '../../themes/assets/facebookHome.svg';
import InstagramHome from '../../themes/assets/instagramHome.svg';
import LogoIcloudsHome from '../../themes/assets/LogoIcloudsHome.svg';

import { Container, Iclouds, SocialsHome } from './styles';

export default function Footer() {
  return (

    <Container>
      <div className="shadow">
         <img src={Shadow} alt="Sombra Notícias" className="shadow"/>
      </div>
        <img src={LogoAbqm} alt="LogoQuartoMilhaDourado"/>

        <div>
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


          { isMobile
            ?   <h5> Associação Brasileira de Criadores de Cavalo Quarto de Milha <br /> Todos os
            direitos reservados </h5>

            : <h5> Associação Brasileira de Criadores de Cavalo Quarto de Milha | Todos os
            direitos reservados</h5>
          }

            <Iclouds>
            <h5>
              Designed and <br /> Developed by
            </h5>
            <a
              href="https://www.iclouds.com.br/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={LogoIcloudsHome} alt="LogoIclouds" />
            </a>
          </Iclouds>
        </div>
    </Container>
  );
}
