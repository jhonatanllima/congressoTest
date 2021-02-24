import styled from "styled-components"

import colors from "../../themes/colors"

export const Container = styled.section`
  bottom: 0;

  width: 100%;
  height: auto;
  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;


  @media (max-width: 1024px) {
      height: 330px;
      font-size: 35px;
      text-align: center;
    }

  img {
    width: 270px;
    height: auto;

  @media (max-width: 1024px) {
    width: 320px;
    height: auto;
    }
  }


  h5 {
    margin-top: 20px;
    color: ${colors.grey};
  }
`

export const Iclouds = styled.section`
    margin: 20px 0 10px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    h5 {
      line-height: 1.1;
      font-size: 12px;

      @media(max-width: 1024px){
        font-size: 35px;
      }
  }

  img {
    width: 30px;
    height: auto;
    margin: 25px 0 0 5px;

    @media (max-width: 1024px) {
      width: 90px;
      height: auto;
      margin: 30px 0 0 20px;
    }
  }
`
