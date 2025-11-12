import styled from 'styled-components';

import white from '../../colors/white';

// Icons
import Close from '../Icons/Close';
import grey from '../../colors/grey';

export const ToastWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  position: absolute;
  top: 1rem;
  display: flex;
  align-items: center;
  background-color: ${({ bg }) => bg};
  height: 4.8rem;
  width: 32rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.6rem;
  transition: all 0.5s ease;
  opacity: 1;
  transform: translateX(0);

  .fade-out {
    opacity: 0;
    transform: translateX(100rem);
  }

  .fade-in {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${white};
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
`;

export const Outer = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ side }) => side};
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1.26rem;
  height: 1.26rem;
`;

export const OuterChild = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: ${({ main }) => main};
`;

export const CloseWrapper = styled(Close)`
  cursor: pointer;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${grey.m800};
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 24rem;
`;

export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: ${grey.m700};
`;
