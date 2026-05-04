import { useEffect, useId, useLayoutEffect, useRef, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import grey from '../../colors/grey';
import colors from '../../colors/colorMap';
import blue from '../../colors/blue';
import CheckboxInput from '../Input/Checkbox/Checkbox';
import Spinner from '../Spinner/Spinner';
import styled, { css, keyframes } from 'styled-components';
import P from '../Typography/P';
import ChevronDown from '../Icons/ChevronDown';
import Search from '../Icons/Search';
import white from '../../colors/white';

const DEFAULT_BORDER = grey.m500;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(180deg); }
`;

const reverse = keyframes`
  from { transform: rotate(180deg); }
  to { transform: rotate(0deg); }
`;

const SelectBoxWrapper = styled.div`
  max-width: ${({ $width }) => $width};
  position: relative;
  outline: none;

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `}

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `}
`;

const Box = styled.div`
  height: 3.2rem;
  width: ${({ $width }) => $width};
  border-radius: 0.96rem;
  outline: none;
  border: ${({ $isOpen, $isFocused, $border }) =>
    $isOpen || $isFocused ? `2px solid ${$border}` : `1px solid ${DEFAULT_BORDER}`};
  padding: 0.64rem 0.96rem 0.64rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const PWrapper = styled(P)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: calc(${({ $width }) => $width} - 3.2rem);
  pointer-events: none;
`;

const ChevronDownWrapper = styled(ChevronDown)`
  animation: ${({ $isOpen }) => ($isOpen ? rotate : reverse)} 0.15s linear;
  transform: rotate(${({ $isOpen }) => ($isOpen ? 180 : 0)}deg);
`;

const OptionWrapper = styled.div`
  border: 1px solid ${grey.m700};
  width: calc(${({ $width }) => $width} + 1.6rem);
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  background-color: ${white};
  left: 0.24rem;
  max-height: 0;
  transition: max-height 0.15s ease-out;
  opacity: 0;
  overflow: hidden;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      max-height: ${({ $height }) => $height};
      opacity: 1;
    `};

  ${({ $top }) =>
    $top
      ? css`
          bottom: 100%;
          flex-direction: column-reverse;
          border-top-right-radius: 0.96rem;
          border-top-left-radius: 0.96rem;
          margin-bottom: 0.16rem;
        `
      : css`
          top: 100%;
          border-bottom-right-radius: 0.96rem;
          border-bottom-left-radius: 0.96rem;
          margin-top: 0.16rem;
        `}
`;

const OptionsList = styled.div`
  overflow-y: auto;
  flex: 1;
`;

const CheckboxItem = styled.div`
  width: ${({ $width }) => $width};
  box-sizing: border-box;
  background-color: ${({ $isHighlighted, $hoverColor }) =>
    $isHighlighted ? $hoverColor : 'transparent'};
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
  padding: 0.96rem 1.6rem 1.28rem;
  margin-top: 0.16rem;
  display: flex;
  align-items: center;
  gap: 0.96rem;
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? 'none' : 'auto')};

  &:active {
    background-color: ${({ $activeColor }) => $activeColor};
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${grey.m300};
  background: ${white};

  &:focus-within {
    border-bottom-color: ${grey.m500};
  }
`;

const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  padding: 0.8rem 1.2rem 0.8rem 0;
  font-size: 1.92rem;
  color: ${grey.m700};
  background: transparent;
  outline: none;

  &::placeholder {
    color: ${grey.m400};
  }
`;

const SearchIcon = styled(Search)`
  margin: 0 1.28rem;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 1.28rem;
  right: 1.92rem;
`;

const LoadMoreSentinel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 0;
  min-height: 1.6rem;
  width: 100%;
`;

const getPixelValue = (value) => {
  if (typeof value !== 'string') return value;
  if (value.endsWith('px')) return parseFloat(value);
  if (value.endsWith('rem')) {
    const remValue = parseFloat(value);
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return remValue * rootFontSize;
  }
  return parseFloat(value);
};

