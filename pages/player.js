import Link from 'next/link';

import Layout from '../components/Layout';
import {
  Cover,
  StyledPlayer,
  PlayerControls,
  EpisodeTitle,
  NowPlaying,
  ButtonBack,
} from './styles';

const Player = (props) => {
  const {
    episode: { title, urls, channel },
  } = props;

  return (
    <>
      <Layout title={title} />
      <StyledPlayer>
        <Link href={`/channel?id=${channel.id}`}>
          <a>
            <ButtonBack />
          </a>
        </Link>
        <NowPlaying>
          <Cover src={urls.image} alt="Podcast episode cover" />
          <EpisodeTitle>{title}</EpisodeTitle>
        </NowPlaying>
        <PlayerControls controls src={urls.high_mp3}></PlayerControls>
      </StyledPlayer>
    </>
  );
};

Player.getInitialProps = async ({ query }) => {
  const { id } = query; // podcast episode id
  const response = await fetch(
    `https://api.audioboom.com/audio_clips/${id}.mp3`
  );
  const { body } = await response.json();
  return { episode: body.audio_clip };
};

export default Player;
