import React from "react";

import Highlights from './Highlights';
import Bookstore from './Bookstore';
import { Container } from './styles';

const Products: React.FC = () => {

  return (
    <Container>
        <Highlights />
        <Bookstore />
    </Container>
  );
};

export default Products;
