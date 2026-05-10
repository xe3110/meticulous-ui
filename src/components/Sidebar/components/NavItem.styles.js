import styled from 'styled-components';

export const NavItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ $collapsed }) => ($collapsed ? '0' : '10px')};
  justify-content: ${({ $collapsed }) => ($collapsed ? 'center' : 'flex-start')};
  padding: ${({ $isChild, $collapsed }) =>
    $isChild ? '6px 12px 6px 40px' : $collapsed ? '8px' : '7px 12px'};
  border-radius: 6px;
  cursor: pointer;
  color: ${({ $isActive, $activeText, $text }) => ($isActive ? $activeText : $text)};
  background: ${({ $isActive, $activeBg, $isHovered, $hoverBg }) =>
    $isActive ? $activeBg : $isHovered ? $hoverBg : 'transparent'};
  transition: background 0.15s;
  font-size: ${({ $isChild }) => ($isChild ? '13px' : '14px')};
  font-weight: ${({ $isChild }) => ($isChild ? '400' : '500')};
  user-select: none;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

export const NavIconWrapper = styled.span`
  flex-shrink: 0;
  width: 18px;
  height: 18px;
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
  gap: 6px;
  flex-shrink: 0;
`;

export const InlineAction = styled.span`
  color: ${({ $color }) => $color};
  display: flex;
  cursor: pointer;
`;

export const SubList = styled.div`
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const ChildLabel = styled.span`
  flex: 1;
`;
