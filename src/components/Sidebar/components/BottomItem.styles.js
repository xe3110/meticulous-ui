import styled from 'styled-components';

export const BottomIconWrapper = styled.span`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color};
`;

export const BottomLabel = styled.span`
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  color: ${({ $color }) => $color};
`;
