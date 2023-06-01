import { NavContainer, NavItem } from './Navigation.styles';

const Navigation = () => (
  <NavContainer>
    <NavItem to="/">Home</NavItem>
    <NavItem to="/tweets">Tweets</NavItem>
  </NavContainer>
);

export default Navigation;
