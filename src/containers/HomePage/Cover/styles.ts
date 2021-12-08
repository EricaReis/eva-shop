import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  top: -20px;
  justify-content: center;
  flex-direction: column;
  z-index: 0;
  margin: 0 auto;
  margin-top: -50px;
`;

export const ContainerCover = styled.div`
  display: flex;
  z-index: 0;

  @media (max-width: 948px) {
    .desk-cover {
      display: none;
    }
    img {
      width: 100%;
    }
  }

  @media (min-width: 948px) {
    .mobile-cover {
      display: none;
    }

    img {
      width: 100%;
      margin-top: -42px;
    }
  }

  @media (min-width: 1340px) {
    .mobile-cover {
      display: none;
    }

      img {
        transform: scale(1.084);
        width: 100%;
        margin-top: -42px;
      }
    }
`;

export const ContainerText = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
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

  @media (max-width: 700px) {
    top: 3rem;
    left: 2rem;
    h1 {
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 1.5rem;
      width: 10rem;
    }
    h2 {
      font-size: 1rem;
    }
  }

  @media (min-width: 700px) {
    top: 5rem;
    left: 3rem;
  }

  @media (min-width: 1072px) {
    top: 10rem;
    left: 10rem;
  }
`;