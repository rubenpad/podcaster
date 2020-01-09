import { Link } from '../routes';
import slug from '../helpers/slug';

import Layout from '../components/Layout';
import {
  Cover,
  StyledPlayer,
  PlayerControls,
  EpisodeTitle,
  NowPlaying,
  ButtonBack,
} from '../styles/styles';

const Podcast = (props) => {
  const {
    episode: { title, urls, channel },
  } = props;

  return (
    <>
      <Layout title={title} />
      <StyledPlayer>
        <Link
          route="channel"
          params={{
            slug: slug(channel.title),
            id: channel.id,
          }}
        >
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

Podcast.getInitialProps = async ({ query }) => {
  const { id } = query; // podcast episode id
  const response = await fetch(
    `https://api.audioboom.com/audio_clips/${id}.mp3`
  );
  const { body } = await response.json();
  return { episode: body.audio_clip };
};

export default Podcast;
