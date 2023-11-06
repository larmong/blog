import { css } from '@emotion/react';
import { Common } from './emotion';

export const GlobalStyle = css`
	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,900&display=swap');

	* {
		margin: 0;
		box-sizing: border-box;
		::-webkit-scrollbar {
			width: 0;
			background: transparent;
		}
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	body {
		font-family: ${Common.font.default};
		font-weight: 500;
		font-size: 10px;
		color: ${Common.color.default};
		background: ${Common.color.bg};
	}
	em {
		font-style: normal;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	button {
		border: 0;
		cursor: pointer;
		background: #fff;
	}
	input {
		font-size: 15px;
	}
	button:focus,
	input:focus,
	textarea:focus {
		outline: none;
		border: 1.3px solid #0d8f68;
		&.bottomBorder {
			border: none;
			border-bottom: 1.3px solid #0d8f68;
		}
	}
	input::placeholder,
	textarea::placeholder {
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 23px;
		color: #bdbdbd;
	}
`;
