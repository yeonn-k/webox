import React from "react";

import { S } from "./DeleteModal";

const DeleteModal = () => {
  return (
    <S.DeleteModal>
      <S.CloseIcon />
      <S.Sentence>삭제하시겠습니까?</S.Sentence>
      <S.OkButton>확인</S.OkButton>
    </S.DeleteModal>
  );
};

export default DeleteModal;
