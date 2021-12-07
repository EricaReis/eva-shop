import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 8rem;

  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.5rem;
    border-top: 4px solid  ${(props) => props.theme.palette.primary.main};
    width: 55px;
  }

  @media(max-width: 600px) {
    padding-left: 1rem;
  }
`;
