import styled from "@emotion/styled";
import { ICollapsedType } from "./Layout.types";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 120px;
  padding: ${(props: ICollapsedType) =>
    props.collapsed ? "20px" : "50px 30px"};
`;
export const Logo = styled.h1`
  width: 100%;
  height: 100%;
  background-image: url("images/larmong.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export const Contents = styled.div`
  min-height: calc(100vh - 50px);
  background: #444;
`;
export const Page = styled.div`
  padding: 30px;
`;
