import React from "react";

import GoogleIcon from "./googleIcon.png";

import theme from "../../styles/theme";
import { S } from "./Home";

const Home = () => {
  return (
    <S.Home>
      <S.MainPhoto>
        <S.HomeText>
          <S.Logo />
          <S.Catchphrase>
            당신의 소중한 추억들을 소중한 사람들과 나누고 정리하기 쉽도록
          </S.Catchphrase>
        </S.HomeText>
      </S.MainPhoto>
      <S.SignInBtn>
        <S.GoogleIcon src={GoogleIcon} />
        <S.SignInText>google 계정으로 로그인</S.SignInText>
      </S.SignInBtn>
    </S.Home>
  );
};

export default Home;
