import { useEffect, useId, useLayoutEffect, useRef, useState, useMemo, useCallback } from 'react';
import grey from '../../colors/grey';
import colors from '../../colors';
import blue from '../../colors/blue';
import CheckboxInput from '../Input/Checkbox/Checkbox';
import Spinner from '../Spinner/Spinner';
import {
  SelectBoxWrapper,
  Box,
  PWrapper,
  ChevronDownWrapper,
  OptionWrapper,
  OptionsList,
  CheckboxItem,
  SearchContainer,
  SearchInput,
  SearchIcon,
  LoadMoreSentinel,
  SpinnerWrapper,
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

const Selectbox = ({
  options,
  onChange,
  value = [],
  width = '20rem',
  menuHeight = '20rem',
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
        $width={`calc(${width} + 1rem)`}
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
        <PWrapper $width={width} color={value.length > 0 ? grey.m700 : grey.m500} size='1.2rem'>
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

export default Selectbox;
