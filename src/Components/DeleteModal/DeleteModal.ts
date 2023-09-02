import styled from "styled-components";

export const S = {
  DeleteModal: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -334px;
    margin-top: -228px;
    width: 668px;
    height: 456px;
    border: 1px solid ${(props) => props.theme.lightBlue};
    border-radius: 5px;
  `,
  CloseIcon: styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    background: url("/images/close.png") no-repeat;
    background-size: contain;
    width: 29px;
    height: 29px;
  `,
  Sentence: styled.div`
    width: 100%;
    margin-top: 200px;
    text-align: center;
    color: ${(props) => props.theme.deepGrey};
  `,
  OkButton: styled.button`
    width: 114px;
    height: 42px;
    margin-top: 86px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.lightBlue};
    color: #fff;
    font-size: 16px;
  `,
};
