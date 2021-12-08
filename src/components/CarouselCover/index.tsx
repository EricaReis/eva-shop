import React, { useEffect, useState } from "react";

import Cover from "../../assets/images/cover-header.png";
import { Container } from "./styles";

const delay = 6000;
const images = [Cover, Cover];

const Slider: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
     const Timer = setTimeout(
      () =>
        setIndex((index) =>
          index === images.length - 1 ? 0 : index + 1
        ),
      delay,
    );

    return () => {
      clearTimeout(Timer);
    };
  }, [index]);
  return (
    <Container>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, index) => (
            <img
              src={image}
              className="slide"
              key={index}
              alt="Capa"
            />
          ))}
        </div>

        <div className="slideshowDots">
          {images.map((_, indexDot) => (
            <div
              key={indexDot}
              className={`slideshowDot${index === indexDot ? " active" : ""}`}
              onClick={() => {
                setIndex(indexDot);
              }}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Slider;
