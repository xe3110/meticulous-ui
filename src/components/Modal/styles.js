import styled, { css, keyframes } from 'styled-components';
import grey from '../../colors/grey';
import white from '../../colors/white';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const scaleOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.95); }
`;

const growFromBottom = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const shrinkToBottom = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(100%); }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease;
  padding: 1rem;

  ${({ $fullOnMobile }) =>
    $fullOnMobile &&
    css`
      @media (max-width: 640px) {
        align-items: flex-end;
        padding: 0;
      }
    `}
`;

export const ModalContainer = styled.div`
  background-color: ${white};
  border-radius: 1rem;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  width: ${({ $width }) => $width || '32rem'};
  max-width: 100%;
  animation: ${({ $isClosing }) => ($isClosing ? scaleOut : scaleIn)} 0.3s ease forwards;

  ${({ $fullOnMobile, $isClosing }) =>
    $fullOnMobile &&
    css`
      @media (max-width: 640px) {
        width: 100%;
        max-width: 100%;
        max-height: 95dvh;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: ${$isClosing ? shrinkToBottom : growFromBottom} 0.22s
          cubic-bezier(0.32, 0.72, 0, 1) ${$isClosing ? 'forwards' : ''};
      }
    `}
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${grey.m200};
  flex-shrink: 0;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 2.4rem;
  font-weight: 600;
  color: ${grey.m900};
  line-height: 1.4;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${grey.m500};
  border-radius: 0.5rem;
  transition:
    background-color 0.15s,
    color 0.15s;
  flex-shrink: 0;

  &:hover {
    background-color: ${grey.m100};
    color: ${grey.m800};
  }

  &:focus-visible {
    outline: 2px solid ${grey.m400};
    outline-offset: 2px;
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
  color: ${grey.m700};
  font-size: 0.95rem;
  line-height: 1.6;
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid ${grey.m200};
  flex-shrink: 0;

  ${({ $align }) =>
    $align === 'left' &&
    css`
      justify-content: flex-start;
    `}

  ${({ $align }) =>
    $align === 'center' &&
    css`
      justify-content: center;
    `}
`;
