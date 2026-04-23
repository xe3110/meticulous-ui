// Libraries
import { useEffect, useState } from 'react';
const noop = () => {};

// helpers
import { Logo } from './helpers';

// constants
import grey from '../../colors/grey';
import { COLOR_MAP, INFO_COLORS, INFO } from './constants';

// styles
import { ToastWrapper, CloseWrapper, Title, Subtitle, Message, ToastsContainer } from './styles';

export const ToastContainer = ({ toasts, ...rest }) => {
  const [allToasts, setAllToasts] = useState(toasts);

  useEffect(() => {
    setAllToasts(toasts);
  }, [toasts]);

  const renderToasts = ({ type, id, title, subtitle, onExpire = noop }, i) => (
    <Toast {...{ type, title, subtitle }} key={id} onExpire={onExpire} />
  );

  return <ToastsContainer {...rest}>{[...allToasts].reverse().map(renderToasts)}</ToastsContainer>;
};

const remove = (setFadeOut, setShow, onExpire) => () => {
  setFadeOut(true);
  setTimeout(() => {
    setShow(false);
    onExpire();
  }, 500);
};

const Toast = ({ type = INFO, visible = true, duration = 5, onExpire = noop, title, subtitle, ...rest }) => {
  const [show, setShow] = useState(visible);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  useEffect(() => {
    const removeTimer = setTimeout(remove(setFadeOut, setShow, onExpire), duration * 1000 - 500);

    return () => {
      clearTimeout(removeTimer);
    };
  }, [duration, remove]);

  const { main: $main, side: $side, bg } = COLOR_MAP[type] ?? INFO_COLORS;

  if (show) {
    return (
      <ToastWrapper $bg={bg} className={`${fadeOut ? 'fade-out' : 'fade-in'}`} {...rest}>
        <Logo {...{ type, $main, $side }} />
        <Message>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Message>
        <CloseWrapper size={20} color={grey.m600} onClick={remove(setFadeOut, setShow, onExpire)} />
      </ToastWrapper>
    );
  }
};

export default Toast;
