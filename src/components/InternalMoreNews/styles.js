import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../themes/colors';

export const Container = styled.div`
  width: 100vw;
  max-width: 1340px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  margin: 0px auto;

  text-align: start;

  button {
    width: 180px;
    height: 50px;
    border: none;
    margin: 30px auto;
    border-radius: 30px;

    display: flex;

    color: ${colors.white};
    background-image: linear-gradient(rgb(50, 154, 88), rgb(135, 197, 0) 111%);

    @media (max-width: 1024px) {
      width: 300px;
      height: 80px;
      font-size: 30px;
    }

    display: none;
  }
  :hover button {
    box-shadow: rgba(51, 51, 51, 0.2) 0px 3px 5px;
  }

  @media (max-width: 1366px) {
    max-width: 1200px;
  }

`;

export const CardNews = styled.div`
  width: 100vw;
  height: auto;

  display: flex;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    overflow-y: hidden;
    flex-direction: row;
    overflow-x: auto !important;
  }
`;

export const CardContent = styled(Link)`
  width: min(200px, 22%);
  height: auto;
  margin: 10px;

  display: flex;
  flex-direction: column;

  object-fit: cover;
  text-decoration: none;

  @media (max-width: 1024px) {
    width: 380px;
    height: auto;
  }

  img {
    width: 100%;
    height: 50%;
    border-radius: 4px;

    object-fit: cover;
    filter: grayscale(30%);

    @media (max-width: 1024px) {
      width: 350px;
      height: auto;
    }
  }
  :hover img {
    filter: grayscale(0%);
  }

  span {
    margin: 5px 0 5px 0;
    font-size: 12px;

    font-family: 'SFProDisplay-Regular';
    color: ${({color}) => color ? '#ddd3bf' : colors.grey};

    @media (max-width: 1024px) {
      font-size: 20px;
      color: ${colors.grey};
    }
  }

  p {

    margin-bottom: 20px;

    font-size: 16px;
    font-weight: 600;
    font-family: 'SFProDisplay-Regular';
    color: ${({color}) => color ? '#ddd3bf' : colors.black};

    @media (max-width: 1024px) {
      font-size: 40px;
      color: ${({color}) => color ?  '#412A00' : colors.black};
      }
  }

  :hover {
    cursor: pointer;
    transition: all 0.2s ease 0s;
  }
`;
