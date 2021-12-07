import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding-top: 3rem;
    justify-content: center;
`;

export const ContainerIcons = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-evenly;
`;

export const ContainerTopics = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    img {
        display: flex;
        width: 230px;
        height: 256px;
    }
    img:hover {
        -webkit-filter: brightness(70%);
        -webkit-transition: all 0.5s ease;
        cursor: pointer;
    }
    h1 {
        position: relative;
        top: -50px;
        z-index: 1;
        color: ${props => props.theme.palette.backgrounds.white};
    }
`;