import React, { useEffect, useState } from "react";

import Title from '../../../../components/Title';
import { Container } from './styles';
import { IProduct } from '../../models';
import api from '../../services';
import Carousel from "../../../../components/Carousel";

const Bookstore: React.FC = () => {
  const [infoCategories, setInfoCategories] = useState<IProduct[]>();

  const getCategoriesInfo = async (): Promise<void> => {
    try {
      const infoc = await api.getCategories();
      setInfoCategories(infoc[0].product);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoriesInfo();
  }, [])

  return (
    <Container>
      <Title titleSection="Destaques em livros" />
        {infoCategories && infoCategories.length > 3 && (
          <Carousel infoCategories={infoCategories}></Carousel>
        )}
    </Container>
  );
};

export default Bookstore;
