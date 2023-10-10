import SideMenu from "../../components/commons/layout/sideMenu/SideMenu.container";
import {
  Container,
  Contents,
  Page,
} from "../../components/commons/layout/layout.style";
import Footer from "../../components/commons/layout/footer/Footer.container";

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <Container>
      <SideMenu />
      <Contents>
        <Page>{props.children}</Page>
        <Footer />
      </Contents>
    </Container>
  );
}
