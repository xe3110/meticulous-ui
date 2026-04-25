import styled, { css } from 'styled-components';
import grey from '../../../colors/grey';

export const Circle = styled.div`
  position: absolute;
  width: 1.12rem;
  height: 1.12rem;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ $isSelected, $shade }) => ($isSelected ? $shade : 'transparent')};
  transition: background-color 0.35s ease;
`;

export const CircleBorder = styled.div`
  width: 1.76rem;
  height: 1.76rem;
  border: 1px solid ${({ $isSelected, $shade }) => ($isSelected ? $shade : grey.m900)};
  border-radius: 50%;
  position: relative;
  transition:
    border-color 0.5s ease,
    box-shadow 0.5s ease;
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
  margin: 0;
`;

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 1.28rem;
  width: max-content;

  &:focus-within ${CircleBorder} {
    box-shadow: 0 0 0 1px ${({ $focusShade }) => $focusShade || grey.m900};
  }

  ${({ $disabled }) =>
    $disabled
      ? css`
          pointer-events: none;
          opacity: 0.4;
          cursor: not-allowed;
        `
      : css`
          cursor: pointer;
        `}
`;
