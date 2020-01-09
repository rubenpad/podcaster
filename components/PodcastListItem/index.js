import { StyledPodcastCard, PlayButton, PodcastTitle } from './styles';

const PodcastListItem = (props) => {
  const { podcast, handleOpenPodcast } = props;

  return (
    <>
      <StyledPodcastCard>
        <PlayButton onClick={(e) => handleOpenPodcast(e, podcast)}>
          Play
        </PlayButton>
        <PodcastTitle>{podcast.title}</PodcastTitle>
      </StyledPodcastCard>
    </>
  );
};

export default PodcastListItem;
