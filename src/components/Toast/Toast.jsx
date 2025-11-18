// Libraries
import { useEffect, useState } from 'react';
import _get from 'lodash-es/get';
import _noop from 'lodash-es/noop';

// helpers
import { Logo } from './helpers';

// constants
import grey from '../../colors/grey';
import { COLOR_MAP, INFO_COLORS, INFO, TYPE_INFO_MAP } from './constants';

// styles
import { ToastWrapper, CloseWrapper, Title, Subtitle, Message, ToastsContainer } from './styles';

export const ToastContainer = ({ toasts }) => {
  const [allToasts, setAllToasts] = useState(toasts);

  useEffect(() => {
    setAllToasts(toasts);
  }, [toasts]);

  const onExpire = (i) => () => {
    setAllToasts((toasts) => {
      const copy = [...toasts];
      copy.splice(i, 1);

      return copy;
    });
  };

  const renderToasts = ({ type, id }, i) => (
    <Toast {...{ type }} key={id} {...TYPE_INFO_MAP[type]} onExpire={onExpire(i)} />
  );

  return <ToastsContainer>{[...allToasts].reverse().map(renderToasts)}</ToastsContainer>;
};

const remove = (setFadeOut, setShow, onExpire) => {
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
  onExpire = _noop,
  title,
  subtitle,
}) => {
  const [show, setShow] = useState(visible);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  useEffect(() => {
    const removeTimer = setTimeout(
      () => remove(setFadeOut, setShow, onExpire),
      duration * 1000 - 500
    );

    return () => {
      clearTimeout(removeTimer);
    };
  }, [duration, remove]);

  const { main: $main, side: $side, bg } = _get(COLOR_MAP, type, INFO_COLORS);

  if (show) {
    return (
      <ToastWrapper $bg={bg} className={`${fadeOut ? 'fade-out' : 'fade-in'}`}>
        <Logo {...{ type, $main, $side }} />
        <Message>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Message>
        <CloseWrapper size={20} color={grey.m600} onClick={remove} />
      </ToastWrapper>
    );
  }
};

export default Toast;
