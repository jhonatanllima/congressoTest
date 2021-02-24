import styled from "styled-components"

import Modal from 'react-modal';

import colors from "../../themes/colors"

export const Container = styled.section`

`;

export const ModalContent = styled(Modal)`
  position: relative;

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: rgba(0,0,0,0.7);
  backdrop-filter: blur(1.7px);

  `;

export const HeaderModal = styled.div`
  top: 0;
  position: absolute;

  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;

  button{
    width: 80px;
    border: none;
    background-color: transparent;
  }
  .svgClose{
    fill: white;
  }

`;

export const Content = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    font-size: 80px;
    margin-top: 40px;
    color: ${colors.white};
    font-family: 'SFProDisplay-thin';
  }

   img .logoQuartodeMilha{
    top: 0;

    width: 10%;
    height: auto;
  }

div{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

    img{
      width: 20%;
      height: 10%;
      margin: 20px;
      object-fit: contain;
    }
  }
`;

export const Footer = styled.div`
  bottom: 0;
  position: absolute;

  margin-bottom: 3%;

  a{
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 8px;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${colors.white};
    box-shadow: rgba(51, 51, 51, 0.2) 0px 3px 5px;
    background-image: linear-gradient(rgb(50, 154, 88), rgb(135, 197, 0) 111%);

    @media (max-width: 1024px) {
      width: 300px;
      height: 80px;
      font-size: 30px;
    }
  }
`;
