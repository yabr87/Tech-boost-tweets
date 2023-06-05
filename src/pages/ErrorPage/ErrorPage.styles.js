import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.text};
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 10px;
`;
