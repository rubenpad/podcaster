import App from 'next/app';
import React from 'react';
import { GlobalStyle } from './GlobalStyles';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}
