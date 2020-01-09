import { Link } from '../../routes';
import slug from '../../helpers/slug';

import ChannelCard from '../../components/ChannelCard';
import { Grid } from './styles';

const ChannelsGrid = (props) => {
  const { channels } = props;

  return (
    <Grid>
      {channels.map((channel) => (
        <Link
          route="channel"
          params={{
            slug: slug(channel.title),
            id: channel.id,
          }}
          key={channel.id}
        >
          <a>
            <ChannelCard channel={channel} />
          </a>
        </Link>
      ))}
    </Grid>
  );
};

export default ChannelsGrid;
