import React from 'react';
import Head from 'next/head';
import App from 'next/app';

import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../utils/apollo';

import Layout from 'components/Layout';
import UserProvider from 'providers/UserProvider';

import '../assets/css/style.css';
import '../styles/global.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <UserProvider>
        <ApolloProvider client={apollo}>
          <Layout>
            <Head>
              <title>GiftJet</title>
              <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
              />
              <link
                rel='stylesheet'
                href='https://fonts.googleapis.com/css?family=Staatliches'
              />
              <link
                href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Noto+Sans+TC:wght@100;300;400;900&display=swap'
                rel='stylesheet'
              />
            </Head>

            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </UserProvider>
    );
  }
}

// Wraps all components in the tree with the data provider
export default withData(MyApp);
