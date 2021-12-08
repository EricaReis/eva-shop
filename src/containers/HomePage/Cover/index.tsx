import React from "react";

import CoverImageMobile from "../../../assets/images/cover-header-mobile.png";
import { Container } from "./styles";
import CarouselCover from "../../../components/CarouselCover";

const Cover: React.FC = () => {
  return (
    <Container>
      <div className="desktop-cover">
        <CarouselCover />
      </div>
      <div className="mobile-cover">
        <img src={CoverImageMobile} alt="Imagem de capa" />
      </div>
    </Container>
  );
};

export default Cover;
