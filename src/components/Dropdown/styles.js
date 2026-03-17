import styled, { css, keyframes } from 'styled-components';
import grey from '../../colors/grey';
import P from '../Typography/P';
import { ChevronDown } from '../Icons';
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

export const DropdownWrapper = styled.div`
  max-width: ${({ $width }) => $width};
  position: relative;

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
    `}
`;

export const Box = styled.div`
  height: 2rem;
  width: ${({ $width }) => $width};
  border-radius: 0.6rem;
  border: ${({ $isOpen, $border }) =>
    $isOpen ? `2px solid ${$border}` : `1px solid ${DEFAULT_BORDER}`};
  padding: 0.4rem 0.6rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const PWrapper = styled(P)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: calc(${({ $width }) => $width} - 2rem);
  pointer-events: none;
`;

export const ChevronDownWrapper = styled(ChevronDown)`
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      animation: ${rotate} 0.2s linear;
    `};
  transform: rotate(${({ $isOpen }) => ($isOpen ? 180 : 0)}deg);
`;

export const OptionWrapper = styled.div`
  border: 1px solid ${grey.m900};
  width: calc(${({ $width }) => $width} + 1rem);
  max-height: ${({ $height }) => $height};
  overflow: auto;
  position: absolute;
  z-index: 1000;
  background-color: ${white};

  ${({ $top }) =>
    $top
      ? css`
          bottom: 100%;
          border-top-right-radius: 0.6rem;
          border-top-left-radius: 0.6rem;
          border-bottom-width: 0;
        `
      : css`
          top: 100%;
          border-bottom-right-radius: 0.6rem;
          border-bottom-left-radius: 0.6rem;
          border-top-width: 0;
        `}
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0.7rem;
  right: 1rem;
`;
