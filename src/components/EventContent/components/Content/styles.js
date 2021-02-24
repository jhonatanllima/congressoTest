import styled from 'styled-components';

import colors from '../../../../themes/colors';

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 60vh;


  h1 {
    font-size: 32px;
    color: ${colors.darkText};
  }

  > img {
    width: 100px;
  }

  a {
    position: relative;

    margin-top: 32px;
    width: fit-content;
    border-radius: 30px;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;

    display: block;

    color: #566067;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s ease 0s;
    background: rgb(216, 216, 216);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 3px 0px;

    .iconLink{
      padding-top: 2px;
      margin-left: 5px;
    }
  }

  p {
    margin-top: 32px;

    font-size: 16px;
    color: ${colors.darkText};
  }

  h2 {
    margin-top: 32px;

    font-size: 16px;
    font-weight: bold;
    color: ${colors.darkText};
  }
`;
