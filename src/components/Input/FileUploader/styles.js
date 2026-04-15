import styled, { css } from 'styled-components';
import P from '../../Typography/P';
import grey from '../../../colors/grey';

export const UploadBtnContainer = styled.div`
  height: ${({ $height }) => $height}rem;
  width: fit-content;
  max-width: ${({ $width }) => $width}rem;
  display: inline-block;
  position: relative;
  border-radius: 0.8rem;

  ${({ disabled, $isLoading }) =>
    !(disabled || $isLoading) &&
    css`
      box-shadow: 0 0.4rem 1.5rem rgba(0, 0, 0, 0.2);
      transition:
        transform 0.2s,
        box-shadow 0.2s;

      &:hover,
      &:focus-within {
        box-shadow: 0 0.6rem 2rem rgba(0, 0, 0, 0.3);
        transform: translateY(-2px);
      }
    `};
`;

export const Wrapper = styled.label`
  height: ${({ $height }) => `${$height}rem`};
  width: fit-content;
  max-width: ${({ $width }) => `${$width}rem`};
  border-radius: 0.6rem;
  border: none;
  padding: 0 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  outline: none;
  background-color: ${({ $selectedColor, disabled }) => (disabled ? grey.m500 : $selectedColor)};
  cursor: ${({ disabled, $isLoading }) =>
    disabled ? 'not-allowed' : $isLoading ? 'auto' : 'pointer'};

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      pointer-events: none;
    `};

  ${({ disabled, $isLoading }) =>
    !(disabled || $isLoading) &&
    css`
      &:hover {
        background-color: ${({ $hoverColor }) => $hoverColor};
      }

      &:active {
        background-color: ${({ $activeColor }) => $activeColor};
      }
    `};
`;

export const PWrapper = styled(P)`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(
    100%
      ${({ $prefixIcon, $iconSize }) => ($prefixIcon ? ` - ${$iconSize}px - 0.8rem` : '')}${({
        $suffixIcon,
        $iconSize,
      }) => ($suffixIcon ? ` - ${$iconSize}px - 0.8rem` : '')}
  );
`;

export const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
`;
