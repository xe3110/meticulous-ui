import styled, { css } from 'styled-components';
import Check from '../../Icons/Check';
import grey from '../../../colors/grey';

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: max-content;

  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `}
`;

export const Box = styled(Check)`
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid ${({ $value, $outerShade }) => ($value ? $outerShade : grey.m800)};
  border-radius: 0.2rem;
  background-color: ${({ $value, $innerShade }) => ($value ? $innerShade : 'transparent')};
  transition: background-color 0.35s ease;

  path {
    stroke-width: 3;
  }
`;
