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
import {
  Wrapper,
  SelectedDisplay,
  DateChip,
  RangeArrow,
  ModeToggle,
  ModeBtn,
  Nav,
  NavBtn,
  MonthLabel,
  Grid,
  DayHeader,
  DayCell,
  DayBtn,
  PickerGrid,
  PickerItem,
  YearScroll,
  Footer,
  ActionBtn,
} from './styles';

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
