import React, { useEffect, useState } from "react";
import { useTheme, Theme } from '@material-ui/core/styles';

import Icon from '@mdi/react';
import Title from '../Title';
import Button from '../Buttons/Button';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import { Container, ContainerProduct, ContainerInfo, ContainerCarousel} from './styles';
import { IProduct } from '../../containers/HomePage/models';

import api from '../../containers/HomePage/services';

interface Props {
  infoCategories: IProduct[];
}

const Carousel: React.FC<Props> = ({infoCategories}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  console.log(infoCategories);


  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};

  return (
    <Container>
    <ContainerCarousel>
      {console.log(infoCategories)}
      <AliceCarousel 
        mouseTracking 
        responsive={responsive}  
        autoPlay 
        activeIndex={activeIndex} 
        autoPlayInterval={5000} 
        disableDotsControls
      >
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

export default Carousel;
