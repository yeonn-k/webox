import styled from "styled-components";

export const S = {
  InviteModal: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -340px;
    margin-left: -498px;
    width: 996px;
    height: 680px;
    border: 1px solid ${(props) => props.theme.lightBlue};
    border-radius: 5px;
  `,
  InviteInputBox: styled.div`
    display: flex;
    justify-content: space-between;
    width: 682px;
    height: 42px;
  `,
  HaveToSelect: styled.div`
    display: flex;
    justify-content: space-between;
    width: 550px;
    height: 36px;
    border-bottom: 1px solid ${(props) => props.theme.midGrey};
  `,
  InviteInput: styled.input`
    width: 480px;
    border: none;

    &::placeholder {
      color: ${(props) => props.theme.deepGrey};
      font-size: 14px;
    }
  `,
  SelectAuthority: styled.div`
    display: flex;
    align-items: center;
    padding: 7px;
    font-size: 14px;
    color: ${(props) => props.theme.deepGrey};
  `,
  Icon: styled.div`
    margin-left: 3px;
    width: 12px;
    height: 6px;
    background: url("/images/sortingIcon.png") no-repeat;
    background-size: contain;
  `,
  OkButton: styled.button`
    width: 114px;
    height: 42px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.lightBlue};
    color: #fff;
    font-size: 16px;
  `,
  OwnerBox: styled.div`
    position: absolute;
    bottom: 30px;
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.deepGrey};
    font-size: 14px;
  `,
};
