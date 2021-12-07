import React, { useEffect, useState } from "react";

import Title from '../../../components/Title';
import Button from '../../../components/Buttons/Button';
import { Container, ContainerProduct, ContainerInfo} from './styles';
import { IProduct } from '../models';

import api from '../services';

const Products: React.FC = () => {
  const [infoCategories, setInfoCategories] = useState<IProduct[]>();

  const getCategoriesInfo = async (): Promise<void> => {
    try {
      const info = await api.getCategories();
      console.log(info);
      setInfoCategories(info);
      console.log(infoCategories);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoriesInfo();
  }, [])

  return (
    <Container>
    <Title titleSection="Destaques" />
    {infoCategories && infoCategories.map(product => (
      <ContainerProduct>
        <img width="100%" src={product.images[0]?.path} alt="Imagem do Produto"/>     
        <ContainerInfo>   
          <span>{product.name}</span>
          <p className="old-price">{`R$${Number(product.price).toFixed(2)}`}</p>
          <p className="promotional-price">{`R$${Number(product.promotional_price).toFixed(2)}`}</p>
          <p className="discount">{`Ou R$${(Number(product.promotional_price) * 0.85).toFixed(2)} com 15% off no boleto`}</p>
        </ContainerInfo>
        <Button buttonText='Comprar'/>
      </ContainerProduct>
    ))}
     <span>Products</span>
    </Container>
  );
};

export default Products;
