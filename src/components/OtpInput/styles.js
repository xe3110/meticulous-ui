import styled from 'styled-components';
import grey from '../../colors/grey';

export const OTPWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.64rem;

  @media screen and (max-width: 768px) {\
    gap: 0.32rem;
  }
`;

export const Input = styled.input`
  height: 3.2rem;
  width: 3.2rem;
  font-size: 1.92rem;
  text-align: center;
  color: ${grey.m600};
  border: 1px solid ${grey.m800};
  border-radius: 0.32rem;
`;
