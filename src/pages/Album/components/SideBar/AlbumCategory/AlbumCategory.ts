import styled from "styled-components";

export const S = {
  AlbumCategory: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 276px;
    height: 50px;
    margin: 10px;
    :hover {
      cursor: pointer;
    }
  `,
  FolderInfo: styled.div`
    width: 194px;
    display: flex;
    align-items: center;
  `,
  FolderIcon: styled.div`
    width: 52px;
    height: 42px;
    margin-right: 13px;
    background: url("/images/folder.png") no-repeat;
    background-size: contain;
  `,
  FolderName: styled.span``,
  Icons: styled.div`
    display: flex;
    justify-content: space-between;
    width: 50px;
  `,
  EditIcon: styled.div`
    width: 18px;
    height: 18px;

    background: url("/images/edit.png") no-repeat;
    background-size: contain;
  `,
  DeleteIcon: styled.div`
    width: 18px;
    height: 18px;
    background: url("/images/trash.png") no-repeat;
    background-size: contain;
  `,
};
