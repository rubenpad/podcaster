import App from 'next/app';
import React from 'react';
import PageNProgress from 'next-styled-nprogress';

import GlobalStyle from '../styles/GlobalStyles';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <PageNProgress color="#1db954" showSpinner={true} />
        <Component {...pageProps} />
      </>
    );
  }
}
