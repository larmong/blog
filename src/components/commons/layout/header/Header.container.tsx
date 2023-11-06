import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Menu, Router, Title, TitleGroup, Wrapper } from './Header.style';

export default function Header() {
	const [route, setRoute] = useState('');
	const [title, setTitle] = useState('');
	const router = useRouter();

	useEffect(() => {
		if (router.route === '/') {
			setRoute('dashboard');
			setTitle('dashboard');
		} else {
			setRoute(`dashboard > ${router.route}`);
			setTitle(`${router.route.split('/')}`);
		}
	}, [route, title]);

	return (
		<Wrapper>
			<TitleGroup>
				<Router>{route}</Router>
				<Title>{title}</Title>
			</TitleGroup>
			<Menu></Menu>
		</Wrapper>
	);
}
