import React from "react";

import { Grid } from "@material-ui/core";
import Security from "../../../assets/icons/security.png";
import CreditCard from "../../../assets/icons/credit-card.png";
import Delivery from "../../../assets/icons/delivery.png";
import { Container, ContainerIcons, ContainerTopics } from "./styles";

const Benefits: React.FC = () => {
  return (
    <Container>
      <ContainerIcons>
      <Grid container>
        <Grid item xs={12} sm={4}>
            <ContainerTopics>
                <div className="image">
                    <img
                            className="security"
                            src={Security}
                            alt="Ícone de Site Seguro"
                    />
                </div>
                <p>Site Seguro</p>
            </ContainerTopics>
      </Grid>

      <Grid item xs={12} sm={4}>
            <ContainerTopics>
                <div className="image">
                    <img
                        className="credit-card"
                        src={CreditCard}
                        alt="Ícone de Parcelamento no Cartão"
                    />
                </div>
                <p>Até 12x sem juros</p>
            </ContainerTopics>
      </Grid>

      <Grid item xs={12} sm={4}>
            <ContainerTopics>
                <div className="image">
                    <img
                        className="delivery"
                        src={Delivery}
                        alt="Ícone de Entregas"
                    />
                </div>
                <p>Entrega para todo o Brasil</p>
            </ContainerTopics>
      </Grid>

      </Grid>
      </ContainerIcons>
    </Container>
  );
};

export default Benefits;
