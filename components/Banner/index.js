import { StyledBanner, Image } from './styles';

const Banner = ({ imageUrl }) => {
  return (
    <StyledBanner>
      <Image src={imageUrl} alt="Podcast Channel Banner" />
    </StyledBanner>
  );
};

export default Banner;
