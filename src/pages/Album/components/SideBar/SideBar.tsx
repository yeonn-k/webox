import React, { useEffect, useState } from "react";

import AlbumCategory from "./AlbumCategory/AlbumCategory.tsx";

import { S } from "./SideBar";

const SideBar = () => {
  interface Folder {
    id: number;
    name: string;
    liked: boolean;
  }

  const [albumNames, setAlbumNames] = useState<
    { id: number; name: string; liked: boolean }[]
  >([]);

  useEffect(() => {
    fetch("assets/albumNames.json")
      .then((response) => response.json())
      .then((result) => setAlbumNames(result));
  }, []);

  return (
    <S.Side>
      <S.UserInfo>
        <S.UserImg />
        <S.UserId>Yeonn</S.UserId>
      </S.UserInfo>
      <S.AlbumCategoriesArea>
        <S.AlbumCategories>
          {albumNames.map((album) => (
            <AlbumCategory
              key={album.id}
              albumName={album.name}
              albumLiked={album.liked}
            />
          ))}
        </S.AlbumCategories>
      </S.AlbumCategoriesArea>
      <S.AddAlbum>
        <S.AddIcon />
        <S.AddText>add a album</S.AddText>
      </S.AddAlbum>
    </S.Side>
  );
};

export default SideBar;
