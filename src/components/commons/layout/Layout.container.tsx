import { ILayoutProps } from "./Layout.types";
import { Theme } from "./theme";
import { sideMenuState } from "../../../commons/store/store";
import { ConfigProvider, Layout } from "antd";
import { Contents, Page, Wrapper } from "./Layout.style";
import { useRecoilState } from "recoil";
import Header from "./header/Header.container";
import Footer from "./footer/Footer.container";
import SideMenu from "./slideMenu/SideMenu.container";

export default function LayoutPage(props: ILayoutProps): JSX.Element {
  const [collapsed] = useRecoilState<boolean>(sideMenuState);

  return (
    <Wrapper>
      <ConfigProvider theme={Theme}>
        <Layout style={{ background: "#444" }}>
          <SideMenu />
          <Layout
            style={{
              transition: "all 0.2s ease-in",
              paddingLeft: collapsed ? 80 : 280,
              background: "transparent",
            }}
          >
            <Contents>
              <Header />
              <Page>{props.children}</Page>
            </Contents>
            <Footer />
          </Layout>
        </Layout>
      </ConfigProvider>
    </Wrapper>
  );
}
