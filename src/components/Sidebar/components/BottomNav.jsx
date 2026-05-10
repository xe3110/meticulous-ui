import React from 'react';
import BottomItem from './BottomItem';
import { BottomSection } from './BottomNav.styles';

const BottomNav = ({ items, collapsed, isActive, hoveredId, colors, onHover, onClearHover }) => {
  if (!items.length || collapsed) return null;

  return (
    <BottomSection $divider={colors.divider} $collapsed={collapsed}>
      {items.map((item) => (
        <BottomItem
          key={item.id}
          item={item}
          collapsed={collapsed}
          isActive={isActive}
          isHovered={hoveredId === item.id}
          colors={colors}
          onHover={onHover}
          onClearHover={onClearHover}
        />
      ))}
    </BottomSection>
  );
};

export default BottomNav;
