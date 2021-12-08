import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: ${props => props.theme.palette.backgrounds.black};
  flex-direction: column;
  padding-top: 2rem;

  h1 {
    color: ${props => props.theme.palette.primary.main};
    padding-bottom: 1rem;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  width: 80%;
  align-self: center;
  justify-content: flex-start;
`;

export const ContainerContent = styled.div`
  display: flex;
  width: 80%;
  align-self: center;

  
  @media (max-width: 700px) {
      flex-direction: column;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 2rem;

  img {
    width: 21.65px;
    height: 18px;
    padding-bottom: 10px;

  }

    span {
        font-family: 'Roboto';
        font-weight: 300;
        color: ${props => props.theme.palette.backgrounds.white};
        padding-bottom: 10px;
    }
    a {
        font-family: 'Roboto';
        font-weight: 400;
        color: ${props => props.theme.palette.backgrounds.white};
        text-decoration: none;
        padding-bottom: 10px;
    }
`;

export const ContainerContact = styled.div`
    display: flex;
    flex-direction: row;

    img {
        align-self: center;
        width: 14px;
        height: 14px;
        margin-right: 10px;
    }

    span {
        font-family: 'Roboto';
        font-weight: 300;
        color: ${props => props.theme.palette.backgrounds.white};
    }
`;