import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  top: -20px;
  justify-content: center;
  flex-direction: column;
  z-index: 0;
`;

export const ContainerCover = styled.div`
  display: flex;
  z-index: 0;
 
  img {
    transform: scale(1.05) matrix(1, -0.05, 0.07, 1, 0, 0);
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