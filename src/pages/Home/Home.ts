import styled from "styled-components";

export const S = {
  Home: styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
  `,
  MainPhoto: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 84%;
    background: url("/images/ocean1.jpg") no-repeat;
    background-size: cover;
  `,
  HomeText: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
    bottom: 280px;
    width: 500px;
    height: 116px;
  `,
  Logo: styled.div`
    width: 280px;
    height: 75px;
    background: url("/images/logoWhite.png") no-repeat;
    background-size: contain;
  `,
  Catchphrase: styled.span`
    color: #fff;
  `,
  SignInBtn: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 10px;
    width: 250px;
    height: 74px;
    border-bottom: 2px solid ${(props) => props.theme.weboxBlue};

    :hover {
      cursor: pointer;
    }
  `,
  GoogleIcon: styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
  `,
  SignInText: styled.span`
    color: ${(props) => props.theme.weboxBlue};
    font-size: 22px;
    font-weight: 700;
  `,
};
