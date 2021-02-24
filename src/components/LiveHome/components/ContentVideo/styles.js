import styled from 'styled-components';
import media from 'styled-media-query';

import { RiPlayCircleLine } from 'react-icons/ri';

import colors from '../../../../themes/colors';

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px){
    margin-top: 0vh;
    }

  h1 {
    font-size: 110px;
    color: #f2e099;
    font-family: 'SFProDisplay-Black';
    text-shadow: 0 20px 70px #000000;

    @media (max-width: 1024px){
       color: #f2e099;
      font-size: 180px;
    }
  }

  h5 {
    color: #F2E7D0;
    font-size: 25px;
    letter-spacing: 6.9px;
    text-transform: uppercase;
    font-family: 'SFProDisplay-Thin';

    @media (max-width: 1024px){
      margin-top: 0vh;

      color: #b28b72;
      font-size: 45px;
    }
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
      margin-top: 0px;

      flex-direction: column;
      }
  }

`;

export const Nav = styled.nav`
  height: auto;
  margin-right: 30px;

  ul {
    margin-top: 14px;

    display: flex;
    align-items: flex-end;
    flex-direction: column;

    @media (max-width: 1024px) {
      flex-direction: row;
      flex-wrap: wrap;
      }

    button {
      width: 240px;
      padding: 12px 5px;
      text-align: center;
      border-radius: 6px;
      box-shadow: 0px 0px 30px #95afe229;

      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      border: none;
      list-style: none;
      margin: 10px 10px 0 10px;
      background: #d3a384;

      svg {
        margin-top: 0.7vh;
        margin-right: 2vw;

        margin-left: 1vw;
      }

      a {
        margin-top: 5px;

        color: #503400;
        font-size: 2vw;
        text-decoration: none;
        text-transform: uppercase;
        font-family: 'BebasNeue-Regular' !important;
      }

      @media (max-width: 1024px) {
        width: auto;
        padding: 14px 30px 10px 30px;

        a{
          font-size: 6vw;
        }
      }
      .IconButton{
        color: #503400;

        @media (max-width: 1024px){
          margin-top: 0.4vh;
        }
      }
    }
  }

  ${media.lessThan('huge')`
    max-width: 240px;
    margin-right: 22.5px;

    ul {
      margin-top: 10px;

      li {
        padding: 18px 15px;

        svg {
          margin-right: 12px;
        }

        a {
          font-size: 18px;
        }
      }
    }
  `}

  ${media.lessThan('large')`
    max-width: 100%;
    margin-right: 0;
    margin-top: 80px;

    ul {
      margin-top: 8px;

      li {
        padding: 14px 12px;

        svg {
          margin-right: 10px;
        }

        a {
          font-size: 30px;
        }
      }
    }
  `}
`;

export const Icon = styled(RiPlayCircleLine)`
  width: 30px;
  height: auto;
  color: ${colors.fadedGrey};

  @media (max-width: 1024px) {
    width: 60px;
  }
`;

export const LiveVideo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > div {
    width: 52vw;
    height: 51vh;
    margin: 10px 0px 10px 0px;
    border-radius: 6px;
    border: solid 10px rgba(255, 255, 255, 0.05);

    background-color: transparent;

    @media (max-width: 1440px){
      width: 49vw !important;
      height: 60vh;
    }

    @media (max-width: 1024px){
      width: 90vw !important;
      height: 30vh !important;
    }
  }

  ${media.lessThan('huge')`
    margin-top: 27.5px;

    > div {
      width: 750px;
      height: 400px;
      margin: 10px 0px;
    }
  `}

  ${media.lessThan('large')`
    width: 100%;
    margin-top: 20.5px;

    background: transparent;

    > div {
      width: 90%;
      min-height: 497px;
    }
  `}
`;

export const DescriptionVideo = styled.div`
  height: auto;
  max-width: 320px;
  margin-left: 30px;

  h2 {
    color: #d3a384;
    font-size: 2vw;
    font-weight: bold;
    white-space: nowrap;
    text-transform: uppercase;
    font-family: 'BebasNeue-Regular';

    @media (max-width: 1024px){
      color: #f5d697;
      margin-top: 50px;
    }
  }

  p {
    width: 100%;
    font-size: 18px;
    margin-top: 30px;
    color: #DDD3BF;
    font-family: 'SFProDisplay-Thin';

    @media (max-width: 1024px){
      color: #f5d697;
      font-weight: 600;
      margin-top: 50px;
    }
  }

  ${media.lessThan('huge')`
    max-width: 240px;
    margin-left: 22.5px;

    h2 {
      font-size: 30px;
    }

    p {
      width: 100%;
      font-size: 13.5px;
      margin-top: 22.5px;
    }
  `}

  ${media.lessThan('large')`
    max-width: 90%;
    margin-left: 0;

    h2 {
      font-size: 60px;
    }

    p {
      font-size: 40px;
      margin-top: 18px;
    }
  `}
`;
