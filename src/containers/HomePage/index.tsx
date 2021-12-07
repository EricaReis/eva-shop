import React from "react";

import PageHeader from '../../components/PageHeader';
import Cover from './Cover';
import Benefits from './Benefits';
import Sections from './Sections';
import Products from './Products';
import FormNews from "./FormNews";

import { Container } from './styles';

const HomePage: React.FC = () => {
  return (
    <Container>
      <PageHeader />
      <Cover/>
      <Benefits/>
      <Sections/>
      <Products/>
      <FormNews />
    </Container>
  );
};

export default HomePage;
