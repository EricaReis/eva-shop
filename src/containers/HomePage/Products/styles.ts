import styled from "styled-components";
import Slider from 'react-slick';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const ContainerProduct = styled.div`
  display: flex;
  width: 13rem;
  border-radius: 4px;
  flex-direction: column;

  :hover {
    border: 1px solid ${props => props.theme.palette.primary.main};
  }

  img {
    width: 100%;
    height: 100%;  
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  background-color: ${props => props.theme.palette.backgrounds.white1};
  justify-content: center;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;

  span {
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

export const StyledSlider = styled(Slider)`
  display: flex;
  flex-direction: row;
`;