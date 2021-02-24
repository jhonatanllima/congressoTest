import styled from 'styled-components';

import colors from '../../themes/colors';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1340px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1366px) {
    max-width: 1100px;
    min-height: 600px;
    margin: 10px auto;
  }
  @media (max-width: 1024px) {
    max-width: 900px;
    min-height: 980px;
    margin: 40px auto;

    flex-direction: column;
  }
`;

export const Nav = styled.nav`

  select{
    width: 100%;
    min-height: 80px;

    font-size: 40px;
    background-color: white;
    color: ${colors.eightGrey};
    font-family: 'SFProDisplay-Regular';
  }

  @media (max-width: 1024px) {
    margin: 80px 50px 0 50px;
  }

  h2 {
    font-size: 35px;
    color: ${colors.darkText};

    border-bottom: 1px solid ${colors.borderColor};

    @media (max-width: 1024px) {
      font-size: 70px;
    }
  }

  ul {
    width: 300px;
    margin-top: 14px;

    button {
      width: 100%;
      border: none;

      display: flex;
      text-align: start;
      align-items: flex-start;

      color: #566067;
      font-size: 14px;
      text-decoration: none;
      background: transparent;
      -webkit-text-decoration: none;
    }

    li {
      list-style: none;
      margin-top: 10px;

      @media (max-width: 1024px) {
        margin: 10px;
        font-size: 40px;
      }

      a {
        font-size: 14px;
        text-decoration: none;
        color: ${colors.darkText};

        @media (max-width: 1024px) {
          font-size: 40px;
        }
      }
    }
  }
`;

export const ContentRight = styled.div`
  width: 90%;
  height: auto;
  margin: 0 40px 0 40px;

  img {
    width: 100%;
  }

  @media (max-width: 1024px) {
    margin-top: 10px;

    h1 {
      font-size: 60px;
      color: ${colors.darkText};
    }

    p {
      margin-top: 32px;

      font-size: 40px;
      color: ${colors.darkText};
    }

    h2 {
      margin-top: 32px;

      font-size: 40px;
      font-weight: bold;
      color: ${colors.darkText};
    }
  }
`;
