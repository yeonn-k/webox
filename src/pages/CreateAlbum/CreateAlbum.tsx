import React, { useEffect, useState } from "react";

import { S } from "./CreateAlbum";
import Description from "./Components/Description.tsx";
import ImageCarousel from "./Components/ImageCarousel.tsx";

const CreateAlbum = () => {
  const [descriptions, setDescriptions] = useState<
    {
      id: number;
      title: string;
      placeholder: string;
    }[]
  >([]);

  useEffect(() => {
    fetch("/assets/createAlbum.json")
      .then((response) => response.json())
      .then((result) => setDescriptions(result));
  }, []);

  return (
    <S.CreateAlbum>
      <ImageCarousel />
      <S.AlbumDescription>
        <S.Folder>
          <S.FolderIcon />
          <S.FolderName>new</S.FolderName>
        </S.Folder>

        <S.Descriptions>
          {descriptions.map((description) => (
            <Description
              key={description.id}
              title={description.title}
              placeholder={description.placeholder}
            />
          ))}
        </S.Descriptions>

        <S.CreateBtn>확인</S.CreateBtn>
      </S.AlbumDescription>
    </S.CreateAlbum>
  );
};

export default CreateAlbum;
