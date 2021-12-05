import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  position: fixed;
  top: 0px;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  right: 0;
  height: 100%;
  width: 15rem;
  z-index: 1;
  background: #181818;
  z-index: 999;
  button {
    padding-top: 2rem;
    padding-left: 1rem;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;
