import React from "react";

import { Container } from './styles';

interface Props {
    titleSection: string;
}

const Title: React.FC<Props> = ({titleSection}) => {
  return (
    <Container>
     <span>{titleSection}</span>
    </Container>
  );
};

export default Title;
