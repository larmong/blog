import { useRecoilState } from "recoil";
import { Contents, Page, Wrapper } from "./Layout.style";
import { ConfigProvider, Layout, MenuProps } from "antd";
import { FooterTheme, Theme } from "./theme";
import { sideMenuState } from "../../../commons/store/store";
import { ILayoutProps } from "./Layout.types";
import SideMenu from "./slideMenu/SideMenu.container";

export default function LayoutPage(props: ILayoutProps): JSX.Element {
  const { Header, Footer } = Layout;
  const [collapsed, setCollapsed] = useRecoilState(sideMenuState);

  return (
    <Wrapper>
      <ConfigProvider theme={Theme}>
        <Layout>
          <SideMenu />
          <Layout
            style={{
              transition: "all 0.2s ease-in",
              paddingLeft: collapsed ? 80 : 280,
              background: "transparent",
            }}
          >
            <Contents>
              <Header style={{ padding: 0, background: "transparent" }} />
              <Page>{props.children}</Page>
            </Contents>
            <Footer style={FooterTheme}>
              Copyrightⓒ 2023 larmong All rights reserved.
            </Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </Wrapper>
  );
}
