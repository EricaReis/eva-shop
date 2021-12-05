import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const Title = styled.div`
  padding-right: 20%;
  text-align: right;
`;

export const SideLink = styled(Link)`
  color: ${(props) => props.theme.palette.backgrounds.white};
  text-decoration: none;

  padding-top: 1rem;
  font-size: 14px;

  a {
    color: blue;
    background-color: blue;
  }

  hr {
    color: ${(props) => props.theme.palette.primary.main};
    width: 12rem;
    right: 0px;
    border-width: 0.5px;
  }
`;
