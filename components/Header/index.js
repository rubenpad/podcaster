import Link from 'next/link';

import { StyledHeader, Anchor } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <Anchor>Podcaster</Anchor>
      </Link>
    </StyledHeader>
  );
};

export default Header;
