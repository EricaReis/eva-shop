import styled from "styled-components";

import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import { Input, IconButton, FormControl } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 4rem;
  background-color: ${props => props.theme.palette.backgrounds.black};  

  img {
    width: 70px;
    height: 28px;
    transition: transform 250ms;
  }
  img:hover {
    transform: translateY(-5px);
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  width: 80%;

  justify-content: space-around;

  @media (max-width: 901px) {
    justify-content: center;
  }
`;

export const StyledFormControl = styled(FormControl)`
  background: #FDFDFD;
  border-radius: 4px;
`;

export const StyledButton = styled.button`
    background-color: transparent;
    border-color: transparent;
    margin-left: 1.5rem;
    width: 10rem;
    img {
        margin-left: 5px; 
        width: 14px;
        height: 14px;
    }
    span {
      color: ${props => props.theme.palette.backgrounds.white};  
      font-weight: 300;
      font-size: 1rem;
    }
    span:hover{
      color: ${props => props.theme.palette.primary.main};
      cursor: pointer;
    }
`;

export const StyledInput = styled(Input)`
    background: #FDFDFD;
    margin-left: 2rem;
    border-radius: 4px;
    width: 40%;
    height: 34px;
`;

export const ContainerIconMenu = styled.div`
  display: flex;
  padding-right: 2rem;
  @media (min-width: 901px) {
    svg {
      display: none;
    }
    div {
      display: none;
    }
  }
`;

export const ContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 901px) {
      button{
        display: none;
      }
      div {
        display: none;
      }
    }
`;

export const StyledSelect = styled(Select)`
  width: 200px;
  color: white;
  div {
    color: white;
  }
  svg {
    color: white;
  }
`;

export const StyledAutocomplete = styled(Select)`
  width: 200px;
  color: white;
  div {
    color: white;
  }
  svg {
    color: white;
  }
`;