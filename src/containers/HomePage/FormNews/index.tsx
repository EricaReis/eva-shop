import React from "react";

import whiteMail from '../../../assets/icons/white-mail.png';
import Button from "../../../components/Buttons/Button";
import { Container } from './styles';

const FormNews: React.FC = () => {
  return (
    <Container>
        <div className="icon">
            <img  src={whiteMail} alt="Ícone de E-mail"/>
        </div>
        <div className="content">
            <h1>Receba nossas novidades, descontos e muito mais</h1>
        </div>
        <div className="content-input">
            <input placeholder="Digite seu nome"></input>
            <input placeholder="Digite seu email"></input>
        </div>
        <div className="button-news">
            <Button buttonText="Eu quero receber novidades!"/>
        </div>
    </Container>
  );
};

export default FormNews;
