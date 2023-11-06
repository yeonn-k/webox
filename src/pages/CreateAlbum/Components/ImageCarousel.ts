import { cursorTo } from "readline";
import styled from "styled-components";

export const S = {
  ImageCarousel: styled.div`
    width: 1000px;
    height: 100%;
    transition: 0.5s;
  `,
  Container: styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    position: relative;
    overflow: hidden;
  `,
  Slider: styled.div<{ bgUrl: string; currentSlide: number }>`
    display: flex;
    flex-shrink: 0;

    width: 100%;
    height: 100%;

    background: url(${(props) => props.bgUrl}) no-repeat;
    background-size: cover;
    background-position: center;
    transform: translateX(-${(props) => props.currentSlide * 100}%);
    transition: 1s;
  `,
};
