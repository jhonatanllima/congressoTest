import styled from "styled-components";


export const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 0 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background: linear-gradient(to bottom, rgba(106, 52, 16, 0.5), rgba(21, 14, 8, 0.5) 56%);


  @media (max-width: 1024px) {
      font-size: 35px;
      text-align: center;

      background: linear-gradient(to top, rgba(106, 52, 16, 0.5), rgba(21, 14, 8, 0.5) 36%);
    }

  > img {
    width: 70vw;
    height: auto;
    margin-left: -3vw;

    margin-bottom: 20px;

    @media (max-width: 1024px) {
      width: 100vw;
      height: auto;
      margin-top: 50px;
      margin-bottom: 0;

    }
  }

  h5 {
    color: #b28b72;
     line-height: 1.2;

    font-size: 15px;

    @media(max-width: 1024px){
      font-size: 35px;
    }
  }

  .shadow{
    margin-top: -0.4vh;

    width: 100vw;
    height: 10vh;

    display: flex;
    justify-content: center;

    img{
      width: 97%;
      height: 100%;
      filter: blur(4px);

      object-fit: cover;
    }
  }

`

export const Iclouds = styled.section`
  margin: 20px 0 10px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  h5 {
    color: #b28b72;
    margin-right: 10px;

    font-size: 12px;
    line-height: 1.1;

    @media(max-width: 1024px){
      font-size: 35px;
    }
  }


  img {
    width: 40px;
    height: auto;
    margin: 5px 0px;

    @media (max-width: 1024px) {
      width: 90px;
      height: auto;
    }
  }
`
export const SocialsHome = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem;

  img {
    width: 20px;
    height: auto;
    margin: 0 5px -3px 5px;

    @media(max-width: 1024px){
      width: 40px;
      margin: 0 10px 0 10px;
    }
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
      font-size: 25px;
      font-family: 'Bebas Neue';
      color: #b28b72;

      @media(max-width: 1024px){
        font-size: 50px;
    }
    }
  }
`;
