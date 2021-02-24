import styled from 'styled-components';

import colors from '../../themes/colors';

export const Container = styled.nav`
  margin: 0;
`;

export const NavDesktop = styled.nav`
  position: relative;

  height: 90px;
  padding: 0 80px 15px;
  max-width: 100%;
  border-bottom: 2px solid ${colors.lightGrey};

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
  margin: 20px 30px 30px;

  img {
    width: 150px;
    height: auto;
  }

  .nav {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);

    @media (max-width: 1920px) {
      left: 28%;
    }

    @media (max-width: 1700px) {
      left: 31%;
    }

    @media (max-width: 1700px) {
      left: 36%;
    }

    @media (max-width: 1366px) {
      left: 41%;
    }

    > a {
      text-decoration: none;
      color: ${colors.black};

      & + a {
        margin-left: 20px;
      }
    }
  }

  .logoCampeonato {
    z-index: 1;
    position: relative;
    img {
      margin-top: 0vh;
      width: 15vw;
      height: auto;
    }
  }
`;
