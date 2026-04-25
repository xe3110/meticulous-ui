import styled, { css } from 'styled-components';
import black from '../../../colors/black';
import grey from '../../../colors/grey';
import red from '../../../colors/red';
import { getCssShade, getPadding } from './helpers';

export const InputBox = styled.input`
  height: 4.8rem;
  border-radius: 0.64rem;
  font-size: 2.24rem;
  border: 2px solid ${({ $hasError }) => ($hasError ? red.m400 : black.m200)};
  padding: ${getPadding};
  font-weight: 400;
  transition: border-color 0.3s ease;
  background-color: ${({ $background }) => $background} !important;
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

export const LeftIconWrapper = styled.div`
  position: absolute;
  top: 1.28rem;
  left: 0.96rem;
`;

export const RightIconWrapper = styled.div`
  position: absolute;
  top: 1.28rem;
  right: 0.96rem;
`;

export const RightIconParent = styled.div`
  position: relative;
  width: 100%;
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

  ${({ $isFocused, value, $onlyPh }) =>
    !$onlyPh && ($isFocused || value)
      ? css`
          top: -0.64rem;
          left: ${({ $hasLeftIcon }) => ($hasLeftIcon ? 3.52 : 0.8)}rem;
          padding: 0 0.64rem;
          margin: 0;
        `
      : css`
          top: 1.28rem;
          left: ${({ $hasLeftIcon }) => ($hasLeftIcon ? 3.52 : 0.8)}rem;
          font-size: 2.24rem;
        `}
`;
