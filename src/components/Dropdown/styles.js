import styled, { css, keyframes } from 'styled-components';
import grey from '../../colors/grey';
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

export const DropdownWrapper = styled.div`
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
  animation: ${({ $isOpen }) => ($isOpen ? rotate : reverse)} 0.15s linear;
  transform: rotate(${({ $isOpen }) => ($isOpen ? 180 : 0)}deg);
`;

export const OptionWrapper = styled.div`
  border: 1px solid ${grey.m700};
  width: calc(${({ $width }) => $width} + 1rem);
  /* Remove overflow: auto from here */
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  background-color: ${white};
  left: 0.15rem;
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
          border-top-right-radius: 0.6rem;
          border-top-left-radius: 0.6rem;
          margin-bottom: 0.1rem;
        `
      : css`
          top: 100%;
          border-bottom-right-radius: 0.6rem;
          border-bottom-left-radius: 0.6rem;
          margin-top: 0.1rem;
        `}
`;

// Add a new styled component for the scrollable area
export const OptionsList = styled.div`
  overflow-y: auto;
  flex: 1;
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0.7rem;
  right: 1rem;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${grey.m300};
  background: ${white};

  &:focus-within {
    border-bottom-color: ${grey.m500};
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  /* Add left padding to make room for the icon */
  padding: 0.5rem 0.75rem 0.5rem 0;
  font-size: 1.2rem;
  color: ${grey.m700};
  background: transparent;
  outline: none;

  &::placeholder {
    color: ${grey.m400};
  }
`;

export const SearchIcon = styled(Search)`
  margin: 0 1.2rem;
`;

export const LoadMoreSentinel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  min-height: 1rem;
  width: 100%;
`;
