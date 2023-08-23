import React from "react";
import { S } from "./AddRemove";

interface ActionProps {
  actionName: string;
  actionIcon: string;
  imgAlt: string;
}

const AddRemove = ({ actionName, actionIcon, imgAlt }: ActionProps) => {
  return (
    <S.AddRemove>
      <S.Icon src={actionIcon} alt={imgAlt} />
      <S.Action>{actionName}</S.Action>
    </S.AddRemove>
  );
};

export default AddRemove;
