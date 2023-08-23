import React from "react";
import SideBar from "./components/SideBar/SideBar.tsx";
import TopOfAlbum from "./components/TopOfAlbum/TopOfAlubm.tsx";

import { S } from "./Album";

const Album = () => {
  return (
    <S.Album>
      <SideBar />
      <S.ExceptSide>
        <TopOfAlbum />
        <S.AlbumArea>
          <S.Grid>
            <S.Folder />
            <S.File />
          </S.Grid>
        </S.AlbumArea>
        <S.GetMore>
          <S.Line />
          <S.MoreText>더보기</S.MoreText>
        </S.GetMore>
      </S.ExceptSide>
    </S.Album>
  );
};

export default Album;
