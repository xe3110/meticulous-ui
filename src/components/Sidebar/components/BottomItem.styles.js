import styled from 'styled-components';

export const BottomListItem = styled.li`
  list-style: none;
`;

export const BottomIconWrapper = styled.span`
  width: 1.6875rem;
  height: 1.6875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color};
`;

export const BottomLabel = styled.span`
  flex: 1;
  font-size: 1.3125rem;
  font-weight: 500;
  color: ${({ $color }) => $color};
`;
