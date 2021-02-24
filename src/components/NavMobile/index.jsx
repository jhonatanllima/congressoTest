import React from 'react';

import MenuItems from '../MenuItems';

import YoutubeHome from '../../themes/assets/youtubeMarrom.svg';
import FacebookHome from '../../themes/assets/facebookMarrom.svg';
import InstagramHome from '../../themes/assets/instagramMarrom.svg';
import LogoCampeonato from '../../themes/assets/LogoCampeonato.png';


import { Container, MenuMobile, SocialsHome } from './styles';

function NavMobile() {
  return (
    <Container>
      <MenuMobile>
        <MenuItems />

         <img
          src={LogoCampeonato}
          className="LogoCampeonato"
          alt="LogoCampeonato"
         />

      <footer>
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
        </div>
      </footer>

      </MenuMobile>

    </Container>
  );
}

export default NavMobile;
