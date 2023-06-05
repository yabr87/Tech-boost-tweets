import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      transform: scale(1.3);
      opacity: 0.1;
    }
  `;

export const ImgWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  cursor: pointer;

  &:after {
    animation: 2000ms ${pulse} cubic-bezier(0.9, 0.7, 0.5, 0.9) infinite;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: blueviolet;
    border-radius: 50%;
    z-index: -1;
  }
`;

export const Text = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.text};
  font-size: 28px;
  font-weight: 500;
  margin-top: 15px;
`;
