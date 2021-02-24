import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  main {
    width: 100%;
    height: 100%;
  }

  body {
    overflow-x: hidden;
    background: #F7F5F0;
    color: ${colors.dark};
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 16px;
    font-family:'SFProDisplay-Regular';
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
