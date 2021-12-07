import React, { useEffect, useState } from "react";
import { useTheme, Theme } from '@material-ui/core/styles';

import Icon from '@mdi/react';
import Title from '../../../../components/Title';
import Button from '../../../../components/Buttons/Button';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import { Container, ContainerProduct, ContainerInfo, ContainerCarousel} from './styles';
import { IProduct } from '../../models';

import api from '../../services';

const Bookstore: React.FC = () => {
  const { palette } = useTheme() as Theme;
  const [activeIndex, setActiveIndex] = useState(0);
  const [infoCategories, setInfoCategories] = useState<IProduct[]>();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};

const slidePrev = () => setActiveIndex(activeIndex - 1);
const slideNext = () => setActiveIndex(activeIndex + 1);

  const getCategoriesInfo = async (): Promise<void> => {
    try {
      const infoc = await api.getCategories();
      console.log(infoc[0].product);
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
    <ContainerCarousel>
    <AliceCarousel mouseTracking responsive={responsive}  autoPlay items={infoCategories} activeIndex={activeIndex} autoPlayInterval={5000} disableDotsControls>
    {infoCategories && infoCategories.map(product => (
      <ContainerProduct>
          <div className="container-image">
            <img width="100%" src={product.images[0]?.path} alt="Imagem do Produto"/>    
          </div> 
          <ContainerInfo>   
            <span>{product.name}</span>
            <p className="old-price">{`R$${Number(product.price).toFixed(2)}`}</p>
            <p className="promotional-price">{`R$${Number(product.promotional_price).toFixed(2)}`}</p>
            <p className="discount">{`Ou R$${(Number(product.promotional_price) * 0.85).toFixed(2)} com 15% off no boleto`}</p>
          </ContainerInfo>
          <Button buttonText='Comprar'/>
        </ContainerProduct>
      ))}


      </AliceCarousel>
      </ContainerCarousel>

    </Container>
  );
};

export default Bookstore;
