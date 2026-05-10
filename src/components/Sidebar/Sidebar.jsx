import React, { useState } from 'react';
import styled from 'styled-components';
import { white, grey, black } from '../../colors';
import NavItem from './components/NavItem';
import BottomNav from './components/BottomNav';
import Badge from './components/Badge';
import { HamburgerIcon, SwitchIcon } from './components/icons';

// ─── Styled components ────────────────────────────────────────────────────────

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $collapsed }) => ($collapsed ? '68px' : '240px')};
  min-height: 100vh;
  background: ${({ $bg }) => $bg};
  border-right: 1px solid ${({ $border }) => $border};
  transition: width 0.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  box-sizing: border-box;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: ${({ $collapsed }) => ($collapsed ? '16px 0' : '16px 12px')};
  justify-content: ${({ $collapsed }) => ($collapsed ? 'center' : 'flex-start')};
  border-bottom: 1px solid ${({ $divider }) => $divider};
  min-height: 64px;
  box-sizing: border-box;
`;

const LogoWrapper = styled.div`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StoreInfo = styled.div`
  flex: 1;
  overflow: hidden;
`;

const StoreName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ $color }) => $color};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StoreUrl = styled.div`
  font-size: 12px;
  color: ${({ $color }) => $color};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ $color }) => $color};
  padding: 2px;
  flex-shrink: 0;
  ${({ $marginRight }) => $marginRight && `margin-right: ${$marginRight}px;`}
`;

const SwitchStoreRow = styled.div`
  padding: 8px 12px;
  border-bottom: 1px solid ${({ $divider }) => $divider};
`;

const SwitchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ $color }) => $color};
  font-size: 13px;
  font-weight: 500;
  padding: 4px 0;
`;

const NavList = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Sidebar
 *
 * Props:
 *   logo             – ReactNode    — logo icon/image shown at top
 *   storeName        – string       — primary store name
 *   storeUrl         – string       — store URL shown below name
 *   onSwitchStore    – () => void   — called when "Switch stores" is clicked
 *   navItems         – NavItem[]    — main navigation items
 *   activeId         – string       — id of the currently active item
 *   onNavChange      – (id) => void
 *   bottomItems      – BottomItem[] — icon-only items pinned to the bottom
 *   collapsed        – boolean      — icon-only collapsed mode
 *   onCollapseToggle – () => void
 *   hoverExpand      – boolean      — stays collapsed, expands on hover
 *   showStoreInfo    – boolean      — shows full store header; default shows large hamburger + logo only
 *   theme            – 'light' | 'dark'
 *
 * NavItem:  { id, label, icon, badge?, children?: { id, label, badge? }[], onAdd? }
 * BottomItem: { id, icon, onClick? }
 */
const Sidebar = ({
  logo,
  storeName = 'Untitled UI',
  storeUrl = 'store.untitleui.com',
  onSwitchStore,
  navItems = [],
  activeId,
  onNavChange,
  bottomItems = [],
  collapsed = false,
  onCollapseToggle,
  hoverExpand = false,
  showStoreInfo = false,
  theme = 'light',
  ...rest
}) => {
  const [expandedIds, setExpandedIds] = useState({});
  const [hoveredId, setHoveredId] = useState(null);
  const [isHoverExpanded, setIsHoverExpanded] = useState(false);

  const effectiveCollapsed = hoverExpand ? !isHoverExpanded : collapsed;
  const isDark = theme === 'dark';

  const c = {
    bg: isDark ? black.m800 : white,
    border: isDark ? black.m700 : grey.m200,
    text: isDark ? grey.m100 : grey.m800,
    subText: isDark ? grey.m500 : grey.m500,
    activeBg: isDark ? grey.m700 : grey.m100,
    activeText: isDark ? white : grey.m900,
    hoverBg: isDark ? black.m700 : grey.m50,
    divider: isDark ? black.m700 : grey.m200,
  };

  const handleRootMouseEnter = () => setIsHoverExpanded(true);
  const handleRootMouseLeave = () => setIsHoverExpanded(false);
  const handleClearHover = () => setHoveredId(null);

  const handleNavClick = (id) => {
    if (onNavChange) onNavChange(id);
    if (hoverExpand) setIsHoverExpanded(false);
  };

  const isActive = (id) => activeId === id;

  const toggleExpand = (id, e) => {
    e.stopPropagation();
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Root
      $collapsed={effectiveCollapsed}
      $bg={c.bg}
      $border={c.border}
      onMouseEnter={hoverExpand ? handleRootMouseEnter : undefined}
      onMouseLeave={hoverExpand ? handleRootMouseLeave : undefined}
      {...rest}
    >
      {/* Header */}
      <Header $collapsed={effectiveCollapsed} $divider={c.divider}>
        {showStoreInfo ? (
          <>
            {logo && <LogoWrapper>{logo}</LogoWrapper>}
            {!effectiveCollapsed && (
              <StoreInfo>
                <StoreName $color={c.text}>{storeName}</StoreName>
                <StoreUrl $color={c.subText}>{storeUrl}</StoreUrl>
              </StoreInfo>
            )}
            {onCollapseToggle && (
              <IconButton onClick={onCollapseToggle} $color={c.subText}>
                <HamburgerIcon />
              </IconButton>
            )}
          </>
        ) : (
          <>
            {onCollapseToggle && (
              <IconButton onClick={onCollapseToggle} $color={c.subText} $marginRight={4}>
                <HamburgerIcon size={20} />
              </IconButton>
            )}
            {logo && (!effectiveCollapsed || hoverExpand) && (
              <LogoWrapper aria-label={storeName || undefined}>{logo}</LogoWrapper>
            )}
            {!effectiveCollapsed && storeName && <StoreName $color={c.text}>{storeName}</StoreName>}
          </>
        )}
      </Header>

      {/* Switch stores */}
      {!effectiveCollapsed && onSwitchStore && (
        <SwitchStoreRow $divider={c.divider}>
          <SwitchButton onClick={onSwitchStore} $color={c.subText}>
            <SwitchIcon />
            Switch stores
          </SwitchButton>
        </SwitchStoreRow>
      )}

      {/* Nav items */}
      <NavList>
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            collapsed={effectiveCollapsed}
            isActive={isActive}
            isHovered={hoveredId === item.id}
            isExpanded={!!expandedIds[item.id]}
            hoveredId={hoveredId}
            colors={c}
            isDark={isDark}
            onNavClick={handleNavClick}
            onHover={setHoveredId}
            onClearHover={handleClearHover}
            onToggleExpand={toggleExpand}
          />
        ))}
      </NavList>

      {/* Bottom items */}
      <BottomNav
        items={bottomItems}
        collapsed={effectiveCollapsed}
        isActive={isActive}
        hoveredId={hoveredId}
        colors={c}
        onHover={setHoveredId}
        onClearHover={handleClearHover}
      />
    </Root>
  );
};

export default Sidebar;
