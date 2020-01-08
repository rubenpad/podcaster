import { Channel, Image, Title } from './styles';

const ChannelCard = (props) => {
  const {
    title,
    urls: {
      logo_image: { original },
    },
  } = props.channel;

  return (
    <Channel image={original}>
      <Image src={original} alt="Podcast cover" />
      <Title className="channel_title">{title}</Title>
    </Channel>
  );
};

export default ChannelCard;
