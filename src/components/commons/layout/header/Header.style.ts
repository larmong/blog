import styled from '@emotion/styled';
import { Common } from '../../../../commons/style/emotion';

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 50px 0;
	width: 100%;
`;
export const TitleGroup = styled.div``;

export const Router = styled.span`
	display: block;
	margin-bottom: 2px;
	text-transform: uppercase;
	color: ${Common.color.gray1};
`;

export const Title = styled.h3`
	text-transform: uppercase;
	font-weight: 900;
	font-size: 2.4em;
`;

export const Menu = styled.div`
	width: 300px;
	height: 50px;
	border-radius: 50px;
	background: ${Common.color.white};
`;
