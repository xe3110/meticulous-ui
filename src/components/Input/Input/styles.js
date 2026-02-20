import styled, { css } from 'styled-components';
import black from '../../../colors/black';
import grey from '../../../colors/grey';
import red from '../../../colors/red';
import { getCssShade } from './helpers';

export const InputBox = styled.input`
  height: 3rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  border: 2px solid ${({ hasError }) => (hasError ? red.m400 : black.m200)};
  padding: 0 0.6rem;
  font-weight: 400;
  transition: border-color 0.3s ease;
  background-color: transparent !important;
  overflow: hidden;

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
    font-size: 1.4rem;
    background-color: ${({ background }) => background};
    pointer-events: none;
  }

  &:focus {
    border: 2px solid
      ${({ $shade, hasError }) => getCssShade({ $shade, hasError, $isFocused: true })};
    outline: none;
  }
`;

export const HelperText = styled.p`
  margin-top: 0.4rem;
  margin-left: 0.4rem;
  font-size: 0.8rem;
  color: ${getCssShade};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.div`
  position: absolute;
  top: -0.4rem;
  left: 0.5rem;
  font-size: 0.8rem;
  background-color: ${({ background }) => background};
  margin: 0 0.4rem;
  transition: 0.25s;
  font-weight: 400;
  pointer-events: none;
  color: ${getCssShade};

  ${({ $isFocused, value, onlyPh }) =>
    !onlyPh && ($isFocused || value)
      ? css`
          top: -0.4rem;
          left: 0.5rem;
          padding: 0 0.4rem;
          margin: 0;
        `
      : css`
          top: 0.8rem;
          left: 0.5rem;
          font-size: 1.4rem;
        `}
`;
