// Libraries
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
const noop = () => {};

// Icons
import Close from '../Icons/Close';
import Check from '../Icons/Check';
import Info from '../Icons/Info';
import WarningTriangleFilled from '../Icons/WarningTriangleFilled';

// colors
import white from '../../colors/white';
import grey from '../../colors/grey';

// constants
import { COLOR_MAP, INFO_COLORS, INFO, ERROR, SUCCESS, WARNING } from './constants';

const outerRingGrow = keyframes`
  from { transform: scale(0); }
  to   { transform: scale(1); }
`;

const innerRingGrow = keyframes`
  from { transform: translate(-50%, -50%) scale(0); }
  to   { transform: translate(-50%, -50%) scale(1); }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%); /* Start off-screen to the right */
  }
  to {
    opacity: 1;
    transform: translateX(0); /* Move to its final position */
  }
`;

/* Define the animation for exit */
const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%); /* Move off-screen to the right */
  }
`;

const ToastsContainer = styled.div`
  position: fixed;
  top: 1.6rem;
  right: 1.6rem;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $bg }) => $bg};
  height: 7.68rem;
  width: 44.8rem;
  border-radius: 1.28rem;
  padding: 0.64rem 2.56rem;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
  transition: all 0.5s ease;

  &.fade-in {
    opacity: 1;
    animation: ${slideIn} 0.5s ease-out forwards; /* slide down + fade */
  }

  &.fade-out {
    opacity: 0;
    animation: ${slideOut} 0.5s ease-in forwards; /* slide right */
  }

  @media screen and (max-width: 768px) {
    height: 5.76rem;
    width: 33.6rem;
    border-radius: 0.96rem;
    padding: 0.48rem 1.28rem;
  }

  @media screen and (max-width: 480px) {
    height: 5.2rem;
    width: 30rem;
    border-radius: 0.88rem;
    padding: 0.44rem 1.12rem;
  }

  @media screen and (max-width: 380px) {
    height: 4.8rem;
    width: 27rem;
    border-radius: 0.8rem;
    padding: 0.4rem 1rem;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${white};
  width: 2.88rem;
  height: 2.88rem;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 2.16rem;
    height: 2.16rem;
  }

  @media screen and (max-width: 480px) {
    width: 1.92rem;
    height: 1.92rem;
  }

  @media screen and (max-width: 380px) {
    width: 1.76rem;
    height: 1.76rem;
  }
`;

const Outer = styled.div`
  position: relative;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background-color: ${({ $side }) => $side};
  animation: ${outerRingGrow} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;

  @media screen and (max-width: 768px) {
    width: 4.8rem;
    height: 4.8rem;
  }

  @media screen and (max-width: 480px) {
    width: 4.3rem;
    height: 4.3rem;
  }

  @media screen and (max-width: 380px) {
    width: 3.9rem;
    height: 3.9rem;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: ${({ $isWarning }) => ($isWarning ? '49%' : '50%')};
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    top: 42.8%;
    left: 42.8%;
    transform: translate(
      ${({ $isWarning }) => ($isWarning ? '-45.8%' : '-42.8%')},
      ${({ $isWarning }) => ($isWarning ? '-50.8%' : '-42.8%')}
    );
    scale: 0.75;
  }
`;

const OuterChild = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background-color: ${({ $main }) => $main};
  animation: ${innerRingGrow} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both;

  @media screen and (max-width: 768px) {
    width: 3.6rem;
    height: 3.6rem;
  }

  @media screen and (max-width: 480px) {
    width: 3.2rem;
    height: 3.2rem;
  }

  @media screen and (max-width: 380px) {
    width: 2.9rem;
    height: 2.9rem;
  }
`;

const RING_CIRCUMFERENCE = 75.4; // 2 * π * 12

const timerProgress = keyframes`
  from { stroke-dashoffset: ${RING_CIRCUMFERENCE}; }
  to   { stroke-dashoffset: 0; }
`;

const CloseButtonContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2.8rem;
  height: 2.8rem;
`;

const ProgressRing = styled.svg`
  position: absolute;
  inset: 0;
  transform: ${({ $hasClockwiseRotation }) =>
    $hasClockwiseRotation ? 'rotate(-90deg)' : 'rotate(90deg) scaleX(-1)'};
  pointer-events: none;

  circle {
    fill: none;
    stroke: ${({ $color }) => $color};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: ${RING_CIRCUMFERENCE};
  }

  circle:first-child {
    opacity: 0.15;
    stroke-dashoffset: 0;
  }

  circle:last-child {
    stroke-dashoffset: ${RING_CIRCUMFERENCE};
    animation: ${timerProgress} ${({ $duration }) => $duration - 0.5}s linear forwards;
    animation-play-state: ${({ $paused }) => ($paused ? 'paused' : 'running')};
  }
`;

const CloseWrapper = styled(Close)`
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.92rem;
  color: ${grey.m800};

  @media screen and (max-width: 480px) {
    font-size: 1.72rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.56rem;
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
  width: 33.6rem;

  @media screen and (max-width: 768px) {
    width: 24rem;
  }

  @media screen and (max-width: 480px) {
    width: 21rem;
  }

  @media screen and (max-width: 380px) {
    max-width: 18rem;
    width: auto;
  }
`;

const Subtitle = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  color: ${grey.m700};

  @media screen and (max-width: 480px) {
    font-size: 1.44rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.32rem;
  }
`;

const getLogoImage = (type, main) => {
  if (type === ERROR) {
    return <Close size={16} color={main} />;
  }

  if (type === SUCCESS) {
    return <Check size={18} color={main} />;
  }

  if (type === WARNING) {
    return <WarningTriangleFilled size={28} color={white} />;
  }

  return <Info size={22} color={main} />;
};

const getLogoContainerSize = (type) => {
  if (type === ERROR) {
    return 1.6;
  }

  if (type === SUCCESS) {
    return 1.76;
  }

  if (type === WARNING) {
    return 2.8;
  }

  return 2.08;
};

const Logo = ({ type, $main, $side }) => {
  const logoImg = getLogoImage(type, $main);
  const isWarning = type === WARNING;

  return (
    <Outer aria-hidden='true' {...{ $side }}>
      <OuterChild {...{ $main }} />
      {!isWarning && <LogoContainer {...{ $main, type }} />}
      <Icon size={getLogoContainerSize(type)} $isWarning={isWarning}>
        {logoImg}
      </Icon>
    </Outer>
  );
};

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

ToastContainer.propTypes = {
  /** Array of toast config objects, each with `{ id, type, title, subtitle, duration, onExpire }` */
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      type: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      duration: PropTypes.number,
      onExpire: PropTypes.func,
    })
  ),
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

Toast.propTypes = {
  /** Notification variant: `'info'`, `'success'`, `'warning'`, or `'error'`. Defaults to `'info'` */
  type: PropTypes.string,
  /** Controls initial visibility. Defaults to `true` */
  visible: PropTypes.bool,
  /** Auto-dismiss delay in seconds. Defaults to `5` */
  duration: PropTypes.number,
  /** Called when the toast auto-dismisses or is closed */
  onExpire: PropTypes.func,
  /** Reverses the progress ring rotation direction */
  hasClockwiseRotation: PropTypes.bool,
  /** Primary notification text */
  title: PropTypes.string,
  /** Secondary detail text shown below the title */
  subtitle: PropTypes.string,
};

export default Toast;
