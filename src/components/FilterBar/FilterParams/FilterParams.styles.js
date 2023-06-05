import styled from 'styled-components';

export const ParamsBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: lowercase;
  border-radius: 18px;
  line-height: 1;
  padding: 6px 10px;
  transition: ${props => props.theme.transition.hover};
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.btn};
`;
