import styled, { css } from 'styled-components';
import grey from '../../colors/grey';

export const ButtonWrapper = styled.button`
  height: ${({ $height }) => $height}rem;
  width: ${({ $width }) => $width}rem;
  border-radius: 0.6rem;
  border: none;
  padding: 0.6rem 0.4rem;
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

  &:focus-visible {
    outline: none;
  }
`;

export const Content = styled.div`
  font-size: ${({ $font }) => $font}rem;
  font-weight: 500;
  max-width: 100%;
  overflow: hidden;
  color: ${({ $textColor }) => $textColor};
`;

export const ButtonContainer = styled.div`
  height: ${({ $height }) => $height}rem;
  width: ${({ $width }) => $width}rem;
  display: inline-block;
  position: relative;
  border-radius: 0.6rem;

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

export const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
