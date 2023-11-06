import styled from '@emotion/styled';
import { Common } from '../../../../commons/style/emotion';

export const Wrapper = styled.div`
	padding: 0 20px;
	width: 250px;
	height: 100vh;
	background: ${Common.color.white};
	font-size: 1.6em;
`;

export const Logo = styled.h1`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100px;
	border-bottom: 1px solid ${Common.color.border};
	background-image: url('https://firebasestorage.googleapis.com/v0/b/blog-37e28.appspot.com/o/logo.svg?alt=media&token=834e271d-a00a-430b-ac6d-2fabc3735630&_gl=1*1dqh7m1*_ga*NzA5NjgzMDExLjE2OTU3MDM3NDI.*_ga_CW55HF8NVT*MTY5ODgyNjEyMC42LjEuMTY5ODgyNjI0MC4yMi4wLjA.');
	background-repeat: no-repeat;
	background-size: 50%;
	background-position: center;
`;

export const MenuList = styled.div`
	padding: 30px 0;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const Item = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	position: relative;
	width: 100%;
	height: 32px;
	color: ${Common.color.gray2};
	&.active {
		color: ${Common.color.default};
	}

	&:after {
		position: absolute;
		top: 0;
		right: -20px;
		content: '';
		width: 4px;
		height: 100%;
		background: ${Common.color.white};
		border-radius: 20px;
	}
	&.active:after {
		background: ${Common.color.point};
	}
`;
export const Icon = styled.span`
	width: 18px;
	height: 18px;
	svg {
		width: 100%;
		height: 100%;
	}
`;
export const Name = styled.span`
	text-transform: uppercase;
	cursor: pointer;
`;
