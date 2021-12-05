import React from "react";
import { mdiArrowRight } from "@mdi/js";
import RoundButton from "../../Buttons/RoundButton";
import palette from "../../../styles/theme/palette";
import SidebarLink from "./SidebarLink";

import { Container, ContainerLinks } from "./styles";

interface Props {
  isMenuOpen?: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const sideDrawer: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <Container>
      <RoundButton
        icon={mdiArrowRight}
        iconColor={palette.primary.main}
        onClick={() => setIsMenuOpen(false)}
      />
      <ContainerLinks>
        <SidebarLink title="Home" route="/" />
        <SidebarLink title="Livraria" route="/" />
        <SidebarLink title="Escritório" route="/" />
        <SidebarLink title="Vestuário" route="/" />
      </ContainerLinks>
    </Container>
  );
};
export default sideDrawer;
