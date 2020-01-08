import Link from 'next/link';

import PodcastCard from '../PodcastCard';
import { ContainerGrid } from './styles';

const Podcast = (props) => {
  const { audioClips } = props;

  return (
    <>
      <ContainerGrid>
        {audioClips.map((audioClip) => {
          const { id, title } = audioClip;
          return (
            <Link href={`/player?id=${id}`} key={id}>
              <a>
                <PodcastCard audioClip={audioClip} />
              </a>
            </Link>
          );
        })}
      </ContainerGrid>
    </>
  );
};

export default Podcast;
