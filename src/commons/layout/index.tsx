import Menu from '../../components/commons/layout/menu/Menu.container';
import Header from '../../components/commons/layout/header/Header.container';
import { Page, Wrapper } from '../../components/commons/layout/Layout.style';

interface ILayoutProps {
	children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
	return (
		<Wrapper>
			<Menu />
			<Page>
				<Header />
				{props.children}
			</Page>
		</Wrapper>
	);
}
