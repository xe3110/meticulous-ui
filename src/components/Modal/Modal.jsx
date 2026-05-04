import { useEffect, useCallback, useRef, useState, isValidElement, useId } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
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

const Overlay = styled.div`
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

const ModalContainer = styled.div`
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

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${grey.m200};
  flex-shrink: 0;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 2.4rem;
  font-weight: 600;
  color: ${grey.m900};
  line-height: 1.4;
`;

const CloseButton = styled.button`
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

const ModalBody = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
  color: ${grey.m700};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ModalFooter = styled.div`
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

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const CloseIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
);

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  footerAlign = 'right',
  width,
  closeOnOverlayClick = true,
  showCloseButton = true,
  isFullOnMobile = false,
  ...rest
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef(null);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    if (isOpen) {
      clearTimeout(closeTimerRef.current);
      // remember what was focused before opening
      triggerRef.current = document.activeElement;
      setShouldRender(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);
      closeTimerRef.current = setTimeout(() => {
        setIsClosing(false);
        setShouldRender(false);
        // restore focus to the element that opened the modal
        triggerRef.current?.focus();
      }, 220);
    }
    return () => clearTimeout(closeTimerRef.current);
  }, [isOpen]);

  // move focus into the modal when it opens
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;
    const first = containerRef.current.querySelectorAll(FOCUSABLE)[0];
    (first ?? containerRef.current).focus();
  }, [isOpen, shouldRender]);

  // trap focus inside the modal
  const handleTabKey = useCallback((e) => {
    if (e.key !== 'Tab' || !containerRef.current) return;
    const focusable = [...containerRef.current.querySelectorAll(FOCUSABLE)];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose?.();
      handleTabKey(e);
    },
    [onClose, handleTabKey]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prev;
    };
  }, [isOpen, handleKeyDown]);

  if (!shouldRender) return null;

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) onClose?.();
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick} $fullOnMobile={isFullOnMobile}>
      <ModalContainer
        ref={containerRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
        $width={width}
        $fullOnMobile={isFullOnMobile}
        $isClosing={isClosing}
        {...rest}
      >
        {(title || showCloseButton) && (
          <ModalHeader>
            {title &&
              (isValidElement(title) ? (
                <div id={titleId}>{title}</div>
              ) : (
                <ModalTitle id={titleId}>{title}</ModalTitle>
              ))}
            {showCloseButton && (
              <CloseButton onClick={onClose} aria-label='Close modal'>
                <CloseIcon />
              </CloseButton>
            )}
          </ModalHeader>
        )}
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter $align={footerAlign}>{footer}</ModalFooter>}
      </ModalContainer>
    </Overlay>,
    document.body
  );
};

Modal.propTypes = {
  /** Controls whether the modal is visible */
  isOpen: PropTypes.bool,
  /** Called when the modal requests to close (Escape key, overlay click, or close button) */
  onClose: PropTypes.func,
  /** Modal header title — string or React element */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Modal body content */
  children: PropTypes.node,
  /** Content rendered in the modal footer (e.g. action buttons) */
  footer: PropTypes.node,
  /** Horizontal alignment of footer content: `'left'`, `'center'`, or `'right'`. Defaults to `'right'` */
  footerAlign: PropTypes.string,
  /** CSS width of the modal dialog */
  width: PropTypes.string,
  /** Closes the modal when the backdrop is clicked. Defaults to `true` */
  closeOnOverlayClick: PropTypes.bool,
  /** Shows the × close button in the header. Defaults to `true` */
  showCloseButton: PropTypes.bool,
  /** Expands the modal to full-screen on small viewports */
  isFullOnMobile: PropTypes.bool,
};

export default Modal;
