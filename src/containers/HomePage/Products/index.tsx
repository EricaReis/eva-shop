import React, { useEffect, useState } from "react";
import { useTheme, Theme } from '@material-ui/core/styles';

import Icon from '@mdi/react';
import Title from '../../../components/Title';
import Button from '../../../components/Buttons/Button';

import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import { Container, ContainerProduct, ContainerInfo, StyledSlider} from './styles';
import { IProduct } from '../models';

import api from '../services';

const Products: React.FC = () => {
  const { palette } = useTheme() as Theme;
  const [infoCategories, setInfoCategories] = useState<IProduct[]>();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <Icon color={palette.primary.main} path={mdiChevronRight} />,
    prevArrow: <Icon color={palette.primary.main} path={mdiChevronLeft} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };

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
    <StyledSlider {...settings}>
      <div>

      <span>1</span>
      </div>
      <div>

      <span>1</span>
      </div>
      <div>
      <span>1</span>

      </div>
    </StyledSlider>
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
