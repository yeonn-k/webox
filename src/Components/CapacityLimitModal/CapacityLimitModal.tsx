import React from "react";

import { S } from "./CapacityLimitModal";

const CapacityLimitModal = () => {
  return (
    <S.CapacityLimitModal>
      <S.CloseIcon />
      <S.Sentences>
        <S.LimitSentence>
          하나의 파일의 최대 용량은 -------- 입니다.
        </S.LimitSentence>
        <S.CheckSentence>파일의 크기를 확인해주세요.</S.CheckSentence>
      </S.Sentences>
      <S.OkButton>확인</S.OkButton>
    </S.CapacityLimitModal>
  );
};

export default CapacityLimitModal;
