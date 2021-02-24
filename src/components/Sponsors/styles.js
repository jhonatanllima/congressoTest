import styled from "styled-components"

import colors from "../../themes/colors"

export const Container = styled.section`
  width: 100%;
  min-height: 110%;

  align-items: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: rgba(95, 70, 2, 0.60);


  @media (max-width: 1024px){
    opacity: none;
    background: transparent;
  }

  h1{
    margin-top: 60px;

    color: #412A00;
    font-size: 60px;
    font-family: 'Bebas Neue';

     @media (max-width: 1024px) {
        font-size: 80px !important;
        color: #412A00;
     }
  }

  span{
    margin:40px;
    height: 3px;
    width: 150px;
    border-radius: 4px;
    background-color: #412A00;

    @media (max-width: 1024px) {
      height: 6px;
    }
  }

  p{
    width: 90%;
    font-size: 24px;
    text-align: center;
    color: #412A00;

    text-shadow: 0.4px 0.4px 0px rgba(255,255,255, 0.4);

    @media (max-width: 1024px) {
      font-size: 45px;
    }
  }
`

export const Sponsor = styled.div`
  width: 100%;
  height: 100%;
  margin: 100px auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {

    min-height: 20rem;
    grid-template-columns: repeat(1, 44%);
  }

 div{
   width: 13%;
   height: 13%;
   padding: 35px;

   display: flex;
   align-items: center;
   justify-content: center;

   border-radius: 4px;
   border: 1px solid ${colors.fadedGrey};

   background-color: rgba(255,255,255, 0.1);

   @media (max-width: 1024px){
    width: 43%;
    height: 43%;
   }
      img{
        width:100%;
        object-fit: contain;
      }
  }

`;
