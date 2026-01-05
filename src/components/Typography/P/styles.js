import styled from 'styled-components';
import black from '../../../colors/black';

export const PWrapper = styled.p`
  font-size: ${({ $size }) => $size || '1.2rem'};
  color: ${({ $color }) => $color || black};
`;
