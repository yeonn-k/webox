import React from "react";
import { S } from "./AlbumCategory";

interface AlbumNameProps {
  albumName: string;
  albumLiked: boolean;
}

const AlbumCategory = ({ albumName, albumLiked }: AlbumNameProps) => {
  return (
    <>
      {albumLiked === true ? (
        <S.AlbumCategory>
          <S.FolderInfo>
            <S.FolderIcon />
            <S.FolderName>{albumName}</S.FolderName>
          </S.FolderInfo>
        </S.AlbumCategory>
      ) : (
        <S.AlbumCategory>
          <S.FolderInfo>
            <S.FolderIcon />
            <S.FolderName>{albumName}</S.FolderName>
          </S.FolderInfo>
          <S.Icons>
            <S.EditIcon />
            <S.DeleteIcon />
          </S.Icons>
        </S.AlbumCategory>
      )}
    </>
  );
};

export default AlbumCategory;
