import styled from "styled-components";

export const S = {
  CreateAlbum: styled.div`
    display: flex;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
  `,
  ImageCarousel: styled.div`
    width: 50%;
    height: 100%;
  `,
  AlbumDescription: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 50%;
  `,
  Folder: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 130px;

    width: 100%;
  `,
  FolderIcon: styled.div`
    width: 165px;
    height: 134px;
    background: url(/images/folder.png) no-repeat;
    background-size: contain;
    margin-bottom: 8px;
  `,
  FolderName: styled.div`
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.weboxBlue};
  `,
  Descriptions: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-shrink: 0;
  `,
  CreateBtn: styled.button`
    margin-bottom: 76px;
    width: 114px;
    height: 42px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.weboxBlue};
    color: #fff;
    text-align: center;
    line-height: 42px;
  `,
};
