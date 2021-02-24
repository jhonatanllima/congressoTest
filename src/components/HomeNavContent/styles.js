import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40vh;
  padding: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;


  overflow-x: auto;
  overflow-y: hidden;

  @media (max-width: 1024px) {
    overflow-x: auto;
    overflow-y: hidden;

    max-height: 30vh;
  }

  .lds-ripple {
    width: 80px;
    height: 80px;
    display: inline-block;
    position: relative;
  }
  .lds-ripple div {
    opacity: 1;
    border-radius: 50%;
    position: absolute;
    border: 4px solid #fff;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;

      opacity: 0;
    }
  }
`;

export const Icon = styled.div`
  bottom: 3%;
  position: absolute;

  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  color: white;
  font-size: 30px;

  animation-duration: 0.7s;
  animation-iteration-count: 99999;
  animation-name: iconAnimation;

  @keyframes iconAnimation {
  from {bottom: 3%;}
  to {bottom: 2%;}
}

`;

export const ItemsMenu = styled.ul`
  z-index: 10;

  width: 100%;
  margin-top: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px){
      align-items:  flex-start;
      justify-content: flex-start;
    }

  li {
    width: auto;
    padding: 10px;
    border-bottom: 2px solid transparent;

    display: flex;
    align-items:  center;
    justify-content: center;

    list-style: none;
    transition: 0.3s;

    @media (max-width: 1024px){
      + li {
        @media not all and (min-resolution: .001dpcm) {
          @supports(-webkit-appearance:none) and (stroke-color:transparent) {
            margin-left: 40vw;

            &:first-child {
              margin-left: 20vw;
            }
          }
        }
      }
    }

    div {
      padding: 10px;
      min-width: 150px;
      max-width: 250px;
      min-height: 65px;
      border-radius: 6px;
      box-shadow: 0px 3px 13px #00000041;
      border:  solid 2px rgba(178, 139, 114, 0.5);


      display: flex;
      align-items: center;
      justify-content: center;

       background: rgba(114, 49, 0, 0.5);

      transform: skew(-10deg);
      -o-transform: skew(-10deg);
      -moz-transform: skew(-10deg);
      -webkit-transform: skew(-10deg);

      @media (max-width: 1700px) {
        min-width: 150px;
      }

      @media (max-width: 1300px) {
        min-width: 100px;
      }

      @media (max-width: 1024px) {
        min-width: 600px;
        min-height: 160px;

        font-size: 43px;
      }
    a {
      color: #F2E7D0;
      text-align: center;
      text-decoration: none;
      transform: skewX(10deg);
      font-family: 'SFProDisplay-Regular';
    }

    :hover {
      border:  solid 2px rgba(178, 139, 114, 0.9);

      cursor: pointer;
      transition-duration: 0.2s;
      background: rgba(114, 49, 0, 0.9);
    }
  }
  }
`;
