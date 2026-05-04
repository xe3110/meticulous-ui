import { useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import colors from '../../colors/colorMap';
import blue from '../../colors/blue';
import { DAYS_SHORT, MONTHS, MODE } from './constants';
import {
  buildCalendarGrid,
  formatDate,
  isSameDay,
  isToday,
  isInRange,
  isRangeStart,
  isRangeEnd,
} from './utils';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div`
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
const SelectedDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const DateChip = styled.div`
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

const RangeArrow = styled.div`
  color: #bdc1c6;
  font-size: 16px;
  flex-shrink: 0;
`;

/* ── Mode toggle ── */
const ModeToggle = styled.div`
  display: flex;
  background: #f1f3f4;
  border-radius: 10px;
  padding: 3px;
  margin-bottom: 16px;
`;

const ModeBtn = styled.button`
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
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const NavBtn = styled.button`
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

const MonthLabel = styled.button`
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
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
`;

const DayHeader = styled.div`
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  color: #9aa0a6;
  padding: 4px 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

/* Range highlight spans the full cell width; day circle sits on top */
const DayCell = styled.div`
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

const DayBtn = styled.button`
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
const PickerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  padding: 4px 0;
`;

const PickerItem = styled.button`
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

const YearScroll = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  max-height: 210px;
  overflow-y: auto;
  padding: 4px 0;
  scrollbar-width: thin;
`;

/* ── Footer ── */
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #f1f3f4;
`;

const ActionBtn = styled.button`
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

const ChevronLeft = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='15 18 9 12 15 6' />
  </svg>
);

const ChevronRight = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='9 18 15 12 9 6' />
  </svg>
);

const PANEL = { CALENDAR: 'calendar', MONTH: 'month', YEAR: 'year' };

const now = new Date();
const YEAR_RANGE_START = 1924;
const YEAR_RANGE_END = now.getFullYear() + 20;
const YEARS = Array.from(
  { length: YEAR_RANGE_END - YEAR_RANGE_START + 1 },
  (_, i) => YEAR_RANGE_START + i
);

/**
 * @param {object}   props
 * @param {string}   [props.theme='blue']                  Color theme key from the meticulous-ui color map
 * @param {'single'|'range'} [props.mode='single']         Initial selection mode
 * @param {Date}     [props.value]                         Controlled value (single mode)
 * @param {Date[]}   [props.rangeValue]                    Controlled value (range mode) [start, end]
 * @param {Function} [props.onChange]                      Called with Date (single) or [Date, Date] (range) on confirm
 * @param {Date}     [props.minDate]                       Disable dates before this
 * @param {Date}     [props.maxDate]                       Disable dates after this
 * @param {boolean}  [props.showModeToggle=true]           Show the single/range mode toggle
 * @param {boolean}  [props.showFooter=true]               Show Clear/Apply buttons
 */
