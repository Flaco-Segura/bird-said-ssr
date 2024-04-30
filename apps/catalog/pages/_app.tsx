import { AppProps } from "next/app";
import Head from 'next/head';
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const CustomApp = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to bird-said!</title>
      </Head>
      <main>
        <Container style={{ margingTop: "5rem" }}>
          <Component {...pageProps}/ >
        </Container>
      </main>
    </>
  )
};

export default CustomApp;
