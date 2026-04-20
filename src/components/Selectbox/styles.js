import styled, { css, keyframes } from 'styled-components';
import grey from '../../colors/grey';
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

export const SelectBoxWrapper = styled.div`
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

export const Box = styled.div`
  height: 2rem;
  width: ${({ $width }) => $width};
  border-radius: 0.6rem;
  outline: none;
  border: ${({ $isOpen, $isFocused, $border }) =>
    $isOpen || $isFocused ? `2px solid ${$border}` : `1px solid ${DEFAULT_BORDER}`};
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
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  background-color: ${white};
  left: 0.15rem;
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

export const OptionsList = styled.div`
  overflow-y: auto;
  flex: 1;
`;

export const CheckboxItem = styled.div`
  width: ${({ $width }) => $width};
  box-sizing: border-box;
  background-color: ${({ $isHighlighted, $hoverColor }) =>
    $isHighlighted ? $hoverColor : 'transparent'};
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
  padding: 0.6rem 1rem 0.8rem;
  margin-top: 0.1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? 'none' : 'auto')};

  &:active {
    background-color: ${({ $activeColor }) => $activeColor};
  }
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
  margin: 0 0.8rem;
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 1.2rem;
`;

export const LoadMoreSentinel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  min-height: 1rem;
  width: 100%;
`;
