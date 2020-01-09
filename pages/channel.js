import { useState } from 'react';
import Error from 'next/error';

import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelsGrid';
import PodcastList from '../components/PodcastList';
import Banner from '../components/Banner';
import PodcastPlayer from '../components/PodcastPlayer';

import { SectionTitle, Modal } from './styles';

const Channel = (props) => {
  const [podcastIsOpen, setPodcastIsOpen] = useState(null);

  const handleOpenPodcast = (e, podcast) => {
    e.preventDefault();
    setPodcastIsOpen(podcast);
  };

  const handleClosePodcast = (e, podcast) => {
    e.preventDefault();
    setPodcastIsOpen(null);
  };

  const { channel, podcasts, childChannels, statusCode } = props;

  if (statusCode !== 200) return <Error statusCode={statusCode} />;

  return (
    <>
      <Layout title={channel.title}>
        <Banner
          title={channel.title}
          imageUrl={channel.urls.banner_image.original}
          description={channel.description}
        />

        {podcastIsOpen && (
          <Modal>
            <PodcastPlayer
              handleClosePodcast={handleClosePodcast}
              podcast={podcastIsOpen}
            />
          </Modal>
        )}

        {childChannels.length > 0 && (
          <>
            <SectionTitle>Podcasts</SectionTitle>
            <ChannelGrid channels={childChannels} />
          </>
        )}

        {podcasts.length > 0 && (
          <>
            <PodcastList
              podcasts={podcasts}
              handleOpenPodcast={handleOpenPodcast}
            />
          </>
        )}
      </Layout>
    </>
  );
};

Channel.getInitialProps = async ({ query, res }) => {
  // get the channel wiht the channeld
  const { id } = query; // channelId

  try {
    const [
      channelResponse,
      audiosResponse,
      childChannelsResponse,
    ] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${id}`),
      fetch(`https://api.audioboom.com/channels/${id}/audio_clips`),
      fetch(`https://api.audioboom.com/channels/${id}/child_channels`),
    ]);

    if (channelResponse.status >= 400) {
      res.statusCode = channelResponse.status;
      return {
        channel: null,
        podcasts: null,
        childChannels: null,
        statusCode: channelResponse.status,
      };
    }

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
      podcasts: audio_clips,
      childChannels: channels,
      statusCode: 200,
    };
  } catch (error) {
    res.statusCode = 503;
    return {
      channel: null,
      podcasts: null,
      childChannels: null,
      statusCode: 503,
    };
  }
};

export default Channel;
