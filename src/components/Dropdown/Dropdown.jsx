import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import _get from 'lodash-es/get';
import grey from '../../colors/grey';
import MenuItem from '../MenuItem/MenuItem';
import colors from '../../colors';
import blue from '../../colors/blue';
import Spinner from '../Spinner/Spinner';
import {
  Box,
  PWrapper,
  ChevronDownWrapper,
  OptionWrapper,
  DropdownWrapper,
  SpinnerWrapper,
} from './styles';

const getPixelValue = (value) => {
  if (typeof value !== 'string') return value;

  if (value.endsWith('px')) {
    return parseFloat(value);
  }

  if (value.endsWith('rem')) {
    const remValue = parseFloat(value);
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return remValue * rootFontSize;
  }

  // Handle other units or raw numbers if necessary
  return parseFloat(value);
};

const Dropdown = ({
  options,
  onChange,
  value,
  width = '20rem',
  menuHeight = '20rem',
  placeholder,
  theme = 'blue',
  isLoading,
  isDisabled,
  loaderColor,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [position, setPosition] = useState('bottom');
  const containerRef = useRef(null);
  const menuRef = useRef(null);

  const toggle = () => {
    setOpen((isOpen) => !isOpen);
  };

  const handleChange = (val) => {
    if (val !== value) {
      onChange(val);
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false); // Close dropdown
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useLayoutEffect(() => {
    if (isOpen && menuRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Convert your variable to pixels
      const parsedMenuHeight = getPixelValue(menuHeight);

      // Use the parsed value for your logic
      const spaceBelow = viewportHeight - containerRect.bottom;
      const buffer = 8;

      if (spaceBelow < parsedMenuHeight + buffer && containerRect.top > spaceBelow) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    }
  }, [isOpen, menuHeight]);

  const {
    m50: hoverColor,
    m100: activeColor,
    m200: selectedColor,
    m500: border,
  } = _get(colors, theme, blue);

  const renderOption = ({ value: val, label, disabled }) => (
    <MenuItem
      {...{ value: val, label, isDisabled: disabled, onSelect: handleChange }}
      isSelected={val === value}
      key={val}
      width={width}
      {...{ selectedColor, hoverColor, activeColor }}
    />
  );

  return (
    <DropdownWrapper
      ref={containerRef}
      $width={width}
      $isLoading={isLoading}
      $isDisabled={isDisabled}
    >
      <Box $width={width} onClick={toggle} $isOpen={isOpen} $border={border}>
        <PWrapper $width={width} color={!!value ? grey.m700 : grey.m500} size='1.2rem'>
          {value ? options.find(({ value: opt }) => value === opt)?.label : placeholder}
        </PWrapper>
        <ChevronDownWrapper color={grey.m500} size={22} $isOpen={isOpen} />
      </Box>
      <OptionWrapper $isOpen={isOpen} $width={width} $height={menuHeight} $top={position === 'top'}>
        <div ref={menuRef}>{options.map(renderOption)}</div>
      </OptionWrapper>
      {isLoading && (
        <SpinnerWrapper>
          <Spinner size='small' color={loaderColor} />
        </SpinnerWrapper>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
