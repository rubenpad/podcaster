import {
  StyledPodcastCard,
  PlayButton,
  PodcastTitle,
  Description,
  TextDescription,
  Action,
} from './styles';

const PodcastCard = (props) => {
  const { audioClip } = props;

  return (
    <StyledPodcastCard>
      <PodcastTitle>{audioClip.title}</PodcastTitle>
      <Description>
        <TextDescription>{`${audioClip.description.slice(
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

export default PodcastCard;
