import styled from 'styled-components';

export const Btn = styled.button`
  width: 196px;
  font-family: inherit;
  background-color: ${props => props.color};
  text-transform: uppercase;
  border-radius: 10px;
  border: none;
  outline: none;
  line-height: 1;
  padding: 16px;
  transition: all 0.2s ease;
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.btn};

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
