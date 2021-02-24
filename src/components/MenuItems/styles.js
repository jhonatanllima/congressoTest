import styled from 'styled-components';

// import colors from '../../themes/colors';

export const Container = styled.div`
  position: relative;

  height: 290px;
  margin-top: 22vh;
  border-radius: 0px 5px 5px 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  left: -30px;

   @media (max-width: 1024px) {
    margin-top: 100px !important;
  }

   a {
    max-width: 110%;
    padding: 2vh 6vw 1.5vh 7vw;
    border-radius: 0px 100px 100px 0px;

    white-space: nowrap;

    color: #DDD3BF;
    font-size: 2vw;
    transition: 0.4s;
    text-decoration: none;
    font-family: 'Bebas Neue';

    background: rgba(114, 49, 0, 0.5);

    @media (max-width: 1024px) {
      font-size: 80px;
      padding: 12px 100px 12px 100px;
      background: rgba(114, 49, 0, 0.9);
    }

    + a {
      margin-top: 6px;
      margin-bottom: 0;
    }

    @media(max-width: 1024px){
      :first-child{
       margin-bottom: -16px !important;
      }
    }


    :hover {
      color: #DDD3BF;
      transition-duration: 0.2s;
      transform: translateX(9%);
      background: rgba(114, 49, 0, 0.9);

      @media (max-width: 1024px) {
        color: #F2E7D0;
        transform: translateX(0%);
        background: rgba(114, 49, 0, 0.9);
      }
    }
  }
`;
