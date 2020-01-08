import Link from 'next/link';
import ChannelCard from '../../components/ChannelCard';
import { Grid } from './styles';

const ChannelsGrid = (props) => {
  const { channels } = props;

  return (
    <Grid>
      {channels.map((channel) => (
        <Link href={`/channel?id=${channel.id}`} key={channel.id}>
          <a>
            <ChannelCard channel={channel} />
          </a>
        </Link>
      ))}
    </Grid>
  );
};

export default ChannelsGrid;
