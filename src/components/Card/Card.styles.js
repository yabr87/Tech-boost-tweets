import styled from 'styled-components';

export const CardWrapper = styled.li`
  position: relative;
  width: 361px;
  height: 460px;
  border-radius: 20px;
  background: ${props => props.theme.gradient.bg};
  box-shadow: ${props => props.theme.shadows.default};

  @media ${props => props.theme.media.desk} {
    width: 380px;
  }
`;

export const CardContent = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const DecorationImg = styled.img`
  width: 280px;
  position: absolute;
  left: calc(50% - 140px);
  top: 28px;

  @media ${props => props.theme.media.tab} {
    width: 308px;
    left: calc(50% - 154px);
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  left: 0;
  top: 214px;
  background-color: ${props => props.theme.colors.main};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Ring = styled.img`
  width: 80px;
  position: absolute;
  left: calc(50% - 40px);
  top: 178px;
  z-index: 10;
`;

export const UserImgWrapper = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.accent};
  left: calc(50% - 40px);
  z-index: 2;
  top: 178px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: contain;
  overflow: hidden;
`;

export const UserImg = styled.img``;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 242px 16px 16px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: ${props => props.theme.colors.main};
  margin-bottom: 16px;

  &:nth-child(2) {
    margin-bottom: 26px;
  }
`;
