import { ILayoutProps } from "./Layout.types";
import { Theme } from "./theme";
import { sideMenuState } from "../../../commons/store/store";
import { ConfigProvider, Layout } from "antd";
import { Contents, Page, Wrapper } from "./Layout.style";
import { useRecoilState } from "recoil";
import Header from "./header/Header.container";
import Footer from "./footer/Footer.container";
import SideMenu from "./sideMenu/SideMenu.container";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function LayoutPage(props: ILayoutProps): JSX.Element {
  const router = useRouter();

  const [collapsed] = useRecoilState<boolean>(sideMenuState);
  const [isHead, setIsHead] = useState(false);

  useEffect(() => {
    if (router.route === "/") {
      setIsHead(false);
    } else {
      setIsHead(true);
    }
  }, [router]);

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
              {isHead ? <Header route={router.route} /> : ""}
              <Page>{props.children}</Page>
            </Contents>
            <Footer />
          </Layout>
        </Layout>
      </ConfigProvider>
    </Wrapper>
  );
}
