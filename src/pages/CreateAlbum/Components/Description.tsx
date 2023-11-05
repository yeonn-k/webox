import React from "react";
import { S } from "./Description";

interface DescriptionProps {
  title: string;
  placeholder: string;
}

const Description = ({ title, placeholder }: DescriptionProps) => {
  return (
    <S.Description>
      <S.Title>{title}</S.Title>
      <S.InputBox placeholder={placeholder}></S.InputBox>
      <S.UnderLine />
    </S.Description>
  );
};

export default Description;
