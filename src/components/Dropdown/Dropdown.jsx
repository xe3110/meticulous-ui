import { useEffect, useId, useLayoutEffect, useRef, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import grey from '../../colors/grey';
import MenuItem from '../MenuItem/MenuItem';
import colors from '../../colors/colorMap';
import blue from '../../colors/blue';
import Spinner from '../Spinner/Spinner';
import {
  Box,
  PWrapper,
  ChevronDownWrapper,
  OptionWrapper,
  DropdownWrapper,
  SpinnerWrapper,
  SearchInput,
  LoadMoreSentinel,
  OptionsList,
  SearchContainer,
  SearchIcon,
} from './styles';

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
