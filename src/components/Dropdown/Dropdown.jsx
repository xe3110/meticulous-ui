import { useEffect, useId, useLayoutEffect, useRef, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import grey from '../../colors/grey';
import MenuItem from '../MenuItem/MenuItem';
import colors from '../../colors/colorMap';
import blue from '../../colors/blue';
import Spinner from '../Spinner/Spinner';
import styled, { css, keyframes } from 'styled-components';
import P from '../Typography/P';
import ChevronDown from '../Icons/ChevronDown';
import Search from '../Icons/Search';
import { DEFAULT_BORDER } from './constants';
import white from '../../colors/white';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const reverse = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const DropdownWrapper = styled.div`
  max-width: ${({ $width }) => $width};
  position: relative;
  outline: none;

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      pointer-events: none;
      opacity: 0.8;
    `}

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `}
`;

const Box = styled.div`
  height: 3.2rem;
  width: ${({ $width }) => $width};
  border-radius: 0.96rem;
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
  /* Remove overflow: auto from here */
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  background-color: ${white};
  left: 0.24rem;
  max-height: 0;
  transition: max-height 0.15s ease-out;
  opacity: 0;
  overflow: hidden; /* Keep this hidden so the collapse works */

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
          flex-direction: column-reverse; /* Search at bottom if menu opens upward */
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

// Add a new styled component for the scrollable area
const OptionsList = styled.div`
  overflow-y: auto;
  flex: 1;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 1.28rem;
  right: 1.92rem;
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
  /* Add left padding to make room for the icon */
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

