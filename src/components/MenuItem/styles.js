import styled from 'styled-components';
import P from '../Typography/P';

export const Wrapper = styled.div`
  width: ${({ $width }) => $width};
  background-color: ${({ $isSelected, $defaultColor, $selectedColor }) =>
    $isSelected ? $selectedColor : $defaultColor};
  cursor: ${({ $isSelected }) => ($isSelected ? 'auto' : 'pointer')};
  padding: 0.6rem 0 0.8rem 1rem;
  margin-top: 0.1rem;

  &:hover {
    background-color: ${({ $isSelected, $hoverColor, $selectedColor }) =>
      $isSelected ? $selectedColor : $hoverColor};
  }

  &:active {
    background-color: ${({ $isSelected, $activeColor, $selectedColor }) =>
      $isSelected ? $selectedColor : $activeColor};
  }
`;

export const PWrapper = styled(P)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: calc(${({ $width }) => $width} - 2rem);
`;
