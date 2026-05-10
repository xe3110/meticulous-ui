import styled from 'styled-components';

export const BottomSection = styled.div`
  border-top: 1px solid ${({ $divider }) => $divider};
  padding: ${({ $collapsed }) => ($collapsed ? '12px 0' : '12px 8px')};
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
