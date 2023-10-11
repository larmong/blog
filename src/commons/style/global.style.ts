import { css } from "@emotion/react";

export const GlobalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap");

  * {
    margin: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  body {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    background: #444;
  }
  em {
    font-style: normal;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button {
    border: 0;
    cursor: pointer;
    background: #fff;
  }
  input {
    font-size: 15px;
  }
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
    border: 1.3px solid #0d8f68;
    &.bottomBorder {
      border: none;
      border-bottom: 1.3px solid #0d8f68;
    }
  }
  input::placeholder,
  textarea::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    color: #bdbdbd;
  }

  // 사이드메뉴 아이콘
  .ant-layout-sider-collapsed {
    .ant-menu-item {
      display: flex;
      align-items: center;
      padding: 0 0 0 10px;
      .ant-menu-item-icon {
        margin-left: 6px;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
