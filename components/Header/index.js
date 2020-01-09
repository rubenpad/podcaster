import { Link } from '../../routes';

import { StyledHeader, Anchor } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <Link route="index">
        <Anchor>Podcaster</Anchor>
      </Link>
    </StyledHeader>
  );
};

export default Header;
