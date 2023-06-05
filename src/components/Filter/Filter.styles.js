import styled from 'styled-components';

export const FilterWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  width: 180px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.btn};
  border: 1px solid #ebd8ff;
  padding: 8px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
`;

export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 8px;
  &:hover {
    border-radius: 10px;
    background-color: ${props => props.theme.colors.active};
  }
`;

export const FilterInput = styled.input`
  margin: 0 4px 0 0;
`;
