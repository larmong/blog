import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Contents, Logo, LogoWrapper, Page, Wrapper } from "./Layout.style";
import { ConfigProvider, Layout, Menu, MenuProps } from "antd";
import { FooterTheme, Theme } from "./theme";
import { sideMenuState } from "../../../commons/store/store";
import { Menus } from "./menus";
import { ILayoutProps } from "./Layout.types";

export default function LayoutPage(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const menus: any = Menus;

  const { Header, Sider, Content, Footer } = Layout;
  const [collapsed, setCollapsed] = useRecoilState(sideMenuState);

  const onClickMoveToMenus: MenuProps["onClick"] = (e): void => {
    void router.push(`${e.key}`);
  };

  return (
    <Wrapper>
      <ConfigProvider theme={Theme}>
        <Layout>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value: boolean) => setCollapsed(value)}
            width={collapsed ? 80 : 280}
            style={{
              position: "fixed",
              height: "100vh",
              left: 0,
              top: 0,
            }}
          >
            <LogoWrapper collapsed={collapsed}>
              <Logo
                onClick={(): void => {
                  void router.push("/");
                }}
              ></Logo>
            </LogoWrapper>
            <Menu onClick={onClickMoveToMenus} mode="inline" items={menus} />
          </Sider>
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
