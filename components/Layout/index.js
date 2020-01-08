import Head from 'next/head';

import Header from '../Header';

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
