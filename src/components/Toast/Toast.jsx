// Libraries
import { useEffect, useState } from 'react';
import _get from 'lodash-es/get';
import _noop from 'lodash-es/noop';

// helpers
import { Logo } from './helpers';

// constants
import grey from '../../colors/grey';
import { COLOR_MAP, INFO_COLORS, INFO } from './constants';

// styles
import { ToastWrapper, CloseWrapper, Title, Subtitle, Message } from './styles';

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

  const remove = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShow(false);
      onExpire();
    }, 500);
  };

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  useEffect(() => {
    const removeTimer = setTimeout(remove, duration - 500);

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
