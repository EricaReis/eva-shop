import React, { useEffect, useState } from "react";

import Title from '../../../../components/Title';
import { Container } from './styles';
import { IProduct } from '../../models';
import api from '../../services';
import Carousel from "../../../../components/Carousel";

const Desk: React.FC = () => {
  const [infoCategories, setInfoCategories] = useState<IProduct[]>();

  const getCategoriesInfo = async (): Promise<void> => {
    try {
      const info = await api.getCategories();
      setInfoCategories(info[2].product);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoriesInfo();
  }, [])

  return (
    <Container>
      <Title titleSection="Destaques em escritório" />
        {infoCategories && infoCategories.length > 3 && (
          <Carousel infoCategories={infoCategories}/>
        )}
    </Container>
  );
};

export default Desk;
