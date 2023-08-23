import styled from "styled-components";

export const S = {
  Side: styled.div`
    width: 365px;
    height: 100%;
    background-color: ${(props) => props.theme.lightGrey};
    padding-top: 114px;
  `,
  UserInfo: styled.div`
    width: 100%;
    height: 70px;
    margin-bottom: 100px;
  `,
  UserImg: styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 14px;
    background-color: aliceblue;
  `,
  UserId: styled.div`
    width: 100%;
    text-align: center;
  `,
  AlbumCategoriesArea: styled.div`
    height: 724px;
    overflow-y: scroll;
  `,
  AlbumCategories: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `,
  AddAlbum: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    :hover {
      cursor: pointer;
    }
  `,
  AddIcon: styled.div`
    background: url("/images/add.png") no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
    margin-bottom: 12px;
  `,
  AddText: styled.div`
    width: 360px;
    text-align: center;
  `,
};
