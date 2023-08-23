import React, { useEffect, useState } from "react";

import AddRemove from "./AddRemove/AddRemove.tsx";
import Sorting from "./Sorting/Sorting.tsx";
import { S } from "./TopOfAlbum";

const TopOfAlbum = () => {
  const [actions, setActions] = useState<
    {
      id: number;
      name: string;
      iconUrl: string;
      alt: string;
    }[]
  >([]);

  const [sorting, setSorting] = useState<{ id: number; sortingName: string }[]>(
    []
  );

  useEffect(() => {
    fetch("/assets/actions.json")
      .then((response) => response.json())
      .then((result) => setActions(result));
  }, []);

  useEffect(() => {
    fetch("/assets/sorting.json")
      .then((response) => response.json())
      .then((result) => setSorting(result));
  }, []);

  return (
    <S.TopOfAlbum>
      <S.LineUpper>
        <S.AlbumId>
          <S.AlbumIcon />
          <S.AlbumName>내가 좋아하는 사진</S.AlbumName>
        </S.AlbumId>
        <S.Shared>
          <S.SharedUser />
          <S.SharedUser />
          <S.SharedUser />
          <S.ShareIcon />
        </S.Shared>
      </S.LineUpper>
      <S.LineLower>
        <S.AddRemoveBox>
          {actions.map((action) => (
            <AddRemove
              key={action.id}
              actionName={action.name}
              actionIcon={action.iconUrl}
              imgAlt={action.alt}
            />
          ))}
          {/* <AddRemove />
          <AddRemove />
          <AddRemove /> */}
        </S.AddRemoveBox>
        <S.SortingBox>
          정렬하기
          <S.SortingIcon />
        </S.SortingBox>
      </S.LineLower>
    </S.TopOfAlbum>
  );
};

export default TopOfAlbum;
