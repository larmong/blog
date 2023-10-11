import { FooterTheme } from "../theme";
import { Layout } from "antd";

export default function Footer() {
  const { Footer } = Layout;

  return (
    <Footer style={FooterTheme}>
      Copyrightⓒ 2023 larmong All rights reserved.
    </Footer>
  );
}
