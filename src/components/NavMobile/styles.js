import styled from 'styled-components';
import {slide as MenuSlide} from 'react-burger-menu';

import colors from '../../themes/colors';

export const Container = styled.nav`
  /* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  width: 70px;
  height: 70px;
  left: 40px;
  top: 40px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  height: 8px !important;

  background: #d3a384;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: ${colors.mediumGrey};
}

/* Position and sizing of clickable cross button */
.bm-cross-button{
  margin-right: 20px;
  width: 80px !important;
  height: 80px !important;
}
/* .bm-cross-button span{
  left: 0;
} */

.bm-cross-button span.bm-cross{
  width: 10px !important;
  height: 60px !important;
}

/* Color/shape of close button cross */
.bm-cross {
  background-color: #412A00;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;

  width: 80% !important;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
  width: 100%;
  height: 100% !important;

  background: rgba(280, 255, 255, 0.5);
  backdrop-filter: blur(30px);

 }

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  @media (max-width: 1024px){
    display: none;
    background: rgba(0, 0, 0, 0.5);
}
}
`;

export const MenuMobile = styled(MenuSlide)`
  z-index: 999;

  img{
    opacity: 1;
    width: 80vw;
    height: auto;

    margin: 23vh auto;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SocialsHome = styled.div`
  margin-top: -20vh;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: auto;
    margin: 0 15px;

    @media(max-width: 1024px){
      width: 70px;
      }
  }

  a {
    text-decoration: none;
    background: transparent;
  }

  div{
    img{
      width: 110px;
      height: auto;
    }

    p{
      font-size: 25px;
      font-family: 'Bebas Neue';
      color: #412A00;

      @media(max-width: 1024px){
        font-size: 70px;
      }
    }
  }
`;
