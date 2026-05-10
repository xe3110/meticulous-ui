import React from 'react';
import {
  NavListItem,
  NavItemRow,
  NavIconWrapper,
  NavLabel,
  NavControls,
  InlineAction,
  SubList,
  ChildListItem,
  ChildLabel,
} from './NavItem.styles';
import { ChevronIcon, PlusIcon } from './icons';
import Badge from './Badge';

const NavItem = ({
  item,
  collapsed,
  isActive,
  isHovered,
  isExpanded,
  hoveredId,
  colors: c,
  isDark,
  onNavClick,
  onHover,
  onClearHover,
  onToggleExpand,
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const active = isActive(item.id);

  const handleClick = () => onNavClick(item.id);
  const handleMouseEnter = () => onHover(item.id);
  const handleToggleExpand = (e) => onToggleExpand(item.id, e);
  const handleAdd = (e) => {
    e.stopPropagation();
    item.onAdd();
  };

  return (
    <NavListItem>
      <NavItemRow
        $collapsed={collapsed}
        $isChild={false}
        $isActive={active}
        $isHovered={isHovered}
        $activeText={c.activeText}
        $text={c.text}
        $activeBg={c.activeBg}
        $hoverBg={c.hoverBg}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={onClearHover}
        aria-current={active ? 'page' : undefined}
      >
        <NavIconWrapper $color={active ? c.activeText : c.subText} aria-hidden='true'>
          {item.icon}
        </NavIconWrapper>

        {!collapsed && (
          <>
            <NavLabel>{item.label}</NavLabel>
            <NavControls>
              {item.badge != null && <Badge count={item.badge} isDark={isDark} />}
              {hasChildren && (
                <InlineAction
                  $color={c.subText}
                  onClick={handleToggleExpand}
                  aria-label={isExpanded ? `Collapse ${item.label}` : `Expand ${item.label}`}
                  aria-expanded={isExpanded}
                >
                  <ChevronIcon direction={isExpanded ? 'up' : 'down'} />
                </InlineAction>
              )}
              {item.onAdd && (
                <InlineAction
                  $color={c.subText}
                  onClick={handleAdd}
                  aria-label={`Add ${item.label}`}
                >
                  <PlusIcon />
                </InlineAction>
              )}
            </NavControls>
          </>
        )}
      </NavItemRow>

      {!collapsed && hasChildren && isExpanded && (
        <SubList>
          {item.children.map((child) => {
            const handleChildClick = () => onNavClick(child.id);
            const handleChildMouseEnter = () => onHover(child.id);

            return (
              <ChildListItem key={child.id}>
                <NavItemRow
                  $collapsed={false}
                  $isChild={true}
                  $isActive={isActive(child.id)}
                  $isHovered={hoveredId === child.id}
                  $activeText={c.activeText}
                  $text={c.text}
                  $activeBg={c.activeBg}
                  $hoverBg={c.hoverBg}
                  onClick={handleChildClick}
                  onMouseEnter={handleChildMouseEnter}
                  onMouseLeave={onClearHover}
                  aria-current={isActive(child.id) ? 'page' : undefined}
                >
                  <ChildLabel>{child.label}</ChildLabel>
                  {child.badge != null && <Badge count={child.badge} isDark={isDark} />}
                </NavItemRow>
              </ChildListItem>
            );
          })}
        </SubList>
      )}
    </NavListItem>
  );
};

export default NavItem;
