import {
  StyledBanner,
  Image,
  ChannelTitle,
  ChannelDescription,
} from './styles';

const Banner = ({ imageUrl, title, description }) => {
  return (
    <StyledBanner>
      <Image src={imageUrl} alt="Podcast Channel Banner" />
      <ChannelTitle>{title}</ChannelTitle>
      <ChannelDescription>{description}</ChannelDescription>
    </StyledBanner>
  );
};

export default Banner;
