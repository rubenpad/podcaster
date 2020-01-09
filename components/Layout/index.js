import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';

import Header from '../Header';

Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const Layout = (props) => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
