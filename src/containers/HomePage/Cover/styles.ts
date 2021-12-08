import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  top: -20px;
  justify-content: center;
  flex-direction: column;
  z-index: 0;
  max-width: 1366px;
  margin: 0 auto;
`;

export const ContainerCover = styled.div`
  display: flex;
  z-index: 0;
 
  img {
    margin-top: -38px;
    width: 100%;
    height: 100%;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 10rem;
  left: 10rem;
  z-index: 2;
  color: white;

  h1 {
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 2.5rem;
  }

  h2 {
    font-family: 'Roboto';
    font-weight: 300;
  }
`;