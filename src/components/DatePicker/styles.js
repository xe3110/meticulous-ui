import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  box-shadow:
    0 8px 40px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 20px;
  width: 320px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  animation: ${fadeIn} 0.22s ease;
  user-select: none;
`;

/* ── Header: selected range display ── */
export const SelectedDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const DateChip = styled.div`
  flex: 1;
  background: ${({ $active, $primary }) => ($active ? $primary : '#f1f3f4')};
  color: ${({ $active }) => ($active ? '#fff' : '#5f6368')};
  border-radius: 12px;
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 500;
  transition:
    background 0.18s,
    color 0.18s;

  span {
    display: block;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    opacity: 0.7;
    margin-bottom: 2px;
  }
`;

export const RangeArrow = styled.div`
  color: #bdc1c6;
  font-size: 16px;
  flex-shrink: 0;
`;

/* ── Mode toggle ── */
export const ModeToggle = styled.div`
  display: flex;
  background: #f1f3f4;
  border-radius: 10px;
  padding: 3px;
  margin-bottom: 16px;
`;

export const ModeBtn = styled.button`
  flex: 1;
  border: none;
  background: ${({ $active }) => ($active ? '#fff' : 'transparent')};
  color: ${({ $active, $primary }) => ($active ? $primary : '#5f6368')};
  border-radius: 8px;
  padding: 6px 0;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s;
  box-shadow: ${({ $active }) => ($active ? '0 1px 4px rgba(0,0,0,0.1)' : 'none')};

  &:focus-visible {
    outline: 2px solid ${({ $primary }) => $primary};
    outline-offset: 2px;
  }
`;

/* ── Month navigation ── */
export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const NavBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5f6368;
  transition:
    background 0.15s,
    color 0.15s;

  &:hover {
    background: #f1f3f4;
    color: ${({ $primary }) => $primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ $primary }) => $primary};
  }
`;

export const MonthLabel = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: #202124;
  padding: 4px 8px;
  border-radius: 8px;
  transition: background 0.15s;

  &:hover {
    background: #f1f3f4;
  }

  &:focus-visible {
    outline: 2px solid ${({ $primary }) => $primary};
  }
`;

/* ── Calendar grid ── */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
`;

export const DayHeader = styled.div`
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  color: #9aa0a6;
  padding: 4px 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

/* Range highlight spans the full cell width; day circle sits on top */
export const DayCell = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;

  &::before {
    content: '';
    position: absolute;
    inset: 4px 0;
    background: ${({ $inRange, $primaryLight }) => ($inRange ? $primaryLight : 'transparent')};
    border-radius: ${({ $rangeStart, $rangeEnd }) => {
      if ($rangeStart) return '50% 0 0 50%';
      if ($rangeEnd) return '0 50% 50% 0';
      return '0';
    }};
    pointer-events: none;
  }
`;

export const DayBtn = styled.button`
  position: relative;
  z-index: 1;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  cursor: ${({ $empty, disabled }) => ($empty || disabled ? 'default' : 'pointer')};
  background: ${({ $selected, $hovered, $primary, $primaryLight }) => {
    if ($selected) return $primary;
    if ($hovered) return $primaryLight;
    return 'transparent';
  }};
  color: ${({ $selected, $today, disabled, $primary }) => {
    if ($selected) return '#fff';
    if (disabled) return '#dadce0';
    if ($today) return $primary;
    return '#202124';
  }};
  outline: ${({ $today, $selected, $primary }) =>
    $today && !$selected ? `2px solid ${$primary}` : 'none'};
  outline-offset: -2px;
  transition:
    background 0.12s,
    color 0.12s;
  pointer-events: ${({ $empty, disabled }) => ($empty || disabled ? 'none' : 'auto')};

  ${({ $empty }) =>
    $empty &&
    css`
      visibility: hidden;
    `}

  &:hover {
    background: ${({ $selected, $primary, $primaryDark, $primaryLight }) =>
      $selected ? $primaryDark : $primaryLight};
  }

  &:focus-visible {
    outline: 2px solid ${({ $primary }) => $primary};
  }
`;

/* ── Year/Month picker overlay ── */
export const PickerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  padding: 4px 0;
`;

export const PickerItem = styled.button`
  border: none;
  background: ${({ $active, $primary }) => ($active ? $primary : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : '#202124')};
  border-radius: 10px;
  padding: 8px 4px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.13s,
    color 0.13s;

  &:hover {
    background: ${({ $active, $primaryDark }) => ($active ? $primaryDark : '#f1f3f4')};
  }

  &:focus-visible {
    outline: 2px solid ${({ $primary }) => $primary};
  }
`;

export const YearScroll = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  max-height: 210px;
  overflow-y: auto;
  padding: 4px 0;
  scrollbar-width: thin;
`;

/* ── Footer ── */
export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #f1f3f4;
`;

export const ActionBtn = styled.button`
  border: none;
  background: ${({ $isPrimary, $primary }) => ($isPrimary ? $primary : 'transparent')};
  color: ${({ $isPrimary, $primary }) => ($isPrimary ? '#fff' : $primary)};
  border-radius: 8px;
  padding: 7px 16px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.14s,
    opacity 0.14s;

  &:hover {
    background: ${({ $isPrimary, $primaryDark, $primaryLight }) =>
      $isPrimary ? $primaryDark : $primaryLight};
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  &:focus-visible {
    outline: 2px solid ${({ $primary }) => $primary};
  }
`;
