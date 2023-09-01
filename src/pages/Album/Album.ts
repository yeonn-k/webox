import styled from "styled-components";

export const S = {
  Album: styled.div`
    display: flex;
    position: relative;

    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
  `,
  ExceptSide: styled.div`
    width: 100%;
    padding: 42px 30px 0px 30px;
  `,
  AlbumArea: styled.div`
    width: 100%;
    height: 80%;
  `,
  Grid: styled.div`
    display: grid;
    width: 100%;
    height: 92%;
    margin-top: 40px;
    grid-template-rows: 210px 210px 210px 210px;
    grid-template-columns: 20% 20% 20% 20% 20%;
  `,
  Folder: styled.div``,
  File: styled.div``,
  GetMore: styled.div`
    position: relative;
    width: 100%;
  `,
  Line: styled.div`
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.deepGrey};
  `,
  MoreText: styled.div`
    position: absolute;
    top: -18px;
    left: 50%;
    margin-left: -39px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 78px;
    height: 36px;
    border-radius: 7px;
    border: 1px solid ${(props) => props.theme.deepGrey};
    background-color: #fff;
    color: ${(props) => props.theme.deepGrey};
  `,
};
