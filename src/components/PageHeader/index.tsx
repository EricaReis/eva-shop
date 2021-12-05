import React, { useState } from "react";

import { Select, MenuItem, InputLabel, Input, InputAdornment, FormControl, IconButton } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/logo.png';
import profile from '../../assets/icons/profile.png';
import cart from '../../assets/icons/cart.png';
import search from '../../assets/icons/search.png';
import Icon from '@mdi/react';
import {
  mdiMenu 
} from '@mdi/js';
import SideDrawer from "./SideDrawer";


import { Container, StyledButton, ContainerContent, StyledFormControl, StyledInput, ContainerIconMenu, ContainerDesktop } from './styles';

const categories = [
  { name: 'Livros', id: 1 },
  { name: 'Escritório', id: 2 },
  { name: 'Vestuário', id: 3 },
  { name: 'Informática', id: 4 },
];

const PageHeader: React.FC = () => {
  const [age, setAge] = React.useState('');
  const [searchText, setSearchText] = React.useState<any>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (prop: any) => (event: any) => {
    setSearchText( event.target.value);
  };

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <Container>
      <ContainerContent>
        <img src={logo} alt="Logo EVA"/>
        <ContainerDesktop>
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
        {/* <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          {categories.map(category => (
            <MenuItem value={category.id}>
            <em>{category.name}</em>
          </MenuItem>
          ))}
          </Select> */}
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
