import styled, { css } from 'styled-components';
import grey from '../../../colors/grey';

export const Circle = styled.div`
  position: absolute;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ $isSelected, $shade }) => ($isSelected ? $shade : 'transparent')};
  transition: background-color 0.35s ease;
`;

export const CircleBorder = styled.div`
  width: 1.1rem;
  height: 1.1rem;
  border: 1px solid ${({ $isSelected, $shade }) => ($isSelected ? $shade : grey.m900)};
  border-radius: 50%;
  position: relative;
`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  pointer-events: none;
`;

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: max-content;

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
