import styled from 'styled-components';

export const BottomSection = styled.ul`
  border-top: 1px solid ${({ $divider }) => $divider};
  padding: ${({ $collapsed }) => ($collapsed ? '1.125rem 0' : '1.125rem 0.75rem')};
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  list-style: none;
  margin: 0;
`;
