import styled from 'styled-components';

export const NavListItem = styled.li`
  list-style: none;
`;

export const NavItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ $collapsed }) => ($collapsed ? '0' : '0.9375rem')};
  justify-content: ${({ $collapsed }) => ($collapsed ? 'center' : 'flex-start')};
  padding: ${({ $isChild, $collapsed }) =>
    $isChild ? '0.75rem 1.5rem 0.75rem 4rem' : $collapsed ? '1rem' : '1rem 1.5rem'};
  border-radius: 0.75rem;
  cursor: pointer;
  color: ${({ $isActive, $activeText, $text }) => ($isActive ? $activeText : $text)};
  background: ${({ $isActive, $activeBg, $isHovered, $hoverBg }) =>
    $isActive ? $activeBg : $isHovered ? $hoverBg : 'transparent'};
  transition: background 0.15s;
  font-size: ${({ $isChild }) => ($isChild ? '1.375rem' : '1.5rem')};
  font-weight: ${({ $isChild }) => ($isChild ? '400' : '500')};
  user-select: none;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

export const NavIconWrapper = styled.span`
  flex-shrink: 0;
  width: 1.6875rem;
  height: 1.6875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color};
`;

export const NavLabel = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NavControls = styled.span`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  flex-shrink: 0;
`;

export const InlineAction = styled.button`
  color: ${({ $color }) => $color};
  display: flex;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`;

export const SubList = styled.ul`
  margin-top: 0.125rem;
  display: flex;
  flex-direction: column;
  gap: 1px;
  list-style: none;
  padding: 0;
  margin-left: 0;
`;

export const ChildListItem = styled.li`
  list-style: none;
`;

export const ChildLabel = styled.span`
  flex: 1;
`;
