import React from "react";

import Highlights from './Highlights';
import Bookstore from './Bookstore';
import Desk from './Desk';
import Clothing from './Clothing';
import { Container } from './styles';

const Products: React.FC = () => {

  return (
    <Container>
        <Highlights />
        <Bookstore />
        {/* <Desk /> */}
        <Clothing />
    </Container>
  );
};

export default Products;
