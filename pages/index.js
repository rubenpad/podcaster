import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import ChannelsGrid from '../components/ChannelsGrid';
import Error from 'next/error';

const Home = (props) => {

  const { channels, statusCode } = props;

  if (statusCode !== 200) return <Error statusCode={statusCode} />;

  return (
    <Layout title="Podcaster">
      <ChannelsGrid channels={channels} />
    </Layout>
  );
};

Home.getInitialProps = async ({ res }) => {
  try {
    const response = await fetch(
      'https://api.audioboom.com/channels/recommended?api_version=2'
    );
    const data = await response.json();
    return { channels: data.body, statusCode: 200 };
  } catch (error) {
    res.statusCode = 503;
    return { channels: null, statusCode: 503 };
  }
};

export default Home;