const Selectbox = ({
  options,
  onChange,
  value = [],
  width = '32rem',
  menuHeight = '32rem',
  placeholder,
  theme = 'blue',
  isDisabled,
  isLoading,
  searchable = false,
  searchPh = 'Search...',
  onLoadMore,
  hasMore = false,
  isLoadingMore = false,
  loaderColor,
  ...rest
}) => {
  const [isOpen, setOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState('bottom');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);

  const listboxId = useId();
  const triggerId = useId();
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const searchInputRef = useRef(null);
  const sentinelRef = useRef(null);

  const toggle = () => !isDisabled && !isLoading && setOpen((prev) => !prev);

  const handleToggleOption = (val) => {
    const next = value.includes(val) ? value.filter((v) => v !== val) : [...value, val];
    onChange(next);
  };

  const filteredOptions = useMemo(() => {
    if (!searchable || !searchQuery.trim()) return options;
    const q = searchQuery.toLowerCase();
    return options.filter(({ label }) => label.toLowerCase().includes(q));
  }, [options, searchQuery, searchable]);

  useEffect(() => {
    if (isOpen) {
      const firstEnabled = filteredOptions.findIndex((opt) => !opt.disabled);
      setActiveIndex(firstEnabled);
    } else {
      setSearchQuery('');
      setActiveIndex(-1);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && activeIndex !== -1 && menuRef.current) {
      const el = menuRef.current.children[activeIndex];
      if (el) el.scrollIntoView({ block: 'nearest', behavior: 'auto' });
    }
  }, [activeIndex, isOpen]);

  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useLayoutEffect(() => {
    if (isOpen && menuRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const parsedMenuHeight = getPixelValue(menuHeight);
      const spaceBelow = viewportHeight - containerRect.bottom;
      const buffer = 8;
      setPosition(
        spaceBelow < parsedMenuHeight + buffer && containerRect.top > spaceBelow ? 'top' : 'bottom'
      );
    }
  }, [isOpen, menuHeight]);

  const getNextEnabledIndex = (currentIndex) => {
    let next = currentIndex + 1;
    while (next < filteredOptions.length) {
      if (!filteredOptions[next].disabled) return next;
      next++;
    }
    return currentIndex;
  };

  const getPrevEnabledIndex = (currentIndex) => {
    let prev = currentIndex - 1;
    while (prev >= 0) {
      if (!filteredOptions[prev].disabled) return prev;
      prev--;
    }
    return currentIndex;
  };

  const handleLoadMore = useCallback(() => {
    if (hasMore && !isLoadingMore && onLoadMore) onLoadMore();
  }, [hasMore, isLoadingMore, onLoadMore]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !onLoadMore || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoadingMore) handleLoadMore();
      },
      { root: menuRef.current, threshold: 0.1, rootMargin: '20px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [handleLoadMore, onLoadMore, hasMore, isLoadingMore]);

  const handleKeyDown = (e) => {
    if (isDisabled || isLoading) return;
    if (!isOpen) {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        const nextIndex = getNextEnabledIndex(activeIndex);
        if (nextIndex === activeIndex && hasMore && !isLoadingMore) onLoadMore?.();
        setActiveIndex(nextIndex);
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        setActiveIndex(getPrevEnabledIndex(activeIndex));
        break;
      }
      case 'Enter':
      case ' ':
        e.preventDefault();
        const opt = filteredOptions[activeIndex];
        if (opt && !opt.disabled) handleToggleOption(opt.value);
        break;
      case 'Escape':
        setOpen(false);
        break;
      default:
        break;
    }
  };

  const {
    m50: hoverColor,
    m100: activeColor,
    m500: border,
    m800: cbOuterShade,
  } = colors[theme] ?? blue;

  const mouseHighlight = (disabled, index) => () => !disabled && setActiveIndex(index);

  const getOptionId = (index) => `${listboxId}-opt-${index}`;

  const displayLabel = value.length === 0 ? placeholder : `${value.length} selected`;

  const renderOption = ({ value: val, label, disabled }, index) => {
    const isChecked = value.includes(val);
    return (
      <CheckboxItem
        key={val}
        id={getOptionId(index)}
        role='option'
        aria-selected={isChecked}
        aria-disabled={disabled || undefined}
        $width={`calc(${width} + 1.6rem)`}
        $isHighlighted={index === activeIndex}
        $isDisabled={disabled}
        $hoverColor={hoverColor}
        $activeColor={activeColor}
        onClick={() => handleToggleOption(val)}
        onMouseEnter={mouseHighlight(disabled, index)}
        title={label}
      >
        {/* stop propagation so the label click doesn't bubble to CheckboxItem and double-fire */}
        <div onClick={(e) => e.stopPropagation()}>
          <CheckboxInput
            value={isChecked}
            onChange={() => handleToggleOption(val)}
            label={label}
            disabled={disabled}
            innerShade={border}
            outerShade={cbOuterShade}
            tabIndex={-1}
          />
        </div>
      </CheckboxItem>
    );
  };

  const handleBlur = (e) => {
    if (!containerRef.current?.contains(e.relatedTarget)) {
      setIsFocused(false);
      setOpen(false);
    }
  };

  return (
    <SelectBoxWrapper
      ref={containerRef}
      $width={width}
      $isDisabled={isDisabled}
      $isLoading={isLoading}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      onFocus={() => setIsFocused(true)}
      {...rest}
    >
      <Box
        id={triggerId}
        role='button'
        $width={width}
        onClick={toggle}
        $isOpen={isOpen}
        $border={border}
        $isFocused={isFocused && !isOpen}
        tabIndex={isDisabled ? -1 : 0}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-disabled={isDisabled || undefined}
        aria-activedescendant={activeIndex !== -1 ? getOptionId(activeIndex) : undefined}
      >
        <PWrapper $width={width} color={value.length > 0 ? grey.m700 : grey.m500} size='1.92rem'>
          {displayLabel}
        </PWrapper>
        <ChevronDownWrapper color={grey.m500} size={22} $isOpen={isOpen} aria-hidden />
      </Box>
      <OptionWrapper $isOpen={isOpen} $width={width} $height={menuHeight} $top={position === 'top'}>
        {searchable && (
          <SearchContainer onClick={(e) => e.stopPropagation()}>
            <SearchIcon size={20} color={grey.m600} aria-hidden />
            <SearchInput
              ref={searchInputRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPh}
              aria-label={searchPh}
              aria-controls={listboxId}
              aria-autocomplete='list'
              aria-expanded={isOpen}
              role='combobox'
              tabIndex={isOpen ? 0 : -1}
            />
          </SearchContainer>
        )}
        <OptionsList
          ref={menuRef}
          role='listbox'
          id={listboxId}
          tabIndex={-1}
          aria-multiselectable={true}
          aria-labelledby={triggerId}
        >
          {filteredOptions.map(renderOption)}
          {onLoadMore && (
            <LoadMoreSentinel ref={sentinelRef}>
              {isLoadingMore && <Spinner size='small' color={loaderColor} />}
            </LoadMoreSentinel>
          )}
        </OptionsList>
      </OptionWrapper>
      {isLoading && (
        <SpinnerWrapper>
          <Spinner size='small' color={loaderColor} />
        </SpinnerWrapper>
      )}
    </SelectBoxWrapper>
  );
};

