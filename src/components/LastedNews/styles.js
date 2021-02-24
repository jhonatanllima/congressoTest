import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
    z-index: 200;

  position: relative;

  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  object-fit: contain;
  background-size: 100%;
  background-repeat: no-repeat;
  /* background: linear-gradient(to top, #6a3410, #150e08 96%); */

;

  @media(max-width: 1024px){
    background-color: transparent;

  }

  h1 {
    margin: 60px 0 0 0 ;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #F2E099;
    font-size: 60px;
    font-family: 'Bebas Neue';
    text-shadow: 0 20px 70px #000000;

     @media (max-width: 1024px) {
        color: #fff3d9;
        margin: 120px 0 0 0 ;

        font-size: 12vw !important;
      }
 }

   section{
    height: 100%;

    display: flex;
    justify-content: center;

     @media (max-width: 1024px) {
      margin-top: 120px;

      align-items: center;
      flex-direction: column;
     }
  }

`;

  export const Blur = styled.div`
    z-index: -1;
    position: absolute;

    width: 100%;
    height: 100%;

    background: rgba(21, 14, 8, 0.5);

    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    filter: brightness(150%);
`;

export const News = styled(Link)`
  margin: 10px;
  height: 100%;
  max-width: 23%;
  border-radius: 6px;
  border: 1px solid #ffffff2f;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  text-decoration: none;
  background: rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    height: 600px;
    max-width: 80%;
    margin-top: 100px;

    background: transparent;
    }


  img {
    width: 100%;
    height: 220px;

    object-fit:cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    @media (max-width: 1024px){
      height: auto;
    }
  }

  div {
    z-index: 1;
    > p {
      padding: 0px 10px 10px 10px;

      color: #fff3d9;
      font-size: 20px;
      text-transform: uppercase;
      font-family: 'BebasNeue-Regular';

      @media (max-width: 1024px) {
        text-align: start;

         padding: 15px;

         color: #fff3d9;
         font-weight: 600;
         font-size: 40px !important;

        }
    }

    span {
    padding: 20px 10px 20px 10px ;

    color: #b28b72;
    font-size: 12px;
    font-family: 'SFProDisplay-Regular';

    @media (max-width: 1024px) {
      color: #b28b72;
      font-size: 30px;
    }
  }
  }

  :hover {
    cursor: pointer;
  }
`;
