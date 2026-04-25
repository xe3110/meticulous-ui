import styled from 'styled-components';
import black from '../../../colors/black';

export const PWrapper = styled.p`
  font-size: ${({ $size }) => $size || '1.92rem'};
  color: ${({ $color }) => $color || black};
  margin: 0;
  height: auto;
`;