Selectbox.propTypes = {
  /** Array of option objects: `{ value, label, disabled? }` */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
  /** Array of currently selected values (controlled multi-select). Defaults to `[]` */
  value: PropTypes.arrayOf(PropTypes.any),
  /** Called with the updated array of selected values on each change */
  onChange: PropTypes.func,
  /** CSS width of the selectbox trigger. Defaults to `'32rem'` */
  width: PropTypes.string,
  /** Maximum CSS height of the dropdown menu. Defaults to `'32rem'` */
  menuHeight: PropTypes.string,
  /** Placeholder text shown when nothing is selected */
  placeholder: PropTypes.string,
  /** Color theme key. Defaults to `'blue'` */
  theme: PropTypes.string,
  /** Disables the selectbox */
  isDisabled: PropTypes.bool,
  /** Shows a spinner inside the trigger and disables interaction */
  isLoading: PropTypes.bool,
  /** Color key for the loading spinner */
  loaderColor: PropTypes.string,
  /** Adds a search input inside the dropdown menu */
  searchable: PropTypes.bool,
  /** Placeholder text for the search input. Defaults to `'Search...'` */
  searchPh: PropTypes.string,
  /** Called when the user scrolls to the bottom of the list (infinite scroll) */
  onLoadMore: PropTypes.func,
  /** Whether more options are available to load */
  hasMore: PropTypes.bool,
  /** Shows a spinner at the bottom while loading more options */
  isLoadingMore: PropTypes.bool,
};

export default Selectbox;
