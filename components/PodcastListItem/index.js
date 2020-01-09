import {
  StyledPodcastCard,
  PlayButton,
  PodcastTitle,
  Description,
  TextDescription,
  Action,
} from './styles';

const PodcastListItem = (props) => {
  const { podcast } = props;

  return (
    <StyledPodcastCard>
      <PodcastTitle>{podcast.title}</PodcastTitle>
      <Description>
        <TextDescription>{`${podcast.description.slice(
          0,
          140
        )}...`}</TextDescription>
      </Description>
      <Action>
        <PlayButton />
        <span>Play episode</span>
      </Action>
    </StyledPodcastCard>
  );
};

export default PodcastListItem;
