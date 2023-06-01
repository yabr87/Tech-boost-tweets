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
  margin-bottom: 50px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.gradient.bg};
  box-shadow: ${props => props.theme.shadows.default};
  padding: 30px;
  max-width: 250px;
  max-height: 250px;
  border-radius: 50%;
`;

export const Text404 = styled.p`
  display: flex;
  color: ${props => props.theme.colors.text};

  font-size: 250px;
  font-weight: 700;
`;
