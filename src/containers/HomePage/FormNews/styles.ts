import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: ${props => props.theme.palette.backgrounds.black2};
  justify-content: center;

  .icon {
      display: flex;
      justify-content: center;
      align-self: center;
      padding-top: 3rem;
      
      img {
          width: 48.6px;
          height: 39.38px;
      }
    }
    .content {
        display: flex;
        justify-content: center;
        align-self: center;
        padding-top: 3rem;

        h1 {
            font-family: 'Roboto';
            font-weight: 400;
            color: ${props => props.theme.palette.backgrounds.white};
            font-size: 1.6rem;
        }
    }

    .content-input {
        display: flex;
        justify-content: center;
        align-self: center;
        padding-top: 3rem;

        input {
            border-radius: 4px;
            height: 2rem;
            width: 16rem;
            margin-left: 1rem;
        }
    }

    .button-news {
        display: flex;
        justify-content: center;
        align-self: center;
        margin-top: 3rem;
        margin-bottom: 3rem;
        width: 30%;
    }
`;
