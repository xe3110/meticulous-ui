import React from 'react';
import styled from 'styled-components';

const ChevronSvg = styled.svg`
  transform: ${({ $direction }) => ($direction === 'up' ? 'rotate(180deg)' : 'none')};
  transition: transform 0.2s;
`;

export const ChevronIcon = ({ direction = 'down' }) => (
  <ChevronSvg width='16' height='16' viewBox='0 0 16 16' fill='none' $direction={direction}>
    <path
      d='M4 6l4 4 4-4'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </ChevronSvg>
);

export const PlusIcon = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <path d='M8 3v10M3 8h10' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
  </svg>
);

export const HamburgerIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox='0 0 16 16' fill='none'>
    <path d='M2 4h12M2 8h12M2 12h12' stroke='currentColor' strokeWidth='1' strokeLinecap='round' />
  </svg>
);

export const SwitchIcon = () => (
  <svg width='14' height='14' viewBox='0 0 16 16' fill='none'>
    <path
      d='M2 6h12M2 10h12M6 2l-4 4 4 4M10 14l4-4-4-4'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
