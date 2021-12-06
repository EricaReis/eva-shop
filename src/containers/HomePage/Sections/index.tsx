import React from "react";

import { Grid } from "@material-ui/core";
import Bookstore from "../../../assets/images/cover-bookstore.png";
import Desk from "../../../assets/images/cover-desk.png";
import Clothing from "../../../assets/images/cover-clothing.png";
import { Container, ContainerIcons, ContainerTopics } from "./styles";

const Sections: React.FC = () => {
  return (
    <Container>
      <ContainerIcons>
      <Grid container>
        <Grid item xs={12} md={4}>
          <ContainerTopics>
                <img
                    src={Bookstore}
                    alt="Capa Livraria"
                />
                <h1>Livros</h1>
          </ContainerTopics>
        </Grid>
      
        <Grid item xs={12} md={4}>
          <ContainerTopics>
                <img
                    src={Desk}
                    alt="Capa Escritório"
                />
                <h1>Escritório</h1>
          </ContainerTopics>
        </Grid>

        <Grid item xs={12} md={4}>
          <ContainerTopics>
                <img
                    src={Clothing}
                    alt="Capa Vestuário"
                />
                <h1>Vestuário</h1>
          </ContainerTopics>
        </Grid>
      </Grid>
      </ContainerIcons>
    </Container>
  );
};

export default Sections;