const Dropdown = ({
  options,
  onChange,
  value,
  width = '32rem',
  menuHeight = '32rem',
  placeholder,
  theme = 'blue',
  isLoading,
  isDisabled,
  loaderColor,
  searchable = false,
  onLoadMore,
  hasMore = false,
  isLoadingMore = false,
  searchPh = 'Search...',
  ...rest
}) => {
  const [isOpen, setOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState('bottom');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);

  const listboxId = useId();

  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const searchInputRef = useRef(null);
  const sentinelRef = useRef(null);
  const isInitialOpen = useRef(true);

  const toggle = () => !isLoading && !isDisabled && setOpen((prev) => !prev);

  const handleChange = (val) => {
    if (val !== value) {
      onChange(val);
      setOpen(false);
    }
  };

  const filteredOptions = useMemo(() => {
    if (!searchable || !searchQuery.trim()) return options;
    const q = searchQuery.toLowerCase();
    return options.filter(({ label }) => label.toLowerCase().includes(q));
  }, [options, searchQuery, searchable]);

  useEffect(() => {
    if (isOpen) {
      const selectedIndex = filteredOptions.findIndex((opt) => opt.value === value);

      if (selectedIndex !== -1 && !filteredOptions[selectedIndex].disabled) {
        setActiveIndex(selectedIndex);
      } else {
        const firstEnabled = filteredOptions.findIndex((opt) => !opt.disabled);
        setActiveIndex(firstEnabled);
      }
    } else {
      setSearchQuery('');
      setActiveIndex(-1);
    }
  }, [isOpen, searchQuery, filteredOptions, value]);

  useEffect(() => {
    if (isOpen && activeIndex !== -1 && menuRef.current) {
      const highlightedElement = menuRef.current.children[activeIndex];
      if (highlightedElement) {
        highlightedElement.scrollIntoView({
          block: 'nearest',
          behavior: 'auto',
        });
      }
    }
  }, [activeIndex, isOpen]);

  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  useEffect(() => {
    if (!isOpen) isInitialOpen.current = true;
  }, [isOpen]);

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

  const handleKeyDown = (e) => {
    if (isLoading || isDisabled) return;
    if (!isOpen) {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = getNextEnabledIndex(activeIndex);

        if (nextIndex === activeIndex && hasMore && !isLoadingMore) {
          onLoadMore?.();
        }

        setActiveIndex(nextIndex);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev) => getPrevEnabledIndex(prev));
        break;
      case 'Enter':
        e.preventDefault();
        const selectedOption = filteredOptions[activeIndex];
        if (selectedOption && !selectedOption.disabled) {
          handleChange(selectedOption.value);
        }
        break;
      case 'Escape':
        setOpen(false);
        break;
      default:
        break;
    }
  };

  const handleLoadMore = useCallback(() => {
    if (hasMore && !isLoadingMore && onLoadMore) {
      onLoadMore();
    }
  }, [hasMore, isLoadingMore, onLoadMore]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !onLoadMore || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Use isIntersecting AND check if it's actually visible
        if (entry.isIntersecting && !isLoadingMore) {
          handleLoadMore();
        }
      },
      {
        root: menuRef.current, // Observe relative to the scrollable container
        threshold: 0.1,
        rootMargin: '20px', // Start loading 20px before the user even hits the bottom
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [handleLoadMore, onLoadMore, hasMore, isLoadingMore]);

  const {
    m50: hoverColor,
    m100: activeColor,
    m200: selectedColor,
    m500: border,
  } = colors[theme] ?? blue;

  const mouseHighlight = (disabled, index) => () => !disabled && setActiveIndex(index);

  const getOptionId = (index) => `${listboxId}-opt-${index}`;

  const renderOption = ({ value: val, label, disabled }, index) => (
    <MenuItem
      {...{ value: val, label, isDisabled: disabled }}
      onSelect={handleChange}
      onMouseEnter={mouseHighlight(disabled, index)}
      isSelected={val === value}
      isHighlighted={index === activeIndex}
      key={val}
      id={getOptionId(index)}
      width={width}
      {...{ selectedColor, hoverColor, activeColor }}
    />
  );

  const changeFocus = (focus) => () => {
    setIsFocused(focus);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (!containerRef.current?.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const onSearchClick = (e) => {
    e.stopPropagation();
  };

  return (
    <DropdownWrapper
      ref={containerRef}
      $width={width}
      {...rest}
      tabIndex={isDisabled || isLoading ? -1 : 0}
      onKeyDown={handleKeyDown}
      $isLoading={isLoading}
      $isDisabled={isDisabled}
      role='combobox'
      aria-expanded={isOpen}
      aria-haspopup='listbox'
      aria-controls={listboxId}
      aria-disabled={isDisabled || undefined}
      aria-activedescendant={activeIndex !== -1 ? getOptionId(activeIndex) : undefined}
      onFocus={changeFocus(true)}
      onBlur={handleBlur}
    >
      <Box
        $width={width}
        onClick={toggle}
        $isOpen={isOpen}
        $border={border}
        $isFocused={isFocused && !isOpen}
      >
        <PWrapper $width={width} color={!!value ? grey.m700 : grey.m500} size='1.92rem'>
          {value ? options.find(({ value: opt }) => value === opt)?.label : placeholder}
        </PWrapper>
        <ChevronDownWrapper color={grey.m500} size={22} $isOpen={isOpen} aria-hidden />
      </Box>
      <OptionWrapper $isOpen={isOpen} $width={width} $height={menuHeight} $top={position === 'top'}>
        {searchable && (
          <SearchContainer onClick={onSearchClick}>
            <SearchIcon size={20} color={grey.m600} aria-hidden />
            <SearchInput
              ref={searchInputRef}
              value={searchQuery}
              onChange={handleSearch}
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
        <OptionsList ref={menuRef} role='listbox' id={listboxId} tabIndex={-1}>
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
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  /** Array of option objects: `{ value, label, disabled? }` */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
  /** Currently selected value (controlled) */
  value: PropTypes.any,
  /** Called with the selected value when an option is picked */
  onChange: PropTypes.func,
  /** CSS width of the dropdown trigger. Defaults to `'32rem'` */
  width: PropTypes.string,
  /** Maximum CSS height of the dropdown menu. Defaults to `'32rem'` */
  menuHeight: PropTypes.string,
  /** Placeholder text shown when no value is selected */
  placeholder: PropTypes.string,
  /** Color theme key. Defaults to `'blue'` */
  theme: PropTypes.string,
  /** Shows a spinner inside the trigger and disables interaction */
  isLoading: PropTypes.bool,
  /** Disables the dropdown */
  isDisabled: PropTypes.bool,
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

export default Dropdown;
