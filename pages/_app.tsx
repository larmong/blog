import { AppProps } from 'next/app';
import { Fragment } from 'react';
import { Global } from '@emotion/react';
import Head from 'next/head';

import Layout from '../src/commons/layout';
import { GlobalStyle } from '../src/commons/style/global.style';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Head>
				<title>blog</title>
				<link rel='icon' href='/images/logo.svg' />
			</Head>
			<Global styles={GlobalStyle} />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Fragment>
	);
}
