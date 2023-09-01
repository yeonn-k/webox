import React from "react";

import SortingIcon from "../../../public/images/sortingIcon.png";

import { S } from "./InviteModal";
import theme from "../../styles/theme";

const InviteModal = () => {
  return (
    <>
      <S.InviteModal>
        <S.InviteInputBox>
          <S.HaveToSelect>
            <S.InviteInput placeholder="초대할 상대의 e-mail을 입력해주세요" />
            <S.SelectAuthority>
              권한
              <S.Icon />
            </S.SelectAuthority>
          </S.HaveToSelect>
          <S.OkButton>확인</S.OkButton>
        </S.InviteInputBox>
        <S.OwnerBox>소유자: yeonn</S.OwnerBox>
      </S.InviteModal>
    </>
  );
};

export default InviteModal;
