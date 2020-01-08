import Layout from '../components/Layout';
import ChannelGrid from '../containers/ChannelsGrid';
import Podcast from '../components/Podcast';
import Banner from '../components/Banner';

import { SectionTitle } from './styles';

const Channel = (props) => {
  const { channel, audioClips, childChannels } = props;

  return (
    <>
      <Layout title={channel.title}>
        <Banner
          title={channel.title}
          imageUrl={channel.urls.banner_image.original}
          description={channel.description}
        />

        {childChannels.length > 0 && (
          <>
            <SectionTitle>Podcasts</SectionTitle>
            <ChannelGrid channels={childChannels} />
          </>
        )}

        {audioClips.length > 0 && (
          <>
            <SectionTitle>Episodes</SectionTitle>
            <Podcast audioClips={audioClips} />
          </>
        )}
      </Layout>
    </>
  );
};

Channel.getInitialProps = async ({ query }) => {
  // get the channel wiht the channeld
  const { id } = query; // channelId

  const [
    channelResponse,
    audiosResponse,
    childChannelsResponse,
  ] = await Promise.all([
    fetch(`https://api.audioboom.com/channels/${id}`),
    fetch(`https://api.audioboom.com/channels/${id}/audio_clips`),
    fetch(`https://api.audioboom.com/channels/${id}/child_channels`),
  ]);

  const {
    body: { channel },
  } = await channelResponse.json();

  // get the channel's audio_clips
  const {
    body: { audio_clips },
  } = await audiosResponse.json();

  // get the channels childs
  const {
    body: { channels },
  } = await childChannelsResponse.json();

  return {
    channel,
    audioClips: audio_clips,
    childChannels: channels,
  };
};

export default Channel;
