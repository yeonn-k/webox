import { styled } from "styled-components";

export const S = {
  TopOfAlbum: styled.div`
    height: 80px;
  `,
  LineUpper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 16px;
    border-bottom: 1px solid ${(props) => props.theme.midGrey};
  `,
  AlbumId: styled.div`
    display: flex;
    align-items: flex-end;
    min-width: 300px;
    height: 42px;
  `,
  AlbumIcon: styled.div`
    width: 52px;
    height: 42px;
    background: url("/images/folder.png") no-repeat;
    background-size: contain;
  `,
  AlbumName: styled.span`
    margin-left: 10px;
    color: ${(props) => props.theme.weboxBlue};
    font-size: 22px;
    font-weight: 600;
  `,
  Shared: styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: end;
    min-width: 300px;
    height: 42px;
  `,
  SharedUser: styled.div``,
  ShareIcon: styled.div`
    width: 30px;
    height: 21px;
    margin-right: 10px;
    background: url("/images/share.png") no-repeat;
    background-size: contain;
  `,
  LineLower: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 10px 20px;
  `,
  AddRemoveBox: styled.div`
    display: flex;
  `,
  SortingBox: styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    color: ${(props) => props.theme.deepGrey};
  `,
  SortingIcon: styled.div`
    background: url("/images/sortingIcon.png") no-repeat;
    background-size: contain;
    width: 19px;
    height: 12px;
    margin-top: 4px;
    margin-left: 2pxç;
  `,
};
