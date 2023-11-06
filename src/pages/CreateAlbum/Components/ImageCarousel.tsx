import React, { useEffect, useState } from "react";
import { S } from "./ImageCarousel";

const ImageCarousel = () => {
  const [slider, setSlider] = useState<
    {
      id: number;
      bgUrl: string;
    }[]
  >([]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = () => {
    if (currentSlide + 1 === slider.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goPrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slider.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  console.log(currentSlide);

  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    fetch("/assets/createAlbumImg.json")
      .then((response) => response.json())
      .then((result) => setSlider(result));
  }, []);

  return (
    <S.ImageCarousel>
      <S.Container>
        {slider.map((item) => {
          return (
            <S.Slider
              key={item.id}
              bgUrl={item.bgUrl}
              currentSlide={currentSlide}
            />
          );
        })}
      </S.Container>
    </S.ImageCarousel>
  );
};

export default ImageCarousel;
