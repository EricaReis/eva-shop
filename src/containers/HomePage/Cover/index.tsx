import React from "react";

import CoverImage from "../../../assets/images/cover-header.png";
import { Container, ContainerCover, ContainerText } from "./styles";

const Cover: React.FC = () => {
  return (
    <Container>
      <ContainerCover>
        <ContainerText>
          <h1>Seus livros favoritos</h1>
          <h2>estão te esperando aqui!</h2>
        </ContainerText>
        <img
          className="desk-cover"
          src={CoverImage}
          alt="Capa da página Home"
        />

      </ContainerCover>
    </Container>
  );
};

export default Cover;
