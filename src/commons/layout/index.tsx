import LayoutPage from "../../components/commons/layout/Layout.container";
import { ILayoutProps } from "../../components/commons/layout/Layout.types";

export default function Layout(props: ILayoutProps): JSX.Element {
  return <LayoutPage children={props.children} />;
}
