import React, { useState } from "react";

import { InputAdornment, IconButton } from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/logo.png';
import profile from '../../assets/icons/profile.png';
import cart from '../../assets/icons/cart.png';
import search from '../../assets/icons/search.png';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Icon from '@mdi/react';
import {
  mdiMenu 
} from '@mdi/js';
import SideDrawer from "./SideDrawer";


import { Container, StyledButton, ContainerContent, StyledFormControl, StyledInput, ContainerIconMenu, ContainerDesktop, StyledSelect, StyledAutocomplete } from './styles';

const options = ['Livros', 'Escritório', 'Vestuário', 'Informática'];

const PageHeader: React.FC = () => {
  const [age, setAge] = useState('');
  const [searchText, setSearchText] = useState<any>();
  const [value, setValue] = useState<any>(options[0]);
  const [inputValue, setInputValue] = useState<any>('');
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

        {/* <StyledAutocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Controllable" />}
        /> */}
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
