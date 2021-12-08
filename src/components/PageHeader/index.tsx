import React, { useState } from "react";

import { InputAdornment, IconButton } from '@material-ui/core';
import logo from '../../assets/images/logo.png';
import profile from '../../assets/icons/profile.png';
import cart from '../../assets/icons/cart.png';
import search from '../../assets/icons/search.png';

import MenuItem from '@mui/material/MenuItem';
import Icon from '@mdi/react';
import {
  mdiMenu 
} from '@mdi/js';
import SideDrawer from "./SideDrawer";


import { 
  Container,
  StyledButton,
  ContainerContent, 
  StyledFormControl, 
  StyledInput, 
  ContainerIconMenu, 
  ContainerDesktop, 
  StyledSelect, 
  StyledAutocomplete 
} from './styles';

const PageHeader: React.FC = () => {
  const [ setSearchText] = useState<any>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (prop: any) => (event: any) => {
    setSearchText( event.target.value);
  };

  return (
    <Container>
      <ContainerContent>
        <img src={logo} alt="Logo EVA"/>
        <ContainerDesktop>
        <StyledSelect
          defaultValue={10}
          onChange={handleChange}
          label="Categorias"
          placeholder="Categorias"
        >
          <MenuItem value={10}>
            Categorias
          </MenuItem>
          <MenuItem value={20}>Livros</MenuItem>
          <MenuItem value={30}>Escritório</MenuItem>
          <MenuItem value={40}>Vestuário</MenuItem>
          <MenuItem value={50}>Informática</MenuItem>
        </StyledSelect>
        <StyledInput
            type='text'
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                >
                             <img style={{width: 16, height: 16}} src={search} alt="Ícone do Perfil" />

                </IconButton>
              </InputAdornment>
            }
          />
        <StyledButton type="button">
            <span>Minha conta</span>
            <img src={profile} alt="Ícone do Perfil" />
        </StyledButton>
        <StyledButton type="button">
            <span>Carrinho (2)</span>
            <img src={cart} alt="Ícone do Perfil" />
        </StyledButton>
        </ContainerDesktop>
        <StyledFormControl  variant="standard">
        </StyledFormControl>
          </ContainerContent>
         <ContainerIconMenu>
          <IconButton aria-label="delete" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Icon size={1.3} path={mdiMenu} color='white ' />
          </IconButton>
         </ContainerIconMenu>

          {isMenuOpen && (
            <SideDrawer setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
          )}
    </Container>
  );
};

export default PageHeader;
