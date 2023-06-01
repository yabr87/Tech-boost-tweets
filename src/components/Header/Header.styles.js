import styled from 'styled-components';
import { Container } from 'components/App/App.styles';

export const AppHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: ${props => props.theme.gradient.bg};
  box-shadow: ${props => props.theme.shadows.default};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;
