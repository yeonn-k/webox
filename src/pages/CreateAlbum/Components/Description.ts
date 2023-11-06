import styled from "styled-components";

export const S = {
  Description: styled.div`
    width: 60%;
    height: 58px;
    margin-top: 35px;
  `,
  Title: styled.div`
    font-size: 16px;
    margin-bottom: 8px;
  `,
  InputBox: styled.input`
    width: 100%;
    height: 30px;
    border: none;

    ::placeholder {
      color: #a4a4a4;
      font-size: 13px;
    }
  `,
  UnderLine: styled.div`
    width: 100%;
    height: 1px;
    background-color: #000;
  `,
};
