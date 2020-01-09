import {
  Cover,
  StyledPlayer,
  PlayerControls,
  EpisodeTitle,
  NowPlaying,
  ButtonBack,
} from './styles';

const Podcast = (props) => {
  const {
    handleClosePodcast,
    podcast: { title, urls },
  } = props;

  return (
    <>
      <StyledPlayer>
        <ButtonBack onClick={handleClosePodcast} />
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
