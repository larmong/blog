import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { ILayoutProps } from "./Layout.types";
import { ConfigProvider, Layout, Menu, MenuProps } from "antd";
import { Contents, Logo, LogoWrapper, Page, Wrapper } from "./Layout.style";
import { sideMenuState } from "../../../commons/store/store";
import { Menus } from "./menus";
import { Theme } from "./theme";

export default function LayoutPage(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const menus: any = Menus;

  const { Sider, Content, Footer } = Layout;
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
              background: "#444",
            }}
          >
            <Contents>
              <Page>{props.children}</Page>
            </Contents>
            <Footer
              style={{
                height: "50px",
                padding: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8em",
                color: "#fff",
                background: "#444",
              }}
            >
              Copyrightⓒ 2023 larmong All rights reserved.
            </Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </Wrapper>
  );
}
