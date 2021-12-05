import React from "react";

import PageHeader from '../../components/PageHeader';

import { Container } from './styles';

const HomePage: React.FC = () => {
  return (
    <Container>
      <PageHeader />
     <span>HomePage</span>
    </Container>
  );
};

export default HomePage;
