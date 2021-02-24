import styled from 'styled-components';

export const Container = styled.div`
  z-index: -2;
  position: fixed;

  width: 100vw ;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    }
`;
