import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const NavItem = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.active};
  }

  &.active {
    color: ${props => props.theme.colors.active};
  }
`;
