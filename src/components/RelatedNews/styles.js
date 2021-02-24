import styled from 'styled-components';
import {Link} from 'react-router-dom';

import colors from '../../themes/colors';

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  margin: 0 auto;
  max-width: 1300px;

  text-align: start;

  @media (max-width: 1366px) {
    max-width: 1200px;
    margin: 80px;
  }

  @media (max-width: 1024px) {
    width: 95%;
    margin: 40px;
  }

  h1 {
    font-size: 30px;
    font-weight: 800;
    color: ${colors.dark};
    font-family: 'SFProDisplay-Bold';
    border-bottom: 1px solid ${colors.fadedGrey};

    @media (max-width: 1024px) {
      font-size: 60px;
    }
  }
`;

export const CardContent = styled(Link)`
  display: flex;
  text-decoration: none !important;

  > div {
    margin: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h3 {
      font-weight: 600;
      color:${colors.darkGrey};
      font-family: 'SFProDisplay-Bold';

      @media (max-width: 1024px) {
        font-size: 40px;
        margin: 20px 20px;
      }
    }

    p {
      margin: 10px 0;

      font-size: 16px;
      color: ${colors.darkGrey};
      font-family: 'SFProDisplay-Regular';

      @media (max-width: 1024px) {
        font-size: 40px;
      }
    }
    :hover p {
      text-decoration: underline;
    }
  }

  span {
    margin-right: 50px;
    padding-bottom: 30px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h5 {
      margin-top: -10px;
      text-transform: uppercase;
      color: ${colors.darkGrey};
      font-family: 'SFProDisplay-Bold';

      @media (max-width: 1024px) {
        width: 100px;
        font-size: 25px;
      }
    }

    strong {
      padding: 10px;
      font-size: 20px;
      font-weight: 600;
      color: ${colors.darkGrey};
      font-family: 'SFProDisplay-Regular';

      @media (max-width: 1024px) {
        width: 100px;
        font-size: 60px;
      }
    }
  }

  strong {
    margin: 5px;
    font-size: 12px;
    color: ${colors.fadedGrey};
    font-family: 'SFProDisplay-Regular';
  }

  :hover {
    cursor: pointer;
    transition: all 0.2s ease 0s;
  }
`;
