import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60vh;

  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    max-height: 13800px;
  }
`;

export const Background = styled.div`

  background: linear-gradient(to bottom, rgba(106, 52, 16, 0.5), rgba(21, 14, 8, 0.5) 46%);


  @media (max-width: 1024px) {
    background: linear-gradient(to bottom, rgba(106, 52, 16, 0.5), rgba(21, 14, 8, 0.5) 46%);
  }
`;

export const TopContent = styled.div`
  z-index: 4;
  position: absolute;

  width: 91%;

  height: 110px;
  display: flex;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 1920px) {
    width: 92%;
  }

  @media (max-width: 1500px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    justify-content: flex-end;
  }

  img {
    width: 1vw;
    height: auto;

    @media (max-width: 1024px) {
      margin-top: 75px !important;
      width: 280px;
    }
  }

  div{
    .dataPremiacao{
      width: 25vw;
      height: 25vh;
      object-fit: contain;
      margin-bottom: -22vh;
    }
  }
`;

export const SocialsHome = styled.div`
  z-index: 1 !important;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;

  img {
    width: 1.8vw;
    height: auto;
    margin: 0 5px -5px 5px;
  }

  a {
    text-decoration: none;
  }

  div{

    img{
      width: 110px;
      height: auto;
    }

    p{
      color: #b28b72;
      font-size: 2vw;
      font-family: 'Bebas Neue';
    }
  }
`;

export const Banner = styled.div`
  z-index: 4;

  display: flex;
  margin: 0px auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;

    margin-bottom: -25vh;
  }

  img {
    width: 72%;
    margin-top: 20vh;
    margin-left: -24vw;

    @media (max-width: 1368px) {
        width: 63%;
      }
   /*
    @media (max-width: 1440px) {
      width: 600px;
      margin-right: 55%;
      margin-left: 2vw;
    } */
  }


  @media (max-width: 1024px) {
    img{
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      margin-top: 12vh;
      object-fit: contain;
    }
  }
`;
