import { Link } from '../../routes';
import slug from '../../helpers/slug';

import PodcastListItem from '../PodcastListItem';
import { ContainerGrid } from './styles';

const PodcastList = (props) => {
  const { podcasts } = props;

  return (
    <>
      <ContainerGrid>
        {podcasts.map((podcast) => {
          const { id } = podcast;
          return (
            <Link
              route="podcast"
              params={{
                slugChannel: slug(podcast.channel.title),
                idChannel: podcast.channel.id,
                slug: slug(podcast.title),
                id: podcast.id,
              }}
              key={id}
            >
              <a>
                <PodcastListItem podcast={podcast} />
              </a>
            </Link>
          );
        })}
      </ContainerGrid>
    </>
  );
};

export default PodcastList;
