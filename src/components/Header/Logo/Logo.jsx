import logoImage from 'images/Logo.svg';
import { LogoLink } from './Logo.styles';

const Logo = props => (
  <LogoLink to="/">
    <img src={logoImage} alt="logo" />
  </LogoLink>
);

export default Logo;
