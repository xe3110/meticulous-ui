import styled, { css } from 'styled-components';
import Check from '../../Icons/Check';
import grey from '../../../colors/grey';

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: max-content;
  position: relative;

  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}
`;

export const Box = styled(Check)`
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid ${({ $value, $outerShade }) => ($value ? $outerShade : grey.m800)};
  border-radius: 0.2rem;
  background-color: ${({ $value, $innerShade }) => ($value ? $innerShade : 'transparent')};
  transition:
    background-color 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease;
  flex-shrink: 0;
  box-shadow: 0 0 0 1px ${({ $focused, $outerShade }) => ($focused ? $outerShade : 'transparent')};

  path {
    stroke-width: 3;
    transform-box: fill-box;
    transform-origin: center;
    transform: scale(${({ $value }) => ($value ? 1 : 0)});
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
`;

export const CbInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  whitespace: nowrap;
`;
