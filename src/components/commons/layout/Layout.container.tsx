import { useRecoilState } from "recoil";
import { sideMenuState } from "../../../commons/store/store";
import { Contents, Page, Wrapper } from "./Layout.style";
import { ConfigProvider, Layout } from "antd";
import { Theme } from "./theme";
import { ILayoutProps } from "./Layout.types";
import SideMenu from "./slideMenu/SideMenu.container";
import Footer from "./footer/Footer.container";

export default function LayoutPage(props: ILayoutProps): JSX.Element {
  const { Header } = Layout;
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
            <Footer />
          </Layout>
        </Layout>
      </ConfigProvider>
    </Wrapper>
  );
}
