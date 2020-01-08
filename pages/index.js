import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import ChannelsGrid from '../containers/ChannelsGrid';

const Home = (props) => {
  const { channels } = props;
  return (
    <Layout title="Podcaster">
      <ChannelsGrid channels={channels} />
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const response = await fetch(
    'https://api.audioboom.com/channels/recommended?api_version=2'
  );
  const data = await response.json();

  return { channels: data.body };
};

export default Home;
