import { useEffect, useCallback, useRef, useState, isValidElement, useId } from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalFooter,
} from './styles';

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

export default Modal;
