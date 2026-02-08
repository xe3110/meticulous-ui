import styled, { css } from 'styled-components';
import black from '../../../colors/black';
import grey from '../../../colors/grey';

export const InputBox = styled.input`
  height: 3rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  border: 2px solid ${black.m200};
  padding: 0 0.6rem;
  font-weight: 400;
  transition: border-color 0.3s ease;

  &:focus {
    border: 2px solid ${({ $shade }) => $shade};
    outline: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.div`
  position: absolute;
  top: -0.4rem;
  left: 0.5rem;
  font-size: 0.8rem;
  background-color: white;
  padding: 0 0.4rem;
  transition: 0.5s;
  font-weight: 400;
  pointer-events: none;
  color: ${({ $isFocused, $shade }) => ($isFocused ? $shade : grey.m500)};

  ${({ $isFocused, value }) =>
    $isFocused || value
      ? css`
          top: -0.4rem;
          left: 0.5rem;
        `
      : css`
          top: 0.8rem;
          left: 0.5rem;
          font-size: 1.4rem;
        `}
`;
