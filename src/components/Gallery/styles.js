import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: auto;
  border: none;
  padding-top: 6vh;

  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background: #35250C 0% 0% no-repeat padding-box;

  @media(max-width: 1024px){
    background: transparent;
  }

  h1{
    color: #f5d697;

    font-size: 60px;
    font-family: 'Bebas Neue';
    text-transform: uppercase;

    @media (max-width: 1024px) {
      font-size: 80px;
    }

  }

  span{
    margin:40px;
    height: 3px;
    width: 150px;
    border-radius: 4px;
    background-color: #f5d697;

    @media (max-width: 1024px) {
      height: 6px;
    }
  }

    section{
      width: 95vw;
      height: auto;
      margin: 10px;
      cursor: pointer;

      display: flex;
      justify-content: center;

      @media (max-width: 1024px){
        overflow-x: auto;
        overflow-y:hidden;
        justify-content: start;
      }

      p{
        padding: 5px;

        color: #FFF3D9;
        font-size: 12px;
        text-align: start;

        @media(max-width: 1024px){
          font-size: 25px;
          padding-left: 20px;
        }
      }

      h5{
        padding: 5px;

        color: #DDD3BF;
        text-align: start;
        font: "SFPro Display";
        letter-spacing: 0.8px;

        @media(max-width: 1024px){
          padding: 20px;
          font-size: 40px;
        }
      }

      > div{
        margin: 8px;
        width: 200px;
        height: auto;
        border-radius: 4px;

        background-color: rgba(49, 37, 14, 0.5);

        @media (max-width: 1024px){
          width: 400px;
          }

        img{
          width: 100%;
          border-radius: 4px;
        }

        div{
          margin-bottom: 5px;

          @media (max-width: 1024px){
            width: 400px;
          }
        }
      }
    }

    footer{
      width: 100%;
      padding: 20px;

      display: flex;
      justify-content: space-between;

      button{
        border: none;
        background: transparent;

        .arrowLeft{
          width: 50px;
          height: 50px;

          color: #f5d697;
        }

        .arrowRight{
          width: 50px;
          height: 50px;

          color: #f5d697;
        }
      }

    }
`;
