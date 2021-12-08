import React from "react";

import store from '../../assets/icons/store.png';
import map from '../../assets/icons/map.png';
import mail from '../../assets/icons/mail.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import { 
  Container,
  ContainerLinks,
  ContainerContact,
  ContainerTitle,
  ContainerContent,
} from './styles';

const Footer: React.FC = () => {

  return (
    <Container>
        <ContainerTitle>
            <h1>Eva Shop</h1>
        </ContainerTitle>
        <ContainerContent>
            <ContainerLinks>
                <img src={store} alt="Ícone de Loja"/>
                <a href="/">Quem somos</a>
                <a href="/">Políticas de privacidade</a>
                <a href="/">Feedbacks de clientes</a>
                <a href="/">Trocas e devoluções</a>
            </ContainerLinks>
            <ContainerLinks>
                <img src={map} alt="Ícone de Mapa"/>
                <span>Rua Av. Rio Negro, 1100</span>
                <span>Jardim Roselandia</span>
                <span>14406-005</span>
                <span>Franca / SP</span>
            </ContainerLinks>
            <ContainerLinks>
                <img src={store} alt="Ícone de Loja"/>
                <ContainerContact>
                    <img src={whatsapp} alt="Ícone de Contato Whatsapp"/>
                    <span>(16) 9 98179-7325</span>
                </ContainerContact>
                <ContainerContact>
                    <img src={mail} alt="Ícone de Contato Email"/>
                    <span>contato@evacommerce.com.br</span>
                </ContainerContact>
            </ContainerLinks>
        </ContainerContent>
    </Container>
  );
};

export default Footer;
