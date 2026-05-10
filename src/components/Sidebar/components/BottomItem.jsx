import React from 'react';
import { NavItemRow } from './NavItem.styles';
import { BottomListItem, BottomIconWrapper, BottomLabel } from './BottomItem.styles';

const BottomItem = ({ item, collapsed, isActive, isHovered, colors: c, onClearHover, onHover }) => {
  const handleClick = () => item.onClick && item.onClick();
  const handleMouseEnter = () => onHover(item.id);

  return (
    <BottomListItem>
      <NavItemRow
        $collapsed={collapsed}
        $isChild={false}
        $isActive={isActive(item.id)}
        $isHovered={isHovered}
        $activeText={c.activeText}
        $text={c.text}
        $activeBg={c.activeBg}
        $hoverBg={c.hoverBg}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={onClearHover}
        aria-label={item.label}
      >
        <BottomIconWrapper $color={c.subText} aria-hidden='true'>
          {item.icon}
        </BottomIconWrapper>
        {!collapsed && <BottomLabel $color={c.text}>{item.label}</BottomLabel>}
      </NavItemRow>
    </BottomListItem>
  );
};

export default BottomItem;
