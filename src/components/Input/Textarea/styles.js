import styled, { css } from 'styled-components';
import black from '../../../colors/black';
import grey from '../../../colors/grey';
import red from '../../../colors/red';
import { getCssShade } from './helpers';

export const TextareaBox = styled.textarea`
  border-radius: 0.64rem;
  font-size: 2.24rem;
  border: 2px solid ${({ $hasError }) => ($hasError ? red.m400 : black.m200)};
  padding: 0.96rem;
  font-weight: 400;
  transition: border-color 0.3s ease;
  background-color: ${({ $background }) => $background} !important;
  min-height: 2.24rem;
  min-width: 4.8rem;

  ${({ $isResizeNone }) =>
    $isResizeNone &&
    css`
      resize: none;
    `}

  ${({ $isDynamic }) =>
    $isDynamic &&
    css`
      resize: none;
    `}

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px var(--input-bg) inset;
    -webkit-text-fill-color: var(--input-text);
    transition: background-color 9999s ease-in-out 0s;
  }

  &::placeholder {
    color: ${grey.m500};
    font-weight: 300;
    font-size: 2.24rem;
    background-color: ${({ $background }) => $background};
    pointer-events: none;
  }

  &:focus {
    border: 2px solid
      ${({ $shade, $hasError }) => getCssShade({ $shade, $hasError, $isFocused: true })};
    outline: none;
  }
`;

export const HelperText = styled.p`
  margin-top: 0.64rem;
  margin-left: 0.64rem;
  font-size: 1.28rem;
  color: ${getCssShade};
`;

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const Label = styled.div`
  position: absolute;
  top: -0.64rem;
  left: 0.8rem;
  font-size: 1.28rem;
  background-color: ${({ $outerBackground }) => $outerBackground};
  border-radius: 0.64rem;
  margin: 0 0.64rem;
  transition: 0.25s;
  font-weight: 400;
  pointer-events: none;
  color: ${getCssShade};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: -moz-available; /* Firefox */
  max-width: -webkit-fill-available; /* Chrome, Safari, Edge */
  max-width: stretch; /* Modern Standard */

  ${({ $isFocused, $value, $onlyPh }) =>
    !$onlyPh && ($isFocused || $value)
      ? css`
          top: -0.64rem;
          left: 0.8rem;
          padding: 0 0.64rem;
          margin: 0;
        `
      : css`
          top: 1.28rem;
          left: 0.8rem;
          font-size: 2.24rem;
        `}
`;

export const Parent = styled.div`
  overflow: hidden;
`;
