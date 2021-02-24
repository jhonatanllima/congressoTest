import styled from 'styled-components';

import colors from '../../themes/colors';

export const Container = styled.div`

  margin: 0 auto;
  padding: 10px;
  min-height: 30vh;
  max-width: 1300px;

  line-height: 1.2;
  text-align: justify;

  h1.title{
    margin-top: 30px;
    font-size: 40px;
    font-weight: 800;
    color: ${colors.dark};
    font-family: 'SFProDisplay-Regular';
    border-bottom: 1px solid ${colors.fadedGrey};

    @media (max-width: 1024px) {
      margin: 55px;
      font-size: 60px;
    }

  }
  @media (max-width: 1366px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

export const TopContent = styled.div`
    padding: 0 9rem;

    @media (max-width: 1024px) {
      padding: 55px;
    }

  span{
    font-size: 12px;
    color: ${colors.fadedGrey};
    font-family: 'SFProDisplay-Regular';

    @media (max-width: 1024px) {
      font-size: 25px;
    }
  }

  h1{
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 30px;
    font-family: 'SFProDisplay-Regular';

    @media (max-width: 1024px) {
      font-size: 60px;
   }

  }

  h2{
    font-style: italic;
    margin-bottom: 20px;
    color: ${colors.eightGrey};
    font-family: Georgia;

    @media (max-width: 1024px) {
      font-size: 40px;
   }

  }
`;


export const TextContent = styled.div`
  padding: 0 9rem;

  @media (max-width: 1024px){
    padding: 0 15px;
  }

img{
    width: 100%;
    height: auto;
  }


  h3{
    font-weight: 600;
    color: ${colors.darkGrey};

    @media (max-width: 1024px) {
      font-size: 45px;
      margin-bottom: 30px;
   }
  }

  p{
    font-size: 20px;
    line-height: 1.8;
    color: ${colors.eightGrey};
    font-family: 'SFProDisplay-Regular';

    @media (max-width: 1024px) {
      padding: 0 15px 0 15px;
      font-size: 40px;
    }
  }
`;

