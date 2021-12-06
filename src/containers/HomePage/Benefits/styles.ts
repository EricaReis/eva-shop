import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding-top: 3rem;
    justify-content: center;
`;

export const ContainerIcons = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-around;
`;

export const ContainerTopics = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    .image {
        display: flex;
        justify-content: center;
        padding-bottom: 0.5rem;
    }
    .security {
        width: 43px;
        height: 50px;
    }
    .credit-card {
        width: 56px;
        height: 43px;
    }
    .delivery {
        width: 62px;
        height: 43px;
    }
    p {
        color: ${props => props.theme.palette.primary.main};
        text-align: center;
    }

    @media(max-width: 600px) {
        p {
            padding-bottom: 1rem;
            font-size: 0.9rem;
        }
    }
`;