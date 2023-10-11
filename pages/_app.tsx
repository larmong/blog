import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "../src/commons/layout";
import Head from "next/head";
import { GlobalStyle } from "../src/commons/style/global.style";
import { Fragment } from "react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <RecoilRoot>
        <Head>
          <title>larmong blog</title>
          <link rel="icon" href="/images/favicon.svg" />
        </Head>
        <Global styles={GlobalStyle} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </Fragment>
  );
}
