import PodcastListItem from '../PodcastListItem';
import { Container } from './styles';
import { SectionTitle } from '../PodcastList/styles';

const PodcastList = (props) => {
  const { podcasts, handleOpenPodcast } = props;

  return (
    <>
      <Container>
        <SectionTitle>Episodes</SectionTitle>
        {podcasts.map((podcast) => {
          const { id } = podcast;
          return (
            <PodcastListItem
              handleOpenPodcast={handleOpenPodcast}
              key={id}
              podcast={podcast}
            />
          );
        })}
      </Container>
    </>
  );
};

export default PodcastList;
