import styled from 'styled-components';

import colors from '../../themes/colors';

export const Container = styled.div`
  display: flex;
  padding: 10px;
  margin: 0 auto;
  line-height: 1.8;
  max-width: 1400px;
  text-align: start;

  @media (max-width: 1024px) {
    margin: 40px;
    flex-direction: column;
  }
`;

export const ContentLeft = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  margin: 0 40px 0 70px;
  flex-direction: column;

  h1 {
    font-size: 20px;
    font-weight: 800;
    color: ${colors.dark};
    border-bottom: 1px solid ${colors.fadedGrey};

      @media (max-width: 1024px) {
        font-size: 50px;
      }
  }

  form{
    display: flex;
    flex-direction: column;

    label {
      margin-top: 1rem;
      margin-bottom: 0.2rem;

      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      color: ${colors.eightGrey};

      @media (max-width: 1024px) {
        font-size: 22px;
      }
    }

    span{
      font-weight: 400;
    }

    input, textarea {
      width: 100%;
      height: 35px;
      padding: 6px 8px;
      border-radius: 4px;
      border: 1px solid ${colors.greyWhite};

      font-family: 'SFProDisplay-Regular';

      @media (max-width: 1024px) {
        height: 65px !important;
      }
    }

    textarea{
      height: 100px;
      resize: none;
    }

    div{
      display: flex;
      margin-top: 5vh;

      label{
        width: 250px;
        margin-top: -3vh;

        :nth-child(3){
          margin-left: 1vw;
        }

        @media (max-width: 1024px){
          width: 90vw;
        }
      }

      input{
        margin-left: -8vw;

        @media (max-width: 1024px){
          margin-left: -43vw;
        }
      }

      .Labelcity{
        width: auto;
      }

      .city{
        margin-left: -2.3vw;
        @media (max-width: 1024px){
          margin-left: -8vw;
        }
      }

      .labelUf{
        width: auto;
        margin-right: 7vw;

        @media (max-width: 1024px){
          margin-right: 40vw;
        }
      }

      .uf {
        width: 10vw;
      }
    }

    .button {
    height: 40px;
    width: 200px;
    border: none;
    margin-top: 16px;
    border-radius: 4px;
    margin-left: 18.6vw;

    font-size: 14px;
    letter-spacing: 2px;
    color: ${colors.white};
    text-transform: uppercase;
    transition: background 0.4s;
    background: ${colors.success};

    :hover {
      background: ${colors.darkSuccess};
    }

    @media (max-width: 1024px) {

      height: 80px;
      width: 300px;
      margin: 40px 0 40px;

      font-size: 20px;
      font-weight: 800;
    }
  }
  }
`;


export const ContentRight = styled.div`
  height: auto;
  max-width: 400px;
  margin: 0 40px 0 40px;

  display: flex;
  flex-direction: column;


  @media (max-width: 1024px) {
    max-width: 700px;
    margin: 0 auto;
  }

  h1 {
    font-size: 30px;
    font-weight: 800;
    color: ${colors.dark};

    @media (max-width: 1024px) {
      font-size: 60px;
    }
  }

  h3 {
    font-weight: 800;
    margin: 20px 0 20px 0;
    color: ${colors.darkGrey};

    @media (max-width: 1024px) {
      font-size: 40px;
    }

  }

  p {
    font-size: 18px;
    color: ${colors.darkGrey};

    @media (max-width: 1024px){
      font-size: 40px;
    }
  }
`;
