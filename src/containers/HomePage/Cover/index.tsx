import React from "react";

import CoverImage from "../../../assets/images/cover-header.png";
import CoverImageMobile from "../../../assets/images/cover-header-mobile.png";
import { Container, ContainerCover, ContainerText } from "./styles";
import CarouselCover from "../../../components/CarouselCover";

const Cover: React.FC = () => {
  return (
    <Container>
      {/* <ContainerCover>
        <ContainerText>
          <h1>Seus livros favoritos</h1>
          <h2>estão te esperando aqui!</h2>
        </ContainerText>
        <img
          className="desk-cover"
          src={CoverImage}
          alt="Capa da página Home"
        />
        <img
          className="mobile-cover"
          src={CoverImageMobile}
          alt="Segunda Capa"
        />
      </ContainerCover> */}
      <CarouselCover />
    </Container>
  );
};

export default Cover;
