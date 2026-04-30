// Libraries
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
const noop = () => {};

// helpers
import { Logo } from './helpers';

// constants
import grey from '../../colors/grey';
import { COLOR_MAP, INFO_COLORS, INFO, ERROR } from './constants';

// styles
import {
  ToastWrapper,
  CloseWrapper,
  CloseButtonContainer,
  ProgressRing,
  Title,
  Subtitle,
  Message,
  ToastsContainer,
} from './styles';

export const ToastContainer = ({ toasts, ...rest }) => {
  const [allToasts, setAllToasts] = useState(toasts);

  useEffect(() => {
    setAllToasts(toasts);
  }, [toasts]);

  const renderToasts = ({ type, id, title, subtitle, duration, onExpire = noop }, i) => (
    <Toast {...{ type, title, subtitle, duration }} key={id} onExpire={onExpire} />
  );

  return createPortal(
    <ToastsContainer {...rest}>{[...allToasts].reverse().map(renderToasts)}</ToastsContainer>,
    document.body
  );
};

const remove = (setFadeOut, setShow, onExpire) => () => {
  setFadeOut(true);
  setTimeout(() => {
    setShow(false);
    onExpire();
  }, 500);
};

const Toast = ({
  type = INFO,
  visible = true,
  duration = 5,
  onExpire = noop,
  hasClockwiseRotation = false,
  title,
  subtitle,
  ...rest
}) => {
  const [show, setShow] = useState(visible);
  const [fadeOut, setFadeOut] = useState(false);
  const [paused, setPaused] = useState(false);

  const timerRef = useRef(null);
  const remainingRef = useRef((duration - 0.5) * 1000);
  const startTimeRef = useRef(null);

  const startTimer = (ms) => {
    startTimeRef.current = Date.now();
    timerRef.current = setTimeout(remove(setFadeOut, setShow, onExpire), ms);
  };

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  useEffect(() => {
    startTimer(remainingRef.current);
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    remainingRef.current -= Date.now() - startTimeRef.current;
    setPaused(true);
  };

  const handleMouseLeave = () => {
    setPaused(false);
    startTimer(remainingRef.current);
  };

  const { main: $main, side: $side, bg } = COLOR_MAP[type] ?? INFO_COLORS;

  if (show) {
    return (
      <ToastWrapper
        $bg={bg}
        role={type === ERROR ? 'alert' : 'status'}
        aria-live={type === ERROR ? 'assertive' : 'polite'}
        aria-atomic='true'
        className={`${fadeOut ? 'fade-out' : 'fade-in'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...rest}
      >
        <Logo {...{ type, $main, $side }} />
        <Message>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Message>
        <CloseButtonContainer>
          <ProgressRing
            aria-hidden='true'
            viewBox='0 0 28 28'
            $duration={duration}
            $color={$main}
            $paused={paused}
            $hasClockwiseRotation={hasClockwiseRotation}
          >
            <circle cx='14' cy='14' r='12' />
            <circle cx='14' cy='14' r='12' />
          </ProgressRing>
          <CloseWrapper
            aria-label='Close notification'
            size={13}
            color={grey.m600}
            onClick={remove(setFadeOut, setShow, onExpire)}
          />
        </CloseButtonContainer>
      </ToastWrapper>
    );
  }
};

export default Toast;
