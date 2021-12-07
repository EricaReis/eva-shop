import React from "react";

import whiteMail from '../../../assets/icons/white-mail.png';
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
        <span>Form News</span>
    </Container>
  );
};

export default FormNews;
