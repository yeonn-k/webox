import styled from "styled-components";

export const S = {
  CapacityLimitModal: styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    top: 50%;
    left: 50%;
    margin-top: -227px;
    margin-left: -334px;
    width: 668px;
    height: 454px;
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
  Sentences: styled.div`
    width: 100%;
    margin-top: 168px;
  `,
  LimitSentence: styled.div`
    margin-bottom: 10px;
    text-align: center;
    color: ${(props) => props.theme.deepGrey};
  `,
  CheckSentence: styled.div`
    text-align: center;
    color: ${(props) => props.theme.deepGrey};
  `,
  OkButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 114px;
    height: 42px;
    margin-top: 86px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.lightBlue};
    color: #fff;
    font-size: 16px;
  `,
};
