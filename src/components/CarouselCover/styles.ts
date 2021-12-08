import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  .slideshow {
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
  }

  .slideshowSlider {
    white-space: nowrap;
    transition: ease 1000ms;
  }

  .slide {
    display: inline-block;
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
    .slide {
      height: 80%;
    }
  }

  .slideshowDots {
    text-align: center;
    position: relative;
    top: -80px;
;
  }

  .slideshowDot {
    display: inline-block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #c4c4c4;
  }

  .slideshowDot.active {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;