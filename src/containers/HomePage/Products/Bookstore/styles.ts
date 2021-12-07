import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding-top: 2rem;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const ContainerCarousel = styled.div`
  display: flex;
  padding-top: 4rem;
  align-self: center;
  width: 80%;

  .alice-carousel__next-btn-item {
    display: flex;
    position: relative;
    top: -250px;
    left: 500px;
  }
  .alice-carousel__prev-btn-item {
    position: relative;
    right: 500px;
    top: -250px;
  }
`;

export const ContainerProduct = styled.div`
  display: flex;
  width: 13rem;
  border-radius: 4px;
  flex-direction: column;
  min-height: 515px !important;
  justify-content: space-between;

  :hover {
    border: 2px solid ${props => props.theme.palette.primary.main};
  }

  .container-image {
    min-height: 310px;
  }
  
  img {
    width: 100%;
    height: 100%;  
  }

  button {
    opacity: 0;
    width: 80%auto;
  }
  
  :hover {
    cursor: pointer;
    button {
      opacity: 1;
    }
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  background-color: ${props => props.theme.palette.backgrounds.white1};
  justify-content: center;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;
  min-height: 150px;

  span {
    top: 0;
    align-self: center;
    width: 80%;
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 0.9rem;
    text-align: left;
  }
  .old-price {
    text-decoration: line-through;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.9rem;
    text-align: end;
    margin-right: 3rem;
    margin-top: 4px;
  }
  .promotional-price {
    color: ${props => props.theme.palette.primary.main};
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    margin-top: 4px;
  }
  .discount {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.6rem;
    text-align: center;
    margin-top: 4px;
  }
`;
