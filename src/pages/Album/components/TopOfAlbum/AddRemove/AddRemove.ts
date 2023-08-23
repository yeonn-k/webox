import { styled } from "styled-components";

export const S = {
  AddRemove: styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
  `,
  Icon: styled.img`
    width: 22px;
    height: 22px;
    margin-right: 4px;
  `,
  Action: styled.span`
    font-size: 20px;
    color: ${(props) => props.theme.deepGrey};
  `,
};
