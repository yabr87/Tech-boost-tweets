import Navigation from './Navigation';
import Logo from './Logo';

import { AppHeader, HeaderContainer } from './Header.styles';

const Header = () => {
  return (
    <AppHeader>
      <HeaderContainer>
        <Logo />
        <Navigation />
      </HeaderContainer>
    </AppHeader>
  );
};

export default Header;