const DatePicker = ({
  theme = 'blue',
  mode: initialMode = MODE.SINGLE,
  value,
  rangeValue,
  onChange,
  minDate,
  maxDate,
  showModeToggle = true,
  showFooter = true,
  ...rest
}) => {
  const palette = useMemo(() => colors[theme] ?? blue, [theme]);
  const $primary = palette.m500;
  const $primaryDark = palette.m700;
  const $primaryLight = palette.m100;
  const themeProps = { $primary, $primaryDark, $primaryLight };

  const today = new Date();
  const [mode, setMode] = useState(initialMode);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [panel, setPanel] = useState(PANEL.CALENDAR);

  const [single, setSingle] = useState(value ?? null);
  const [rangeStart, setRangeStart] = useState(rangeValue?.[0] ?? null);
  const [rangeEnd, setRangeEnd] = useState(rangeValue?.[1] ?? null);
  const [hovered, setHovered] = useState(null);
  const [picking, setPicking] = useState(false);

  const grid = buildCalendarGrid(viewYear, viewMonth);

  const isDisabled = useCallback(
    (date) => {
      if (!date) return true;
      if (minDate && date < minDate) return true;
      if (maxDate && date > maxDate) return true;
      return false;
    },
    [minDate, maxDate]
  );

  /* ── Navigation ── */
  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  };

  /* ── Day selection ── */
  const handleDayClick = (date) => {
    if (!date || isDisabled(date)) return;

    if (mode === MODE.SINGLE) {
      setSingle(date);
      if (!showFooter) onChange?.(date);
      return;
    }

    if (!picking || !rangeStart) {
      setRangeStart(date);
      setRangeEnd(null);
      setPicking(true);
    } else {
      setRangeEnd(date);
      setPicking(false);
      if (!showFooter)
        onChange?.([
          date <= rangeStart ? date : rangeStart,
          date <= rangeStart ? rangeStart : date,
        ]);
    }
  };

  const switchMode = (m) => {
    setMode(m);
    setSingle(null);
    setRangeStart(null);
    setRangeEnd(null);
    setPicking(false);
    setHovered(null);
  };

  useEffect(() => {
    switchMode(initialMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialMode]);

  const handleApply = () => {
    if (mode === MODE.SINGLE) {
      onChange?.(single);
    } else if (rangeStart && rangeEnd) {
      const [from, to] = rangeStart <= rangeEnd ? [rangeStart, rangeEnd] : [rangeEnd, rangeStart];
      onChange?.([from, to]);
    }
  };

  const handleClear = () => {
    setSingle(null);
    setRangeStart(null);
    setRangeEnd(null);
    setPicking(false);
    setHovered(null);
    onChange?.(mode === MODE.SINGLE ? null : [null, null]);
  };

  /* ── Derived range helpers ── */
  const effectiveEnd = picking && hovered ? hovered : rangeEnd;
  const isStart = (d) => mode === MODE.RANGE && isRangeStart(d, rangeStart, effectiveEnd);
  const isEnd = (d) => mode === MODE.RANGE && isRangeEnd(d, rangeStart, effectiveEnd);
  const inRange = (d) => mode === MODE.RANGE && isInRange(d, rangeStart, effectiveEnd);
  const isSelected = (d) => (mode === MODE.SINGLE ? isSameDay(d, single) : isStart(d) || isEnd(d));

  const displayStart =
    mode === MODE.SINGLE
      ? formatDate(single)
      : formatDate(
          rangeStart
            ? rangeStart <= (effectiveEnd ?? rangeStart)
              ? rangeStart
              : effectiveEnd
            : null
        );
  const displayEnd =
    mode === MODE.RANGE
      ? formatDate(effectiveEnd ? (effectiveEnd >= rangeStart ? effectiveEnd : rangeStart) : null)
      : null;

  const applyDisabled = mode === MODE.SINGLE ? !single : !rangeStart || !rangeEnd;

  /* ── Month picker ── */
  const renderMonthPicker = () => (
    <PickerGrid>
      {MONTHS.map((m, i) => (
        <PickerItem
          key={m}
          $active={i === viewMonth}
          {...themeProps}
          onClick={() => {
            setViewMonth(i);
            setPanel(PANEL.CALENDAR);
          }}
        >
          {m.slice(0, 3)}
        </PickerItem>
      ))}
    </PickerGrid>
  );

  /* ── Year picker ── */
  const renderYearPicker = () => (
    <YearScroll>
      {YEARS.map((y) => (
        <PickerItem
          key={y}
          $active={y === viewYear}
          {...themeProps}
          onClick={() => {
            setViewYear(y);
            setPanel(PANEL.CALENDAR);
          }}
        >
          {y}
        </PickerItem>
      ))}
    </YearScroll>
  );

  /* ── Main calendar ── */
  const renderCalendar = () => (
    <Grid>
      {DAYS_SHORT.map((d) => (
        <DayHeader key={d}>{d}</DayHeader>
      ))}
      {grid.map((date, idx) => {
        const empty = !date;
        const disabled = isDisabled(date);
        const selected = !empty && isSelected(date);
        const today_ = !empty && isToday(date);
        const rangeStart_ = !empty && isStart(date);
        const rangeEnd_ = !empty && isEnd(date);
        const inRange_ = !empty && inRange(date);
        const isHovered = !empty && hovered && isSameDay(date, hovered);

        return (
          <DayCell
            key={idx}
            $inRange={inRange_ || rangeStart_ || rangeEnd_}
            $rangeStart={rangeStart_}
            $rangeEnd={rangeEnd_}
            $primaryLight={$primaryLight}
          >
            <DayBtn
              $empty={empty}
              $selected={selected}
              $today={today_}
              $hovered={isHovered && !selected}
              disabled={disabled}
              {...themeProps}
              onClick={() => handleDayClick(date)}
              onMouseEnter={() => !empty && setHovered(date)}
              onMouseLeave={() => setHovered(null)}
              aria-label={date ? date.toDateString() : undefined}
              aria-pressed={selected}
              tabIndex={empty || disabled ? -1 : 0}
            >
              {date?.getDate()}
            </DayBtn>
          </DayCell>
        );
      })}
    </Grid>
  );

  return (
    <Wrapper {...rest}>
      <SelectedDisplay>
        {mode === MODE.RANGE ? (
          <>
            <DateChip $active={picking || (!rangeStart && !rangeEnd)} $primary={$primary}>
              <span>From</span>
              {displayStart}
            </DateChip>
            <RangeArrow>→</RangeArrow>
            <DateChip $active={!picking && !!rangeEnd} $primary={$primary}>
              <span>To</span>
              {displayEnd}
            </DateChip>
          </>
        ) : (
          <DateChip $active={!!single} $primary={$primary} style={{ flex: 'none', width: '100%' }}>
            <span>Selected</span>
            {displayStart}
          </DateChip>
        )}
      </SelectedDisplay>

      {showModeToggle && (
        <ModeToggle>
          <ModeBtn
            $active={mode === MODE.SINGLE}
            $primary={$primary}
            onClick={() => switchMode(MODE.SINGLE)}
          >
            Single
          </ModeBtn>
          <ModeBtn
            $active={mode === MODE.RANGE}
            $primary={$primary}
            onClick={() => switchMode(MODE.RANGE)}
          >
            Range
          </ModeBtn>
        </ModeToggle>
      )}

      <Nav>
        <NavBtn $primary={$primary} onClick={prevMonth} aria-label='Previous month'>
          <ChevronLeft />
        </NavBtn>
        <div style={{ display: 'flex', gap: 4 }}>
          <MonthLabel
            $primary={$primary}
            onClick={() => setPanel(panel === PANEL.MONTH ? PANEL.CALENDAR : PANEL.MONTH)}
          >
            {MONTHS[viewMonth]}
          </MonthLabel>
          <MonthLabel
            $primary={$primary}
            onClick={() => setPanel(panel === PANEL.YEAR ? PANEL.CALENDAR : PANEL.YEAR)}
          >
            {viewYear}
          </MonthLabel>
        </div>
        <NavBtn $primary={$primary} onClick={nextMonth} aria-label='Next month'>
          <ChevronRight />
        </NavBtn>
      </Nav>

      {panel === PANEL.CALENDAR && renderCalendar()}
      {panel === PANEL.MONTH && renderMonthPicker()}
      {panel === PANEL.YEAR && renderYearPicker()}

      {showFooter && panel === PANEL.CALENDAR && (
        <Footer>
          <ActionBtn
            $primary={$primary}
            $primaryDark={$primaryDark}
            $primaryLight={$primaryLight}
            onClick={handleClear}
          >
            Clear
          </ActionBtn>
          <ActionBtn
            $isPrimary
            $primary={$primary}
            $primaryDark={$primaryDark}
            $primaryLight={$primaryLight}
            disabled={applyDisabled}
            onClick={handleApply}
          >
            Apply
          </ActionBtn>
        </Footer>
      )}
    </Wrapper>
  );
};

DatePicker.propTypes = {
  /** Color theme key from the meticulous-ui color map */
  theme: PropTypes.string,
  /** Initial selection mode. Can be switched via the built-in toggle unless `showModeToggle` is false. */
  mode: PropTypes.oneOf(['single', 'range']),
  /** Controlled selected date for single mode */
  value: PropTypes.instanceOf(Date),
  /** Controlled selected range for range mode — `[start, end]` */
  rangeValue: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  /** Called with a `Date` in single mode or `[Date, Date]` tuple in range mode */
  onChange: PropTypes.func,
  /** Dates before this value are disabled */
  minDate: PropTypes.instanceOf(Date),
  /** Dates after this value are disabled */
  maxDate: PropTypes.instanceOf(Date),
  /** Shows or hides the Single / Range mode toggle pill */
  showModeToggle: PropTypes.bool,
  /** Shows or hides the Clear / Apply footer. When false, `onChange` fires immediately on each click. */
  showFooter: PropTypes.bool,
};

export default DatePicker;
