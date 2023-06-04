import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 196px;
  height: 50px;
  font-family: inherit;
  background-color: ${props => props.color};
  text-transform: uppercase;
  border-radius: 10px;
  border: none;
  outline: none;
  line-height: 1;
  padding: 16px;
  transition: ${props => props.theme.transition.hover};
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.btn};

  &:hover {
    border-radius: 18px;
  }
`;
