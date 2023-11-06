import { useRouter } from 'next/router';
import { HiHome } from 'react-icons/hi';
import { BiSolidDashboard, BiSolidUser } from 'react-icons/bi';
import { BsFillBarChartFill, BsFillPostcardHeartFill } from 'react-icons/bs';

import { Icon, Item, Logo, MenuList, Name, Wrapper } from './Menu.style';
import { MenuTypes } from './Menu.types';

export default function Menu() {
	const router = useRouter();
	const menuList: MenuTypes[] = [
		{
			active: true,
			icon: <HiHome />,
			name: 'dashboard',
			route: '',
		},
		{
			active: false,
			icon: <BiSolidUser />,
			name: 'profile',
			route: 'profile',
		},
		{
			active: false,
			icon: <BiSolidDashboard />,
			name: 'project',
			route: 'project',
		},
		{
			active: false,
			icon: <BsFillPostcardHeartFill />,
			name: 'post',
			route: 'post',
		},
		{
			active: false,
			icon: <BsFillBarChartFill />,
			name: 'memo',
			route: 'memo',
		},
	];

	const handleMoveToMenu = (route: string) => () => {
		void router.push(`/${route}`);
	};

	return (
		<Wrapper>
			<Logo></Logo>
			<MenuList>
				{menuList.map((menu: MenuTypes, index: number) => (
					<Item key={index} className={menu.active ? 'active' : ''}>
						<Icon>{menu.icon}</Icon>
						<Name onClick={handleMoveToMenu(menu.route)}>{menu.name}</Name>
					</Item>
				))}
			</MenuList>
		</Wrapper>
	);
}
